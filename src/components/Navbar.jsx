import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const {aToken, setAToken} = useContext(AdminContext)

    const navigate  = useNavigate()
    
    const logout = () => {
        navigate('/')
        // aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 bg-[#fff]'>
        <div className='flex item-center gap-2 text-sm '>
            {/* <img src={assets.admin_logo} alt="" /> */}
            <p className='border text-primary px-2 py-0.5 font-bold rounded-full border-gray-500 text-gray-600 hover:bg-primary hover:text-[#fff] transition-all duration-300 cursor-pointer '>{aToken ? 'admin' : 'Doctor'}</p>
        </div>
        <button onClick={logout} className='bg-primary px-8 py-2 font-bold text-[#ffff] rounded-full text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
