import  PieChartExp  from "./PieChart"


const SalesByCategory = () => {
  return (
    <div className='bg-back-dark rounded-lg h-[70%] p-6 text-lg font-semibold  dark:text-white '>
        Sales by category
        <div className="z-[1] flex flex-row">
        <PieChartExp/>
        
          <div className="align-bottom">
            More
          </div>
        </div>
    </div>
  )
}

export default SalesByCategory