const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const numeral = require("numeral");
const userRoutes = require("./api/routes/users");
const entrepriseRoutes = require("./api/routes/entreprises");
let io = require("socket.io").listen(app.listen(3000));
let uri = "mongodb://localhost:27017/dremploi";
mongoose.connect(uri, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to MongoDB");
  }
});

app.use(morgan("dev"));

io.sockets.on("connection", function(socket) {
  console.log("client connect");
  socket.on("echo", function(data) {
    io.sockets.emit("message", data);
  });
  socket.on("test", function(data) {});
  socket.on("hello", function(data) {
    console.log(data);
  });
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
//app.use(validator())
app.use(cors());
app.use(express.static("www"));
app.use("/uploads", express.static("uploads/lena"));
app.use(function(req, res, next) {
  req.io = io;
  next();
});
app.use(function(req, res, next) {
  //token = req.body.token;
  //console.log(req.headers);
  next();
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, mimeType, Accept, Authorization'
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, PATCH, DELETE, GET,OPTIONS"
    );
    return res.status(202).json({});
  }
  next();
});
//app.use(path.join(__dirname, "www"));
app.use(express.static(__dirname + "/www"));
app.use(express.static(__dirname + "/api"));
app.use(express.static(__dirname + "/uploads"));
//Routes which should handle requests
app.use("/users", userRoutes);
app.use("/entreprise", entrepriseRoutes);
/*
 
*/
app.use((req, res, next) => {
  const error = new Error("Not found ");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
/*
setInterval(() => {
  const { rss, heapTotal } = process.memoryUsage();
  console.log(
    "rss",
    numeral(rss).format("0.0 ib"),
    "heapTotal",
    numeral(heapTotal).format("0.0 ib")
  );
}, 5000); */

module.exports = app;
