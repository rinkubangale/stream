require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./db/connector");
PORT = process.env.PORT;

app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

const start = async () => {
  await connectDb(process.env.URL);
  app.listen(PORT, function () {
    console.log("server started. " + PORT);
    app.get("/", function (req, res) {
      res.render("index");
    });
    app.get("/Signup", function (req, res) {
      res.render("signup");
    });
  });
};
start();
