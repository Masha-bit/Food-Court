import React from 'react'
import logo from '/public/asset/logo.png'
import boy from '/public/asset/boy_home.png'
import burger from '/public/asset/burger_home.png'
import pizza from '/public/asset/pizza_home.png'
import Image from 'next/image'
import Button from './Button'


export default function Splash() {
  return (

    
    <div id="main" className='h-screen w-screen bg-[#FFC83A] flex items-center justify-center'>
      
      {/* <div id='desktop' className='mx-auto p-8 relative top-[20%] h-[500px] w-[90%] flex flex-col items-center bg-slate-600 sm:hidden'>
         <div>ICON</div>
         <h1 className='mt-12 font-bold'> Porting Error </h1>
          <p className='mt-6'>There is a problem viewing this page. Please switch to Mobile view</p>
      </div> */}

      <div id='mobile' className='md:hidden h-[90%] w-[90%] bg-[#00000000] flex flex-col p-2 font-dongle'>
        <div className='w-[100%] mt-8'>
        <Image src={logo} alt='aptech_logo' className='relative ml-[8%]'/>
        </div>
        <h1 className='text-white text-[60px] w-[90%] max-w-[400px] ml-[8%] mt-9 leading-[65px] '>Food for <br /> Everyone</h1>
        <div id='img_block' className='relative flex flex-row items-center justify-center h-[500px] w-auto mt-[2rem] my-auto'>
          <aside className='flex flex-col items-center justify-center'>
            <div className='h-[50%] w-[auto]'>
              <Image src={pizza} alt='pizza.png' height={150} className=''/>
            </div>
            <div className='h-[50%] w-[auto]'>
              <Image src={burger} alt='burger.png' height={150} className=''/>
            </div>
          </aside>

          <aside className='h-[auto] w-[auto]'>
            <Image src={boy} alt='boy.png' height={650}/>
          </aside>
          <div className='absolute -bottom-3 h-[150px] w-[100%] lin-grad'>
          </div>
        </div>
        <div className='mt-1 h-[200px] w-[100%]'>
        <Button buttonText={'Get Started'} buttonLink={"./Register"}/>
        </div>
      </div>
    </div>
  )
}
// 