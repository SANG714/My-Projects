import React, {useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

function Home() {
    const[userList, setuserList]= useState([])

    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setuserList(data))
        .catch(error => console.error("Error fetching data:", error))
    }
,[])
  return (
    <div>
      {userList.map((user)=>
    <div key={user.id}>
        <p>{user.name}
            <Link to={`/user/${user.id}`}> <button>show details</button>
            </Link>
        </p>
    </div>)}
    </div>
  )
}

export default Home
