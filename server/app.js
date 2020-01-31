const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const userRoutes=require('./routes/route');

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/stock_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Header",
    "X-Requested-With, content-type, Authorization"
  );
  res.setTimeout(300000, function() {
    res.status(408).json({ success: false, message: "Request has timed out." });
  });
  next();
});


app.use(cors());
app.use(helmet.noCache());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(userRoutes);

app.listen(1337, () => {
  console.log("Socket server started at port : " + 1337);
});
