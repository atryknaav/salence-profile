import { useAtomValue } from "jotai"
import  PieChartExp  from "./PieChart"
import { isDarkMode } from "../contexts/themeContext"


const SalesByCategory = () => {
  const isDark = useAtomValue(isDarkMode);
  return (
    <div className={`rounded-lg h-[70%] p-6 text-lg font-semibold ${isDark
      ? 'text-white bg-back-dark'
      : 'text-black '}`}>
        Sales by category
        <div className="z-[1] flex flex-row">
        <PieChartExp/>
        
          <div className="align-bottom">
            {'More→'}
          </div>
        </div>
    </div>
  )
}

export default SalesByCategory