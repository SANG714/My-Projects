import React, { useEffect, useState } from 'react'

function DataFetcher() {
  const[data, setData] = useState(null)
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => setData(data)
    )
    .catch(error=>
      console.error(error)
    )
  }, [])
  return (
    <div>
      <h1>{data?.title}</h1>
    </div>
  )
}

export default DataFetcher


