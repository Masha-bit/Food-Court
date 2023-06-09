"use client"

import React, { useEffect, useState } from 'react'
import Nav from './component/Nav';
import Image from 'next/image'
import reviewpng from '/public/asset/review.png'
import Button from '../Button';
import CurrentTime from './component/CurrentTime';
// import SwipeAnimation from '../SwipeAnimation';

export default function Review() {

    
const [review, setReview] = useState([])

useEffect(()=>{
  const reviewdatabaseFromLocalStorage =
    typeof window !== "undefined"?
    JSON.parse(
    localStorage.getItem('Review') ||
    `[{}]`
    )
    :null
    console.log(reviewdatabaseFromLocalStorage)


    reviewdatabaseFromLocalStorage? setReview(reviewdatabaseFromLocalStorage): null
},[])

  return (
    // <SwipeAnimation>
    <div className='h-[100vh] w-[100vw] relative '>
        <div className='h-[100%] w-[100%] p-2 flex flex-col items-center bg-slate-200'>
        <Nav/>   

        {review != ''? (
            <div className='font-dongle text-[20px] h-[150px] w-[90%] p-2 bg-slate-100 rounded-lg'>
                <p className='text-slate-400 text'>review:</p>
                
                <i>{`" ${review} "`}</i>
            </div>
        ):        
            <div className='h-[80%] w-[100%] bg-slate-200 flex flex-col items-center justify-center'>
                <div className='h-[150px] w-[150px] bg-transparent'>
                    <Image src={reviewpng} alt='review.png' height={150} className='' />
                </div>
                <p className='my-4 font-dongle text-[28px]'>
                    No Reviews yet
                </p>
            </div>
}

            <div className='h-[10%] w-[100%] bg-transparent flex items-center justify-center absolute bottom-0 left-0'>
                <Button buttonText={'Start Ordering'} buttonLink={'./Menu'} />
            </div>
        </div>
    </div>
    // </SwipeAnimation>
  )
}
