import React from 'react'

function FormHandling2({color}) {
  //   const [input, setInput] = useState("")

  //   function handleChange(event){
  //       setInput(event.target.value)
  //   }
  //   function handleSubmit(event){
  //       event.preventDefault()

  //       const digits = /\d/
  //       if(digits.test(input)){
  //           alert("input cannot contain a number");
  //           return
  //       }
  //       if(input.trim() === ""){
  //           alert("Please provide input")
  //           return;
  //       }

  //       const spchar = /[!@#$%^&*()_\-<>?,./:";'{}\[\]|\\]/g
  //       if(spchar.test(input)){
  //           alert("Special characters are not allowed")
  //           return
  //       }

  //       if(input.length < 4){
  //           alert("input should be atleast 4 letters long")
  //           return;
  //       }

  //       alert(`Your name is : ${input}`)
  //   }
  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <input type="text"  onChange={handleChange} 
  //       value={input}/>
  //       <input type="submit"  />
  //     </form>
  //   </div>
  // )

  return(
    <>
    <p style={{color: color}}>The color is {color}</p>
    </>
  )
}

export default FormHandling2
