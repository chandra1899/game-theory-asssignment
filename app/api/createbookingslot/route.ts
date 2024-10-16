import {NextResponse } from 'next/server'
import { connectMongoDB } from '@/config/mongoose'
import User from '@/models/user'
import Slotbooking from '@/models/slotbooking';
// import { z } from "zod"

// const inputTypes = z.object({
//     email : z.string().email()
// })

export async function POST(req:Request){
    try {
        const body = await req.json()        
        await connectMongoDB()
        await Slotbooking.create(body)
        
        return NextResponse.json({},{status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:'server error'},{status:500})
    }
}