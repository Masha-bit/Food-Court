'use client';

import React, { useEffect, useRef } from 'react'
import Nav from './component/Nav';
import { gsap } from 'gsap';
// import { ReactDOM } from 'react';
import Button from '../Button';
import SwipeAnimation from '../SwipeAnimation';
import Divider from './component/Divider';


const Cart = () => {
  
  return (
    <SwipeAnimation>
    <div className='h-[100%] w-[100%] bg-[#F5F5F8]'>
    <div className="p-2 flex flex-col items-center font-dongle">
      <Nav />

      <div className='my-6 w-[80%] text-[34px]'>
        Delivery
      </div>

      <div className="h-[70px] w-[80%]  my-4 flex items-center justify-between font-dongle">
        <p>Address details</p>
        <p>/change</p>
      </div>

      <div className='h-[auto] w-[100%] flex flex-col my-3 p-8 text-[20px] rounded-new bg-white'>

        <p>Muzzammil Khatri</p>
        <Divider/>
        <p>Lyari, karachi</p>
        <Divider/>
        <p>+92 317 2839599</p>
  
        
        
        {/* <CartItems/> */}
      </div>

      <div className='absolute bottom-0 '>
       <Button buttonLink='./Checkout' buttonText='Confirm Address'/>
      </div>
    </div>
    </div>
    </SwipeAnimation>
  );
};

export default Cart;
