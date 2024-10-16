import {NextResponse } from 'next/server'
import { connectMongoDB } from '@/config/mongoose'
import User from '@/models/user'
// import { z } from "zod"

// const inputTypes = z.object({
//     email : z.string().email()
// })

export async function POST(req:Request){
    try {
        const body = await req.json()
        // const parsedInput = inputTypes.safeParse(body)
        // if(!parsedInput.success){
        //     return NextResponse.json({message:parsedInput.error},{status:411})
        // }
        console.log("in createbookingslot", body);
        
        
        await connectMongoDB()
        
        
        return NextResponse.json({},{status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:'server error'},{status:500})
    }
}