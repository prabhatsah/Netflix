/** @format */

import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
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

    const token = await jwt.sign({ id: user._id }, "fghjoopwertyuikjhgfdsx", {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, { httponly: true })
      .json({
        message: `Welcome back ${user.fullName}`,
        success: true,
        user,
      });
  } catch (error) {
    console.log(error);
  }
};

export const Logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httponly: true })
    .json({
      message: "User Logged out successfully",
      success: true,
    });
};

export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return req.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "This email is already used",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
