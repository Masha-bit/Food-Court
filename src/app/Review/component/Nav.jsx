import React from 'react'
import BackArrow from './BackArrow'

export default function Nav() {
  return (
    <div className='h-[10%] w-[100%] flex items-center justify-center'>
        <div className='h-[100%] w-[100%] bg-transparent flex items-center justify-around'>
            <span className='w-[20%] flex items-center justify-center '>
            <BackArrow Size={30} Style={{color: ''}}/>
            </span>
            <p className='font-semibold text-[20px] flex font-dongle w-[60%] justify-center'>            
                Reviews
            </p>
            <div className='w-[20%]'>

            </div>
        </div>
    </div>
  )
}
