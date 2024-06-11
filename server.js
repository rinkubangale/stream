var express = require("express");
var app = express();
var http = require("http").createServer(app);

app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

http.listen(3000, function () {
  console.log("server started.");
  app.get("/", function (req, res) {
    res.render("index");
  });
});
