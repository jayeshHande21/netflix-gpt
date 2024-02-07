import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trialer = useSelector((store) => store.movies?.movieTrailer);

  useMovieTrailer({ movieId });

  return (
    <div>
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trialer?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
