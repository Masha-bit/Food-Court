"use client";

import React, { useLayoutEffect, useRef, useState } from 'react'
import Home from '../Home/page'
import ProfileMenu from '../ProfileMenu/page'
import {CgShoppingCart} from 'react-icons/cg'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BiUserCircle} from 'react-icons/bi'
import {MdAddShoppingCart} from 'react-icons/md'
import {BsTag} from 'react-icons/bs'
import {MdOutlineTextSnippet} from 'react-icons/md'
import {IoShieldHalf} from 'react-icons/io5'
import {BsArrowRight} from 'react-icons/bs'
import { gsap } from 'gsap'
import BottomNav from '../Home/components/BottomNav';
import FoodPlate from '../Home/components/FoodPlate';
import Nav from '../Home/components/Nav';
import Search from '../Home/components/Search';
import Link from 'next/link';
import ProfileLinkItem from '../ProfileMenu/component/ProfileLinkItem';
import BackArrow from '../ProfileMenu/component/BackArrow';

export default function page() {

    const comp = useRef(); // create a ref for the root level element (we'll use it later)
    const backArrow = useRef();
    const navBar = useRef();

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
  
    }); // <- empty dependency Array so it doesn't re-run on every render!

    
    const [clickState, setClickState] = useState(false)

    const isActive = () =>{
        setClickState(true);
        console.log(clickState)
    }
    const notActive = () =>{
        console.log(clickState)
        tl.reversed(tl.reverse());
        setClickState(false);
    }
    
  
   

   

  return (
    <div className='h-[100vh] w-[100vw] bg-green-200 relative'>
        <div className='h-auto w-auto'>
        <div className='h-screen w-screen flex justify-center items-center bg-gray-200 font-dongle'>
        <div className='h-[90%] w-[90%] bg-gray-200 flex flex-col items-center'>
            <div className='flex flex-row h-[60px] w-[90%] justify-between'>
                <div onClick={isActive}>
                   
                    <RxHamburgerMenu size={30}/>
                    
                    {/* {props.Hamburger} */}
                </div>
                <div>
                    <CgShoppingCart size={30} style={{color: 'gray'}}/>
                </div>
            </div>

            <div className='h-[100px] w-[90%] mt-8'>
            <h1 className='w-[auto] h-[auto] text-[40px] font-dongle leading-10'  >
                Delicious
                <br /> 
                food for you
            </h1>
            </div>

            <div className='w-[80%] mt-6'>
               <Search/>
               
            </div>

            <div className='w-[95%] mt-6'>
                <Nav/>
                
            </div>

            <div className='w-[90%] mt-2 text-right text-[18px]'>
                see more.
            </div>

            <div id='slider-wrapper' className='h-[100%] w-[100%] flex items-center'>
            <FoodPlate/>
            
            </div>
               
          
            

            <div className='w-[90%]' >
                <BottomNav/>
                
            </div>
        </div>
    </div>
        </div>

        <div className={`h-auto w-auto fixed top-0 left-0 z-10 ${clickState? null : 'hidden' }`} ref={navBar}>
        <div className='h-[100vh] w-[100vw]'>
        <div className='h-[100%] w-[100%] flex items-center p-2 flex-col relative bg-[#FFC83A]' ref={comp}>
            <div ref={backArrow} className='h-[70px] w-[100%] my-10 flex items-center bg-white'>
            <BackArrow Click={notActive} Size={30} Style={{ color: 'black' }}/>         
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
        </div>
    </div>
  )
}
