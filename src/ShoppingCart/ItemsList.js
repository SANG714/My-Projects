import React, {useContext } from 'react'
import CartContext from './CartContext'

function ItemsList() {

    const {items, cart, setCart} = useContext(CartContext)

    const handleAddToCart = (item) => {
        setCart([...cart,item])
    }
  return (
    <div>
        {items.map((item, index)=>(
            <div key= {index}>
                <p>{item.itemName} - ${item.price}</p>
                <button onClick={()=>handleAddToCart(item)}>Add to Cart</button>
            </div>
        ))}
    </div>
  )
}

export default ItemsList
