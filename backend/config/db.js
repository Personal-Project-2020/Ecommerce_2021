const mongoose = require('mongoose');
require('dotenv').config();
const MONGO = process.env.MONGO_URL;
const colors = require('colors');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(
      `MongoDB is Connected: ${connect.connection.host}`.yellow.underline
    );
  } catch (error) {
    console.error(`Error : ${error.message}`.red.underline.bold);
  }
};
module.exports = connectDB;
