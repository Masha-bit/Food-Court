import React, { useEffect, useState } from 'react'
import {MdOutlineDelete} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'
import Image from 'next/image'
import foodDes from 'react-icons/app/Menu/components/foodDes'


export default function CartItems() {

    const items = foodDes.foodPlates
    const cartItemsQuantity = items.map((item) => JSON.parse(`{"name": "${item.name}", "quantity": ${item.quantity}}`)) 
    const [numberOFItems, setNumberOFItems] = useState(cartItemsQuantity)
    const _INIT_VALUE = (itemName) => numberOFItems.map((item)=> {
        if(item.name === itemName){
            return item.quantity 
        }
        return null
    })
    
    
    
    
    const addItemsHandler = (itemName) => {  
        const updateCartItemQuantity = numberOFItems.map((item)=> {
            if(item.name === itemName){
                return{...item, quantity: item.quantity + 1}
            }
            return item
        })  
        setNumberOFItems(updateCartItemQuantity)        
        // console.log(cartItemsQuantity)
    }
    const subItemsHandler = (itemName) => {
        const updateCartItemQuantity = numberOFItems.map((item)=> {
            if(item.name === itemName){
                if(item.quantity <= 1){
                    removeCartItemHandler(itemName)
                }
                {
                return{...item, quantity: item.quantity - 1}
                }
            }
            return item
        })  
        setNumberOFItems(updateCartItemQuantity)        
        // console.log(cartItemsQuantity)
    }


    // handle if an element is clicked 

    const [activeElement, setActiveElement] = useState(null)
    const [swipeState, setSwipeState] = useState(false)
    

    const handleClick = (element) => {
        setActiveElement(element)
        setSwipeState(current => !current)
    }

    const isActive = (element) => {
        return activeElement && activeElement.name === element.name;
      };
    //   setIsActive(current => !current)


    // const swipeHandler = itemID =>{
    //     console.log('swiped')
    //     console.log(databaseFromLocalStorage.map((a)=> a.name).includes(undefined) || databaseFromLocalStorage.map((a)=> a.name).includes(''))
    //     const clickedItem = cart.find((item) => item.name === itemID)
    //     console.log(clickedItem)
    //     setIsActive(current => !current)
    // }
    
   
        const databaseFromLocalStorage =
            typeof window !== "undefined"?
            JSON.
            parse(
            localStorage.getItem('Cart') || `[{}]` 
            ):null

    console.log(typeof window !== undefined)

    const [cart, setCart] = useState(databaseFromLocalStorage)
    console.log(databaseFromLocalStorage)

    function removeCartItemHandler(name){
        const remainingCart = cart.filter((cartItem) => name !== cartItem.name)
        console.log(`deleted`)
        console.log(remainingCart)
        window.alert(`${name} is being removed from cart`)      


        const index = databaseFromLocalStorage.findIndex(product => product.name === name)
        if(index > -1){
        const y = databaseFromLocalStorage.splice(index, 1)
        setCart(y)
        }console.log('not removed')
        setCart(remainingCart)
    }
 

       
    const cartItems =
    cart != null?
    cart.map((cartItem) =>
    (
        <div  key={cartItem.name} className={`h-[auto] w-[100%] rounded-normal flex flex-col items-center  font-dongle p-2 relative ${cartItem.slug == '' || cartItem.slug == undefined? `hidden`: ``} `}>
        <div className={`h-[95px] w-[100%] rounded-normal flex items-center  bg-white font-dongle my-2 p-2 z-[2] shadow-2xl ${isActive(cartItem) && swipeState? `text-slate-600 -translate-x-[9rem] transition-all`:`transition-all`} `}>
          <div className='h-[90px] w-[90px] rounded-full bg-slate-100'>
            <Image src={cartItem.url} alt={cartItem.slug} height={90} width={90}/>
        </div>
  
          <div>
              <div className=' font-bold mx-2 p-2'>
                  <p className='text-[20px]'  onClick={() => handleClick(cartItem)}>{cartItem.name}</p>
                  <div className='text-[14px] flex items-center justify-between w-[250px]'>
                      <p>₦ {cartItem.price}</p>
                      <div id={cartItem.slug} className='h-[40px] w-[80px] rounded-full bg-[#FFC83A] flex items-center justify-around' >
                                <button onClick={()=>subItemsHandler(cartItem.name)}>-</button>
                                <p>{_INIT_VALUE(cartItem.name)}</p> 
                                <button onClick={()=>addItemsHandler(cartItem.name)}>+</button>
                      </div>
                  </div>
                  
                  </div>
          </div>
      </div>
      <div className='w-[150px] h-[100px] flex items-center justify-around absolute top-0 right-0'>
          <div className='h-[50px] w-[50px] rounded-full bg-[#FFC83A] flex items-center justify-center'
            onClick={() => removeCartItemHandler(cartItem.name)}
          ><MdOutlineDelete size={30}/></div>
          <div className='h-[50px] w-[50px] rounded-full bg-[#FFC83A] flex items-center justify-center'> <FiHeart size={30}/> </div>
      </div>
      </div>
    )):
    (
        <div>Not rendereing localStorage</div>
    )
    console.log(databaseFromLocalStorage)

    


  return (
    <div>
        {cartItems}
    </div>
  )
}
