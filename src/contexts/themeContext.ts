import { atom } from "jotai";

export const isDarkMode = atom<boolean>(
  window.matchMedia("(prefers-color-scheme: dark)").matches,
);
