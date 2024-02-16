import { BagroundImg } from "../utilis/constants";
import GptMovieSuggesation from "./GptMovieSuggesation";
import GptSearchPage from "./GptSearchPage";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="min-h-screen object-cover"
          src={BagroundImg}
          alt="Logo"
        />
      </div>
      <div className="pt-[40%] bg-black  md:pt-0">
        <GptSearchPage />
        <GptMovieSuggesation />
      </div>
    </>
  );
};

export default GptSearch;
