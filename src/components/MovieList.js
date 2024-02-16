import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const containerStyles = {
    display: "flex",
    overflowX: "auto",
    scrollbarWidth: "thin",
  };

  return (
    <div className=" py-6">
      <h1 className=" text-xl md:text-3xl py-6 text-white pl-9">{title}</h1>
      <div style={containerStyles}>
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
