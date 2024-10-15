import React, { useContext } from 'react'
import AuthenticationContext from './AuthenticationContext'

function Profile() {
    const{isLogIn, LoggedIn}= useContext(AuthenticationContext)
  return (
    <div>
      {isLogIn ? "Please Login" : LoggedIn.map((value, index)=>
    <p key={index}>{value.userName},{value.feedPage}</p>)}
    </div>
  )
}

export default Profile
