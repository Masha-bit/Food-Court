"use client"

import React, { useEffect, useState } from 'react'
import Nav from './component/Nav'
import Button from '../Button'
import Image from 'next/image'
import { BsCart3 } from 'react-icons/bs'

export default function page() {

    
const [order, setOrder] = useState([])

useEffect(()=>{
  const orderdatabaseFromLocalStorage =
    typeof window !== "undefined"?
    JSON.parse(
    localStorage.getItem('Order') ||
    `[{}]`
    )
    :null
    console.log(orderdatabaseFromLocalStorage)


    orderdatabaseFromLocalStorage? setOrder(orderdatabaseFromLocalStorage): null
},[])



  return (
    <div className='h-[100vh] w-[100vw] flex flex-col items-center p-2 relative font-dongle'>
        <Nav/>
        
        <div className='h-[auto] w-[100%] flex flex-col items-center justify-center my-[5rem] text-[#7e7e7e]'>

        {order != ''? (
                <div className='h-[120px] w-[100%] bg-slate-100 rounded-lg flex items-center text-left text-[12px]'>
                   Pending order:
                   <i className='ml-3'>
                    ₦ {order} 
                    </i>                 
                </div>
            ):(
                <div className='h-[auto] w-[100%] flex flex-col items-center'>
                    <BsCart3 size={200} style={{color:'#7e7e7e'}}/>

                <p className='my-6 text-[20px] font-bold text-black'>No Orders yet</p>
                <p className='w-[46%] text-center'>Hit the orange button down
                below to Create an order!</p>

                </div>
            )
        }


        </div>
            
        <div className='absolute bottom-0 left-0 w-[100%]'>
            <Button buttonText={'Start Ordering'} buttonLink={'./Menu'}/>
        </div>
    </div>

  )
}
