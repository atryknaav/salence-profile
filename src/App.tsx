import Header from "./components/Header";
import TopBlock from "./components/TopBlock";
import { TopBlockDataType } from "./types/TopBlockData";
import SalesByCategory from "./components/SalesByCategory";
import Upgrade from "./components/Upgrade";
import TopProducts from "./components/TopProducts/TopProducts";
import Sidebar from "./components/Sidebar/Sidebar";
import Graph from "./components/Graph";
import { useAtomValue } from "jotai";
import { isDarkMode } from "./contexts/themeContext";
import { blockAtom } from "./contexts/blockContext";

function App() {
  const isDark = useAtomValue(isDarkMode);
  const block = useAtomValue(blockAtom);

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
    <div className="flex w-full h-[100%]">

      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT BODY */}
      <div className="flex-1 h-full lg:ml-12 flex flex-col gap-6">
        <Header />

        {/* UPPER BLOCKS */}
        <div className="flex flex-col items-center lg:flex-row rounded-lg ">
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
        <div className="flex flex-row flex-1 gap-6 w-full">
          <div className="flex flex-col w-full gap-6">

            {/* LINEAR PART */}
            <div
              className={`w-screen flex flex-col bg-back-dark rounded-lg lg:w-full h-[70%] ${
                isDark ? "bg-back-dark" : "bg-white"
              }`}
            >
              <div
                className={`mt-5 mb-[-5%] ml-5 text-lg font-bold ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {block}
              </div>
              <Graph />
            </div>

          {/* BOTTOM */}
            <div className="flex-1 rounded-lg">
              <TopProducts />
            </div>
          </div>
          
          {/* PIECHART */}
          <div className="flex flex-col w-[35%] gap-6">
            <SalesByCategory />

            <Upgrade />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;