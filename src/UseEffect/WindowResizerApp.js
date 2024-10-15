import React, { useEffect, useState } from 'react'

function WindowResizerApp() {

    const [currSize, setCurrSize] = useState(
        {
            height: window.innerHeight,
            width: window.innerWidth
        }
    )

    useEffect(()=>{
        function handleResize(){
        setCurrSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    window.addEventListener("resize", handleResize)

    return ()=>{
        window.removeEventListener("resize", handleResize)
    }
    },[])

  return (
    <div>
      <h1>Window Size</h1>
      <p>Width : {currSize.width}px</p>
      <p>Height: {currSize.height}px</p>
    </div>
  )
}

export default WindowResizerApp
