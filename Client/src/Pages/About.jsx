import React, { useEffect, useState } from 'react'
import axios from 'axios'
import imgIcon from '../assets/imgIcon.png'
import ScrollToTop from '../Helper/scroll'
import { url } from '../../Context/context'


const About = () => {
  ScrollToTop()
  const [aboutDetails, setAboutDetails] = useState({
    clgAge: '',
    clgAbout: 'loding...',
    princlpalImg: imgIcon,
    princlpalName: 'loding...',
    princlpaMsg: 'loding...'
  })
  const [isLoding,setIsLoding] = useState(false)

  const getAbout = async () => {
    try {
      const bgimgs = await axios.get(`${url}/api/about`)
      setIsLoding(true)
      const { clgAge, clgAbout, princlpal } = bgimgs.data.payload[0]
      setAboutDetails({
        clgAge: clgAge,
        clgAbout: clgAbout,
        princlpalImg: princlpal.img,
        princlpalName: princlpal.princlpalname,
        princlpaMsg: princlpal.princlpalmsg
      })
    } catch (error) {
      console.log(error.message)
    }
  }


  useEffect(() => {
    getAbout()
  }, [aboutDetails,aboutDetails.clgAge])
 
  return (
    <>
    {isLoding ?
    <div className='teacher px-10 mb-9'>
    <div className='text-center pt-16'>
      <h2 className='text-2xl text-gray-500'>Welcome to</h2>
      <h1 className='font-bold text-3xl text-gray-700'> Ullpara science collage</h1>
    </div>
    <div className='grid  md:grid-cols-2 xl:grid-cols-3 mt-6 lg:gap-12 gap-10 xl:gap-8 md:gap-11 '>

      <div className=' text-center select-none mb-7 md:mb-0 lg:mb-0 -mt-12 lg:-mt-10 xl:-mt-0 md:-mt-0 '>
        <p className='textbg  font-black xl:text-[180px] lg:text-[200px] text-[250px] '>{aboutDetails.clgAge}</p>
        <h1 className='text-2xl lg:-mt-9 md:-mt-10 -mt-10 uppercase font-serif font-semibold text-gray-600'>years of excellence</h1>
      </div>

      <div className='flex flex-col lg:gap-8 md:gap-4 gap-10  items-center justify-center '>
        <p className='text-gray-600 '>{aboutDetails.clgAbout}</p>
        <div className='flex justify-center gap-5'>
          <button className='select-none border border-orange-500 p-2 hover:bg-orange-500 transition-all duration-500 hover:text-white'>More About us</button>
          <button className='select-none border border-orange-500 p-2 hover:bg-orange-500 transition-all duration-500 hover:text-white'>Admission now</button>
        </div>
      </div>

      <div className='w-full flex items-center justify-center '>
        <div className='bg-gray-300 p-2 flex flex-col  justify-center xl:w-2/3 lg:w-[80%] rounded-lg '>
          <img src={aboutDetails.princlpalImg} className=' rounded-lg w-[70%] ml-10  xl:w-2/3 lg:w-2/3 md:w-2/4  px-5 md:px-0 xl:ml-10 lg:ml-14 select-none mb-1' />
          <h1 className='rounded-sm shadow-md  shadow-gray-600 italic bg-slate-200 text-black lg:text-xl xl:text-sm text-lg lg:font-semibold xl:font-medium text-center mx-10 '>Princlpal's Message</h1>
          <h1 className='xl:font-medium lg:text-xl xl:text-base text-lg font-bold  mx-3 italic mt-3'>{aboutDetails.princlpalName}</h1>
          <p className='xl:text-sm text-lg  text-center text-black '>{aboutDetails.princlpaMsg}.</p>
          <button className='pt-3 italic hover:underline font-medium'>Read more...</button>
        </div>
      </div>
    </div>
  </div>
  :
  <div className='animate-pulse px-10 mb-9'>
  <div className='text-center pt-16'>
    <div className='h-6 bg-gray-200 rounded w-1/2 mx-auto'></div>
    <div className='h-8 bg-gray-200 rounded w-3/4 mx-auto mt-2'></div>
  </div>
  <div className='grid md:grid-cols-2 xl:grid-cols-3 mt-6 lg:gap-12 gap-10 xl:gap-8 md:gap-11 '>

    <div className='animate-pulse text-center select-none mb-7 md:mb-0 lg:mb-0 -mt-12 lg:-mt-10 xl:-mt-0 md:-mt-0 '>
      <div className='h-72 bg-gray-200 rounded mx-auto'></div>
      <div className='h-8 bg-gray-200 rounded w-3/4 mx-auto mt-2'></div>
    </div>

    <div className='animate-pulse flex flex-col lg:gap-8 md:gap-4 gap-10 items-center justify-center '>
      <div className='h-6 bg-gray-200 rounded w-1/2 mx-auto'></div>
      <div className='flex justify-center gap-5 mt-2'>
        <div className='h-10 bg-gray-200 rounded w-24'></div>
        <div className='h-10 bg-gray-200 rounded w-24'></div>
      </div>
    </div>

    <div className='animate-pulse w-full flex items-center justify-center '>
      <div className='bg-gray-200 p-2 flex flex-col justify-center xl:w-2/3 lg:w-[80%] rounded-lg '>
        <div className='h-24 bg-gray-200 rounded mx-auto w-3/4'></div>
        <div className='h-6 bg-gray-200 rounded my-3'></div>
        <div className='h-8 bg-gray-200 rounded w-3/4 mx-auto'></div>
        <div className='h-16 bg-gray-200 rounded mt-3'></div>
        <div className='h-8 bg-gray-200 rounded mt-3'></div>
      </div>
    </div>
  </div>
</div>
  }
  </>
  )
}

export default About