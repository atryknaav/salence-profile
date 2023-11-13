import { useAtom } from "jotai";
import { isDarkMode } from "./contexts/themeContext";

const Root = ({ children }: { children: JSX.Element }) => {
  const [isDark] = useAtom(isDarkMode);
  return (
    <div
      className={`lg:px-[20px] lg:py-[10px] h-full lg:h-screen duration-500 ${
        isDark ? "bg-dark" : "bg-white"
      }`}
    >
      {children}
    </div>
  );
};

export default Root;
