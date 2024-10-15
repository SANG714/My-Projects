import React, { useState } from 'react'
import Celcius from './Celcius'
import Fahrenheit from './Fahrenheit'

function TemperatureComponent() {
    const[ctemp, setctemp] = useState(0)
    const [ftemp, setftemp]= useState(32)

    function handleCelsiusChange(value) {
        const newCtemp = parseFloat(value);
        setctemp(newCtemp);
        setftemp((newCtemp * 9) / 5 + 32);
      }

      function handleFahrenheitChange(value) {
        const newFtemp = parseFloat(value);
        setftemp(newFtemp);
        setctemp(((newFtemp - 32) * 5) / 9);
      }

  return (
    <div>
      <Celcius ctemp={ctemp} ontempChange ={handleCelsiusChange}/>
      <Fahrenheit ftemp= {ftemp} ontempChange = {handleFahrenheitChange}/>
    </div>
  )
}

export default TemperatureComponent
