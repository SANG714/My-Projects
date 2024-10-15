import React, {useEffect, useState } from 'react'

function DataFetcher() {

    const [data, setData] = useState("")

    useEffect(()=>{
        async function fetching() {
           const response= await fetch("https://jsonplaceholder.typicode.com/posts/1")
           const data = await response.json()
           setData(data)
        }
        fetching()
    },[])

  return (
    <div>
      <p>{data.title}</p>
    </div>
  )
}

export default DataFetcher
