import React, { useContext } from 'react'
import SwitcherContext from './SwitcherContext'

function Displaymessage() {
    const { lang, messages } = useContext(SwitcherContext)

  return (
    <div>
      <p>{messages[lang]}</p>
    </div>
  )
}

export default Displaymessage
