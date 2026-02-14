import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Main from './assets/components/Main'
import Toolbar from './assets/components/Toolbar'
import FooterTop from './assets/components/FooterTop'
import FooterBottom from './assets/components/FooterBottom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Main/>
    <Toolbar/>
    <FooterTop/>
    <FooterBottom/>

    </>
  )
}

export default App
