import React, { useContext } from 'react'
import AuthenticationContext from './AuthenticationContext'

function Login() {
    const{isLogIn ,setLogIn} = useContext(AuthenticationContext)

  return (
    <div>
      <button onClick={() => setLogIn(loggedOut => !loggedOut)}>Log{isLogIn? "in": "out"}</button>
    </div>
  )
}

export default Login
