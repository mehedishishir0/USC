import React from 'react'
import {Route,Routes} from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import OurGallery from './Pages/OurGallery'
import Navbar from './Components/Navbar'
import Slider from './Pages/Slider'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='w-full h-full'>
      <ToastContainer/>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App