import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilis/constants";
import { addNowPlayingMovies } from "../utilis/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayuingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayuingMovies();
  }, []);
};

export default useNowPlayingMovies;
