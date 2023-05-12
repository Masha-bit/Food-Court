import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { nanoid } from 'nanoid'
import foodDes from 'react-icons/app/Menu/components/foodDes'

export default function FoodPlate({ data }) {
 
  const foodplates = foodDes.foodPlates.map((foodplate) =>(
    <div key={foodplate.name}  className='h-[300px] w-[450px] flex items-center '>
      <Link href={`/ProductDetail/${foodplate.slug}`}>
    <div className='bg-white h-[260px] w-[230px] mx-6 flex flex-col items-center rounded-new font-dongle '>
            
            <div className='relative h-[140px] w-[140px] bg-gray-200 rounded-full -top-10 flex items-center justify-center'>
              <Image src={foodplate.url} alt='african-national-food' height={240} width={210}/>
            </div>
            

            <div className='flex flex-col items-center justify-center h-[100px] w-[90%] -top-5 relative'>
                
                <p className=' text-2xl leading-[22px] font-semibold w-[90%] h-[50px] flex items-center justify-center text-center'>{foodplate.name}</p>

                <p className='text-[20px] text-[#FFC83A] mt-2'><span className='text-[15px] mx-3 text-black'>₦</span>{foodplate.price}</p>
            </div>

          
        </div>  
        </Link>
        </div>
  ))



  
  return (
    <div className=' h-[100%] w-[auto] overflow-y-auto flex flex-row items-center justify-between'>
        {foodplates}
    </div>
  )
}
// export default FoodPlate

