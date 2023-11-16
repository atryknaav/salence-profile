import Header from "./components/Header";
import TopBlock from "./components/TopBlock";
import { TopBlockDataType } from "./types/TopBlockData";
// import SalesByCategory from "./components/SalesByCategory";
// import Upgrade from "./components/Upgrade";
// import TopProducts from "./components/TopProducts/TopProducts";
import Sidebar from "./components/Sidebar/Sidebar";
import Graph from "./components/Graph";
import { useAtomValue } from "jotai";
import { isDarkMode } from "./contexts/themeContext";
import { blockAtom } from "./contexts/blockContext";
import { useEffect } from "react";
import PieChartExp from "./components/PieChart";
import TopProducts from "./components/TopProducts/TopProducts";
import Upgrade from "./components/Upgrade";

function App() {
  const isDark = useAtomValue(isDarkMode);
  const block = useAtomValue(blockAtom);

  useEffect(() => {
    document.body.className = isDark ? 'bg-dark duration-500 lg:p-2 p-0 max-w-[screen]' : 'bg-white duration-500 lg:p-2 p-0 max-w-[screen]';
  }, [isDark])

  const topBlockData: TopBlockDataType[] = [
    {
      name: "Total sales",
      status: "$825,491.73",
      weekPercent: "20.9",
      weekNum: "18.4K",
    },
    {
      name: "Visitors",
      status: "780,192",
      weekPercent: "13",
      weekNum: "3.5K",
    },
    {
      name: "Total orders",
      status: "2,625.991",
      weekPercent: "4.2",
      weekNum: "5K",
    },
    {
      name: "Refunded",
      status: "780,192",
      weekPercent: "9.1",
      weekNum: "66",
    },
  ];

  return (
    <div className="flex w-full h-full">

      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT BODY */}
      <div className="flex-grow h-full lg:mx-12 flex flex-col gap-6 w-full ">
        <Header />

        {/* UPPER BLOCKS */}
        <div className="flex flex-col items-center lg:flex-row rounded-lg gap-3 lg:gap-0 px-3 lg:px-0">
          {topBlockData.map((data, index) => (
            <TopBlock
              key={index}
              name={data.name}
              status={data.status}
              weekPercent={data.weekPercent}
              weekNum={data.weekNum}
            />
          ))}
        </div>

        {/* CHARTS PART */}

        <div className="flex flex-col lg:flex-row gap-6 lg:justify-between w-full px-3 lg:px-0">
          <div className={`px-2 rounded-lg flex-grow  ${isDark
            ? 'bg-back-dark'
            : 'bg-white'}`}>
              <div className={`text-lg mt-2 mb-[-3rem] ml-2 font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                {block}
              </div>
            <Graph />
          </div>

          <div className={`px-6 rounded-lg h-[fit-content] lg:h-full  ${isDark
            ? 'bg-back-dark'
            : 'bg-white'}`}>
              <div>
                
              </div>
            <PieChartExp />
          </div>
        </div>

        <div className="flex justify-between gap-6 h-full w-full lg:flex-row flex-col pb-3">
          <div className="flex lg:w-[67%]">
            <TopProducts />
          </div>

          <div className="flex flex-grow">
            <Upgrade />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
