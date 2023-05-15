"use client"

import React, { useEffect } from 'react'
import Button from 'react-icons/app/Button'

const bttn = "Login"
const bttnLink = "./Animation"


// const databaseFromLocalStorage = JSON.parse(localStorage.getItem('User Details') || 
// `[
//   {
//     "name" : "Christopher",
//     "lastname" : "Masha",
//     "email" : "mashachristopherjr@gmail.com",
//     "password" :"ADMIN"
//   }]
// `)
export default function Login() {

  
  
  // function validateForm(useremail, userpassword) {
  //   console.log(`this is the local storage`)
  //   console.log(databaseFromLocalStorage)
  //   // function validateUserPassword(){
      
  //   //   console.log('password is in storage')
  //   // }
  // }


  // var a
  // function validateUserEmail(e){
  //   e.target.value != ''? a = e.target.value: null
    
  //   // if(e.target.value != '' ){
  //   //    const foundedUser = databaseFromLocalStorage.filter((user) => (Object(user.email) == (e.target.value) ))      
  //   //     console.log('email is in storage')
  //   //     console.log(foundedUser) 
  //   //     return true
  //   //   }
  //   // false
  // }

  // var b
  // function validateUserPassword(e){
  //   e.target.value != ''? b = e.target.value: null
    
  //   // if(e.target.value != '' ){
  //   //    const foundedPassword = databaseFromLocalStorage.filter((user) => (Object(user.password) == (e.target.value) ))      
  //   //     console.log('password is in storage')
  //   //     console.log(foundedPassword) 
  //   //     return true
  //   //   }
  //   // false
  // }

  // function validate(){
  //   const foundedUser = databaseFromLocalStorage.filter((user) => (Object(user.email) == (a)) && (Object(user.password) == (b) ))
  //   console.log('user found')
  //   console.log(foundedUser)
  // }

  


  // useEffect(() => { 
  //   validateForm()
  // }, [])
  
  // validateForm()



  return (
    <div className='mt-[5rem] mx-auto h-[50%] w-[80%] font-dongle'>
          <form>
        <div>
        <label htmlFor="login_email" className=' text-gray-500 text-[25px]'>Email address</label>
        <input type="email" name="login_email" id="login_email" className='block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none'required/>
        </div>

        
        <div className='mt-[4rem]'>
        <label htmlFor="login_password" className=' text-gray-500 text-[25px]'>Password</label>
        <input type="password" name="login_password" id="login_password" className='text-[20px] block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none' required/>
        </div>
        <div className='text-[18px] text-[rgb(255,0,0)] font-bold mt-9 underline underline-[rgb(255,0,0)]'>Forgot passcode?</div>
        

        
        <button className='mt-[5rem]' type='submit'>
        <Button buttonText={bttn} buttonLink={bttnLink}/>
        </button>
          </form>
    </div>
  )
}
