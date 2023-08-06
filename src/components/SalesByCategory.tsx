import { MyResponsivePie } from "./PieChart"
import { pieData } from '../data/pieData';

const SalesByCategory = () => {
  return (
    <div className='bg-back-dark rounded-lg h-[70%] p-6 text-lg font-semibold  dark:text-white '>
        Sales by category
        <MyResponsivePie data={pieData} />
    </div>
  )
}

export default SalesByCategory