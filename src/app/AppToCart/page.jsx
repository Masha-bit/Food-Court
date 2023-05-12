"use client"

import React, { useState } from 'react'
import Cart from '../Cart/page';
import ProductDetail from '../ProductDetail/page';
import ProductScreen from '../ProductDetail/[slug]/page';

function AppToCart() {

    const[cartItems, setCartItems] = useState([]);

    const addToCart = (item) =>{
        setCartItems([...cartItems,item])
    }
  return (
    <div>
        <ProductScreen addtoCart={addToCart}/>
        <Cart items={cartItems}/>
    </div>
  )
}

export default AppToCart