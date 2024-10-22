/** @format */

import dotenv from "dotenv";
import express from "express";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config({
  path: ".env",
});

databaseConnection();

const app = express();
//middleware;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOption));

app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
