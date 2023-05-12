import React from 'react'
import {FiWifiOff} from 'react-icons/fi'
import Button from '../Button'

export default function NoInternet() {
  return (
    <div className='h-[100vh] w-[100vw]'>
        <div className='h-[100%] w-[100%] p-2 flex flex-row items-center bg-slate-200'>
            <div className='h-[70%] w-[100%] flex flex-col items-center justify-center'>
                <FiWifiOff size={200} style={{color
                :'rgb(156 163 175)'}}/>
                <p className='text-[26px] font-dongle my-2' >No Internet Connection</p>
                <p className='text-[18px] font-dongle text-gray-400 text-center'>
                Your internet connection is currently
                not available please check or try again.
                </p>

                <div className='my-6' onClick={()=> window.location.reload
        }>
                    <Button buttonText={'Try Again'} buttonLink={'./NoInternet'}/>
                </div>
            </div>
        </div>
    </div>
  )
}
