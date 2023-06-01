"use client"
import React, { useEffect, useState } from 'react'
import Button from 'react-icons/app/Button'

const bttn = "Signup"
const bttnLink = "./Register/Login"


export default function Signup(){
  // const databaseFromLocalStorage =
  // useEffect(() => {
  //   if(window !== undefined){
  //     JSON.parse(
  //       localStorage.getItem('User Details') ||
  //         `[
  //           {
  //             "name" : "Christopher",
  //             "lastname" : "Masha",
  //             "email" : "mashachristopherjr@gmail.com",
  //             "password" :"ADMIN"
  //           }]
  //       `
  //           )
  //   }})

  // const [name, setName] = useState('')
  // setName()

  const [database, setDatabase] = useState(
  
    {
      name : 'Christopher',
      lastname: 'Masha',
      email : 'mashachristopherjr@gmail.com',
      password:'ADMIN'
    },
    // databaseFromLocalStorage
  
  
  // databaseFromLocalStorage
  
  )

const [users, setUsers] = useState({
      name : '',
      lastname : '',
      email : '',
      password:''
})




  function handleNameChange(e){
    e.target.value!=''?
    setUsers({
      ...users,
      name: e.target.value 
    }):
    console.log(users)
    // a = e.target.value
    // setUsersData({name: e.target.value})
  }
  function handleLastNameChange(e){
    e.target.value!=''?
    setUsers({
      ...users,
      lastname: e.target.value 
    }):
    console.log(users)
    // b = e.target.value
    // setUsersData({email: e.target.value})
  }
  function handleEmailChange(e){
    e.target.value!=''?
    setUsers({
      ...users,
      email: e.target.value 
    }):
    console.log(users)
    // b = e.target.value
    // setUsersData({email: e.target.value})
  }
  function handlePasswordChange(e){
    e.target.value!=''?
    setUsers({
      ...users,
      password: e.target.value 
    }):
    // c = e.target.value
    // setUsersData({password: e.target.value})
    console.log(users)
  //   fync_setUsersData()
  // }
  // function fync_setUsersData(a,b,c){
  //   setUsersData([{
  //     name : a,
  //     email : b,
  //     password:c,
  //   }])
  //   console.log(users)
  // }
  }

  function submitToDatabase(){
    // localStorage.clear()
    users.name != '' && 
    users.lastname != '' &&
    users.email != '' &&
    users.password != ''?
    window.alert(`You can now Login ${users.name}`) &&
    setDatabase([
      ...database,
      users
    ]) :
    console.log(database)
    // window.location.reload()
  }

  
 


  // function handleChange(e){
  //   setName(e.target.value)
  // }
//   useEffect(() => {
//     if(window !== undefined){
//     localStorage.setItem('Cart', JSON.stringify(database))          
// ,[database]
//     }})
  

  return (
    <form className='mt-[5rem] mx-auto h-[50%] w-[80%] font-dongle overflow-y-auto scrollbar-hide '>
      <div>
        <label htmlFor="fname" className='text-[16px] text-gray-500'>First Name</label>
        <input type="text" name="fname" id="fname" className='block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none'  onChange={handleNameChange} required />
      </div>
      <div className='mt-[3rem]'>
        <label htmlFor="l" className='text-[16px] text-gray-500'>Last Name</label>
        <input type="text" name="lname" id="lname" className='block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none' onChange={handleLastNameChange} required/>
      </div>
      <div className='mt-[3rem]'>
        <label htmlFor="signup_email" className='text-[16px] text-gray-500'>Email Address</label>
        <input type="email" name="signup_email" id="signup_email" className='block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none' onChange={handleEmailChange} required/>
      </div>
      <div className='mt-[3rem]'>
        <label htmlFor="pass" className='text-[16px] text-gray-500'>Passcode</label>
        <input type="password" name="pass" id="pass" className='block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none' onChange={handlePasswordChange} required/>
      </div>
      {/* <div className='mt-[3rem]'>
        <label htmlFor="cpass" className='text-[25px] text-gray-500'>Confirm Passcode</label>
        <input type="password" name="cpass" id="cpass" className='block w-[100%] h-[40px] border-b-2 bg-transparent border-black px-2 outline-none' required/>
      </div> */}
      <div className='mt-[3rem]'>
        <input type="checkbox" name="tandc" id="tandc" className='w-[auto] h-[auto] border-b-2 bg-transparent border-black px-2 outline-none' required /><label htmlFor="tandc" className='text-[11px] text-gray-500 ml-3'>I agree to all the Terms and Conditions.</label>
      </div>
      
      <div className='mt-[5rem]'>
        <Button buttonText={bttn} buttonLink={bttnLink}/>
      </div>
    </form>
  )
}
