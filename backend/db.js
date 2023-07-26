const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://aryanayush012:Admin1234@cluster0.rqwhxcm.mongodb.net/inotebook";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("connected to mongoDB Sucesfully");
};

module.exports = connectToMongo;
