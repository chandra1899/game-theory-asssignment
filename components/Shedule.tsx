"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import SheduleTop from './SheduleTop'
import SheduleSlots from './SheduleSlots'

const Shedule = () => {

  return (
    <div className='flex flex-col items-center w-[100%] mt-1 p-1 px-3'>
        <SheduleTop/>
        <h1 className='w-[100%] pl-4 mt-3 text-[1.5rem] font-bold my-2'>Shedule</h1>
        <div className='flex flex-row w-[100%] ml-7 my-3'>
            <input type="date" className='bg-slate-300 text-[0.9rem] px-2 py-1 rounded-md h-[28px] ' />
            <div className='flex flex-row justify-center items-center w-auto border-2 border-slate-300 mx-2 rounded-md text-[0.9rem]'>
                <div className='px-2 hover:cursor-pointer hover:bg-slate-300 flex justify-center items-center h-[100%]'>swimming</div>
                <div className='px-2 hover:cursor-pointer hover:bg-slate-300 flex justify-center items-center h-[100%]'>Batmenton</div>
            </div>
        </div>
        <SheduleSlots/>
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
    </div>
  )
}

export default Shedule
