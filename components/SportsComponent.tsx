import { globalsport } from '@/store/atom/globalsport'
import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const SportsComponent = ({value} : {value : any}) => {
    const globalsportVal = useRecoilValue(globalsport)
    const setglobalsport = useSetRecoilState(globalsport)
    const handleClick = () => {
        setglobalsport(value)
    }
  return (
    <div className={`px-2 hover:cursor-pointer bg-slate-300 hover:bg-white flex justify-center items-center h-[100%] ${globalsportVal?.sportName == value.sportName ? "bg-white" : ""}`} onClick={handleClick}>{value.sportName}</div>
  )
}

export default SportsComponent
