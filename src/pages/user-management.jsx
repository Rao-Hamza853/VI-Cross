import React from 'react'
import Sidebar from '../component/sidebar'
import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import profilePic from '../assets/img/profile-vi.png'

const UserManagement = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-secondary w-full'>
        <header className='h-28 px-6 py-4 flex items-center justify-between'>
          <h3 className='text-4xl text-black-light font-bold font-jakarta'>User Management</h3>
          <div className='h-full flex items-center gap-x-6'>
            <div className='flex items-center justify-center h-full p-5 gap-x-3 bg-primary rounded-3xl'>
              <button className='text-white text-xl font-semibold font-jakarta'>Add Member</button>
              <FaPlus className='fill-white size-6'/>
            </div>
            <div className='bg-white h-full flex items-center justify-center gap-x-2 p-5 rounded-3xl'>
              <IoSearchOutline className='size-9' />
              <input type="text" placeholder='Search in dashboard...' className='w-[30rem] outline-none text-xl' />
            </div>
            <div className='bg-white h-full w-20 p-5 flex items-center justify-center rounded-3xl relative'>
              <RiNotification2Line className='size-9' />
              <div className='bg-red-500 w-7 text-lg text-white flex items-center justify-center rounded-lg absolute top-3 left-10'>
                8
              </div>
            </div>
            <div className='h-full'>
              <img src={profilePic} alt="Profile Pic" className='h-full'/>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default UserManagement
{/* <GoPlus /> */}