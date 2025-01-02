import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from '../assets/imgIcon.png'


const Slide = () => {
  const [bgSlider, setBgSlider] = useState(false)

  const getSliderImg = async () => {
    const bgimgs = await axios.get('http://localhost:4000/api/slider')
    bgimgs.data.payload.map((img) => setBgSlider(img.img))
  }

  useEffect(() => {
    getSliderImg()
  }, [bgSlider])


  return (
    <div className='border w-full lg:h-[25rem] h-[15rem] xl:h-[40rem] overflow-hidden'>
      {bgSlider ?
       <Carousel inter val={4000} infiniteLoop transitionTime autoPlay showArrows={false} stopOnHover={false} >
       {bgSlider.map((img, i) => (
         <div key={i} className='  '>
           <img src={img} className='w-full object-contain ' />
         </div>
       ))
       }
     </Carousel> 
      : <div className='border w-full lg:h-[25rem] h-[15rem] xl:h-[40rem] overflow-hidden animate-pulse'>
      <div className="bg-gray-200 h-full w-full"></div>
    </div>}
    </div>
  )
}

export default Slide