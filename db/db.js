const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const uri = process.env.MONGO_DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected database..");
  } catch (error) {
    console.error("database connection was failed..", error);
    process.exit(1);
  }
};

module.exports = connectDB;
