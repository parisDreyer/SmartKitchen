const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const passport = require('passport');
require('./config/passport')(passport);

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  

app.use("/api/users", users);

  




app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get("/", (req, res) => res.send("Hello World"));


app.listen(port, () => console.log(`Listening on port ${port}`));
