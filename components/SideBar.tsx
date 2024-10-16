"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const SideBar = () => {
  const router = useRouter();
  const {status,data:session} =useSession()
  return (
    <div className='bg-gray-900 w-[18vw] h-[100vh] relative text-white'>
      <h3 className='h-[50px] border-b-2 border-b-slate-800 flex justify-center items-center text-[2rem] font-bold'>NEXUS</h3>
      <div className='flex flex-col justify-center items-center w-[100%] pt-4' >
        <div className='flex flex-row my-1 hover:bg-slate-800 w-[100%] pl-6 h-[30px] items-center hover:cursor-pointer' onClick={() => {router.push("/dashboard")}} > 
          <Image
            src="/dashboard.png"
            width={20}
            height={20}
            alt="Picture of the author"
          />
        <p className='ml-2'>DashBoard</p>
        </div>
        <div className='flex flex-row my-1 hover:bg-slate-800 w-[100%] pl-6 h-[30px] items-center hover:cursor-pointer' onClick={() => {router.push("/shedule")}}> 
          <Image
            src="/dashboard.png"
            width={20}
            height={20}
            alt="Picture of the author"
          />
        <p className='ml-2'>Shedule</p>
        </div>
        <div className='flex flex-row my-1 hover:bg-slate-800 w-[100%] pl-6 h-[30px] items-center hover:cursor-pointer' onClick={() => {router.push("/customers")}}> 
          <Image
            src="/dashboard.png"
            width={20}
            height={20}
            alt="Picture of the author"
          />
        <p className='ml-2'>Customers</p>
        </div>
        <div className='flex flex-row my-1 hover:bg-slate-800 w-[100%] pl-6 h-[30px] items-center hover:cursor-pointer' onClick={() => {router.push("/coachings")}}> 
          <Image
            src="/dashboard.png"
            width={20}
            height={20}
            alt="Picture of the author"
          />
        <p className='ml-2'>Coachings</p>
        </div>
        <div className='flex flex-row my-1 hover:bg-slate-800 w-[100%] pl-6 h-[30px] items-center hover:cursor-pointer' onClick={() => {router.push("/attendence")}}> 
          <Image
            src="/dashboard.png"
            width={20}
            height={20}
            alt="Picture of the author"
          />
        <p className='ml-2'>Attendence</p>
        </div>
      </div>
      <div className='absolute bottom-4'>
      <div className='flex flex-row items-center mx-3'>
        <div className='h-[40px] w-[40px] rounded-full bg-slate-600 justify-center items-center flex'>{session?.user?.name?.toUpperCase().substring(0, 2)}</div>
        <div className='flex flex-col mx-2'>
          <p className='font-medium'>{session?.user?.name}</p>
          <p className='text-[0.75rem] -mt-1 text-slate-500'>captain</p>
        </div>
      </div>
        <div className='text-[0.6rem] m-2 w-[100%] pl-3'>Location IIT Allahabad</div>
      </div>
    </div>
  )
}

export default SideBar
