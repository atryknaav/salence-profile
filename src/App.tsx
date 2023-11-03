import Header from "./components/Header";
import TopBlock from "./components/TopBlock";
import { TopBlockDataType } from './types/TopBlockData';
import SalesByCategory from "./components/SalesByCategory";
import Upgrade from "./components/Upgrade";
import TopProducts from "./components/TopProducts/TopProducts";
import Sidebar from "./components/Sidebar/Sidebar";
import Graph from "./components/Graph";


function App() {

  const topBlockData: TopBlockDataType[] = [
    {
      name: "Total sales",
      status: "$825,491.73", 
      weekPercent: "20.9", 
      weekNum: "18.4K"
    },
    {
      name: "Visitors",
      status: "780,192", 
      weekPercent: "13", 
      weekNum: "3.5K"
    },
    {
      name: "Total orders",
      status: "2,625.991", 
      weekPercent: "4.2", 
      weekNum: "5K"
    },
    {
      name: "Refunded",
      status: "780,192", 
      weekPercent: "9.1", 
      weekNum: "66"
    }
  ]

  return (
    <div className="flex w-full h-[100%]">
      
      {/* SIDEBAR */}
      <Sidebar />

      <div className="flex-1 h-full ml-12 flex flex-col gap-6">
        <Header />

        <div className="flex flex-col lg:flex-row rounded-lg ">
          {topBlockData.map((data, index) => (
            <TopBlock key={index} name={data.name} status={data.status} weekPercent={data.weekPercent} weekNum={data.weekNum} />
          ))}
        </div>
        
        <div className="flex flex-row flex-1 gap-6 ">

          <div className="flex flex-col w-full gap-6">

            <div className="flex flex-col bg-back-dark rounded-lg w-full h-[70%]">
              <Graph />
            </div>

            <div className="flex-1">
              <TopProducts />
            </div>
          </div>

          <div className="flex flex-col w-[35%] gap-6">
            <SalesByCategory />

            <Upgrade />
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
