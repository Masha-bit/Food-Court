// "use client"; // this is a client component

import React from 'react'
import navigator from 'react'
import {CgShoppingCart} from 'react-icons/cg'
import {RxHamburgerMenu} from 'react-icons/rx'
import Search from './components/Search'
import Nav from './components/Nav'
import FoodPlate from './components/FoodPlate'
import BottomNav from './components/BottomNav'
import Link from 'next/link'
import NoInternet from '../NoInternet/page'

export default function Home() {
    return navigator.onLine? (
        <div>
            <NoInternet/>
        </div>
    ):
  (
    <div className='h-screen w-screen flex justify-center items-center bg-gray-200 font-dongle'>
        <div className='h-[90%] w-[90%] bg-gray-200 flex flex-col items-center'>
            <div className='flex flex-row h-[60px] w-[90%] justify-between'>
                <div>
                    <Link href={'./ProfileMenu'}>
                    <RxHamburgerMenu size={30}/>
                    </Link>
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
  )
}
