import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utilis/movieSlice";
import { API_OPTIONS } from "../utilis/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    console.log("json data", json);

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
