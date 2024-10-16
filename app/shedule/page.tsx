import { Shedule, SideBar } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-row w-[100vw] h-[100vh]'>
      <SideBar/>
      <Shedule/>
    </div>
  )
}

export default page
