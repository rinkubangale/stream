const mongoose = require("mongoose");
const connectDb = (url) => {
  console.log("database is connected..");
  return mongoose.connect(url);
};

module.exports = connectDb;
