import React from 'react'

interface DataType {
    data : string
}

const SubSlots = ({data} : DataType) => {
  return (
    <div className='flex flex-row w-[100%] '>
      <div className='border-[1px] border-slate-300 w-[10%]'></div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[60px]'>court-1</div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[60px]'>court-2</div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[60px]'>court-3</div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[60px]'>court-4</div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[60px]'>court-5</div>
      <div className='border-[1px] border-slate-300 w-[15%] h-[60px]'>court-6</div>
    </div>
  )
}

export default SubSlots
