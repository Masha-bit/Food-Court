"use client";

import Link from 'next/link';
import React, {useState} from 'react'
import Register from 'react-icons/app/Register/page';
import {FiSearch} from 'react-icons/fi'


const Search = () => {

  const [searchInput, setSearchInput] = useState('');

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
       console.log(searchValue) 
  }


  return (
    <div>
    <div className='h-[70px] w-[100%] max-w-[300px] bg-white rounded-new flex flex-row items-center px-7 font-dongle text-[20px]'>
      <span className='w-8'><FiSearch size={30} style={{color: 'gray'}} /></span>
      <Link href={'./Menu'} className='h-[100%] '>
      <input type="text" name="" id=""   placeholder='Search' className='w-[90%] h-[100%] p-7 placeholder:text-gray-400 outline-none' onChange={(e) => searchItems(e.target.value)}/>
      </Link>
    </div>
  </div>
  )
}

export default Search
