import React, { useState } from 'react'
import CommonHading from '../Components/CommonHading'
import upload from '../assets/upload_area.png'
import { toast } from 'react-toastify'
import axios from 'axios'

const About = () => {
  const [clgAge, setClgAge] = useState('')
  const [clgDtls, setClgDtls] = useState('')
  const [prplImg, setPrplImg] = useState(false)
  const [prplName, setPrplName] = useState('')
  const [prplMsg, setPrplMsg] = useState('')

  const handelSubmit = async (e) => {
    e.preventDefault()
    if (!prplImg) {
      toast.error('Image is Required')
    }
   
   let fromData = new FormData()
  fromData.append('clgAge',clgAge)
  fromData.append('clgAbout',clgDtls)
  fromData.append('princlpalname',prplName)
  fromData.append('princlpalmsg',prplMsg)
  fromData.append('princlpalimg',prplImg)
  
  await axios.post('http://localhost:4000/api/about',fromData,{
    headers:{
      'Content-Type': 'multipart/form-data',
    }
  }).then((response)=>{
    toast.success(response.data.message)
  })
  .catch((err)=>{
    toast.error(err.response.data.message)
  })

  }



  return (
    <div className='w-full flex flex-col items-center'>
      <CommonHading text={'Add About Details'} />
      <form onSubmit={handelSubmit} className='flex w-[90%] gap-5 rounded-lg shadow-xl shadow-gray-400 flex-col items-center mt-11 bg-slate-200 py-5'>
        <div className='w-full flex flex-col lg:flex-row gap-5 items-center lg:items-start justify-center'>
          <div className='flex flex-col lg:w-[40%] w-[80%] gap-3 border '>
            <div className='flex flex-col gap-3'>
              <label htmlFor="clgAge" className='text-center font-semibold text-gray-600 text-xl'>Collage Age</label>
              <input type="text" onChange={(e) => { setClgAge(e.target.value) }} value={clgAge} className='w-full px-3 py-3 bg-transparent border-gray-400 border rounded-lg outline-none' placeholder='enter collage age' id='clgAge' required />
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor="clgdetails" className='text-center font-semibold text-gray-600 text-xl'>Collage Details</label>
              <input type="text" onChange={(e) => { setClgDtls(e.target.value) }} value={clgDtls} className='w-full px-3 py-3 bg-transparent border-gray-400 border rounded-lg outline-none' placeholder='enter collage details' id='clgdetails' required />
            </div>

          </div>
          <div className='flex lg:flex-col-reverse flex-col lg:w-[40%] w-[80%] gap-3 '>
            <div className='flex justify-center'>
              <label htmlFor="princlpalImg" className='flex flex-col items-center gap-3'>
                <p className='text-center font-semibold text-gray-600 text-xl'>Princlpal Image</p>
                <img src={!prplImg ? upload : URL.createObjectURL(prplImg)} alt="" className='w-24 object-cover rounded-md' />
                <input type="file" id='princlpalImg' hidden onChange={(e) => { setPrplImg(e.target.files[0]) }} />
              </label>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col w-full gap-3'>
                <label htmlFor="princlpalName" className='text-center font-semibold text-gray-600 text-xl'>Princlpal Name</label>
                <input required type="text" onChange={(e) => setPrplName(e.target.value)} id='princlpalName' className='w-full px-3 py-3 bg-transparent border-gray-400 border rounded-lg outline-none' placeholder='enter princlpale name' />
              </div>
              <div className='flex flex-col gap-3'>
                <p className='text-center font-semibold text-gray-600 text-xl'>Princlpale Message </p>
                <textarea required onChange={(e) => setPrplMsg(e.target.value)} className='w-full px-3 resize-none py-3 bg-transparent border-gray-400 border rounded-lg outline-none' id="princlpaleMsg" placeholder='enter message'></textarea>
              </div>
            </div>
          </div>
        </div>
        <button type='submit' className='lg:w-[40%] w-[80%] py-2 rounded-lg hover:bg-orange-400 text-white font-bold text-xl bg-orange-500'>Submit</button>
      </form>
    </div>
  )
}

export default About