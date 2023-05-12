import Link from 'next/link'
import React from 'react'

export default function ProfileLinkItem(props) {
  return (
    <div className='h-[100%] w-[100%] my-6 flex flex-row items-center  font-dongle'>
      <Link href={props.Link} className='h-[auto] w-[100%] flex'>
        <div className='h-[50px] w-[50px] flex items-center justify-center'>
            {props.Icon}
        </div>
        <p className='h-[50px] w-[auto] text-[20px] flex items-center justify-center ml-2'>
            {props.Text}
        </p>
        </Link>
    </div>
  )
}
