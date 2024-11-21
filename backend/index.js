/** @format */

import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";

databaseConnection();

dotenv.config({
  path: ".env",
});

const app = express();
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", userRoute);

app.use("/", (req, res) => {
  return res.status(200).json({
    message: "Hello, this is from backend",
    success: true,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
