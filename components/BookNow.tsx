"use client"

import { booknow } from '@/store/atom/booknow'
import { isbooknowopen } from '@/store/atom/isbooknowopen'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const BookNow = () => {
    const {data:session} = useSession()
    const setIsbooknowopen = useSetRecoilState(isbooknowopen)
    const booknowVal = useRecoilValue<any>(booknow)
    const [paydone, setPaydone] = useState(false)
    const [bringback, setBringback] = useState(false)
    const [noitems, setNoitems] = useState(0)
    const handlebook = async () => {
        try {
            let res = await axios.post('/api/createbookingslot',{
                bookedBy : session?.user?.email,
                center : booknowVal.center,
                sport : booknowVal.sport,
                court : booknowVal.court,
                paymentDone : paydone,
                itemsCollected : bringback,
                date : booknowVal.date,
                time : booknowVal.time,
                no_of_items : noitems
            })
            if(res.status === 200){
                setIsbooknowopen(false)
            }
          } catch (error) {
            console.log('error', error);
          }
        setIsbooknowopen(false)
    }
  return (
    <div className='absolute w-[80vh] max-w-[600px] bg-white z-10 top-16 left-[32%] rounded-lg p-5 pb-8'>
        <div>{booknowVal.center}</div>
        <div>{booknowVal.sport}</div>
        <div>{booknowVal.court}</div>
        <div>
            <div>{booknowVal.date}</div>
            <div>{booknowVal.time}</div>
        </div>
        <div>
            <p>no of items you will bring</p>
            <input type="text" value={noitems} onChange={(e:any )=> setNoitems(e.target.value)} />
        </div>        
        <div>
            <input id='1' type="checkbox" checked = {bringback} onChange={()=>setBringback((pre)=>!pre)} />
            <label htmlFor="1">will you collect all items you bring</label>
        </div>
        <div>
            <p>did you completed payment</p>
            <input type="checkbox" checked = {paydone} onChange={()=>setPaydone((pre)=>!pre)} />
        </div>
        <button onClick={() => {setIsbooknowopen(false)}}>Cancel</button>
        <button onClick={handlebook}>Book slot</button>
    </div>
  )
}

export default BookNow
