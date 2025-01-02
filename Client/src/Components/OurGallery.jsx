import React, { useEffect, useState } from 'react'
import axios from 'axios'
import img from '../assets/imgIcon.png'
import { NavLink } from 'react-router-dom'


const OurGallery = () => {
  const [galleryImg, setGalleryImg] = useState(false)
  const [imgCount, setImgCount] = useState(0)
  const getGalleryImg = async () => {
    const response = await axios.get('http://localhost:4000/api/ourgallery')
    setImgCount(response.data.payload.length)
    const firstEight = response.data.payload.slice(0,8)
    setGalleryImg(firstEight)
  }

  useEffect(() => {
    getGalleryImg()
  }, [galleryImg,imgCount])

  return (
    <div>
      {galleryImg ?
      <>
      <h1 className='text-center pt-12 lg:text-4xl text-3xl text-gray-600'>Our Gallery</h1>
      <div className=' grid lg:grid-cols-3  grid-cols-2   gap-6 mx-5 my-10'>
        {galleryImg && galleryImg.map((img, i) => {
          return <div key={i} className=' rounded-sm  overflow-hidden h-[90%]'>
            <img src={img.img} alt="" className='hover:scale-[1.1]  hover:duration-500 hover:transition-all ' />
          </div>
        })}
        <NavLink to={'/seeimages'} className={`${imgCount > 8 ? 'block' : 'hidden'  } h-[90%] rounded-sm  overflow-hidden flex  lg:justify-center relative cursor-pointer`}>
        <h1 className='absolute z-10 lg:top-48 bg-slate-400 py-1 px-2 rounded-full lg:left-36 top-1/2  left-14 text-2xl font-semibold lg:text-xl text-black italic'>See More...</h1><img src={img} alt="" className='hover:scale-[1.1] hover:duration-500 hover:transition-all  w-[70%]' />
        </NavLink>
      </div>
   </>
   :
   <div>
    <div className="animate-pulse">
      <div className="h-10 w-32 bg-gray-200 rounded mx-auto mb-10"></div>
    </div>
    <div className=' grid lg:grid-cols-3 grid-cols-2 gap-6 mx-5 my-10'>
      <div className='animate-pulse rounded-sm overflow-hidden h-[90%]'>
        <div className="h-40 bg-gray-200 rounded"></div>
      </div>
      <div className='animate-pulse rounded-sm overflow-hidden h-[90%]'>
        <div className="h-40 bg-gray-200 rounded"></div>
      </div>
      <div className='animate-pulse rounded-sm overflow-hidden h-[90%]'>
        <div className="h-40 bg-gray-200 rounded"></div>
      </div>
      {/* <!-- Some more similar grids --> */}
      <div className='animate-pulse rounded-sm overflow-hidden flex lg:justify-center relative cursor-pointer'>
        <div className="h-40 w-40 bg-gray-200 rounded absolute z-10"></div>
        <div className="h-40 w-40 mx-auto bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
  }
  </div>
   
  )
}

export default OurGallery