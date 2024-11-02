require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log("MongoDB connection Successful!");
  } catch (error) {
    console.error("MongoDB connection Failed!");
    process.exit(1);
  }
};

module.exports = connectDB;
