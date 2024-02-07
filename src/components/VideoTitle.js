import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white pt-60  pl-20 px-12 w-screen aspect-video absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div className="">
        <button className="bg-white text-black  font-bold p-4 w-40 text-xl rounded-lg hover:opacity-50 ">
          Play
        </button>
        <button className="bg-gray-500 text-white font-bold p-4 w-40 text-xl  bg-opacity-50 rounded-lg ml-4">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
