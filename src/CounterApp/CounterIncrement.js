import React from "react"

function CounterIncrement({ handleIncrement, handleDecrement}){

  return(
    <>
    <button onClick={()=>handleIncrement(prevcount => prevcount + 1 )}>Increment button</button>
      <button onClick={()=>handleDecrement(prevcount => prevcount - 1 )}>Decrement button</button>
      </>
  )
}
    

  

export default CounterIncrement
