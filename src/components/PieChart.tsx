import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { blockAtom } from '../contexts/blockContext';
import { useAtom } from 'jotai';
import { siteData } from '../data/data';

const PieChartExp = () => {
  const [block] = useAtom(blockAtom);
  const data = siteData.find((e) => e.blockName === block)!.pieData;
  const colors = ['#eb750e', '#115e59', '#bef264']
  return (
    <div><PieChart width={400} height={400} margin={{ top: 5, left: 0, right: 80, bottom: 80 }}>
    <Pie
      dataKey="value"
      isAnimationActive={true}
      data={data}
      cx="50%"
      cy="50%"
      outerRadius={75}
      innerRadius={50}
      fill="#8884d8"
      label={false}
      legendType='rect'
      paddingAngle={2}
      
      
    >
      {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
    </Pie>
    <Legend iconType='circle' height={50} layout='vertical' align='left'/>
    
    <Tooltip />
  </PieChart></div>
  )
}

export default PieChartExp