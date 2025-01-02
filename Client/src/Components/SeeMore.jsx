import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ScrollToTop from '../Helper/scroll'

const SeeMore = () => {
  ScrollToTop()
  const [galleryImg, setGalleryImg] = useState(false)
  
    const getGalleryImg = async () => {
        const response = await axios.get('http://localhost:4000/api/ourgallery')
        setGalleryImg(response.data.payload)
    }
    useEffect(() => {
        getGalleryImg()
    }, [galleryImg])

    return (
        <div>
            {galleryImg?
            <>
            <h1 className='text-center pt-12 lg:text-4xl text-3xl text-gray-600'>Our Gallery</h1>
            <div className=' grid lg:grid-cols-3  grid-cols-2  gap-6 mx-5 my-10'>
                {galleryImg && galleryImg.map((img, i) => {
                    return <div key={i} className=' rounded-sm overflow-hidden  h-[90%]'>
                        <img src={img.img} alt="" className='hover:scale-[1.1] hover:duration-500 hover:transition-all ' />
                    </div>
                })}
            </div>
            </>
            :
            <div>
            <div className="animate-pulse mt-24">
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

export default SeeMore