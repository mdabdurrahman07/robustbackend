/* eslint-disable no-undef */
import mongoose from "mongoose";
import { NODE_ENV, MONGODB_URI } from "../config/env.js";

if (!MONGODB_URI) {
  throw new Error(
    "Please Define MongoDB Environment Variable inside .env.development/production.local"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Connected to Database in ${NODE_ENV} mode`);
  } catch (error) {
    console.log("Error to connecting to database: ", error);
    process.exit(1);
  }
};

export default connectToDatabase;
