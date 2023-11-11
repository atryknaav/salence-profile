import { useAtom } from "jotai"
import { isDarkMode } from "./contexts/themeContext"

const Root = ({children}: {children: JSX.Element}) => {
  const [isDark] = useAtom(isDarkMode)
  return (
    <div className={"px-[20px] py-[10px] h-screen " + isDark
      ? "bg-black" : "bg-white"}>
        {children}
    </div>
  )
}

export default Root