import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
function UserDetails() {
    const {id}= useParams()
    const[user, setUser] = useState(null)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data=> setUser(data))
    },[id])

    if(!user){
        return<div>Loading...</div>
    }

  return (
    <div>
      <h2>{user.name}</h2>
    <p>Email: {user.email}</p>
    <p>Phone:{user.phone}</p>
    <p>Website:{user.website}</p>
    <p>Company:{user.company?.name}</p>
    <p>Address: {user.address?.street}, {user.address?.city}</p>
    </div>
  )
}

export default UserDetails
