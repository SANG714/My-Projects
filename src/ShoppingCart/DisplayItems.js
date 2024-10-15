import React, { createContext, useContext } from 'react'
import CartContext from './CartContext'

function DisplayItems() {
    const {cart}
= useContext(CartContext)
  return (
    <div>
      <p>Cart Items:</p>
      {cart.length=== 0 ? (
        <p>Your cart is empty</p>)
        : (
            cart.map((item,index)=>(
        <p key ={index}>{item.itemName}-${item.price}</p>
    ))
    )}
    </div>
  )
}

export default DisplayItems
