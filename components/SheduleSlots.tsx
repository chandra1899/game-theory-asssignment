import React from 'react'
import SubSlots from './SubSlots'

const DAY = ["4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10 am"]

const SheduleSlots = () => {
  return (
    <div className='w-[95%] h-[70vh] border-2 border-slate-300 ml-2 mt-2 mr-7 rounded-lg overflow-y-scroll '>
      <div className='flex flex-row w-[100%] '>
      <div className='w-[7%] '></div>
      <div className='w-[15%] h-[80px] flex justify-center items-center font-bold'>court-1</div>
      <div className='w-[15%] h-[80px] flex justify-center items-center font-bold'>court-2</div>
      <div className='w-[15%] h-[80px] flex justify-center items-center font-bold'>court-3</div>
      <div className='w-[15%] h-[80px] flex justify-center items-center font-bold'>court-4</div>
      <div className='w-[15%] h-[80px] flex justify-center items-center font-bold'>court-5</div>
      <div className='w-[15%] h-[80px] flex justify-center items-center font-bold'>court-6</div>
    </div>
        {DAY.map((data, index) => (
            <SubSlots data = {data} key={index} />
        ))}
    </div>
  )
}

export default SheduleSlots
