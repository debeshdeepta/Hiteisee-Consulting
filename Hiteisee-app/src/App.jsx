
import { useState } from 'react'
import './App.css'
import { Header } from './Common/Header'
import { Footer } from './Componets/Footer'
import { Home } from './Componets/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
        <Home/>
      <Footer/>
        
    </>
  )
}

export default App
