import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json())
app.use(cookieParser())

app.listen("3000", () => {
  console.log("Server is running on port 3000");
});


// add route
