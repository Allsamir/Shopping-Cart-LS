import React from 'react'

interface ChildProps {
          bottle: {
          id: string
          category: string
          name: string
          img: string
          price: number
          seller: string
          }

          handleCart: (bottle: {
          id: string
          category: string
          name: string
          img: string
          price: number
          seller: string
          }) => void
}

const Bottle: React.FC<ChildProps> = ({bottle, handleCart}) => {
  return (
    <div className={`p-8 border border-solid text-black border-black rounded-2xl text-center space-y-4`}>
          <h1 className={`text-2xl font-bold`}>{bottle.name}</h1>
          <img src={bottle.img} alt="" />
          <p className={`text-base`}>Price: <span className="font-bold">${bottle.price}</span></p>
          <button onClick={() => {handleCart(bottle)}} className="btn btn-outline my-8 text-black">Purchase</button>
    </div>
  )
}

export default Bottle