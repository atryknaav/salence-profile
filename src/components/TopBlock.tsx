import React from 'react'

const TopBlock = (props: { name: string, status: string, weekPercent: string, weekNum: string  }) => {
    const arrow =
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
  
    const { name, status, weekPercent, weekNum } = props;
  return (
    <div className='flex flex-col bg-transparent dark:bg-back-dark h-16 dark:text-white flex-1 first:rounded-l-lg last:rounded-r-lg p-3 border-r-[1px] border-[#393939] last:border-none'>

        <div>
            {name}
        </div>

        <div>
            {`${arrow} $${status}`}
        </div>

        <div className='flex flex-col gap-3'>

            <div>
                {`${weekPercent}%`}
            </div>

            <div>
                {name}
            </div>

        </div>

    </div>
  )
}

export default TopBlock