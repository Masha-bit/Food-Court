"use client"

import React, { useEffect, useState } from 'react'
import BackArrow from './component/BackArrow'
import ProfileItem from './component/ProfileItem'
import SwipeAnimation from '../SwipeAnimation'

export default function Profile() {
    // const databaseFromLocalStorage = JSON.parse(localStorage.getItem('User details') || '[]')
    // console.log(databaseFromLocalStorage)

    const [active, setActive] = useState(false)

    const onHandleChange = ()=>{
      setActive(!active)
    }

const [user, setUser]= useState()
const [address, setAddress] = useState()

useEffect(()=>{
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
    
    userdatabaseFromLocalStorage != []? setUser(userdatabaseFromLocalStorage): null
    addressdatabaseFromLocalStorage != []? setAddress(addressdatabaseFromLocalStorage): null
    console.log(user)
},[])
  
    const [name, setName] = useState(user)
    console.log(name)
    
    function text(e){
      setName(e)
      console.log(name)
    }
    function atext(e){
        setAddress(e)
        console.log(address)
      }
  
    function handleSubmitName(){
        onHandleChange()
          if(window !== 'undefined'){
          localStorage.setItem('User', JSON.stringify([name]))         
      ,[]  }
    }


  return (
    // <SwipeAnimation>
    <div className='h-[100vh] w-[100vw]'>
        <div className='h-[100%] w-[100%] flex items-center p-2 flex-col relative bg-slate-100'>
            <div className='h-[70px] w-[100%] my-10 flex items-center'>
            <BackArrow Size={30} Style={{ color: 'black' }}/>         
            </div>
            
            <div className='h-[60px] w-[90%] bg-transparent font-dongle text-[28px] flex items-center'>
                <h1>My Profile</h1>
            </div>

            <div className='h-[30px] w-[90%] bg-transparent font-dongle flex items-center justify-between my-2'>
                <p>Personal details</p>
                <p onClick={handleSubmitName} className={active? `text-gray-500`: `text-black`}>change/</p>
            </div>

        <div className='h-[200px] w-[100%] bg-white rounded-new m-4 shadow-lg flex items-center justify-around'>

        <div className='h-[100px] w-[100px] bg-slate-600 rounded-full m-4 shadow-lg flex items-center justify-around'>
        </div>
        
        {active? 
        (
        <div className='h-[90%] w-[60%] bg-transparent flex flex-col items-start font-dongle text-[20px]'>
            <input className='m-2 outline-none border-none w-[100%]' placeholder={name != undefined ? name :'Masha Christopher'} type='text' onChange={(e)=> text(e.target.value)}/>
             {/* <div className='m-2'>Masha Christopher</div> */}
 
             <div className='text-slate-400 text-[16px]'>
                <input type='text' className='m-2 border-b-2' placeholder='masha@example.com'/>
             {/* <div className='m-2 border-b-2'>masha@example.com</div> */}
             <div className='m-2 border-b-2'>{
                 `090 443 14428`
                 }
             </div>
             <div className='m-2 border-b-2'>{address != undefined ? address :'Lyari, Karachi'}</div>
             </div>
        </div>
        ):
        (
        <div className='h-[90%] w-[60%] bg-transparent flex flex-col items-start font-dongle text-[20px]'>
            <div className='m-2'>{name != undefined ? name :'Masha Christopher'}</div>

            <div className='text-slate-400 text-[16px]'>
            <div className='m-2 border-b-2'>masha@example.com</div>
            <div className='m-2 border-b-2'>{
                `090 443 14428`
                }
            </div>
            <div className='m-2 border-b-2'>{address != undefined ? address :'Lyari, Karachi'}</div>
            </div>
        </div>
        )
        }
        </div>

            <div className='w-[100%]'>
                <ProfileItem Text={'Orders'} Link={'./Cart'} Size={30} Style={{ color: 'black' }} />

                <ProfileItem Text={'Pending reviews'} Link={'./Review'} Size={30} Style={{ color: 'black' }} />

                <ProfileItem Text={'Faq'} Link={'./Cart'} Size={30} Style={{ color: 'black' }} />

                <ProfileItem Text={'Help'} Link={'./Cart'} Size={30} Style={{ color: 'black' }} />
            </div>
        </div>
    </div>
    // {/* </SwipeAnimation> */}
  )
}
