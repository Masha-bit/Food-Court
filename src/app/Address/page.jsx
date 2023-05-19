'use client';

import React, { useEffect, useRef, useState } from 'react'
import Nav from './component/Nav';
import { gsap } from 'gsap';
// import { ReactDOM } from 'react';
import Button from '../Button';
import SwipeAnimation from '../SwipeAnimation';
import Divider from './component/Divider';


const Address = () => {

  const [active, setActive] = useState(false)

  const onHandleChange = ()=>{
    setActive(!active)
  }

  const [address, setAddress] = useState('Lyari, karachi')
  
  function text(e){
    setAddress(e)
    console.log(address)
  }

  function handleSubmitAddress(){
        if(window !== 'undefined'){
        localStorage.setItem('Address', JSON.stringify([address]))         
    ,[]  }
  }


  return (
    // <SwipeAnimation>
    <div className='h-[100vh] w-[100vw] bg-[#F5F5F8]'>
    <div className="p-2 flex flex-col items-center font-dongle">
      <Nav />

      <div className='my-6 w-[80%] text-[34px]'>
        Delivery
      </div>

      <div className="h-[70px] w-[80%]  my-4 flex items-center justify-between font-dongle">
        <p>Address details</p>
        <p onClick={onHandleChange} className={active? 'text-slate-500': ''}>/change</p>
      </div>

      <div className='h-auto w-[100%]'>

        {active? (
          <div className='h-[auto] w-[100%] flex flex-col my-3 p-8 text-[20px] rounded-new bg-white'>
              <input type="text" placeholder='Muzzammil Khatri' className='outline-none border-none' />
              <Divider/>
              <input type="text" onChange={(e)=> text(e.target.value)} placeholder='Lyari, karachi' className='outline-none border-none' />
               <Divider/>
               <input type="text" placeholder='+92 317 2839599' className='outline-none border-none' />
          </div>
        ):
        (
          <div className='h-[auto] w-[100%] flex flex-col my-3 p-8 text-[20px] rounded-new bg-white'>
              <p>Muzzammil Khatri</p>
              <Divider/>
              <p>Lyari, karachi</p>
               <Divider/>
              <p>+92 317 2839599</p>
          </div>
        )
        }      
        
        {/* <CartItems/> */}
      </div>

      <div className='absolute bottom-0 ' onClick={handleSubmitAddress}>
       <Button buttonLink='./Checkout' buttonText='Confirm Address'/>
      </div>
    </div>
    </div>
    // </SwipeAnimation>
  );
};

export default Address;
