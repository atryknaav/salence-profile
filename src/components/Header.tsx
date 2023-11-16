import { AiOutlineUnorderedList, AiOutlineSearch } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { chevronDown, moon, sun } from "../svg/icons";
import { isDarkMode } from "../contexts/themeContext";
import { useAtomValue, useSetAtom } from "jotai";

const Header = () => {
  const isDark = useAtomValue(isDarkMode);
  const setIsDark = useSetAtom(isDarkMode);
  return (
    <header className="flex flex-row justify-between p-3 lg:bg-transparent bg-black fixed w-screen lg:w-full lg:static h-[fit-content]  lg:mb-0 z-0">
      <div className="w-[70%]">
        <h1
          className={`lg:text-3xl font-medium font-sans w-full text-[6vw] ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Welcome back, User
        </h1>
        <p className="text-minor-light dark:text-minor-dark text-lg lg:block hidden">
          Here's what's happening with your store today.
        </p>
      </div>

      <div className="flex-row justify-end lg:flex hidden mr-10 align-middle lg:items-center gap-6">
        <div
          onClick={() => setIsDark(!isDark)}
          className={
            isDark ? "text-white cursor-pointer" : "text-black cursor-pointer"
          }
        >
          {isDark ? sun : moon}
        </div>

        <div
          className={`flex-col justify-center text-2xl ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          <AiOutlineSearch />
        </div>

        <div
          className={`flex-col justify-center text-2xl ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          <RiNotification3Line />
        </div>

        <div className="flex items-center">
          <div className="h-10 w-10 bg-gray-400 rounded-full mx-2"></div>
          <div
            className={`select-none font-medium text-sm flex gap-2 hover:cursor-pointer rounded-md p-1 ${
              isDark
                ? "text-white hover:bg-active-dark"
                : "text-black hover:bg-slate-100"
            }`}
          >
            User Userson <div className="center">{chevronDown}</div>
          </div>
        </div>
      </div>

      <div className="dark:text-white flex-col justify-center text-3xl lg:hidden flex">
        <AiOutlineUnorderedList />
      </div>
    </header>
  );
};

export default Header;
