import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function DisplayTheme() {

    const {theme} = useContext(ThemeContext)

    const display = {
        backgroundColor: theme? "white" : "black",
        height: "100vh"
    }
  return (
    <div style={display}>
      
    </div>
  )
}

export default DisplayTheme
