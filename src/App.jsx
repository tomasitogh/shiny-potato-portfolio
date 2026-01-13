import { use, useState } from 'react'
import NavBar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import './App.css'


function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
