import { useAtom } from "jotai"
import { isDarkMode } from "./contexts/themeContext"

const Root = ({children}: {children: JSX.Element}) => {
  const [isDark] = useAtom(isDarkMode)
  return (
    <div className={`md:px-[20px] py-[10px] h-full duration-500 ${isDark ? "bg-dark" : "bg-white"}`}>
        {children}
    </div>
  )
}

export default Root