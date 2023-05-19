import React from 'react'
import Divider from './Divider'

export default function Optiongroup(props) {
  return (
    <form className='h-[auto] w-[100%] flex flex-col my-3 p-8 text-[20px] rounded-new bg-white' id='a'>

        <div className='w-[100%] flex flex-row items-center mx-2 my-2'>
             <input type="radio" name="a" id="a"  className='mr-4 ' checked/> 
             
             <div className='w-[100%] flex flex-row items-center'>
             <span className={`mr-2 rounded-md ${props.ActiveIcon[0]? `bg-[#F47B0A]  h-[40px] w-[40px]`: `` }  flex items-center justify-center`}>{props.Icon[0]}</span>
             {props.Text[0]}
             </div>
        </div>
        <Divider/>
        <div className='w-[100%] flex flex-row items-center mx-2 my-2'>
             <input type="radio" name="a" id="a"  className='mr-4 '/> 
             

             <div className='w-[100%] flex flex-row items-center'>
             <span className={`mr-2 rounded-md ${props.ActiveIcon[1]? `bg-[#EB4796] h-[40px] w-[40px]`: ``}  flex items-center justify-center`}>{props.Icon[1]}</span>
             {props.Text[1]}
             </div>
        </div>
        
        {props.ActiveIcon[2]? (
            <div>
            <Divider/>
             <div className='w-[100%] flex flex-row items-center mx-2 my-2'>
             <input type="radio" name="a" id="a"  className='mr-4 '/> 
             
             <div className='w-[100%] flex flex-row items-center'>
             <span className={`mr-2  rounded-md ${props.ActiveIcon[2]? `bg-[#FFC83A] h-[40px] w-[40px]`: ``}   flex items-center justify-center`}>{props.Icon[2]}</span>
             {props.Text[2]}
             </div>
        </div>
        </div>
        ): null}
  
        
        
        {/* <CartItems/> */}
      </form>
  )
}
