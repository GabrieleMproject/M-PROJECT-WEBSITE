import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CondoFast from './pages/CondoFast'
import TicketFast from './pages/TicketFast'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/condofast" element={<CondoFast />} />
        <Route path="/ticketfast" element={<TicketFast />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
