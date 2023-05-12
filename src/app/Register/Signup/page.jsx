import React from 'react'
import Button from 'react-icons/app/Button'

const bttn = "Signup"
const bttnLink = "./Register/Login"

export default function Signup(){
  return (
    <div className='mt-[5rem] mx-auto h-[50%] w-[80%] font-dongle overflow-y-auto '>
      <div>
        <label htmlFor="fname" className='text-[25px] text-gray-500'>First Name</label>
        <input type="text" name="fname" id="fname" className='block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none' required />
      </div>
      <div className='mt-[3rem]'>
        <label htmlFor="l" className='text-[25px] text-gray-500'>Last Name</label>
        <input type="text" name="lname" id="lname" className='block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none' required/>
      </div>
      <div className='mt-[3rem]'>
        <label htmlFor="signup_email" className='text-[25px] text-gray-500'>Email Address</label>
        <input type="email" name="signup_email" id="signup_email" className='block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none' required/>
      </div>
      <div className='mt-[3rem]'>
        <label htmlFor="pass" className='text-[25px] text-gray-500'>Passcode</label>
        <input type="password" name="pass" id="pass" className='block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none' required/>
      </div>
      <div className='mt-[3rem]'>
        <label htmlFor="cpass" className='text-[25px] text-gray-500'>Confirm Passcode</label>
        <input type="password" name="cpass" id="cpass" className='block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none' required/>
      </div>
      <div className='mt-[3rem]'>
        <input type="checkbox" name="tandc" id="tandc" className='w-[auto] h-[auto] border-b-2 bg-transparent border-black px-2 outline-none' required /><label htmlFor="tandc" className='text-[15px] text-gray-500 ml-3'>I agree to all the Terms and Conditions.</label>
      </div>
      
      <div className='mt-[5rem]'>
        <Button buttonText={bttn} buttonLink={bttnLink}/>
        </div>
    </div>
  )
}
