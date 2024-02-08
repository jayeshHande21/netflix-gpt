import { useSelector } from "react-redux";
import { BagroundImg, Lang } from "../utilis/constants";

const GptSearchPage = () => {
  const languageKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[9%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          className="p-4 m-4 py-3 col-span-9 text-1xl"
          placeholder={Lang[languageKey].gptSearchPlaceHolder}
        />
        <button className="py-2 px-4 m-4 p-4 bg-red-700 text-white col-span-3 text-1.5xl font-bold">
          {Lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchPage;
