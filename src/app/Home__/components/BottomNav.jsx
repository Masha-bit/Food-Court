import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {GrHistory} from 'react-icons/gr'
import BottomNavItems from './BottomNavItems'

export default function BottomNav() {

  let iconStyle = { fill: "yellow"}
  return (
    <div className='w-[100%]'>
        <div className='h-[50px] w-[100%] bg-white rounded-new flex flex-row items-center justify-around px-7'>
          
            <BottomNavItems itemIcon={<AiOutlineHome size={22} style={iconStyle} />} itemLink={'./Home'}/>
            <BottomNavItems itemIcon={<AiOutlineHeart size={22}/>} itemLink={'./Favorite'}/>
            <BottomNavItems itemIcon={<FiUser size={22}/>} itemLink={'./Profile'}/>
            <BottomNavItems itemIcon={<GrHistory size={22}/>} itemLink={'./Order'}/>
        </div>
    </div>
  )
}
