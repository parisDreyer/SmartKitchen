const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const passport = require('passport');
const {filteredBackup} = require('./full_format_recipes'); // https://www.kaggle.com/hugodarwood/epirecipes/version/2#full_format_recipes.json


require('./config/passport')(passport);


const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());


mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api/users", users);

  




app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get("/", (req, res) => res.send("Hello World"));


app.get('/api/backup', (req, res) => {
   
   res.send(JSON.stringify(filteredBackup(req.url)))
 });


app.listen(port, () => console.log(`Listening on port ${port}`));
