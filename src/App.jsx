import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CondoFast from './pages/CondoFast'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import CookieBanner from './components/CookieBanner'

function App() {
  // Nota: Questa è una dummy key. In produzione servirà la vera Site Key.
  const reCaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      <div className="min-h-screen flex flex-col font-sans selection:bg-blue-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/condofast" element={<CondoFast />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/termini-e-condizioni" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
        <CookieBanner />
      </div>
    </GoogleReCaptchaProvider>
  )
}

export default App
