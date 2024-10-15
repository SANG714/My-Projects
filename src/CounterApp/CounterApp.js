import React, { useState } from 'react'
import CounterIncrement from './CounterIncrement'
import CounterDisplay from './CounterDisplay'

function CounterApp() {
    const[count, setCount] = useState(0)
   
    return(
        <div>
            <CounterIncrement handleIncrement={setCount} handleDecrement={setCount}/>
            <CounterDisplay count={count}
            />
        </div>
    )
}
export default CounterApp