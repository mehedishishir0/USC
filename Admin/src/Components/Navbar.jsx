import React from 'react'
import logo from '../assets/uss-logo.png'
import { NavLink } from 'react-router-dom'
import About from '../Pages/About'

const Navbar = () => {
  return (
   <div className='w-full flex items-center justify-between lg:px-12 px-5 py-4 shadow-md'>
      <NavLink to={'/'} className='w-16 '>
      <img src={logo} alt="" className='w-full h-full object-cover'  />
      </NavLink>
      <h1 className='lg:text-2xl text-xl font-semibold text-orange-500'>Ullapara Science Collage</h1>
    </div>
  )
}

export default Navbar