import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import DisplayTheme from './DisplayTheme'
import ThemeContext from './ThemeContext'
function ThemeTogglerApp() {

    const[theme, setTheme ] = useState(true)

  return (
    <div>
      <ThemeContext.Provider value={{theme , setTheme}} >
        <ThemeToggle/>
        <DisplayTheme/>
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeTogglerApp