//Contains the code to connect backend to MongoDB using Mongoose
//Ensures your app can read/write user data, favorites, etc.

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectDB;
