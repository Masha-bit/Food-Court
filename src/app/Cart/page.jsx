'use client';

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Nav from './component/Nav';
import SwipeInstruction from './component/SwipeInstruction';
import CartItems from './component/CartItems';
import { gsap } from 'gsap';
import { ReactDOM } from 'react';
// import cartItems from './component/cart'

const Cart = () => {
    
  // creating slide in animation for pages 
  const component = useRef(); // create a ref for the root level element (we'll use it later)

  
  let tl = gsap.timeline()

  useLayoutEffect(() => {
  // -- ANIMATION CODE HERE --
  

  let ctx = gsap.context(() => {    

  tl.from(component.current, 0.8,
     { 
       right: -5000,
       duration: 4, 
       ease: "power1.inOut",
      }
        )
  // tl.from("Login", 0.8,{
  //     autoAlpha: 0,
  //     y: 100,
  //     ease: "power2.inOut",
  //     // stagger: {amount : 0.3,},
  // }, 
  // "-=0.4")
  }, component);
  
  
  

  return () => ctx.revert(); //cleanup

  },[]); // <- empty dependency Array so it doesn't re-run on every render!
  
  useLayoutEffect? console.log("working"): "not working"



  // const cart = cartItems()
  // window.alert(`Reload Cart page to save order!`)


  // useEffect(() => {
    typeof window !== 'undefined'?
      (document.referrer !== window.location.href)?
      console.log('working') &
        setTimeout(
          function(){
          window.location.reload() 
          window.alert(`item added to cart!`)}, 100
      ):null:null
          // })

    
  return (
    <div className="p-2 flex flex-col items-center bg-slate-50" ref={component}>
      <Nav />
      <div className="h-[70px] w-[70%]  my-4 flex items-center justify-center">
        <SwipeInstruction />
      </div>

      <div className='h-[auto] w-[100%] flex items-center justify-around my-3'>
        
        
        <CartItems/>
      </div>

      <div>
        {/* {
          items != ''
            ? items.map((item, index) => <div key={index}>{item}</div>)
            : null
          //  cartItems.map((cartItem) =>(
          //    <div>
          //       {cartItem}
          //     </div>
          //    )

          //    ): null
          //   }
        } */}
      </div>
    </div>
  );
};

export default Cart;
