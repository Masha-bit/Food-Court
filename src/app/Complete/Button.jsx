import Link from 'next/link'
import React from 'react'

export default function Button(props) {
    return (
        <div>
            <Link href={props.buttonLink}>
                <div className='max-h-[70px] w-[150px] max-w-[314px] bg-white border-[#e7ad19] border-2 hover:bg-[#e7ad19] my-4 mx-auto rounded-full p-5 flex items-center text-[#FFC83A] hover:text-black text-[17px] transition-all'>
                    <div className='my-0 mx-auto font-dongle'>
                        {props.buttonText}
                    </div>            
                </div>
            </Link>
        </div>
    )
}
