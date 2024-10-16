"use client"
import React, { useState } from 'react'

const SheduleTop = () => {
    const [search, setSearch] = useState("")
  return (
    <div className='flex flex-row h-[55px] justify-center items-center '>
            <input
            type="text" 
            placeholder='Search'
            onChange={(e)=>{setSearch(e.target.value)}}
            value={search}
            className={` border-slate-500 border-[0.1rem] border-solid placeholder:text-secondary placeholder:opacity-60 h-[33px] w-[50vw] xs:w-[270px] py-2 px-3  outline-none focus:border-blue focus:bg-white focus:border-[0.1rem] focus:border-solid xs:ml-0 font-medium`}
            />
            {/* <Image
            src={'/search.png'}
            height={2}
            width={30}
            className=''
            alt='search'
            /> */}
            <div className='mx-4 p-2 bg-slate-300 h-[33px] flex justify-center items-center text-[0.9rem] font-medium'>Buy & Sell</div>
            <div className='mr-2 p-2 bg-black h-[33px] flex justify-center items-center text-[0.9rem] text-white '>+ Add Customer</div>
            </div>
  )
}

export default SheduleTop
