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
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './page/Admin/Doctor/DoctorDashboard';
import DoctorAppointments from './page/Admin/Doctor/DoctorAppointments';
import DoctorProfile from './page/Admin/Doctor/DoctorProfile';

const App = () => {

  const { aToken } = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className="bg-[#f8f9fd]">
    
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Siderbar/>
        <Routes>
        {/* Admin Route */}
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard/>} />
          <Route path='/all-appointment' element={<AllApointment/>} />
          <Route path='/add-doctor' element={<AddDoctor/>} />
          <Route path='/doctor-list' element={< DoctorList/>} />

          {/* Doctor Route */}
          <Route path='/doctor-dashboard' element={< DoctorDashboard/>} />
          <Route path='/doctor-appointments' element={<DoctorAppointments/>}/>
          <Route path='/doctor-profile' element = {<DoctorProfile/>}/>

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
