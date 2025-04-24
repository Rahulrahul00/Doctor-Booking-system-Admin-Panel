import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../../context/DoctorContext'
import { AppContext } from '../../../context/AppContext'
import { assets } from '../../../../../admin/src/assets/assets'

const DoctorAppointments = () => {

  const {dToken, appointments, getAppointments} = useContext(DoctorContext)

  const {calculateAge, slotDateFormat, currency} = useContext(AppContext)
  
  useEffect(()=>{
    if(dToken){
      getAppointments()
    }

  },[dToken])

  return (
    <div className='w-full max-w-6xl m-5'>
      <p>All Appointments</p>

      <div className='bg-white border rounded text-sm min-h-[50vh] max-h-[80vh] overflow-y-scroll'>

        <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-3 border-b'>
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Data & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {
          appointments.map((item,index)=>(
            console.log("Slot:", item.slotTime),
       
            <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-100' key={index}>
              <p className='max-sm:hidden'>{index+1}</p>
              <div className='flex items-end gap-2'>
                <img className='w-8 rounded-full  ' src={item.userData.image} alt="" /> <p >{item.userData.name}</p>
              </div>
              <div>
                <p className="text-xs inline border border-primary px-2 rounded-full">
                  {item.payment ? 'Online' :'CASH'}
                </p>
              </div>
              <p>{calculateAge(item.userData.dob)}</p>
              <p>{slotDateFormat(item.slotDate)}</p>
              <p>{currency}{item.amount}</p>
              <div className='flex'>
                <img className="w-10 cursor-pointer"  src={assets.cancel_icon} alt="" />
                <img className="w-10 cursor-pointer" src={assets.tick_icon} alt="" />
              </div>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default DoctorAppointments
