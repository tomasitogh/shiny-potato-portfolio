import { use, useState } from 'react'
import NavBar from "./components/Navbar"
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import './App.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useGlobal } from './context/GlobalContext'


function App() {
  const { lang } = useGlobal()
  const location = useLocation()

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
