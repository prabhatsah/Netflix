/** @format */

import React from "react";

function VideoBackground() {
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/9oKlI4z2k-M?si=foZVqu4F-YjfJE5z&autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
