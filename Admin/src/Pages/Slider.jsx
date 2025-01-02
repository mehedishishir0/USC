import React, { useState } from 'react'
import CommonHading from '../Components/CommonHading'
import upload from '../assets/upload_area.png'
import axios from 'axios'
import { toast } from 'react-toastify';
import { url } from '../Context/context';
const Slider = () => {
 const [slideImg,setSildeImg] = useState([]) 
  
 const  handelSubmit = async (e) =>{
  e.preventDefault()
  
  let fromData = new FormData()
  
   slideImg.forEach((file) => {
    fromData.append('slideImg', file); // Use 'slideImg[]' to send as an array
  });
  
   await axios.post(`${url}/api/slider`,fromData,{
    headers: {
      'Content-Type': 'multipart/form-data', // Important for sending files
    },
   })
  .then((result)=>{
    toast.success(result.data.message)
    setSildeImg([])
  })
  .catch((err)=>{
    toast.error(err.response.data.message)
  })

 }


 return (
    <div className='flex flex-col justify-center items-center'>
      <CommonHading text={'Add Slider Image'} />
      <form onSubmit={handelSubmit} className='flex w-[90%] gap-5 rounded-lg shadow-xl shadow-gray-400 flex-col items-center mt-11 bg-slate-200 py-5'>
       <div className='flex flex-col mt-24 w-full justify-center items-center'>
       <label htmlFor="img" className='flex flex-col gap-5 justify-center items-center'>
          <h1 className=' text-xl font-medium text-gray-500'>Upload your Image</h1>
          <img src={slideImg.length === 0 ? upload : URL.createObjectURL(slideImg[0])} alt="" className='w-36 ' />
          <input type="file" multiple hidden id='img'  onChange={(e)=>{setSildeImg(Array.from(e.target.files))}}/>
        </label>
        <div className=' w-full flex gap-3 items-center justify-center'>
        {
         slideImg.slice(1).map((item, i)=>(
          <div key={i} className=''>
           <img src={item ? URL.createObjectURL(item):null} className=' aspect-[3/2] object-contain w-44' />
          </div>
          ))
        }
        </div>
       </div>
        <button type='submit' className='bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-2 px-4 rounded-md'> Submit</button>
      </form>
    </div>
  )
}

export default Slider