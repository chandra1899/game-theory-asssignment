import {NextResponse } from 'next/server'
import { connectMongoDB } from '@/config/mongoose'
import User from '@/models/user'
import Center from '@/models/centers';

export async function POST(req:Request){
    try {
        const body = await req.json()
        await connectMongoDB()
        let center = await Center.create(body)
        
        return NextResponse.json({center},{status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:'server error'},{status:500})
    }
}