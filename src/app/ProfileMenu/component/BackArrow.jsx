'use client';

// import { useRouter } from 'next/navigation'
import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'

const BackArrow = (props) => {

    // const router = useRouter()
  return (
    <div>
       <button type="button">
       <IoIosArrowBack onClick={props.Click} size={props.Size} style={props.Style}/>
        </button> 
    </div>
  )
}
export default BackArrow
