
import { useState } from 'react'
import './App.css'
import { Header } from './Common/Header'
import { Footer } from './Componets/Footer'
import Home from './Componets/Home'
import Services from './Componets/Services'
import Customers from './Componets/Customers'
import AboutUs from './Componets/AboutUs'
import Careers from './Componets/Careers'


function App() {

  return (
    <>
      <Header/>
        <Home/>
        <Services/>
        <Customers/>
        <AboutUs/>
        <Careers/>
      <Footer/>
        
    </>
  )
}

export default App
