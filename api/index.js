import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
import cookieParser from "cookie-parser";

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
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

//ROUTES

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
  next();
});
