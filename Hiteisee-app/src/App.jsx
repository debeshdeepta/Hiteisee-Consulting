import { useState } from 'react';
import './App.css';
import { Header } from './Common/Header';
import Footer from './Common/Footer';
import Home from './Componets/Home';
import Services from './Componets/Services';
import Customers from './Componets/Customers';
import AboutUs from './Componets/AboutUs';
import Careers from './Componets/Careers';


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactUs from './Componets/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
