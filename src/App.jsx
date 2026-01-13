import { use, useState } from 'react'
import './App.css'

function App() {
  // Languages english (en) y español (es)
  const [lang, setLang] = useState("en")
  // Dark theme and light theme
  const [theme, setTheme] = useState("dark")

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
