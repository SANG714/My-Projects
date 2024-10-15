import React, { useContext } from 'react'
import SwitcherContext from './SwitcherContext'

function SwitchLanguage() {
    const {setLang} = useContext(SwitcherContext)


  return (
    <div>
      <button onClick={()=> setLang('en')}>English</button>
      <button onClick={()=> setLang('es')}>Spanish</button>
      <button onClick={()=>setLang('fr')}>French</button>
    </div>
  )
}

export default SwitchLanguage
