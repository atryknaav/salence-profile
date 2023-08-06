import { logo, logout } from "../../svg/icons";
import Option from "./Option";

const Sidebar = () => {

    const options: string[] = [
        'Overview',
        'Product',
        'Customers',
        'Orders',
        'Checkout',
        'Settings'
    ]
  return (
    <div className="lg:w-[20vw] border-r-[1px] border-border lg:flex lg:flex-col hidden">

        <div className='flex dark:text-white font-semibold text-3xl w-full h-[fit-content]  border-b-[1px] border-border rounded-br-3xl pb-4 items-center gap-3 hover:cursor-pointer select-none'>
            {logo} {`salence`}
        </div>

        <div className='flex flex-col w-full flex-1 border-y-[1px] border-border rounded-r-3xl -mt-[1px] gap-3'>

        {options.map((item, index) => (
            <Option key={index} name={item} />
        ))}
            

        </div>

        <div className='w-full h-[fit-content] -mt-[1px]  border-t-[1px] border-border rounded-tr-3xl dark:text-white flex flex-col gap-2'>

            <p className="mt-5 dark:hover:bg-back-dark p-2 duration-100 mr-4 rounded-xl text-lg dark:active:bg-active-dark hover:cursor-pointer select-none">
                Help
            </p>

            <p className="dark:hover:bg-back-dark p-2 duration-100 mr-4 rounded-xl text-lg dark:active:bg-active-dark hover:cursor-pointer select-none">
                Contact us
            </p>

            <p className="flex gap-3 mb-5 dark:hover:bg-back-dark p-2 duration-100 mr-4 rounded-xl text-lg dark:active:bg-active-dark hover:cursor-pointer select-none">
                {logout} {`Log out`}
            </p>

        </div>


    </div>
  )
}

export default Sidebar