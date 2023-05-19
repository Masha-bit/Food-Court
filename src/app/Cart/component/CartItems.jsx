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

    const _Q = (itemName) => {
        return _INIT_VALUE(itemName).filter((x)=> x != null)[0]
    } 
    const updatedPrice = (cartItem)=>{
        return cartItem.price*_Q(cartItem.name)
    }   
    
    
    
    const addItemsHandler = (itemName) => {  
        const updateCartItemQuantity = numberOFItems.map((item)=> {
            if(item.name === itemName){
                const l = _Q(itemName)
                console.log(l)
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
    
   useEffect(() => {
        const databaseFromLocalStorage =
            typeof window !== "undefined"?
            JSON.
            parse(
            localStorage.getItem('Cart') || `[{}]` 
            ):null
        databaseFromLocalStorage? setCart(databaseFromLocalStorage): null
        
        
        }, []);

    console.log(typeof window !== undefined)

    const favoriteDatabaseFromLocalStorage =
//  useEffect(()=>{
    typeof window !== "undefined"?
    JSON.parse(localStorage.getItem('Favorite') || `[{}]` 
    ): null
// })

    const [cart, setCart] = useState([])
    const product = (name) =>{
     return cart.find(a => a.name === name)
    }
    const [favorite, setfavorite] = useState(
        favoriteDatabaseFromLocalStorage
        // [product]
    )    
    


    useEffect(() => {
        if(window !== 'undefined'){
        localStorage.setItem('Favorite', JSON.stringify(favorite))         
    ,[favorite]
}})


    const [LikeButton, setLikeButton] = useState(
        LikeIcon
    )
    function LikeIcon(){
        return (
            <div>
                <FiHeart size={30}/>
            </div>
        )
    }
    function Liked(){
        return (
            <div>
                <FiHeart size={30} style={{fill:'black'}}/>
            </div>
        )
    }
    function NotLiked(){
        return (
            <div>
                <FiHeart size={30} style={{color:'black'}}/>
            </div>
        )
    }
    function addToFavorite(name){
        // console.log(favoriteDatabaseFromLocalStorage)
        if(!favorite.map(a => a.name).includes(product(name).name)){
            setLikeButton(Liked)
            setfavorite([
                ...favorite,
                product(name)
            ])
            console.log(`true`)
        
        }else{     
         const remainingFavorite = favorite.filter((cartItem) => name !== cartItem.name)
         setLikeButton(NotLiked)
         setfavorite(remainingFavorite)
        console.log(`false`)
            }
    } 
    
    

    function removeCartItemHandler(name){
        const remainingCart = cart.filter((cartItem) => name !== cartItem.name)
        console.log(`deleted`)
        console.log(remainingCart)
        window.alert(`${name} is being removed from cart`)      
        setCart(remainingCart);
        typeof window !== "undefined"?
            JSON.
            parse(
            localStorage.setItem('Cart', JSON.stringify(remainingCart))  || `[{}]`
            ):null
    }
    

    function addToOrder(){
        useEffect(() => {
            if(window !== 'undefined'){
            localStorage.setItem('Order', JSON.stringify([totalCartPrice]))         
        ,[]  }
        })
    }

 

       
    const cartItems =
    cart != null?
    cart.map((cartItem) =>
    (
        <div  key={cartItem.name} className={`h-[auto] w-[100%] rounded-normal flex flex-col items-center  font-dongle p-2 relative ${cartItem.slug == '' || cartItem.slug == undefined? `hidden`: ``} `}>
        <div className={`h-[auto] w-[100%] rounded-normal flex items-center  bg-white font-dongle my-2 p-2 z-[2] shadow-2xl ${isActive(cartItem) && swipeState? `text-slate-600 -translate-x-[9rem] transition-all`:`transition-all`} `}>
          <div className='h-[90px] w-[90px] rounded-full bg-slate-100'>
            <Image src={cartItem.url} alt={cartItem.slug} height={90} width={90}/>
        </div>
  
          <div>
              <div className=' font-bold mx-2 p-2'>
                  <p className='text-[20px]'  onClick={() => handleClick(cartItem)}>{cartItem.name}</p>
                  <div className='text-[14px] flex items-center justify-between w-[250px]'>
                      <p>₦ {updatedPrice(cartItem)}</p>
                      <div id={cartItem.slug} className='h-[40px] w-[80px] rounded-full bg-[#FFC83A] flex items-center justify-around' >
                                <button onClick={()=>subItemsHandler(cartItem.name)}>-</button>
                                <p>{_Q(cartItem.name)}</p> 
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
          <div className='h-[50px] w-[50px] rounded-full bg-[#FFC83A] flex items-center justify-center' onClick={()=> addToFavorite(cartItem.name)}> 
          {LikeButton}
          </div>
      </div>
      </div> 
    )):
    (
        <div className={`h-[auto] w-[100%] rounded-normal flex flex-col items-center  font-dongle p-2 relative`}>Not rendereing localStorage</div>
    )
  
    const cartPrices= cart.map((cartItem) => updatedPrice(cartItem)).filter(Boolean)
    const totalCartPrice = cartPrices != 0?cartPrices.filter((item)=> typeof item == 'number').reduce((a,b) => a + b): '...'
    
        // ?cart.map((cartItem) => cartItem.price)      
        // .reduce((a,b) => a + b): console.log(`e no work`)
    // }
    console.log(totalCartPrice)


    


  return (
    <div className='h-[700px] w-[100vw] flex flex-col relative'>

        <div className='h-[80px] w-[100%] rounded-normal flex flex-row items-center justify-around  font-dongle p-2 absolute top-0 text-[25px]'>
            <div>
            {`SubTotal : ₦${totalCartPrice}`}
            </div>

            <div className='h-[auto] w-[90px] rounded-normal flex flex-col items-center  font-dongle p-2 text-[10px] bg-slate-500 border-slate-500 border-solid border-2 my-10 hover:bg-white' onClick={addToOrder}>
            save order
            </div>

        </div>

        
            
        <div className='relative mt-[3rem]'>
        {cartItems}
        </div>
    </div>
  )
}
