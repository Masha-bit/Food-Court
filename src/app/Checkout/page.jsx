'use client';

import React, { useEffect, useRef } from 'react'
import Nav from './component/Nav';
import { gsap } from 'gsap';
// import { ReactDOM } from 'react';
import Button from '../Button';
import SwipeAnimation from '../SwipeAnimation';
import Divider from './component/Divider';
import {BsFillCreditCard2FrontFill} from 'react-icons/bs'
import {AiFillBank} from 'react-icons/ai'
import {GiMoneyStack} from 'react-icons/gi'
import Optiongroup from './component/Optiongroup';


const Checkout = () => {
  const orderdatabaseFromLocalStorage =
 useEffect(()=>{
    typeof window !== undefined?
    JSON.parse(
    localStorage.getItem('Order') ||
    `[]`
    ):null
})

  return (
    <SwipeAnimation>
    <div className='h-[100vh] w-[100%] bg-[#F5F5F8] overflow-y-auto'>
    <div className="p-2 flex flex-col items-center font-dongle">
      <Nav />

      <div className='my-4 w-[80%] text-[34px]'>
        Payment
      </div>

      <div className="h-[70px] w-[80%] flex items-center justify-between font-dongle">
        <p>Payment method</p>
        <p>/change</p>
      </div>

      <div className='h-[auto] w-[100%] mt-2'>
        <Optiongroup ActiveIcon={[true,true,true]} Icon={[<BsFillCreditCard2FrontFill fill='white'/>, <AiFillBank fill='white'/>, <GiMoneyStack fill='white'/>]} Text={['Card', 'Bank', 'Cash on delivery']}/>
      </div>

      <div className='h-[auto] w-[100%] mx-4 flex flex-col items-center'>
        <p className='w-[80%] py-3 font-dongle text-[17px]'>Delivery method</p>
        <Optiongroup ActiveIcon={[false,false, false]} Icon={[]} Text={['Door delivery', 'Pick up']}/>
      </div>

      <div className="h-[70px] w-[80%] flex items-center justify-between font-dongle my-3">
        <p>Total</p>
        <p>₦: {orderdatabaseFromLocalStorage}</p>
      </div>

      <div className='absolute bottom-0'>
       <Button buttonLink='./Payment' buttonText='Proceed to payment'/>
      </div>
    </div>
    </div>
    </SwipeAnimation>
  );
};

export default Checkout;
