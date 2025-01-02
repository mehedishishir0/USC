import React from 'react'
import logo from '../assets/uss-logo.png'

const Footer = () => {
  return (
    <div className='bg-[#232323] text-white p-5 select-none'>
        <div className='flex items-center lg:justify-between gap-4 lg:ml-24 pb-8 pt-5 '>
            <img src={logo} alt="" className='w-20 rounded-md' />
            <h1 className='text-3xl  font-bold  tracking-wide	lg:mr-9'> USC </h1>
        </div>
       <div className='flex w-full lg:flex-row flex-col-reverse pb-3'>
       <div className='my-5 lg:ml-24 lg:w-[50%]'>
          <h1 className='text-xl mb-3'>Location</h1>
          <iframe className='rounded-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.7714346499583!2d89.5647260742098!3d24.319606466688498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fddab8439cc433%3A0xb5979719fcfce421!2sUllapara%20Science%20College!5e0!3m2!1sen!2sbd!4v1734872243841!5m2!1sen!2sbd" width={350} height={250}></iframe>
        </div>
        <form className='flex flex-col relative gap-3 mr-4 lg:w-[50%] mt-4'>
          <h1 className='text-2xl font-bold tracking-wider'>Subscribe now</h1>
          <input className='w-full p-3 rounded-md outline-none text-orange-500' required type="email" placeholder='Your e-mail' />
          <button type='submit' className='absolute bottom-1 right-1 lg:bottom-[225px] lg:right-1 border p-2 hover:bg-orange-400 rounded-md bg-orange-500 border-orange-400 '>Subscribe</button>
        </form>
       </div>
        <hr />
        <p className='text-center pt-8 lg:text-lg '>Copyright © 2025 Ullapara science collage. All Rights Reserved.</p>
    </div>
  )
}

export default Footer