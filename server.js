require('dotenv').config(); 

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const { MONGO_URI, PORT} = process.env; 
mongoose
  .connect(
    MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));