'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Button from 'react-icons/app/Button';
import foodDes from 'react-icons/app/Menu/components/foodDes';
import Image from 'next/image';
import Divider from '../Divider';
import SwipeAnimation from 'react-icons/app/SwipeAnimation';


// import cartItems from 'react-icons/app/Cart/component/cart.js';
// import cartItems from 'react-icons/app/Cart/component/cart';
import Cart from 'react-icons/app/Cart/page';


const databaseFromLocalStorage =
//  useEffect(()=>{
    typeof window !== undefined?
    JSON.parse(
    localStorage.getItem('Cart') ||
    `[{}]`
    ):null
// })

    
    const ProductScreen = ({ addtoCart}) => {

    const router = useParams();
    console.log(router)  
    const { slug } = router;
    
    const product = foodDes.foodPlates.find(a => a.slug === slug);


    // const [database, setDatabase] = useState(
    //     databaseFromLocalStorage  
    //   )
    const [cart, setCart] = useState(
        databaseFromLocalStorage 
        // [product]
        )

    
        
        const addToCartHandler = () =>{
            // localStorage.clear("Cart")
            // setDatabase([
            //     ...database,
            //     product
            // ])
            !databaseFromLocalStorage.map(a => a.slug).includes(product.slug)?
            setCart([
                ...cart,
                product
            ]):
            console.log(!databaseFromLocalStorage.map(a => a.slug).includes(product.slug))
            console.log(product.slug)
            console.log(databaseFromLocalStorage.map(a => a.slug))
            console.log(databaseFromLocalStorage)
        }   
        
        useEffect(() => {
            if(window !== 'undefined'){
            localStorage.setItem('Cart', JSON.stringify(cart))         
        ,[cart]
    }})

    
      
      
      
      //add to cartHandler
    //   const [items, setItems] = useState([])
    //   const [newItem, setNewItem] = useState('')
      
    //   const addtoCartHandler = () => {
    //       // const {data} = foodDes  
    //       console.log(`added ${product.name} to cart`)
    //     setNewItem(product.name)        
    //     addtoCart(newItem)
    //     setItems([...items, newItem])  
    //     // console.log(cart)
    //     // cart.push(product.name)
    //     // // cartItems.push(product.name)
    //     // console.log(cart)        
    // }
    
    
    
    
    
   
    



    if(!product){
        return (
            <div>
                Product Not Found 
            </div>
        )
    }
    return(
        <div className='h-[90%] w-[100%] flex flex-col items-center p-1 font-dongle overflow-y-auto bg-gray-100'>     
        
        {/* image div  */}
        <div>
        <div className='rounded-full my-8 h-[200px] w-[200px] bg-gray-200'>
        <Image
              src={product.url}
              alt="african-national-food"
              height={240}
              width={210}
            />
        </div>
        </div>

        {/* food name and price */}
        <div className='h-[100px] w-auto max-w-[400px] flex flex-col items-center justify-center text-[20px]'>
            <h1>{product.name}</h1>
            <p className="text-[16px] text-[#FFC83A]">
              <span className="text-[11px] mx-2 text-black">₦</span>
              {product.price}
            </p>
        </div>

        {/* food description  */}
        <div className='my-4 p-3'>
            <p>
                {product.description}
            </p>
        </div>

        {/* divider  */}
        <Divider/>

        {/* ratings */}
        <div className='my-4 flex flex-row w-[90%] justify-between'>
            <p>
               Ratings 5.0
            </p>
            <div>
                {/* <StarRating/> */}
            </div>
        </div>

        {/* divider  */}
        <Divider/>

        {/* delivery information */}
        <div className='my-4 p-3'>
            <p>
                <h1 className='text-[14px]'>Delivery info</h1>
                Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
            </p>
                <p className='mt-3'>
                <h1 className='text-[14px]'>Return policy</h1>
                All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.
            </p>
        </div>

          {/* divider  */}
          <Divider/>

        <div className='h-auto w-[70%]' onClick={addToCartHandler}>
            <Button buttonLink={'./Cart'} buttonText={'Add to cart'}/>
        </div>

    </div>
  );
};
export default ProductScreen;

