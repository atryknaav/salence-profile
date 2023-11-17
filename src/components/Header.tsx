import { AiOutlineUnorderedList, AiOutlineSearch } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";
import { chevronDown } from "../svg/icons";
import { isDarkMode } from "../contexts/themeContext";
import { useAtomValue, useSetAtom } from "jotai";
import { sideActive } from "../contexts/SideBarContext";
import SetMode from "./SetMode";

const Header = () => {
  const isActive = useAtomValue(sideActive);
  const setIsActive = useSetAtom(sideActive);

  const isDark = useAtomValue(isDarkMode);
  return (
    <div className="flex flex-col sticky top-0 mt-[-0.1rem] z-10 ">
    <header className={`flex flex-row justify-between p-3 lg:bg-transparent w-screen lg:w-full lg:static flex-1 lg:mb-0 mb-[-3.5rem] z-10 ${isDark
      ? 'bg-active-dark'
      : 'bg-[#e7e7e7]'}`}>
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
        <SetMode />

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
      
      <div className="flex-col justify-center lg:hidden flex">
        <SetMode />
      </div>
      <div className={`flex-col justify-center text-3xl lg:hidden flex ${isDark
      ? 'text-white'
      : 'text-black'}`} 
      onClick={() => setIsActive(!isActive)}>
        <AiOutlineUnorderedList />
      </div>
    </header>
    </div>
  );
};

export default Header;
