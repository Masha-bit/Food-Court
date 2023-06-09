"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SwipeAnimation from 'react-icons/app/SwipeAnimation'
import map from '/public/asset/Map.png'
import userImg from '/public/asset/user.png'
import Button from '../Button'

import { FiPhoneCall } from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Nav from './Nav'
import Link from 'next/link'


export default function page() {

  
const [address, setAddress] = useState([])
const [user, setUser]= useState([])

useEffect(()=>{
  const addressdatabaseFromLocalStorage =
    typeof window !== "undefined"?
    JSON.parse(
    localStorage.getItem('Address') ||
    `[{}]`
    )
    :null
    console.log(addressdatabaseFromLocalStorage)

    const userdatabaseFromLocalStorage =
    typeof window !== "undefined"?
    JSON.parse(
    localStorage.getItem('User') ||
    `[{}]`
    )
    :null
    console.log(userdatabaseFromLocalStorage)


    addressdatabaseFromLocalStorage? setAddress(addressdatabaseFromLocalStorage): null
    userdatabaseFromLocalStorage? setUser(userdatabaseFromLocalStorage): null


},[])

  
const completeOrder = () =>{

    typeof window !== "undefined"?
        localStorage.removeItem('Cart') ||
        window.alert('order has been successfully made!')
        :null
        
        console.log('deleted')
    }





  
  


  return (
        <div className='h-[100vh] w-[100vw] p-1 flex flex-col items-center overflow-hidden relative bg-[#eae8e88e] font-dongle'>
          <Nav/>
            <div className='absolute top-0 h-[55%] w-[100%] flex flex-col items-center justify-center border-2 bg-[#eae8e88e] -z-10'>
            <Image src={map} alt='map' className='relative'/>        
            </div>

            <div className='absolute bottom-0 h-[50%] w-[100%] flex flex-col items-center rounded-tr-lg rounded-tl-lg bg-white shadow-2xl z-10 p-1'>

              <div className='h-[200px] w-[90%] flex flex-row items-center my-4'>
                <div className='h-[100%] w-[20%] flex flex-col items-center justify-around'>
                  <div className='h-[40px] w-[40px] rounded-full bg-[#fcc73f] mx-2 flex items-center justify-center'>
                  <AiOutlineClockCircle/>
                  </div>

                  <div className='h-[60px] border-[0.5px] border-[#ffd15e] '>

                  </div>

                  <div className='h-[40px] w-[40px] rounded-full bg-[#fcc73f] mx-2 flex items-center justify-center'>
                    <GrLocation/>
                  </div>


                </div>
                <div className=' h-[100%] w-[80%] flex flex-col items-center justify-around '>

                <div className='h-[50px] w-[100%] bg-[#e7ad19]mx-2 flex flex-col items-center justify-center'>
                  <p className='text-slate-400 w-[100%]'>Delivery Time</p>
                  <p className='text-[18px] w-[100%]'>03:00PM (Max 20 min)</p>
                  </div>

                  <div className='h-[60px]'>

                  </div>

                  <div className='h-[40px] w-[100%] mx-2 flex flex-col items-center justify-center'>
                  <p className='text-slate-400 w-[100%]'>Delivery Address</p>
                  <p className='text-[18px] w-[100%]'>{address}</p>
                  </div>

                  </div>

               
              </div>

              <div className='h-[80px] w-[90%] bg-slate-200 flex flex-row items-center justify-around my-2 rounded-md p-1'>
                <div className='h-[70px] w-[70px] rounded-full bg-[#fcc73f] mx-2 flex items-center justify-center'>
                <Image src={userImg} alt='user'/> 
                </div>
                      
        

                <p className='w-[180px] mx-2'>
                  {user}
                </p>

                <div className='h-[70px] w-[70px] rounded-full bg-black mx-2 flex items-center justify-center'>
                  <FiPhoneCall size={30} style={{fill:'white'}}/>
                </div>


              </div>


              <div className=' absolute bottom-0'>

                <Link href={'./Complete'}>
                <div className='max-h-[70px] w-[250px] max-w-[314px] bg-white border-[#e7ad19] border-2 hover:bg-[#e7ad19] my-4 mx-auto rounded-full p-5 flex items-center text-[#FFC83A] hover:text-black text-[17px] transition-all' onClick={completeOrder}>
                    <div className='my-0 mx-auto font-dongle'>
                        Check Details
                    </div>            
                </div>
                </Link>
                {/* <span className='bg-orange-700' onClick={completeOrder}>
                <Button buttonText={'Check Details'} buttonLink={'./Complete'}/>
                </span> */}
                

              </div>
            </div>
            </div>
          
    // </SwipeAnimation>
  )
}
