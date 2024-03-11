const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./routes.js");

//config .env
dotenv.config();

//db connect
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("MongoDB connected");
});

const app = express();

//connect routes
app.use(express.json()); //sometimes system can't read jason fole then we need to add this.
app.use("/api/v1/auth", router);

app.listen(3001, () => {
  console.log("Server is running on" + "http://localhost:3001");
});

app.get("/", (req, res) => {
  res.send("blog server is running");
  // responseError(res,500);
});
