import React from 'react';
import { AiOutlineUnorderedList, AiOutlineSearch } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';



const Header = () => {
  return (
    <div className='flex flex-row justify-between p-3 bg-transparent fixed w-full lg:static h-[fit-content]'>

        <div className='w-[70%]'>
           <h1 className='lg:text-xl font-medium font-sans dark:text-white w-full text-[6vw]'>
                Welcome back, Arsenii 
            </h1>
            <p className='text-minor-light dark:text-minor-dark text-lg lg:block hidden'>
                Here's what's happening with your store today.
            </p>
        </div>

        <div className='flex-row justify-end lg:flex hidden mr-10 align-middle lg:items-center'>


            <div className='dark:text-white flex-col justify-center text-2xl mx-5'>
                <AiOutlineSearch />
            </div>

            <div className='dark:text-white flex-col justify-center text-2xl mx-5'>
                <RiNotification3Line />
            </div>
            
            <div className='h-10 w-10 bg-gray-400 rounded-full mx-2'>

            </div>
            <div className="font-medium text-lg dark:text-white flex gap-2 ">
                Arsenii Bilyi <div className='center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg></div>

            </div>
        </div>

        <div className='dark:text-white flex-col justify-center text-3xl lg:hidden flex'>
            <AiOutlineUnorderedList />
        </div>

    </div>
  )
}

export default Header;


