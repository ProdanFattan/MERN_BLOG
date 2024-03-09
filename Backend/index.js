import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

//config .env
dotenv.config();

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("MongoDB connected");
});

const app = express();

app.listen(3001, () => {
  console.log("Server is running on" + "http://localhost:3001");
});
