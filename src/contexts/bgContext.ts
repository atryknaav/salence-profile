import { isDarkMode } from "./themeContext";
import { atom } from "jotai";

export const bgColor = atom<string>(
  "lg:p-10 h-[100vh]" + isDarkMode ? "bg-[#121211]" : "bg-white",
);
