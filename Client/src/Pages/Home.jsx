import React from 'react'
import Slide from '../Components/Slide'
import Teacher from '../Components/Teacher'
import About from './About'
import OurGallery from '../Components/OurGallery'

const Home = () => {
  return (
    <div>
    <Slide />
     <About/>
     <OurGallery/>
    </div>
  )
}

export default Home