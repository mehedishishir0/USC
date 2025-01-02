import React, { useEffect, useState } from 'react'
import CommonHading from './CommonHading'
import axios from 'axios'
import closeicon from '../assets/close.png'
import { toast } from 'react-toastify'

const GalleryDeleted = () => {
  const [gallery,setGalleryImg] = useState(false)

  const deletedImg = async () => {
     await axios.get('http://localhost:4000/api/ourgallery')
    .then((response)=>{
      setGalleryImg(response.data.payload)
    })
    .catch((err)=>{
      toast.error(err.response.data.message)
    })
  }

  const handelClick = async (id) => {
   await axios.post('http://localhost:4000/api/ourgallery/delete',{id})
   .then((response)=>{
    toast.success(response.data.message)
   })
   .catch((err)=>{
    toast.error(err.response.data.message)
   })
  }

  useEffect(()=>{
    deletedImg()
  },[gallery,handelClick])
  
  return (
    <div>
      <CommonHading text={'Delete your image'}/>
      <div>
        <div className='flex flex-col gap-3 mx-6'>
             {gallery && gallery.map((item,i)=>(
              <div key={i} className='w-full border rounded-xl flex gap-4 pr-5 bg-slate-300 justify-between items-center'>
              <img src={item.img} alt="" className='w-28 rounded-lg'/> 
                <img onClick={()=>{handelClick(item._id)}} src={closeicon} alt=""  className='w-5 cursor-pointer '/>
             </div>
             ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryDeleted