import React, { useState } from 'react'
import AuthenticationContext from './AuthenticationContext'
import Profile from './Profile'
import Login from './Login'
function AuthenticationApp() {
    const [LoggedIn] = useState([
        {userName: "Alex",
        feedPage : "userFeed"
        }
    ])
    const[isLogIn, setLogIn]= useState(false)

  return (
    <div>
      <AuthenticationContext.Provider value={{isLogIn, setLogIn, LoggedIn}}>
        <Profile/>
        <Login/>
      </AuthenticationContext.Provider>
    </div>
  )
}

export default AuthenticationApp
