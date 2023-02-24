import React from 'react'
import Navbar from './Components/Navbar'
import { Home } from './Components/Home'
import { Cards } from './Components/Cards'
import { Tours } from './Components/Tours'
import { Discount } from './Components/Discount'
import Review from './Components/Review'
import Staff from './Components/Staff'
import Footer from './Components/Footer'
import Contact from './Components/Contact'


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      {/* <Cards/> */}
      <Tours/>
      <Contact/>
    </div>
  )
}

export default App
