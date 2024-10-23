/** @format */

import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant.js";
import toast from "react-hot-toast";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const loginHandler = () => {
    setIsLogin(!isLogin);
  };
  const [fullName, setfullName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const getInputData = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const user = { email: login, password };
      console.log(login + ", " + password);
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user);
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      const user = { fullName, email: login, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user);
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }

    setfullName("");
    setLogin("");
    setPassword("");
  };
  return (
    <div className="background-div">
      <Header />
      <form
        onSubmit={getInputData}
        className="absolute p-10 flex flex-col w-3/12 top-[10vh] mx-auto left-0 right-0 items-center bg-black opacity-90 rounded-md "
      >
        <h1 className="text-white text-3xl font-bold">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div class="flex flex-col w-full mt-5">
          {!isLogin && (
            <input
              onChange={(e) => setfullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Full Name"
              className="bg-gray-800 text text-white p-5 my-5 outline-none rounded-sm"
            />
          )}

          <input
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            type="email"
            placeholder="Email"
            className="bg-gray-800 text text-white p-5 my-5 outline-none rounded-sm"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="bg-gray-800 text text-white p-5 my-5 outline-none rounded-sm"
          />
          <button className="bg-red-800 p-3 mt-3 font-bold text-white rounded-md">
            {isLogin ? "Login" : "Signup"}
          </button>
          <p className="text-white text-xl">
            {isLogin ? "New to Netflix?" : "Already had an account?"}
            <span
              className="ms-3 text-blue-600 cursor-pointer"
              onClick={loginHandler}
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
