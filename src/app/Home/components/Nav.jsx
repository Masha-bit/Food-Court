import React from 'react'
import NavItems from './NavItems'

export default function Nav() {
  return (
    <div className='w-[100%]'>
        <div className='h-[50px] w-[100%] bg-white rounded-new flex flex-row items-center justify-between px-7 font-dongle text-[20px] bg-opacity-10 '>
            <NavItems itemName={'Food'}/>
            <NavItems itemName={'Drinks'}/>
            <NavItems itemName={'Snacks'}/>
            <NavItems itemName={'Sauce'}/>
        </div>
    </div>
  )
}
