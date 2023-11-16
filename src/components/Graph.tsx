import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { siteData } from "../data/data";
import { useAtomValue } from "jotai";
import { blockAtom } from "../contexts/blockContext";
import { isDarkMode } from "../contexts/themeContext";
// import { useEffect, useState } from "react";

const Graph = () => {
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // const [chartWidth, setChartWidth] = useState<number>(windowWidth > 1024 ? windowWidth/3 : windowWidth);

  // useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  //   setChartWidth(windowWidth > 1024 ? windowWidth/2.5 : windowWidth - 30);
  // }, [window.innerWidth])

  const isDark = useAtomValue(isDarkMode);
  const block = useAtomValue(blockAtom);
  const data = siteData.find((e) => e.blockName === block)!.lineData;
  const legends = siteData.find((e) => e.blockName === block)!.lineLegends;
  return (
  
      <ResponsiveContainer minHeight={250} width='95%' height="90%" className='px-3 text-xs'>
        <LineChart
          data={data}
          width={600}
          height={700}
          margin={{
            top: 50,
            right:30,
            left:-25,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <XAxis dataKey="name" interval={0} />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="right"
            margin={{ top: 0, left: 0, right: 5, bottom: 10 }}
            height={35}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#eb750e"
            activeDot={{ r: 8 }}
            dot={false}
            strokeWidth={3}
            name={legends!.l1.name}
          />
          {legends!.l2.active === true ? (
            <Line
              type="monotone"
              dataKey="pv"
              stroke={isDark ? "#bef264" : "#115e59"}
              dot={false}
              name={legends!.l2.name}
              strokeWidth={3}
            />
          ) : undefined}
        </LineChart>
      </ResponsiveContainer>
    
  );
};

export default Graph;
