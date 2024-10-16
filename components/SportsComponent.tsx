import { globalsport } from '@/store/atom/globalsport'
import React from 'react'
import { useSetRecoilState } from 'recoil'

const SportsComponent = ({value} : {value : any}) => {
    const setglobalsport = useSetRecoilState(globalsport)
    const handleClick = () => {
        setglobalsport(value)
    }
  return (
    <div className='px-2 hover:cursor-pointer hover:bg-slate-300 flex justify-center items-center h-[100%]' onClick={handleClick}>{value}</div>
  )
}

export default SportsComponent
