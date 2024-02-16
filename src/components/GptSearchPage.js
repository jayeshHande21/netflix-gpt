import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, Lang } from "../utilis/constants";
import { useRef } from "react";
import openai from "../utilis/openAiFile";
import { addMovieSuggesations } from "../utilis/GptSlice";

const GptSearchPage = () => {
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=%22" +
        movie +
        "%22&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchClick = async () => {
    const getQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      " only give me names of 5 movies , comma seperated like the example results given ahead , Example : [3 ediots , koi mil gaya , Sholey , hera pheri , ludo]";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: getQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const TmdbResults = await Promise.all(promiseArray);
    console.log(TmdbResults);

    dispatch(
      addMovieSuggesations({ movieNames: gptMovies, movieResults: TmdbResults })
    );
  };

  return (
    <div className="pt-[9%] flex justify-center">
      <form
        className="w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 py-3 col-span-9 text-1xl"
          placeholder={Lang[languageKey].gptSearchPlaceHolder}
        />
        <button
          onClick={() => handleSearchClick()}
          className="py-2 px-4 m-4 p-4 bg-red-700 text-white col-span-3 text-1.5xl font-bold"
        >
          {Lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchPage;
