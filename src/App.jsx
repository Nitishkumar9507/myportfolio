import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Cards from './components/Cards'
import Forms from './components/Forms'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Cards />
      <Forms/>
      <Footer/>
    </div>
  )
}

export default App