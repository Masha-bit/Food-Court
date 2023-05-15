import React, { useEffect, useState } from 'react'
import {MdOutlineDelete} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'
import Image from 'next/image'


export default function CartItems() {

    const _INIT_VALUE = 1
    const [numberOFItems, setNumberOFItems] = useState(_INIT_VALUE)
    const [editIndex, seteditIndex] = useState(null)
    const addItemsHandler = (id) => {


        seteditIndex(
            editIndex => editIndex === id? null: id
        )
        setNumberOFItems(numberOFItems+1)
    }
    const subItemsHandler = (id) => {
        setNumberOFItems(numberOFItems-1)
    }

    const [isActive, setIsActive] = useState(false)
    const swipeHandler = event =>{
        console.log('swiped')
        console.log(databaseFromLocalStorage.map((a)=> a.name).includes(undefined) || databaseFromLocalStorage.map((a)=> a.name).includes(''))
        setIsActive(current => !current)
    }
    
   
        const databaseFromLocalStorage =
        //  useEffect(()=>{
            typeof window !== "undefined"?
            JSON.parse(
            localStorage.getItem('Cart') || `[{}]` 
            ):null
    // })
    console.log(typeof window !== undefined)
    // console.log( JSON.parse(
    //     `[{}]` || localStorage.getItem('Cart') 
    //     ))

    const [cart, setCart] = useState(
        databaseFromLocalStorage
    )
    console.log(databaseFromLocalStorage)

    const a = databaseFromLocalStorage.map((b) => b)
    const [z, setZ] = useState(
        a
    )

    function removeCartItemHandler(name){
        const remainingCart = cart.filter((cartItem) => name !== cartItem.name)

        console.log(`deleted`)
        console.log(remainingCart)
      


        const index = databaseFromLocalStorage.findIndex(product => product.name === name)
        if(index > -1){
        const y = databaseFromLocalStorage.splice(index, 1)
        setCart(y)
        }console.log('not removed')
        // console.log(z)
        // console.log(index)


        // const updatelocalstorageName = a.filter((valuename)=> valuename == name )


        // a.includes(a[a.name])? console.log(a.filter((valuename)=> valuename != a)): console.log('blah')
        // console.log(a.filter((valuename)=> valuename == name ))
        setCart(remainingCart)
    }
 

       
    const cartItems =
    cart != null?
    cart.map((cartItem) =>
    (
        <div  key={cartItem.name} className={`h-[auto] w-[100%] rounded-normal flex flex-col items-center  font-dongle p-2 relative ${cartItem.slug == '' || cartItem.slug == undefined? `hidden`: ``} `}>
        <div className={`h-[95px] w-[100%] rounded-normal flex items-center  bg-white font-dongle my-2 p-2 z-[2] shadow-2xl ${isActive? `text-slate-600 -translate-x-[9rem] transition-all`:`transition-all`} `}>
          <div className='h-[90px] w-[90px] rounded-full bg-slate-100'>
            <Image src={cartItem.url} alt={cartItem.slug} height={90} width={90}/>
        </div>
  
          <div>
              <div className=' font-bold mx-2 p-2'>
                  <p className='text-[20px]'  onClick={swipeHandler}>{cartItem.name}</p>
                  <div className='text-[14px] flex items-center justify-between w-[250px]'>
                      <p>₦ {cartItem.price}</p>
                      <div id={cartItem.slug} className='h-[40px] w-[80px] rounded-full bg-[#FFC83A] flex items-center justify-around' >
                                <button onClick={subItemsHandler}>-</button>
                                <p>{numberOFItems}</p> 
                                <button onClick={addItemsHandler}>+</button>
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
