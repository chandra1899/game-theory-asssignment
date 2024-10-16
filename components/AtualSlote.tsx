import { booknow } from '@/store/atom/booknow'
import { globalcenter } from '@/store/atom/globalcenter'
import { globaldate } from '@/store/atom/globaldate'
import { globalsport } from '@/store/atom/globalsport'
import { isbooknowopen } from '@/store/atom/isbooknowopen'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const AtualSlote = ({courtIndex, data}: {courtIndex : any, data : any}) => {
    const [status, setStatus] = useState("")
    const globalcenterVal = useRecoilValue(globalcenter)
    const globaldateVal = useRecoilValue(globaldate)
    const globalsportVal = useRecoilValue(globalsport)
    const setisbooknowopen = useSetRecoilState(isbooknowopen)
    const setbooknow = useSetRecoilState(booknow)
    const getStatus = async () => {
      try {
        let res = await axios.post('/api/getstatus',{
            centerName : globalcenterVal,
            sportName : globalsportVal,
            date : globaldateVal,
            time : data,
            court : courtIndex
        })
        if(res.status === 200){
          setbooknow({
            center : globalcenterVal.centerName,
            sportName : globalsportVal.sportName,
            court : courtIndex,
            date : globaldateVal,
            time : data
          })
          setStatus(res.data.status)
        }
      } catch (error) {
        console.log('error', error);
      }
    }
    const handleonclick = () => {
      setisbooknowopen(true)
    }
    useEffect(() => {
      getStatus()
    }, [])
  return (
    <div className='border-[1px] border-slate-300 w-[15%] h-[80px] flex justify-center items-center font-medium relative group'>
                      {status == "empty" &&  <div className="absolute inset-0 hidden group-hover:flex h-[100%] w-[100%] z-[1] bg-blue-300 justify-center items-center cursor-pointer" onClick={handleonclick} >
                          Book now
                        </div>}
                      </div>
  )
}

export default AtualSlote
