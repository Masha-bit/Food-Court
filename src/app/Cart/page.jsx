'use client';

import React, { useEffect, useLayoutEffect} from 'react'
import Nav from './component/Nav';
import SwipeInstruction from './component/SwipeInstruction';
import SwipeAnimation from '../SwipeAnimation';
import CartItems from './component/CartItems';
import { gsap } from 'gsap';
import { ReactDOM } from 'react';
import Button from '../Button';
// swipe animation
const Cart = () => {
 
  // // useEffect(() => {
  //   typeof window !== 'undefined'?
  //     (document.referrer !== window.location.href)?
  //     console.log('working') &
  //       setTimeout(
  //         function(){
  //         window.location.reload() 
  //         window.alert(`item added to cart!`)}, 100
  //     ):null:null
  //         // })
    
  return (
    // <SwipeAnimation>
    <div className="h-[100vh] p-2 flex flex-col items-center bg-slate-50">
      <Nav />
      <div className="h-[70px] w-[70%]  my-4 flex items-center justify-center">
        <SwipeInstruction />
      </div>

      <div className='h-[auto] w-[100%] flex items-center justify-around my-3'>
        
        
        <CartItems/>
      </div>

      <div className='absolute bottom-0 '>
       <Button buttonLink='./Address' buttonText='Start Ordering'/>
      </div>
    </div>
    // </SwipeAnimation>
  );
};

export default Cart;
