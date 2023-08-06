const TopProducts = () => {
  return (
    <div className="flex flex-col dark:bg-back-dark dark:text-white w-full h-full rounded-lg px-6 py-4">
        <div className="flex justify-between">

            <div className="font-semibold rounded-lg">
                Top Products
            </div>

            <div className="flex justify-end gap-6 flex-1">

                <div>
                    <input type="text" className="bg-transparent rounded-md border-minor-dark border-[1px] w-[25vw] py-1 px-3" placeholder='Search'/>
                </div>

                <div>
                    <select className="bg-transparent dark:border-[1px] border-minor-dark py-1 px-3 rounded-md">
                        <option>This week</option>
                        <option>This month</option>
                        <option>This year</option>
                    </select>
                </div>
            </div>

        </div>

    </div>
  )
}

export default TopProducts