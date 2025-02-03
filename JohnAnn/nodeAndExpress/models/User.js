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

userSchema.statics.findByToken = async function(token, cb) {
  try {
    // 토큰을 검증하여 decoded 값을 얻습니다.
    const decoded = jwt.verify(token, 'secretToken');
    // Promise 기반의 findOne() 사용 (콜백 없이 동작)
    const user = await this.findOne({ _id: decoded, token: token });
    return cb(null, user);
  } catch (err) {
    return cb(err);
  }
};


const User = mongoose.model('User', userSchema);

module.exports = { User };
