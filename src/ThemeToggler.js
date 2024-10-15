import React, {useState} from 'react'

function ThemeToggler() {
    const [theme, setTheme]= useState(true)
const display = {
    backgroundColor: theme? "white" : "black",
    color: theme ? "black" : "white",
    height: "100vh"
}
  return (
    <div>
      <button onClick={()=>setTheme(prevTheme=> !prevTheme)}>
        Toggle Theme
      </button>
      <h2>hi</h2>
      <div style={display}>
        WELCOME
      </div>
    </div>
  )
}

export default ThemeToggler


// let arr = [1, books, 550, 94 ]
// let [serialNo, object, price, pages ] = arr
// console.log(arr[price])

// let object = {
//     pname : "Ajit",
//     age: 25
// }

// const {pname: personName, age: personAge} = object
// console.log(personName)
// { pname: "Krishna",


// }