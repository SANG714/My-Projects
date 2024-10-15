import React from 'react'

function Fahrenheit({ftemp, ontempChange}) {



    function handleTempChange(){

    }
  return (
    <div>
      <input type="number"
        value={ftemp}
        onChange ={(e)=>ontempChange(e.target.value)} />
        
    </div>
  )
}

export default Fahrenheit
