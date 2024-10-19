import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("databse connected");
  } catch (error) {
    console.log(`Error in database connection`, error.message);
  }
};
export default dbConnect;
