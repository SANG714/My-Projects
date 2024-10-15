import React, { useState } from 'react'
import SwitcherContext from './SwitcherContext'
import SwitchLanguage from './SwitchLanguage'
import Displaymessage from './Displaymessage'

function LanguageSwitcherApp() {
    const [lang, setLang]= useState("en")

    const messages = {
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    }

  return (
    <div>
      <SwitcherContext.Provider value={{lang, setLang, messages}}>
        <SwitchLanguage/>
      <Displaymessage/>
      </SwitcherContext.Provider>
    </div>
  )
}

export default LanguageSwitcherApp
