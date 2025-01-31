const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Jeon:abcd1234@cluster0.zh30l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
