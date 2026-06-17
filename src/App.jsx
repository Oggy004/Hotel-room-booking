import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Rooms from './pages/rooms'
import RoomDetails from './pages/roomDetails'
import Dashboard from './pages/dashboard'
import Gallery from './pages/gallery'
import Contact from './pages/contact'
import Footer from './components/Footer'

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner")
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('verona-theme') || 'light'
  })

  useEffect(() => {
    document.body.classList.toggle('theme-dark-mode', theme === 'dark')
    document.body.classList.toggle('theme-light-mode', theme === 'light')
    localStorage.setItem('verona-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#120f0d] text-[#f6efe7]' : 'bg-[#f7f1ea] text-[#211c18]'}`}>
      {!isOwnerPath && <Navbar theme={theme} toggleTheme={toggleTheme} />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {!isOwnerPath && <Footer />}
    </div>
  )
}

export default App
