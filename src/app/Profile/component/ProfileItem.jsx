import Link from 'next/link'
import React from 'react'
import {RiArrowRightSLine} from 'react-icons/ri'

export default function ProfileItem(props) {
  return (
    <div className='h-[50px] w-[100%] shadow-md'>
        <Link href={props.Link}>
            <div className='h-[50px] w-[100%] rounded-lg my-5 bg-white flex items-center justify-between px-4 font-dongle text-[17px]'>
                <div>
                    {props.Text}
                </div>

                <div>
                    <Link href={props.Link} className='h-[auto] w-[auto]'>
                        <RiArrowRightSLine size={props.Size} style={props.Style}/>
                    </Link>
                </div>

            </div>
        </Link>
    </div>
  )
}
