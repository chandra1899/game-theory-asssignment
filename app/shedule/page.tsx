"use client"
import { BookNow, Shedule, SideBar } from '@/components'
import BackDrop from '@/components/BackDrop'
import { isbooknowopen } from '@/store/atom/isbooknowopen'
import React from 'react'
import { useRecoilValue } from 'recoil'

const page = () => {
  const isbooknowopenval = useRecoilValue(isbooknowopen)
  return (
    <div className='flex flex-row w-[100vw] h-[100vh]'>
      <SideBar/>
      <Shedule/>
      {isbooknowopenval && <BookNow/>}
      <BackDrop/>
    </div>
  )
}

export default page
