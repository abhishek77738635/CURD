import mongoose from "mongoose";

const connectToMongo = async (req,res) => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    if (res) {
      console.log("connected succesfully");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
