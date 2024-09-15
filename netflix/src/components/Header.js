/** @format */

import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-black flex w-[100%] items-center justify-between px-5">
      <img
        className="w-56"
        src="https://www.designenlassen.de/blog/wp-content/uploads/2024/02/Netflix-Brand-Logo-edited.png"
        alt="netflix-logo"
      />
      <div className="flex items-center">
        <IoIosArrowDropdown size="25" color="white" />
        <h1 className="text-lg font-medium text-white">Prabhat Kumar</h1>
        <div className="flex ml-4">
          <button className="bg-red-800 text-white px-4 py-2">Logout</button>
          <button l className="bg-red-800 text-white px-4 py-2 ml-4">
            Search movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
