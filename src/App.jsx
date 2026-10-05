import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Footer from './components/Footer'
import WelcomeScreen from './components/WelcomeScreen'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  return (
    <>
      {isHomePage && showWelcome && (
        <WelcomeScreen
          onComplete={() => setShowWelcome(false)}
        />
      )}

      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-background'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination/:id' element={<Destination />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
