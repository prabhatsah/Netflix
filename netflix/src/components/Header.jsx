/** @format */

import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  console.log(user);

  const logoutHandler = async () => {
    try {
      const user = useSelector((store) => store.app.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute z-10 flex w-[100%] items-center justify-between bg-gradient-to-b from-black px-6">
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix-logo"
      />
      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdown size="24px" className="text-white" />
          <h1 className="text-lg font-bold text-white">{user.fullName}</h1>
          <div className="ml-4">
            <button
              onClick={logoutHandler}
              className="bg-red-800 text-white px-4 py-2"
            >
              Logout
            </button>
            <button className="bg-red-800 text-white px-4 py-2 ml-2">
              Search Movie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
