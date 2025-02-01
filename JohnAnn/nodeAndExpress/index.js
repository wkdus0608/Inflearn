const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const config = require('./config/key');

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));



app.get('/', (req, res) => {
  res.send('Hello World!! 새복많');
})

app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    const userInfo = await user.save();
    res.status(200).json({ success: true, userInfo });
  } catch (err) {
    res.json({ success: false, err });
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
