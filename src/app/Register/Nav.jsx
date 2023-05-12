import React from 'react'
import logo from '/public/asset/logo.png'
import Image from 'next/image'
import Link from 'next/link'


export default function Nav() {
  return (
    <div className='h-[300px] w-[100%] font-dongle'>
        <div className='relative h-[100%] w-screen'>
            <div className='relative top-0 left-0 h-[100%] max-h-[340px] w-[100%] bg-white rounded-b-new shadow-lg shadow-slate-200'>
                <div className='flex items-center justify-center relative top-[4.5rem]'>
                <Image src={logo} alt='aptech_logo' className='relative ml-[8%]'/>
                </div>
                <div className='absolute bottom-0 left-0 h-[70px] w-[100%] rounded-b-new flex flex-row justify-center items-center'>
                    <Link href={"./Register/Login"} className='h-[100%] w-[50%]'>
                    <aside className='w-[100%] h-[100%] rounded-bl-new text-center flex items-center justify-center hover:bg-slate-100 transition-all active:text-red-400 text-[30px]'>
                        Login
                    </aside>
                    </Link>
                    <Link href={"./Register/Signup"} className='h-[100%] w-[50%]'>
                    <aside className='w-[100%] h-[100%] rounded-br-new text-center flex items-center justify-center hover:bg-slate-100 transition-all text-[30px]'>
                        Sign-up
                    </aside>
                    </Link>
                </div>
            </div>

            <div>

            </div>
        </div>
    </div>
  )
}
