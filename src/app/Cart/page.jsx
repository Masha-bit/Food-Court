'use client';

import React from 'react';
import Nav from './component/Nav';
import SwipeInstruction from './component/SwipeInstruction';
import CartItems from './component/CartItems';
// import cartItems from './component/cart'

const Cart = () => {
  // const cart = cartItems()
  // window.alert(`Reload Cart page to save order!`)

if(document.referrer !== window.location.href)
  setTimeout(
    function(){
    window.location.reload() 
    window.alert(`item added to cart!`)}, 100
)

  return (
    <div className="p-2 flex flex-col items-center bg-slate-50">
      <Nav />
      <div className="h-[70px] w-[70%]  my-4 flex items-center justify-center">
        <SwipeInstruction />
      </div>

      <div className='h-[auto] w-[100%] flex items-center justify-around my-3'>
        
        
        <CartItems/>
      </div>

      <div>
        {/* {
          items != ''
            ? items.map((item, index) => <div key={index}>{item}</div>)
            : null
          //  cartItems.map((cartItem) =>(
          //    <div>
          //       {cartItem}
          //     </div>
          //    )

          //    ): null
          //   }
        } */}
      </div>
    </div>
  );
};

export default Cart;
