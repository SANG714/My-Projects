import React from 'react'

function FormHandling({color , onColorChange}) {
  //   const [inputval, setInputval] = useState('')

  //   let handleChange=(event)=> {
  //       setInputval(event.target.value)
  //   }

  //   let handleSubmit=(event)=> {
  //       event.preventDefault()
  //       alert(inputval)}
        
  // return (
    
  //   <div>
      
  //     <form 
  //     onSubmit={handleSubmit}
  //       >
  //       <input type='text'
  //       onChange={handleChange}></input>
  //       <input type='submit'
  //       />
  //     </form>
  //   </div>
  // )
  return(
    <>
    <form>
      <input type="text" 
      value = {color}
      onChange = {(e)=>onColorChange(e.target.value)}
      placeholder = "Enter color"
      />
      
    </form>
    </>
  )
}

export default FormHandling
