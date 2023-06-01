"use client"

import React, { useState } from 'react'
import Nav from './Nav'
import Button from './Button'
import Image from 'next/image'
import done from 'public/asset/98807-check-right-tick.gif'

export default function page() {

    const [message, setMessage] = useState('')
    
    function text(e){
        setMessage(e)
        console.log(message)
    }

    function handleSubmitFeedback(){
            if(window !== 'undefined'){
            localStorage.setItem('Review', JSON.stringify([message]))         
        ,[]  }
    }


  return (
    <div className='bg-[#ffffff] h-[100vh] w-[100vw] p-3 relative font-dongle flex flex-col items-center'>
        
            <Nav/>
        

        <div className='mt-[3rem] text-[36px] font-bold'>
        COMPLETE ORDER
        </div>

        <div className='h-[auto] w-[100%] flex items-center justify-center'>
        <Image src={done} alt='weldone.gif' height={650}/>          
        </div>

        
            <p className='font-bold text-[17px]'>Reviews</p>

            <p className='w-[80%] my-1 text-[20px]'>
                Rating 5.0
            </p>

            <div className='w-[80%] h-[auto] my-2'>
                <input type="text" name="" id="" style={{height: '70px', width:'100%', outline: 'none', border: 'none', }} placeholder='write a review' className='rounded-normal p-4 font-dongle text-[18px] my-1  bg-slate-100' onChange={(e)=> text(e.target.value)}/>
            </div>

        


        <div className=' absolute left-0 bottom-0 flex items-center justify-around w-[100%]'>
            <Button buttonText={'Skip'} buttonLink={'./Home'}/>

            <div onClick={handleSubmitFeedback}>
            <Button buttonText={'feedback'} buttonLink={'./Review'} />
            </div>
        </div>

    </div>
  )
}
