/** @format */

import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "content-type": "application/json",
          },
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        console.log("Dispatching user data:", res.data.user);
        console.log("Backend Response:", res.data);
        dispatch(setUser(res.data.user));
        console.log("Dispatched user data to Redux.");
        navigate("/browse");
      } catch (error) {
        console.error(error);
        const errorMessage =
          error.response?.data?.message || "Something went wrong!";
        toast.error(errorMessage);
      }
    } else {
      //register
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "content-type": "application/json",
          },
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      <div className=" ">
        <img
          className="w-[100%] h-[100vh] absolute"
          src="https://i.pinimg.com/1200x/61/6d/24/616d2453e4e2c6b1ad51197a2f00b8c4.jpg"
          alt="bg-image"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <form
        onSubmit={getInputData}
        className="absolute top-[30%] flex left-0 right-0 mx-auto w-3/12 flex-col items-center p-12 bg-black opacity-90 rounded-md"
      >
        <h1 className="text-3xl text-white mb-5 font-bold ">
          {isLogin ? "Login" : "SignUp"}
        </h1>
        <div className="flex flex-col ">
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 rounded-sm bg-gray-800 text-white outline-none"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="p-3 my-2 rounded-sm bg-gray-800 text-white outline-none"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-3 my-2 rounded-sm bg-gray-800 text-white outline-none"
          />
          <button className="bg-red-800 mt-6 p-3 rounded-sm text-white">
            {isLogin ? "Login" : "SignUp"}
          </button>
          <p className="text-white mt-2">
            {isLogin ? "New to Netflix?" : "Already have an account?"}
            <span
              onClick={loginHandler}
              className="ml-2 text-blue-500 cursor-pointer"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
