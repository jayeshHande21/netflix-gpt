import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utilis/userSlice";
import { LOGO, Lang, SUPPORTED_LANGUAGES } from "../utilis/constants";
import { toggle } from "../utilis/GptSlice";
import { changeLanguage } from "../utilis/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptDisplayBtn = useSelector((store) => store.Gpt.displayGptBtn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { vid, email, displayname, photoURL } = user;
        dispatch(
          addUser({
            vid: vid,
            email: email,
            displayname: displayname,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsuscribe();
    });
  }, []);

  const hanldeGptClick = () => {
    dispatch(toggle());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="flex justify-between items-center absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex ">
          {gptDisplayBtn && (
            <select
              onChange={handleLanguageChange}
              className="p-2 text-white bg-gray-900 rounded-xl mr-4 cursor-pointer"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifire} value={lang.identifire}>
                  {lang.name}{" "}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={hanldeGptClick}
            className="b text-white  text-xl mr-5 bg-blue-600 p-2 rounded-full hover:bg-blue-800"
          >
            {gptDisplayBtn ? "HomePage" : "GPT Search"}
          </button>

          <img
            className="h-9 w-10 mr-3 rounded full text-3xl"
            src={user?.photoURL}
            alt="profile Img"
          />
          <button
            onClick={() => handleSignOut()}
            className="font-bold m-10px cursor-pointer text-white"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
