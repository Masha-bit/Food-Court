import React from 'react'
import Button from 'react-icons/app/Button'

const bttn = "Login"
const bttnLink = "./Animation"

export default function Login() {
  return (
    <div className='mt-[5rem] mx-auto h-[50%] w-[80%] font-dongle'>
        <div>
        <label htmlFor="login_email" className=' text-gray-500 text-[25px]'>Email address</label>
        <input type="email" name="login_email" id="login_email" className='block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none' required/>
        </div>

        
        <div className='mt-[4rem]'>
        <label htmlFor="login_password" className=' text-gray-500 text-[25px]'>Password</label>
        <input type="password" name="login_password" id="login_password" className='text-[20px] block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none' required/>
        </div>
        <div className='text-[18px] text-[rgb(255,0,0)] font-bold mt-9 underline underline-[rgb(255,0,0)]'>Forgot passcode?</div>
        
        <div className='mt-[5rem]'>
        <Button buttonText={bttn} buttonLink={bttnLink}/>
        </div>
    </div>
  )
}
