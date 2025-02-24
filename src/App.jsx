import React, { useContext } from 'react'
import Login from './page/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Siderbar from './components/Siderbar';
import { Route, Routes } from 'react-router-dom';
import DoctorList from './page/Admin/DoctorList';
import Dashboard from './page/Admin/Dashboard';
import AllApointment from './page/Admin/AllApointment'
import AddDoctor from './page/Admin/AddDoctor'

const App = () => {

  const { aToken } = useContext(AdminContext)
  return aToken ? (
    <div className="bg-[#f8f9fd]">
    
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Siderbar/>
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard/>} />
          <Route path='/all-appointment' element={<AllApointment/>} />
          <Route path='/add-doctor' element={<AddDoctor/>} />
          <Route path='/doctor-list' element={< DoctorList/>} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App
