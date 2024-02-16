import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utilis/movieSlice";
import { API_OPTIONS } from "../utilis/constants";
import { useEffect } from "react";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const GetMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const movieTrailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addMovieTrailer(movieTrailer));
  };

  useEffect(() => {
    GetMovieTrailer();
  }, []);
};

export default useMovieTrailer;
