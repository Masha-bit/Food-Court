import React from 'react'
import BackArrow from './component/BackArrow'

export default function page() {
  return (
    <div className='h-[100vh] w-[100vw]'>
        <div className='h-[100%] w-[100%] flex items-center p-2 flex-col relative bg-slate-100'>
            <div className='h-[70px] w-[100%] my-10 flex items-center'>
            <BackArrow Size={30} Style={{ color: 'black' }}/>        
            </div>
            
            <div className='h-[60px] w-[90%] bg-transparent font-dongle text-[28px] flex items-center'>
                <h1>My offers</h1>
            </div>

            <div className='h-[600px] w-[90%] my-5 flex items-center justify-center flex-col'>
                <p className='font-dongle text-[23px]'>ohh snap! No Offers yet</p>
                <p className='font-dongle text-[15px] text-center text-gray-400'>Apptech doesn't have any offers yet, please check again</p>
            </div>

        </div>
    </div>
  )
}
