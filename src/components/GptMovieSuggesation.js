import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggesation = () => {
  const { movieNames, movieResults } = useSelector((store) => store.Gpt);

  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 text-white bg-black bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={index}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggesation;
