import React from 'react'
import SubSlots from './SubSlots'

const DAY = ["4 Am", "5 Am", "6 Am", "7 Am", "8 Am", "9 Am", "10 Am"]

const SheduleSlots = () => {
  return (
    <div className='w-[98%] border-2 border-slate-300 ml-2 mt-2 mr-2 rounded-lg'>
      <div className='flex flex-row w-[100%] '>
      <div className='w-[10%]'></div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[60px]'>court-1</div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[60px]'>court-2</div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[60px]'>court-3</div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[60px]'>court-4</div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[60px]'>court-5</div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[60px]'>court-6</div>
    </div>
        {DAY.map(() => (
            <SubSlots/>
        ))}
    </div>
  )
}

export default SheduleSlots
