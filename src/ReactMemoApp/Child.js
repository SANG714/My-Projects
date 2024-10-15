import React from 'react'

function Child({onButtonClick}) {
    console.log("child rendered")
  return (
    <div>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  )
}

export default React.memo(Child)
