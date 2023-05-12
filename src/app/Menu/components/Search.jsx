'use client';

import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import FoodList from './FoodList';
import BackArrow from './BackArrow';
import foodDes from './foodDes';
// import {FiSearch} from 'react-icons/fi'

// created a function hat checks if our search input is empty

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    console.log(searchValue);

    if (searchInput !== '') {
      const filteredData = foodDes.foodPlates.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      console.log(filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(foodDes.foodPlates);
    }
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    console.log(product);
  };

  const foodplates = filteredResults.map((foodplate) => (
    <div
      key={foodplate.name}
      className="h-[340px] w-[180px] flex items-center justify-center"
      onClick={() => handleProductClick(foodplate.description)}
    >
      
      <Link href={`/ProductDetail/${foodplate.slug}`}>
        <div className="bg-white h-[250px] w-[180px] mx-6 flex flex-col items-center rounded-new font-dongle ">
          <div className="relative h-[140px] w-[140px] bg-gray-200 rounded-full -top-10 flex items-center justify-center">
            <Image
              src={foodplate.url}
              alt="african-national-food"
              height={240}
              width={210}
            />
          </div>

          <div className="flex flex-col items-center justify-around h-[100px] w-[90%] -top-5 relative ">
            <p className=" text-2xl leading-[22px] font-semibold w-[90%] h-[50px] flex items-center justify-center text-center">
              {foodplate.name}
            </p>

            <p className="text-[20px] text-[#FFC83A]">
              <span className="text-[15px] mx-2 text-black">₦</span>
              {foodplate.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="h-[100vh]">
      <div className="h-[20%] w-[100%] flex items-center justify-center">
        <div className="h-[70px] w-[100%] max-w-[400px] bg-white rounded-new flex flex-row items-center px-7 font-dongle text-[20px] mt-10">
          <span className="w-8 h-7">
            <BackArrow Size={30} Style={{ color: 'gray' }} />
          </span>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="w-[90%] h-[100%] p-7 placeholder:text-gray-400 outline-none"
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-gray-300 h-[80%] w-[100%] rounded-tr-new rounded-tl-new flex flex-col items-center">
        {searchInput.length > 1 ? (
          <h1 className="mt-4 font-dongle text-[25px]">
            {/* tenary operator to check against length of matching items */}
            {filteredResults.length == 1
              ? `Found ${filteredResults.length} result`
              : filteredResults.length == 0
              ? null
              : `Found ${filteredResults.length} results`}
          </h1>
        ) : null}

        <div
          className="overflow-y-auto overflow-x-hidden w-[100%] h-[100%]  flex flex-row justify-around flex-wrap"
          onClick={() => handleProductClick(foodplates.description)}
        >
          {/* created a tenarny condition statement to display btw "find your fav food div" and " foodplates array for the filetered food items"  */}

          {searchInput.length > 1 ? (
            filteredResults.length != 0 ? (
              foodplates
            ) : (
              <div className="my-[10rem] text-[20px] font-dongle text-gray-400 w-[50%] text-center">
                <div>
                  <FiSearch size={150} style={{ color: 'gray' }}/>
                </div>
                <p className='font-dongle text-[25px] text-black my-4
                '>Item not found</p>
                Oops we dont have that on our menu now
              </div>
            )
          ) : (
            <div className="my-[10rem] text-[25px] font-dongle text-gray-400 w-[50%] text-center ">
              Find Your Favorite food here
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

// <FoodList>
// { searchInput.length > 1?(
// const foodplates = filteredResults.map((foodplate) =>(
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
// ))) : (
// foodDescription.map((foodplate) =>(
//     <div key={(`${foodplate.id}-${nanoid()}`)}  className='h-[340px] w-[200px] flex items-center justify-center'>
//       <Link href={'/Register/Login'}>
//     <div className='bg-white h-[240px] w-[190px] mx-6 flex flex-col items-center rounded-new font-dongle bg-red-400'>

//             <div className='relative h-[140px] w-[140px] bg-gray-200 rounded-full -top-10 flex items-center justify-center'>
//               <Image src={(`https://github.com/Masha-bit/AppTechFoodCourt/main${foodplate.url}`)} alt='african-national-food' height={240} width={210}/>
//             </div>

//             <div className='flex flex-col items-center justify-center h-[100px] w-[90%] -top-5 relative'>

//                 <p className=' text-2xl leading-[22px] font-semibold w-[90%] h-[50px] flex items-center justify-center text-center'>{foodplate.name}</p>

//                 <p className='text-[20px] text-[#FFC83A]'><span className='text-[15px] mx-2 text-black'>₦</span>{foodplate.price}</p>
//             </div>

//         </div>
//         </Link>
//         </div>

// )

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

//     ))}
//     </FoodList>
// </div>
//     )
//   }
