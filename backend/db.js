const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://aryanayush012:PGdxAWUoeJ2YIbfa@cluster0.d4vnmmf.mongodb.net/";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("connected to mongoDB Sucesfully");
};

module.exports = connectToMongo;
