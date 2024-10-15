import React, { useEffect,useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    const [count, setCount] = useState(0)
    const [prevHandleClick, setPrevHandleClick] = useState(null)

    console.log("Parent rendered")

    const handleClick = useCallback(()=>{
        console.log("Button Clicked")
    },[])

    // const handleClick = () => {
    //     console.log('Button clicked!');
    //   }

    useEffect(() => {
        console.log('effect triggered')
        console.log('Is the handleClick reference the same?', Object.is(handleClick, prevHandleClick));
        setPrevHandleClick(handleClick);  // Save the current reference for comparison in the next render
      }, [handleClick])

    console.log("handleClick:", handleClick)

  return (
    <div>
      Parent count:{count}
      <Child onButtonClick={handleClick}/>
      <button onClick={()=>setCount(count+1)}>Increment Button</button>
    </div>
  )
}

export default Parent
