import React, { useState } from 'react'
import CartContext from './CartContext'
import DisplayItems from './DisplayItems'
import ItemsList from './ItemsList'

function ShoppingCart() {
    const [items] = useState([
        {itemName:"Apple", price: 1.0},
        {itemName:"Orange", price: 2.0 },
        {itemName:"Banana", price: 3.0 }
    ])

    const[cart, setCart] = useState([])

  return (
    <CartContext.Provider value = {{cart, setCart, items}}>
        <ItemsList/>
        <DisplayItems/>
    </CartContext.Provider>
  )
}

export default ShoppingCart
