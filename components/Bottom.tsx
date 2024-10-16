"use client"

import React from 'react'

const Bottom = () => {
  return (
    <div className='w-[100%] p-2 ml-7 my-2 flex flex-row'>
            <div className='flex flex-row items-center mx-2'>
               <p className='h-[15px] w-[15px] bg-yellow-200 mx-3'></p>
               <p>Booking</p>
            </div>
            <div className='flex flex-row items-center mx-2'>
                <p className='h-[15px] w-[15px] bg-green-200 mx-3'></p>
                <p>Checked-in</p>
            </div>
            <div className='flex flex-row items-center mx-2'>
                <p className='h-[15px] w-[15px] bg-blue-200 mx-3'></p>
                <p>Coaching</p>
            </div>
            <div className='flex flex-row items-center mx-2'>
                <p className='h-[15px] w-[15px] bg-slate-100 mx-3'></p>
                <p>Blocked/Tournment</p>
            </div>
            <div className='flex flex-row items-center mx-2'>
               <p className='h-[15px] w-[15px] bg-slate-300 mx-3'></p>
               <p>Completed</p>
            </div>
            <div className='flex flex-row items-center mx-2'>
               <p className='h-[15px] w-[15px] bg-red-200 mx-3'></p>
               <p>Pending payment or Collect Items</p>
            </div>
        </div>
  )
}

export default Bottom
