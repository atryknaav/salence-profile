import { useAtomValue, useSetAtom } from "jotai"
import { isDarkMode } from "../contexts/themeContext"
import { sun, moon } from "../svg/icons";

const SetMode = () => {
    const isDark = useAtomValue(isDarkMode);
    const setIsDark = useSetAtom(isDarkMode);
  return (
    <div
          onClick={() => setIsDark(!isDark)}
          className={
            isDark ? "text-white cursor-pointer" : "text-black cursor-pointer"
          }
        >
          {isDark ? sun : moon}
        </div>
  )
}

export default SetMode