"use client"

import React from 'react'
import SubSlots from './SubSlots'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { isbooknowopen } from '@/store/atom/isbooknowopen'
import Image from 'next/image'
import { globalsport } from '@/store/atom/globalsport'
import AtualSlote from './AtualSlote'

const DAY = ["", "4am-5am", "5am-6am", "6am-7am", "7am-8am", "8am-9am", "9am-10am", "10am-11am"]

const SheduleSlots = () => {
  const setIsbooknowopen = useSetRecoilState(isbooknowopen)
  const globalsportVal = useRecoilValue(globalsport)
  return (
    <div className='w-[95%] h-[70vh] border-2 border-slate-300 ml-2 mt-2 mr-7 rounded-lg overflow-y-scroll '>
      {/* <div className='flex flex-row w-[100%] '>
      <div className='w-[7%] '></div>
      <div className='w-[15%] h-[80px] flex justify-center items-center font-bold'>court-1</div>
      <div className='w-[15%] h-[80px] flex justify-center items-center font-bold'>court-2</div>
      <div className='w-[15%] h-[80px] flex justify-center items-center font-bold'>court-3</div>
      <div className='w-[15%] h-[80px] flex justify-center items-center font-bold'>court-4</div>
      <div className='w-[15%] h-[80px] flex justify-center items-center font-bold'>court-5</div>
      <div className='w-[15%] h-[80px] flex justify-center items-center font-bold'>court-6</div>
    </div> */}
    {DAY.map((data, index) => {
  // Create an array of courts for the current day
  return (
    <div key={index} className="w-full flex">
                {Array.from({ length: globalsportVal.no_of_courts + 1 }).map((_, courtIndex) => {
                  // For the first column, return the day label
                  if (courtIndex === 0) {
                    return (
                      <div key={courtIndex} className=' w-[15%] h-[80px]  text-[0.8rem] font-bold flex justify-end px-2'>
                        {data}                         
                      </div>
                    );
                  }
                  else if(index == 0) {
                    return (
                      <div key={courtIndex} className='border-[1px] border-slate-300 w-[15%] h-[80px] flex justify-center items-center font-bold relative group'>court-{courtIndex}
                      </div>
                    )
                  }
                   else {
                    return (
                      <AtualSlote courtIndex = {courtIndex} data = {data} />
                    );
                  }
                })}
              </div>
            );
          })}
        (
      )
    </div>
  )
}

export default SheduleSlots
