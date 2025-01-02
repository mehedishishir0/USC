import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import About from './About'
import Slider from './Slider'
import OurGallery from './OurGallery'
import { useState } from 'react'
import GalleryDeleted from '../Components/GalleryDeleted'
const Home = () => {
const [show,setShow] = useState(false)

  return (
    <section className='lg:flex'>
      <div className=' home lg:w-[25%] w-full lg:h-screen bg-gray-500 text-white lg:shadow-lg shadow-md shadow-gray-500 lg:shadow-slate-700'>
        <ul className='lg:py-28 py-5 lg:text-xl flex lg:flex-col lg:gap-10 justify-around '>
          <NavLink to={'/slider'} className='lg:bg-slate-400 lg:text-center '><li>Add slider image</li></NavLink>
          <NavLink to={'/about'} className='lg:bg-slate-400 lg:text-center'><li>Add about details</li></NavLink>
          <NavLink to={'/ourGallery'} onClick={()=>setShow(!show)} className='lg:bg-slate-400 lg:text-center'>
            <li>Add our gallery</li>
          </NavLink>
          <NavLink to={'/galleryDeleted'}>
          <li className={`${show?'block':'hidden '} lg:bg-slate-400 lg:text-center`}>Delete Image</li>
          </NavLink>
        </ul>
      </div>
      <div className='py-10 lg:w-[75%]'>
        <Routes>
          <Route path='/slider' element={<Slider />} />
          <Route path='/about' element={<About />} />
          <Route path='/ourGallery' element={<OurGallery />} />
          <Route path='/galleryDeleted' element={<GalleryDeleted />} />
        </Routes>
      </div>
    </section>
  )

}

export default Home