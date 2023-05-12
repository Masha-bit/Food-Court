"use client"

import React from 'react'
import BackArrow from './component/BackArrow'
import ProfileItem from './component/ProfileItem'

export default function Profile() {
  return (
    <div className='h-[100vh] w-[100vw]'>
        <div className='h-[100%] w-[100%] flex items-center p-2 flex-col relative bg-slate-100'>
            <div className='h-[70px] w-[100%] my-10 flex items-center'>
            <BackArrow Size={30} Style={{ color: 'black' }}/>         
            </div>
            
            <div className='h-[60px] w-[90%] bg-transparent font-dongle text-[28px] flex items-center'>
                <h1>My Profile</h1>
            </div>

            <div className='h-[30px] w-[90%] bg-transparent font-dongle flex items-center justify-between my-2'>
                <p>Personal details</p>
                <p>change/</p>
            </div>

            <div className='h-[200px] w-[100%] bg-white rounded-new m-4 shadow-lg flex items-center justify-around'>
                
                {/* profile image */}
                <div className='h-[90px] w-[90px] bg-slate-500 rounded-full'>

                </div>

                {/* profile text */}
                <div className='h-[90%] w-[200px] bg-transparent flex flex-col items-start font-dongle text-[20px]'>
                    <div className='m-2'>Masha Christopher</div>

                    <div className='text-slate-400 text-[16px]'>
                    <div className='m-2 border-b-2'>masha@example.com</div>
                    <div className='m-2 border-b-2'>{
                        `090 443 14428`
                        }
                    </div>
                    <div className='m-2 border-b-2'>Lyari, Karachi</div>
                    </div>
                </div>
            </div>

            <div className='w-[100%]'>
                <ProfileItem Text={'Orders'} Link={'./Cart'} Size={30} Style={{ color: 'black' }} />

                <ProfileItem Text={'Pending reviews'} Link={'./Review'} Size={30} Style={{ color: 'black' }} />

                <ProfileItem Text={'Faq'} Link={'./Cart'} Size={30} Style={{ color: 'black' }} />

                <ProfileItem Text={'Help'} Link={'./Cart'} Size={30} Style={{ color: 'black' }} />
            </div>
        </div>
    </div>
  )
}
