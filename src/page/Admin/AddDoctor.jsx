import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDoctor = () => {

  const [docImg, setDocImg] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] =useState('')
  const [speciality, setSpeciality] = useState('General Physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const {aToken, backenUrl} = useContext(AdminContext)


  const onSubmitHandler = async (e) => {
     e.preventDefault()
     try{

      if(!docImg){
        toast.error('Image Not Selected')
        return 
      }
      // const respone = await axios.post(`backendUrl + /api/admin/add-doctor` )

     }catch(error){
      console.log(error)
     }

  }


  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>
      <p className='mb-3 text-lg font-medium'>Add Doctor</p>

      <div className='bg-[#fff] px-8 py-8 border border-primary rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img  className="w-16 bg-gray-100 rounded-full cursor-pointer" src={docImg instanceof Blob ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
            
          </label>
          <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" id='doc-img' hidden />
          <p>Upload doctor <br /> Picture</p>
        </div>
        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex-col gap-4' >
            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor name</p>
              <input onChange={(e)=>setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Name' required />
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Email</p>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border rounded px-3 py-2 bg-slate-100 outline-none' type="email" placeholder='Email' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor password</p>
              <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border rounded px-3 py-2 bg-slate-100 outline-none' type="password" placeholder='password' required />
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Experience</p>
              <select onChange={(e)=>setExperience(e.target.value)} value={experience} name="" id="">
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <input onChange={(e)=>setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='fees' required />
            </div>
          </div>
          <div className='w-full lg:flex-1 flex-col gap-4 '>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Speciality</p>
              <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2'  name="" id="">
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>

              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Education</p>
              <input onChange={(e)=> setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='Education' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Address</p>
              <input onChange={(e) => setAddress1(e.target.value)} value={address1}  className='border rounded px-3 py-2' type="text" placeholder="address1" required />
              <input onChange={(e) => setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder="address2" required />
            </div>

          </div>
        </div>

        <div>
          <p className='mt-4 mb-2'>About Doctor</p>
          <textarea onChange={(e)=> setAbout(e.target.value)} value={about} className='w-full border rounded px-4 pt-2' placeholder='Write about doctor' rows={5}></textarea>
        </div>
        <button type='submit' className='bg-primary px-10 mt-4 py-2 rounded-full text-[#fff] hover:bg-indigo-400 transition-all duration-300  '>Add Doctor</button>
      </div>
    </form>
  )
}

export default AddDoctor
