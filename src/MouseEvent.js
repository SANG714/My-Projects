import React, { useState } from 'react'

function MouseEvent() {

   const[isHovered, setisHovered]= useState(false)

   const handleMouseEnter = () =>{
    setisHovered(true)
   }

   const handleMouseOut=()=>{
    setisHovered(false)
   }

   const divStyle = {
    backgroundColor: isHovered ? "lightblue" : "salmon"
   }
  return (
    <>
     <div 
     style = {divStyle}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseOut}
     >
        Hover over me
        </div> 
    </>
  )
}

export default MouseEvent
