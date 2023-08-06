import Select from "./Select"

const TopProducts = () => {
  return (
    <div className="flex flex-col dark:bg-back-dark dark:text-white w-full h-full rounded-lg px-6 py-4">
        <div className="flex justify-between mb-2">

            <div className="font-semibold rounded-lg">
                Top Products
            </div>

            <div className="flex justify-end gap-6 flex-1">

                <div>
                    <input type="text" className="bg-transparent rounded-md border-minor-dark border-[1px] w-[25vw] py-1 px-3" placeholder='Search'/>
                </div>

                <div>
                    <Select />
                </div>

            </div>

        </div>

        <div>
            <table className="w-full h-full border-spacing-3 border-separate">
                <tr >
                    <th className="text-left text-sm font-medium text-minor-dark">Product name</th>
                    <th className="text-left text-sm font-medium text-minor-dark">Order ID</th>
                    <th className="text-left text-sm font-medium text-minor-dark">Price</th>
                    <th className="text-left text-sm font-medium text-minor-dark">Sold</th>
                    <th className="text-right text-sm font-medium text-minor-dark">Sales</th>
                </tr>
                <tr>
                    <td>MacBook Air <span className="text-minor-dark">AAPL</span></td>
                    <td>#719261</td>
                    <td>$1,846</td>
                    <td>9,971</td>
                    <td className="text-right">$15,308,94</td>
                </tr>
                
            </table>
        </div>

    </div>
  )
}

export default TopProducts