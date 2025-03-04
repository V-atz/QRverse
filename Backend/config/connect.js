const mongoose = require("mongoose");

const connectToMongoDb = async (url) => {
  //url not available
  if (!url) {
    // console.error("Mongo URL is missing!");
    process.exit(1);
  }
  
  try {
    await mongoose.connect(url);
    // console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to Database: ", error);
    process.exit(1);
  }
};

module.exports = connectToMongoDb;