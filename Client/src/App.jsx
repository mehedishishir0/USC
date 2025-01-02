import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Components/Error'
import Nabvar from './Components/Nabvar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Admission from './Pages/Admission'
import FirstYear from './Pages/FirstYear'
import SoccendYear from './Pages/SoccendYear'
import Footer from './Components/Footer'
import SeeMore from './Components/SeeMore'
const App = () => {
  return (
    <div className='overflow-hidden  '>
    <Nabvar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/admission" element={<Admission/>} />
        <Route path="/1st-year" element={<FirstYear/>} />
        <Route path="/2nd-year" element={<SoccendYear/>} />
        <Route path='/seeimages' element={<SeeMore/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App