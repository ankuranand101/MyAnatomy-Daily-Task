// index.js
import mongoose from "mongoose";
require("dotenv").config(); // <-- load .env file


const uri = process.env.MONGODB_URI;


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB connected successfully: ${conn.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed:", error);
        // process.exit(1); // Exit the process with failure
    }
}