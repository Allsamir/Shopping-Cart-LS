import React, { useEffect, useState } from 'react'
import Bottle from './Bottle';
import { addToLS, getItemFromLocalStorage, removeFromLS } from '../util/localStorage';
import { Cart } from './Cart';

interface Bottles {
          id: string
          category: string
          name: string
          img: string
          price: number
          seller: string
}

export const Bottles : React.FC = () => {

          const [bottles, setBottles] = useState<Bottles[]>([]);
          const [cart, setCart] = useState<Bottles[]>([])

          useEffect(() => {
                    const loadData = async () => {
                              const response = await fetch('./bottles.json')
                              const data = await response.json();
                              setBottles(data)
                    }

                    loadData() 
          }, [])

          // setting cart from localStorage where user's purchase is saved
          useEffect(() => {
                    if (bottles.length > 0) {
                              const bottlesIDFromLS: Array<string> = getItemFromLocalStorage();
                              const bottlesFromLS:Bottles[] = bottlesIDFromLS.map(bottleID => bottles.find(bottle => bottle.id === bottleID)!) // Use non-null assertion operator to tell TypeScript that the result won't be null)
                              setCart(bottlesFromLS)
                    }
          }, [bottles])


          // setting cart when user make a purchase
          const handleCart = (selectedBottle: Bottles) => {
                    setCart(
                              [...cart, selectedBottle]
                    )

                    addToLS(selectedBottle.id)
          }

          const handleRemoveFromCart = (cartID: string) => {
                    setCart(cart.filter(cart => cart.id !== cartID))
                    removeFromLS(cartID)
          }

  return (
    <>
    <div className="my-8 text-black font-bold text-center">Bottles Available: {bottles.length}</div>     
    <div className="my-8 text-black font-bold text-center">Bottles Purchased: {cart.length}</div>

    <div className="my-24">
              <h1 className={`text-2xl font-bold my-8 text-center text-black`}>Your Shopping Cart</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {cart.map((cart, index) => <Cart key={index} cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>)}
              </div>
    </div> 

    <div className="my-36">
              <h1 className={`text-3xl md:text-5xl font-bold my-24 text-center text-black`}>Portable Water Bottles for your everyday life</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleCart={handleCart}/>)}
              </div>
    </div>
    </>
  )
}
