import { useState } from 'react'

import Nav from './components/Nav'
import Body from './components/Body'

import Footer from './components/Footer'

function App() {
  const [language, setLanguage]: [string, (value: string) => void] = useState(
    navigator?.language || 'en-US'
  )


  return (
    <>
      <Nav language={language} setLanguage={setLanguage} />
      <hr className="border-2 m-1"/>
      <Body language={language} />
      <hr className="border-2 m-1"/>

      <Footer />
    </>
  )
}

export default App
