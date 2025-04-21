import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {

    const {aToken, setAToken} = useContext(AdminContext)
    const {dToken, setDToken} = useContext(DoctorContext)

    const navigate  = useNavigate()
    
    const logout = () => {
     
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        navigate('/')

        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
        navigate('/')
       
    }
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 bg-[#fff] border'>
        <div className='flex item-center gap-2 text-sm '>
        {/* <h1  onClick={()=>navigate('/')} className="text-xl font-bold  text-primary cursor-pointer "><span className='text-4xl' >D</span>oc<span className='text-4xl '>T</span>ym</h1> */}
        <h1 className="text-3xl font-bold  text-primary cursor-pointer ">DocTym</h1> 
       
            <p className='mx-20 my-2 border text-primary h-6 w-20 px-4 py-0.5 text-sm font-bold rounded-full border-gray-500 hover:bg-primary hover:text-[#fff] transition-all duration-300 cursor-pointer '>{aToken ? 'admin' : 'Doctor'}</p>
        </div>
        <button onClick={logout} className='bg-primary px-8 py-2 font-bold text-[#ffff] rounded-full text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
