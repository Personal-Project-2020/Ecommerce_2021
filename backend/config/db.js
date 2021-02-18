const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB is Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error : ${error.message}`);
  }
};
module.exports = connectDB;
