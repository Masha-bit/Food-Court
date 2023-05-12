import React from 'react'
import BackArrow from './BackArrow'
import LikeButton from './LikeButton'


export default function Nav() {
  return (
    <div className='h-[10%] w-[100%] flex items-center justify-center'>
        <div className='w-[90%] h-[70px]  flex items-center justify-between'>
        <BackArrow Size={30} Style={{color: 'gray'}}/>    
        <LikeButton Size={30} Style={{color: 'gray'}}/>    
        </div>
    </div>
  )
}


export function navy() {
  return (
    <div className='bg-white'>Navy</div>
  )
}

