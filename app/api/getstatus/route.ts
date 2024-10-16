import {NextResponse } from 'next/server'
import { connectMongoDB } from '@/config/mongoose'
import User from '@/models/user'
import Center from '@/models/centers';
import Slotbooking from '@/models/slotbooking';
import Blocked from '@/models/blocked';
// import { z } from "zod"

// const inputTypes = z.object({
//     email : z.string().email()
// })

export async function POST(req:Request){
    try {
        const body = await req.json()        
        console.log(body);
        
        await connectMongoDB()
        let slot = await Slotbooking.findOne({
            center: body.centerName.centerName, // ID of the Center
            sport: body.sportName.sportName, // sport name, assuming it's directly stored in Slotbooking
            date: body.date,
            time: body.time,
            court: body.court
          })
        
        if(slot) return NextResponse.json({status : "booked"},{status:200})
        let blocked = await Blocked.findOne({
            center: body.centerName.centerName, // ID of the center
            sport: body.sportName.sportName, // name of the sport
            date: body.date, // date of the block
            time: body.time, // blocked time
            court: body.court // specific court number
          })
          if(blocked) return NextResponse.json({status : "blocked"},{status:200})
            return NextResponse.json({status : "empty"},{status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:'server error'},{status:500})
    }
}