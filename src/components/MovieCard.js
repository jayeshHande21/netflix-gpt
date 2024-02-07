import React from "react";
import { IMG_CDN_URL } from "../utilis/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 h-60 pr-3">
      <img
        alt="Movie Card"
        className="object-cover w-full h-full rounded-md"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
