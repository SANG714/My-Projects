import React from 'react'

function Celcius({ctemp, ontempChange}) {
  return (
    <div>
        <input type="number"
        value={ctemp}
        onChange ={(e)=>ontempChange(e.target.value)} />
        
    </div>
  )
}

export default Celcius
