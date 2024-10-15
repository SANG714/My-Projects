import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
function ThemeToggle() {
    const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div>
      <button onClick={()=> setTheme(prevTheme => !prevTheme)}>
        {theme ? "Dark" : "Light"} mode
      </button>
    </div>
  )
}

export default ThemeToggle
