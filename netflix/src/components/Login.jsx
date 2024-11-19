/** @format */

import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          className="w-[100%] h-[100vh] absolute"
          src="https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp"
          alt="bg-image"
        />
      </div>
      <form className="absolute top-[30%] flex left-0 right-0 mx-auto w-3/12 flex-col items-center p-12 bg-black">
        <h1 className="text-3xl text-white mb-5 font-bold ">SignUp</h1>
        <div className="flex flex-col ">
          <input type="text" placeholder="Full Name" className="p-3 my-2 rounded-sm bg-gray-800 text-white outline-none"/>
          <input type="email" placeholder="Email" className="p-3 my-2 rounded-sm bg-gray-800 text-white outline-none" />
          <input type="password" placeholder="Password" className="p-3 my-2 rounded-sm bg-gray-800 text-white outline-none" />
        </div>
      </form>
    </div>
  );
};

export default Login;
