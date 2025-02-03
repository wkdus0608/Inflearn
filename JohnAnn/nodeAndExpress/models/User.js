const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

userSchema.methods.comparePassword = async function (plainPassword) {
  return bcrypt.compare(plainPassword, this.password);
};

userSchema.methods.generateToken = async function () {
  const user = this;
  const token = jwt.sign(user._id.toHexString(), 'secretToken');
  user.token = token;
  await user.save();
  return token;
};

userSchema.statics.findByToken = function(token, cb) {
  var user = this;

  // 토큰 디코드
  jwt.verify(token, 'secretToken', function(err, decoded) {
    // 유저 아이디 이용해, 유저 찾기 -> 클라이언트에서 가져온 토큰과 디비에 보관된 토큰이 일치하는지 확인

    user.findeOne({"_id":decoded, "token": token}, function(err, user) {
      if(err) return cb(err);
      cb(null, user)
    })
  })
}

const User = mongoose.model('User', userSchema);

module.exports = { User };
