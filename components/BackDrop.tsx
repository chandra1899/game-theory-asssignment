"use client"
import { isbooknowopen } from '@/store/atom/isbooknowopen'
import React from 'react'
import { useRecoilValue } from 'recoil'

const BackDrop = () => {
    const isbooknowopencheck = useRecoilValue(isbooknowopen)
  return (
    <>
       {(isbooknowopencheck) && <div className='bg-gray-900 bg-opacity-70  h-[110vh] w-[110vw] z-[1] fixed top-0' ></div>}
    </>
  )
}

export default BackDrop
