
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { siteData } from '../data/data';
import { useAtom } from 'jotai';
import { blockAtom } from '../contexts/blockContext';

const Graph = () => {
  const [block] = useAtom(blockAtom);
  const data = siteData.find((e) => e.blockName === block)!.lineData;
  const legends = siteData.find((e) => e.blockName === block)!.lineLegends;
  return (
    <div className='mt-[20px]'>
    <LineChart className='w-full'
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="1" vertical={false} />
      <XAxis dataKey="name" interval={0}/>
      <YAxis />
      <Tooltip />
      <Legend verticalAlign='top' align='right' margin={{top: 0, left: 0, right: 5, bottom: 10}} height={35}/>
      <Line type="monotone" dataKey="uv" stroke="#eb750e" activeDot={{ r: 8 }} dot={false} strokeWidth={3} name={legends!.l1.name}/>
      {legends!.l2.active === true 
        ? <Line type="monotone" dataKey="pv" stroke="#bef264" dot={false} name={legends!.l2.name} strokeWidth={3}/>
        : undefined}
      
    </LineChart>
    </div>
  )
}

export default Graph