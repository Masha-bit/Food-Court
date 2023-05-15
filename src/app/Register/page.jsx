"use client"

import React, { useLayoutEffect, useRef } from 'react'
import Login from './Login/page'
import Nav from './Nav'
import { gsap } from 'gsap';


export default function Register() {
    
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



  return (
    <div  className='h-[100%] w-[100%] relative' ref={component}>
      <Nav/>
    <div className='h-auto overflow-y-hidden' >
      <div>
      <Login/>
      </div>
    </div>
    </div>
  )
}
