import React from 'react'
import CommonHading from '../Components/CommonHading'
import upload from '../assets/upload_area.png'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { url } from '../Context/context'

const OurGallery = () => {
  const [galleryImg,setGalleryImg] = useState(false)
  
  const handelSubmit = async (e) => {
    e.preventDefault()
     
    let fromData = new FormData()
    fromData.append('gallery',galleryImg)
    
    await axios.post(`${url}/api/ourgallery`,fromData,{
       headers:{
         'Content-Type': 'multipart/form-data',
       }
      })
     .then((result)=>{
         toast.success(result.data.message)
         setGalleryImg(false)
       })
       .catch((err)=>{
         toast.error(err.response.data.message)
       })


  }

  return (
    <div className='flex flex-col items-center'>
      <CommonHading text={'Add Our Gallery Image'}/>
      <form onSubmit={handelSubmit} className='flex w-[90%] gap-5 rounded-lg shadow-xl shadow-gray-400 flex-col items-center mt-11 bg-slate-200 py-5'>
        <label htmlFor="gallery" className='flex flex-col gap-3'>
          <p className='text-center font-semibold text-gray-600 text-xl'>Add image</p>
          <img src={!galleryImg ? upload : URL.createObjectURL(galleryImg)} className='rounded-lg w-56' alt="" />
          <input type="file" hidden id='gallery' onChange={(e)=>{setGalleryImg(e.target.files[0])}}/>
        </label>
        <button  type='submit' className='lg:w-[40%] w-[80%] py-2 rounded-lg hover:bg-orange-400 text-white font-bold text-xl bg-orange-500'>Add now</button>
      </form>
    </div>
  )
}

export default OurGallery