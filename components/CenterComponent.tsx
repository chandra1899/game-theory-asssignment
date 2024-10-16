"use client"

import { globalcenter } from '@/store/atom/globalcenter'
import { sportarray } from '@/store/atom/sportarray'
import React from 'react'
import { useSetRecoilState } from 'recoil'

const CenterComponent = ({value} : {value : any}) => {
    const setglobalcenter = useSetRecoilState(globalcenter)
    const setsportarray = useSetRecoilState(sportarray)
    const handleClick = () => {
        setglobalcenter(value?.centerName)
        const newarray = value.sports.map((x : any) => x.sportName)
        setsportarray(newarray)
    }
  return (
    <div className='px-2 hover:cursor-pointer hover:bg-slate-300 flex justify-center items-center h-[100%]' onClick={handleClick} >{value?.centerName}</div>
  )
}

export default CenterComponent
