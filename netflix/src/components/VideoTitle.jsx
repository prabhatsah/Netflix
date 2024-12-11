/** @format */

import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

function VideoTitle() {
  return (
    <div className="w-screen aspect-video absolute text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold">Prabhat Kumar</h1>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece.
      </p>
      <div className="flex gap-2 mt-5">
        <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:opacity-80">
          <CiPlay1 size="18px" />
          <span className="ml-1">Play</span>
        </button>
        <button className="flex items-center px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md">
          <CiCircleInfo size="18px" />
          <span className="ml-1">Watch more</span>
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
