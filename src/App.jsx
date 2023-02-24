import React from 'react'
import Navbar from './Components/Navbar'
import { Home } from './Components/Home'
import { Cards } from './Components/Cards'
import { Tours } from './Components/Tours'
import { Discount } from './Components/Discount'
import Review from './Components/Review'
import Staff from './Components/Staff'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Cards/>
      <Tours/>
      <Discount/>
      <Review/>
      <Staff/>
      <Footer/>
    </div>
  )
}

export default App
