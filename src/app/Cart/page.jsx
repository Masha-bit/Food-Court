'use client';

import React from 'react';
import Nav from './component/Nav';
import SwipeInstruction from './component/SwipeInstruction';
// import cartItems from './component/cart'

const Cart = ({ items }) => {
  // const cart = cartItems()

  return (
    <div className="p-2 flex flex-col items-center">
      <Nav />
      <div className="h-[70px] w-[70%] bg-green-100 my-4 flex items-center justify-center">
        <SwipeInstruction />
      </div>

      <div>
        {
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
        }
      </div>
    </div>
  );
};

export default Cart;
