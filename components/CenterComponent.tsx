"use client"

import { globalcenter } from '@/store/atom/globalcenter'
import { sportarray } from '@/store/atom/sportarray'
import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

const CenterComponent = ({value} : {value : any}) => {
  const globalcenterVal = useRecoilValue(globalcenter)
    const setglobalcenter = useSetRecoilState(globalcenter)
    const setsportarray = useSetRecoilState(sportarray)
    const handleClick = () => {
        setglobalcenter(value)
        setsportarray(value.sports)
        console.log("value", value);
        
    }
  return (
    <div className={`px-2 hover:cursor-pointer bg-slate-300 hover:bg-white flex justify-center items-center h-[100%] ${globalcenterVal?.centerName == value?.centerName?"bg-white":""}`} onClick={handleClick} >{value?.centerName}</div>
  )
}

export default CenterComponent
