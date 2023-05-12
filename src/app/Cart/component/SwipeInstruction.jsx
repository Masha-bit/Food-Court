import React from 'react'
import {MdOutlineSwipeLeft} from 'react-icons/md'

export default function SwipeInstruction() {
  return (
    <div className=''>
        <div className='w-[100%] h-[100%] flex items-center font-dongle text-[15px] justify-center'>
            <span><MdOutlineSwipeLeft/></span> swipe on an item to delete
        </div>
    </div>
  )
}
