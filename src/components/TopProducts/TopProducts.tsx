import Select from "./Select";
// import { search } from "../../svg/icons";
import { useAtomValue } from "jotai";
import { isDarkMode } from "../../contexts/themeContext";
import { useState } from "react";

const TopProducts = () => {
  const isDark = useAtomValue(isDarkMode);
  const [cont, setCont] = useState<string>("");
  return (
    <div
      className={`flex flex-col dark:text-white w-full h-full rounded-lg px-6 py-4 ${
        isDark ? "bg-back-dark" : "bg-white"
      }`}
    >
      <div className="flex justify-between mb-2 text-[0.9rem]">
        <div
          className={`font-semibold rounded-lg ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Top Products
        </div>

        <div className="flex justify-end gap-6 flex-1">
          <div className="relative">
            <input
              type="text"
              className={`bg-transparent rounded-md border-minor-dark border-[1px] w-[25vw] pl-2 py-[0.4rem] ${isDark ? "text-white" : "text-black"}`}
              placeholder="Search"
              value={cont}
              onChange={(e) => setCont(e.target.value)}
            />
          </div>

          <div>
            <Select />
          </div>
        </div>
      </div>

      <div>
        <table className="w-full h-full border-spacing-3 border-separate">
          <tbody>
            <tr>
              <th className="text-left text-sm font-medium text-minor-dark">
                Product name
              </th>
              <th className="text-left text-sm font-medium text-minor-dark">
                Order ID
              </th>
              <th className="text-left text-sm font-medium text-minor-dark">
                Price
              </th>
              <th className="text-left text-sm font-medium text-minor-dark">
                Sold
              </th>
              <th className="text-right text-sm font-medium text-minor-dark">
                Sales
              </th>
            </tr>
            <tr className="lg:text-[1.2rem] text-[0.80rem]">
              <td
                className={`${
                  isDark ? "text-white" : "text-black"
                } font-semibold`}
              >
                MacBook Air <span className="text-minor-dark">AAPL</span>
              </td>
              <td className={`${isDark ? "text-white" : "text-black"}`}>
                #719261
              </td>
              <td className={`${isDark ? "text-white" : "text-black"}`}>
                $1,846
              </td>
              <td className={`${isDark ? "text-white" : "text-black"}`}>
                9,971
              </td>
              <td
                className={`text-right ${isDark ? "text-white" : "text-black"}`}
              >
                $15,308,94
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProducts;
