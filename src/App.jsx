import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Cards from './components/Cards'
import Forms from './components/Forms'
import Footer from './components/Footer'
import download from './assets/download.png'
import Education from './components/Education'

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <div>
      <div className=" flex sm:hidden items-center justify-center "><button className=" rounded-btn">Resume <img src={download} alt="" /></button></div>
      <div className="text-white h-10  font-semibold flex items-center justify-center">-----Skills-----</div>
      </div>
      <Cards />
      <Education/>
      <Forms/>
      <Footer/>
    </div>
  )
}

export default App