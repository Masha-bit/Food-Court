import React from 'react'
import Nav from './component/Nav';
import Image from 'next/image'
import review from '/public/asset/review.png'
import Button from '../Button';

export default function Review() {
  return (
    <div className='h-[100vh] w-[100vw] '>
        <div className='h-[100%] w-[100%] p-2 flex flex-col items-center bg-slate-200'>
        <Nav/>            
            <div className='h-[80%] w-[100%] bg-slate-200 flex flex-col items-center justify-center'>
                <div className='h-[150px] w-[150px] bg-transparent'>
                    <Image src={review} alt='review.png' height={150} className='' />
                </div>
                <p className='my-4 font-dongle text-[28px]'>
                    No Reviews yet
                </p>
            </div>

            <div className='h-[10%] w-[100%] bg-transparent flex items-center justify-center'>
                <Button buttonText={'Start Ordering'} buttonLink={'./Menu'} />
            </div>
        </div>
    </div>
  )
}
