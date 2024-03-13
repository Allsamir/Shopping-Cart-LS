import React from 'react'

interface ChildProps {
         cart: {
          id: string
          category: string
          name: string
          img: string
          price: number
          seller: string
         }
         handleRemoveFromCart: (cartID: string) => void
}

export const Cart: React.FC<ChildProps> = ({cart, handleRemoveFromCart}) => {
  return (
    <div className={`p-8 border border-solid text-black border-black rounded-2xl text-center space-y-4`}>
          <h1>{cart.name}</h1>
          <img src={cart.img} alt="" />
          <p>Price: ${cart.price}</p>
          <button onClick={() => handleRemoveFromCart(cart.id)} className={`btn btn-outline text-black`}>Remove from cart</button>
    </div>
  )
}
