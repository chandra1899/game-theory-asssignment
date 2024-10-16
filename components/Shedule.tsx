"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SheduleTop from './SheduleTop'
import SheduleSlots from './SheduleSlots'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { globaldate } from '@/store/atom/globaldate'
import axios from 'axios'
import { centerarray } from '@/store/atom/centerarray'
import CenterComponent from './CenterComponent'
import SportsComponent from './SportsComponent'
import { sportarray } from '@/store/atom/sportarray'
import { globalsport } from '@/store/atom/globalsport'
import { globalcenter } from '@/store/atom/globalcenter'
import Nothing from './Nothing'

const Shedule = () => {
    const setcenterarray = useSetRecoilState(centerarray)
    const centerarrayVal = useRecoilValue(centerarray)
    const sportarrayVal = useRecoilValue(sportarray)
    const globaldateVal = useRecoilValue(globaldate)
    const globalcenterVal = useRecoilValue(globalcenter)
    const globalsportVal = useRecoilValue(globalsport)
    const handleDateChange = (e : any) => {
        console.log("date ==", e.target.value);
        
    }
    const getcenters = async () => {
        try {
            let res = await axios.post('/api/getcenters',{})
            if(res.status === 200){
                setcenterarray(res.data.centers)
                console.log(res);
                
            }
          } catch (error) {
            console.log('error', error);
          }
    }
    useEffect(() => {
        getcenters()
    }, [])
  return (
    <div className='flex flex-col items-center w-[100%] mt-1 p-1 px-3'>
        <SheduleTop/>
        <h1 className='w-[100%] pl-4 mt-3 text-[1.5rem] font-bold my-2'>Shedule</h1>
        <div className='flex flex-row w-[100%] ml-7 my-3'>
            <div>select center :- </div>
            <div className='flex flex-row justify-center items-center w-auto border-2 border-slate-300 mx-2 rounded-md text-[0.9rem]'>
                {centerarrayVal.map((value : any) => (
                        <CenterComponent value = {value} />
                ))}
            </div>
        </div>
        <div className='flex flex-row w-[100%] ml-7 my-3'>
            <input type="date" className='bg-slate-300 text-[0.9rem] px-2 py-1 rounded-md h-[28px] ' value={globaldateVal} onChange={handleDateChange} />
            <div className='flex flex-row justify-center items-center w-auto border-2 border-slate-300 mx-2 rounded-md text-[0.9rem]'>
                {sportarrayVal.map((value : any) => (
                    <SportsComponent value = {value}/>
                ))}
                
            </div>
        </div>
        {!(globalcenterVal == undefined || globalsportVal == undefined) && <SheduleSlots/>}
        {(globalcenterVal == undefined || globalsportVal == undefined) && <Nothing/> }  
    </div>
  )
}

export default Shedule
