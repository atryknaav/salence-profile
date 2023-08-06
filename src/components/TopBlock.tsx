import { arrowUp, shopBag, users, star, arrowBack } from "../svg/icons";

const TopBlock = (props: { name: string, status: string, weekPercent: string, weekNum: string  }) => {        
    const { name, status, weekPercent, weekNum } = props;

    const iconList: {[key: string]: JSX.Element} = {
        'Total sales': shopBag,
        'Visitors': users,
        'Total orders': star,
        'Refunded': arrowBack
    };

    const icon = iconList[name];

    const styleBody = name === 'Total sales'
        ? ' bg-success '
        : ' bg-transparent dark:bg-back-dark dark:text-white duration-1000 hover:bg-success hover:scale-105 hover:cursor-pointer'

  return (
    
    <div className={'flex flex-col flex-1 first:rounded-l-lg last:rounded-r-lg p-3 mt-20 lg:mt-0 border-r-[1px] border-[#393939] last:border-none' + styleBody}>

        <div className="flex gap-2">
            <div className={`rounded-full p-1 h-[fit-content] bg-black ${name === 'Total sales' ? 'bg-black text-success' : 'dark:bg-light-gray bg-black hover:bg-black hover:text-success'}`}>
                {icon}
            </div>

            <div className='text-md mb-6'>
                {name}
            </div>
        </div>

        <div className='mb-3 font-semibold text-3xl'>
            {`${status}`}
        </div>

        <div className='flex gap-3 text-sm font-medium mb-1'>

            <div className={`flex items-center gap-2 ${name === 'Total sales' ? 'text-minor-success' : 'text-success'}`}>
                {arrowUp} {`${weekPercent}%`}
            </div>

            <div className={`text-minor-dark ${name === 'Total sales' ? 'text-minor-success' : 'text-minor-dark'}`}>
                {`+${weekNum} this week`}
            </div>

        </div>

    </div>
  )
}

export default TopBlock