const mongoose = require("mongoose");
const uri = process.env.DB_URI;

const dbConnected = async () => {
  try {
    await mongoose.connect(uri);
    console.log("mongoodb is connected");
  } catch (error) {
    console.log("mongodb is not connected");
  }
};

module.exports = dbConnected;
