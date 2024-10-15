import React,{useState, useEffect} from 'react'

function Timer() {
    const [seconds, setSeconds]=useState(0)

    useEffect(()=>{
const setIntervalID = setInterval(()=>{
            setSeconds(prevsec=> prevsec+1)
        } , 1000)

         return ()=> clearInterval(setIntervalID)
    },[])

  return (
    <div>
      <h1>{seconds}</h1>
    </div>
  )
}

export default Timer
