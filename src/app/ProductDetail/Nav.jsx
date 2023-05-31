"use client"
import React, { useState } from 'react'
import BackArrow from './BackArrow'
import LikeButton from './LikeButton'
import {FiHeart} from 'react-icons/fi'


export default function Nav() {
  const [liked, setLiked] = useState(false)

  const handleClilck = () =>{
    setLiked(!liked)
  }
function Liked(){
    return (
        <div>
            <FiHeart size={30} style={{fill:'black'}}/>
        </div>
    )
}
function NotLiked(){
    return (
        <div>
            <FiHeart size={30} style={{color:'black'}}/>
        </div>
    )
}

  return (
    <div className='h-[10%] w-[100%] flex items-center justify-center bg-gray-100'>
        <div className='w-[90%] h-[70px]  flex items-center justify-between'>
        <BackArrow Size={30} Style={{color: 'gray'}}/>    
        <div onClick={handleClilck}>
          {liked? <Liked/>: <NotLiked/>}
        </div>

        </div>
    </div>
  )
}


// export function navy() {
//   return (
//     <div className='bg-white'>Navy</div>
//   )
// }

