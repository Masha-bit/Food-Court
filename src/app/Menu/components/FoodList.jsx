import React from 'react'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import Image from 'next/image'


// async function fetchAPI() {
//   const response = await fetch("https://raw.githubusercontent.com/Masha-bit/AppTechFoodCourt/main/src/app/Home/components/foodDetails.json")
//   const rep = await response.json()
//   // console.log(data)
//   return rep

// }

// const FoodList = async() => {
// const foodDescription = await fetchAPI()
// console.log(foodDescription)

  
// const foodplates = foodDescription.map((foodplate) =>(
//   <div key={(`${foodplate.id}-${nanoid()}`)}  className='h-[340px] w-[200px] flex items-center justify-center'>
//     <Link href={'/Register/Login'}>
//   <div className='bg-white h-[240px] w-[190px] mx-6 flex flex-col items-center rounded-new font-dongle bg-red-400'>
          
//           <div className='relative h-[140px] w-[140px] bg-gray-200 rounded-full -top-10 flex items-center justify-center'>
//             <Image src={(`https://github.com/Masha-bit/AppTechFoodCourt/main${foodplate.url}`)} alt='african-national-food' height={240} width={210}/>
//           </div>
          

//           <div className='flex flex-col items-center justify-center h-[100px] w-[90%] -top-5 relative'>
              
//               <p className=' text-2xl leading-[22px] font-semibold w-[90%] h-[50px] flex items-center justify-center text-center'>{foodplate.name}</p>

//               <p className='text-[20px] text-[#FFC83A]'><span className='text-[15px] mx-2 text-black'>₦</span>{foodplate.price}</p>
//           </div>

        
//       </div>  
//       </Link>
//       </div>
// ))


//   return (
//     <div className='h-[100vh]'>
//     <div className='bg-gray-300 h-[80%] w-[100%] rounded-tr-new rounded-tl-new flex flex-col items-center'>
//         <h1>...</h1>

//         <div className='overflow-y-auto overflow-x-hidden w-[100%] h-[100%]  flex flex-row justify-around flex-wrap'>
//             {foodplates}
//         </div>

//     </div>
//     </div>
//   )
// }
// export default FoodList
