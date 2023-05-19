"use client"

import React, { useLayoutEffect, useRef } from 'react'
import Login from './Login/page'
import SwipeAnimation from '../SwipeAnimation'


export default function Register() {
  return (
    <SwipeAnimation>
    <div className='h-auto overflow-y-hidden' >
      <div>
      <Login/>
      </div>
    </div>
    </SwipeAnimation>
  )
}
