
"use client";

import React, { useLayoutEffect, useRef } from 'react'
import BackArrow from './component/BackArrow'
import ProfileLinkItem from './component/ProfileLinkItem'
import {BiUserCircle} from 'react-icons/bi'
import {MdAddShoppingCart} from 'react-icons/md'
import {BsTag} from 'react-icons/bs'
import {MdOutlineTextSnippet} from 'react-icons/md'
import {IoShieldHalf} from 'react-icons/io5'
import {BsArrowRight} from 'react-icons/bs'
import Link from 'next/link'
import { gsap } from 'gsap'


const ProfileMenu = () => {

    const comp = useRef(); // create a ref for the root level element (we'll use it later)
    const backArrow = useRef();

    let tl = gsap.timeline()
    useLayoutEffect(() => {
  
    // -- ANIMATION CODE HERE --
    

    let ctx = gsap.context(() => {    

    tl.from(comp.current, 0.5, { left: -500, duration: 3,ease: "power1.inOut",});
    tl.from("ul > li", 0.8,{
        autoAlpha: 0,
        y: 100,
        ease: "power2.inOut",
        stagger: {amount : 0.3,},
    }, 
    "-=0.4")
    }, comp);
    
    
    
  
    return () => ctx.revert(); //cleanup
  
    }, []); // <- empty dependency Array so it doesn't re-run on every render!
    
    const r = () =>{
        tl.reversed(!tl.reversed()); 
    }
   


  return (
    <div className='h-[100vh] w-[100vw]'>
        <div className='h-[100%] w-[100%] flex items-center p-2 flex-col relative bg-[#FFC83A]' ref={comp}>
            <div ref={backArrow} className='h-[70px] w-[100%] my-10 flex items-center'>
            <BackArrow Click={r} Size={30} Style={{ color: 'black' }}/>         
            </div>

            <div className='h-[400px] w-[100%]  p-2'>
                <ul className='flex flex-col h-[100%] w-[100%]'>
                    <li className='h-[50px] w-[80%] my-2'>
                        <ProfileLinkItem Icon={<BiUserCircle color='black' size={30}/>}  Text={'Profile'} Link={'./Profile'}/>
                    </li>
                    <li></li>
                    <li className='h-[50px] w-[80%] my-2'>
                        <ProfileLinkItem Icon={<MdAddShoppingCart color='black' size={30}/>}  Text={'orders'} Link={'./Profile'}/>
                    </li>
                    <li></li>
                    <li className='h-[50px] w-[80%] my-2'>
                        <ProfileLinkItem Icon={<BsTag color='black' size={30}/>}  Text={'offers and promo'} Link={'./Profile'}/>
                    </li>
                    <li></li>
                    <li className='h-[50px] w-[80%] my-2'>
                        <ProfileLinkItem Icon={<MdOutlineTextSnippet color='black' size={30}/>}  Text={'privacy policy'} Link={'./Profile'}/>
                    </li>
                    <li></li>
                    <li className='h-[50px] w-[80%] my-2'>
                        <ProfileLinkItem Icon={<IoShieldHalf color='black' size={30}/>}  Text={'security'} Link={'./Profile'}/>
                    </li>
                   
                    <li className='h-[70px] w-[100%] mt-[10rem] flex items-center font-dongle text-[19px]'>
                        <Link href={'./Register/Signup'} className='flex items-center'>
                        <p>Sign-out</p>
                        <div className='h-[50px] w-[50px] flex items-center justify-center'>
                            <BsArrowRight color='black' size={30}/>
                        </div>
                        </Link>
                    </li>

          
            </ul>
            </div>
        </div>
    </div>
  )
}

export default ProfileMenu