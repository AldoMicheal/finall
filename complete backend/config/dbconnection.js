// const mongoose=require("mongoose")
// const dbconnection=async()=>{
//     await mongoose.connect(process.env.connection_string)
//     .then(()=>console.log("connected"))
// }
// module.exports=dbconnection

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Atlas Connected Successfully"))
//   .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

const connectDB = async () => {
  try {
    // Use the connection string from .env
    const conn = await mongoose.connect(process.env.connection_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    process.exit(1); // Stop the server if DB connection fails
  }
};

module.exports = connectDB;

