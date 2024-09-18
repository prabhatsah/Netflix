/** @format */

import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="background-div">
      <Header />
      <form className="absolute p-10 flex flex-col w-3/12 top-[10vh] mx-auto left-0 right-0 items-center bg-black opacity-90">
        <h1 className="text-white text-3xl font-bold">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div class="flex flex-col w-full mt-5">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-800 text text-white p-5 my-5 outline-none rounded-sm"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="bg-gray-800 text text-white p-5 my-5 outline-none rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-800 text text-white p-5 my-5 outline-none rounded-sm"
          />
          <p className="text-white text-xl">
            {isLogin ? "Already had an account?" : "New to Netflix?"}
            <span className="text-blue-600">
              {isLogin ? "Login" : "Signup"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
