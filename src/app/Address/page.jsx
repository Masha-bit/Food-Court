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
  const [user, setUser] = useState('Muzzammil Khatri')
  
  function atext(e){
    setAddress(e)
    console.log(address)
  }
  
  function utext(e){
    setUser(e)
    console.log(user)
  }

  function handleSubmitAddress(){
    onHandleChange()
        if(window !== 'undefined'){
        localStorage.setItem('Address', JSON.stringify([address]))         
    ,[] &&
    localStorage.setItem('User', JSON.stringify([user]))         
    ,[]  
  }
  
    const userdatabaseFromLocalStorage =
    typeof window !== "undefined"?
    JSON.parse(
    localStorage.getItem('User') ||
    `[{}]`
    )
    :null
    console.log(userdatabaseFromLocalStorage)
  
    const addressdatabaseFromLocalStorage =
    typeof window !== "undefined"?
    JSON.parse(
    localStorage.getItem('Address') ||
    `[{}]`
    )
    :null
    
    userdatabaseFromLocalStorage != []? setName(userdatabaseFromLocalStorage): null
    addressdatabaseFromLocalStorage != []? setLocation(addressdatabaseFromLocalStorage): null
    console.log(user)
  }

  
    
    const userdatabaseFromLocalStorage =
    typeof window !== "undefined"?
    JSON.parse(
    localStorage.getItem('User') ||
    `"Muzzammil Khatri"`
    ) || 'Muzzammil Khatri'
    :null
    console.log(userdatabaseFromLocalStorage)

    const addressdatabaseFromLocalStorage =
    typeof window !== "undefined"?
    JSON.parse(
    localStorage.getItem('Address') ||
    `"Lyari, karachi"`
    )
    :null
    const [name, setName] = useState(userdatabaseFromLocalStorage)
    const [location, setLocation] = useState(addressdatabaseFromLocalStorage)

  



  return (
    // <SwipeAnimation>
    <div className='h-[100%] w-[100vw] bg-[#F5F5F8]'>
    <div className="p-2 flex flex-col items-center font-dongle">
      <Nav />

      <div className='my-6 w-[80%] text-[34px]'>
        Delivery
      </div>

      <div className="h-[70px] w-[80%]  my-4 flex items-center justify-between font-dongle">
        <p>Address details</p>
        <p onClick={handleSubmitAddress} className={active? 'text-slate-500': ''}>/change</p>
      </div>

      <div className='h-auto w-[100%]'>

        {active? (
          <div className='h-[auto] w-[100%] flex flex-col my-3 p-8 text-[20px] rounded-new bg-white'>
              <input type="text" onChange={(e)=> utext(e.target.value)} placeholder={name} className='outline-none border-none' />
              <Divider/>
              <input type="text" onChange={(e)=> atext(e.target.value)} placeholder={location} className='outline-none border-none' />
               <Divider/>
               <input type="text" placeholder='+92 317 2839599' className='outline-none border-none' />
          </div>
        ):
        (
          <div className='h-[auto] w-[100%] flex flex-col my-3 p-8 text-[20px] rounded-new bg-white'>
              <p>{name}</p>
              <Divider/>
              <p>{location}</p>
               <Divider/>
              <p>+92 317 2839599</p>
          </div>
        )
        }      
        
        {/* <CartItems/> */}
      </div>

      <div className='absolute bottom-0 '>
       <Button buttonLink='./Checkout' buttonText='Confirm Address'/>
      </div>
    </div>
    </div>
    // </SwipeAnimation>
  );
};

export default Address;
