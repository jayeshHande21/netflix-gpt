import React from "react";

import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-80 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Upcoming"} movies={movies} />
        <MovieList title={"Tranding"} movies={movies} />
        <MovieList title={"Latest"} movies={movies} />
        <MovieList title={"New Arrival"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
