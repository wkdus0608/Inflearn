const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const { User } = require("./models/User");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const config = require('./config/key');

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!! 새복많');
});

app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    const userInfo = await user.save();
    res.status(200).json({ success: true, userInfo });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ success: false, err });
  }
});

app.post('/api/users/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." });
    }

    const token = await user.generateToken();
    res.cookie("x_auth", token)
      .status(200)
      .json({ loginSuccess: true, userId: user._id });

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ loginSuccess: false, err });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
