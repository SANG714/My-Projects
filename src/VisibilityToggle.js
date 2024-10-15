import React, {useState} from 'react'

function VisibilityToggle() {
    const[visible, setVisible] = useState(true)

    function handleVisibility(){
        setVisible(prev => !prev)
    }
    const display = {
        display: visible ? "block" : "none"
    }
  return (
    <div>
        <h1 style={display}>Magic</h1>
      <button onClick={handleVisibility}>Now you {visible ? "don't" : "see me"}</button>
    </div>
  )
}

export default VisibilityToggle
