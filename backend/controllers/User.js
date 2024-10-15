/** @format */

import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const token = await jwt.sign(
      { id: user._id, email: user.email },
      "fsfwgnghrgrt3tewgr",
      {
        expiresIn: "1d",
      }
    );
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        message: `Welcome back ${user.fullName}`,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const Logout = async (req, res) => {
  return res
    .status("200")
    .cookie("token", "", { expiredIn: new Date(Date.now()), httpOnly: true })
    .json({
      message: "User logged out successfully.",
      success: true,
    });
};

export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "Email already exist",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);

    User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};
