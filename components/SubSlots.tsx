"use client"

import Image from 'next/image'
import React from 'react'

interface DataType {
    data : string
}

const SubSlots = ({data} : DataType) => {
  return (
    <div className='flex flex-row w-[100%] '>
      <div className='w-[7%] text-[0.8rem] font-bold flex justify-end px-2 -mt-3'>{data}</div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[80px] flex justify-center items-center font-medium relative group'>
            {/* <div className='h-[90%] w-[95%] bg-slate-300 rounded-lg flex justify-center items-center font-medium '>court-1</div> */}
            <div className="absolute inset-0 hidden group-hover:flex h-[100%] w-[100%] z-[1] bg-slate-300 justify-center items-center ">
                <Image
                src="/menu.png"
                height={40}
                width={40}
                alt="menu"
                className='cursor-pointer'
                />
                </div>
      </div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[80px] flex justify-center items-center font-medium'>
            <div className='h-[90%] w-[95%] bg-green-200 rounded-lg flex justify-center items-center font-medium '>court-2</div>
      </div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[80px] flex justify-center items-center font-medium'>
              <div className='h-[90%] w-[95%] bg-slate-200 rounded-lg flex justify-center items-center font-medium '>court-3</div>
      </div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[80px] flex justify-center items-center font-medium'>
              <div className='h-[90%] w-[95%] bg-red-200 rounded-lg flex justify-center items-center font-medium '>court-4</div>
      </div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[80px] flex justify-center items-center font-medium'>
              <div className='h-[90%] w-[95%] bg-blue-200 rounded-lg flex justify-center items-center font-medium '>court-4</div>
      </div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[80px] flex justify-center items-center font-medium'>
              <div className='h-[90%] w-[95%] bg-yellow-100 rounded-lg flex justify-center items-center font-medium '>court-5</div>
      </div>
    </div>
  )
}

export default SubSlots
