import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ImageGallery from './pages/ImageGallery'
import Trip from './pages/Trip'
import OurTrip from './pages/OurTrip'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-background'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/our-trip' element={<OurTrip />} />
        <Route path='/trip/:tripSlug' element={<Trip />} />
        <Route path='/image-gallery' element={<ImageGallery />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
