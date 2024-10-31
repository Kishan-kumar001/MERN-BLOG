import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

dotenv.config();

//DATABASE CONNECTION

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

//SERVER CREATIONS

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

//ROUTES

app.use("/api/user", userRoute);
