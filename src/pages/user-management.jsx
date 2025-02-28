import React from 'react'
import Sidebar from '../component/sidebar'
import { FaPlus } from "react-icons/fa6";
import SearchBox from '../component/ui/search-box';
import NotificationBtn from '../component/ui/notification-btn';
import ProfileImg from '../component/ui/profile-img';
import profilePic from '../assets/img/profile-vi.png'
import { BsThreeDotsVertical } from "react-icons/bs";

const UserManagement = () => {

  const userDetails = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='bg-secondary w-full'>
        <header className='h-24 px-8 py-4 flex items-center justify-between'>
          <h3 className='text-4xl text-black-light font-bold font-jakarta'>User Management</h3>
          <div className='h-full flex items-center gap-x-6'>
            <div className='flex items-center justify-center h-full p-5 gap-x-3 bg-primary rounded-2xl drop-shadow-lg'>
              <button className='text-white text-xl font-semibold font-jakarta'>Add Member</button>
              <FaPlus className='fill-white size-6'/>
            </div>
            <SearchBox/>
            <NotificationBtn/>
            <ProfileImg/>
          </div>
        </header>
        <div className=' h-screen px-10 py-5'>
          <div className='grid grid-cols-10 px-8 py-4 rounded-xl'>
            <h4 className='text-xl font-semibold text-black-light font-jakarta'>ID</h4>
            <h4 className='text-xl font-semibold text-black-light font-jakarta col-span-2'>User Name</h4>
            <h4 className='text-xl font-semibold text-black-light font-jakarta col-span-3'>Email</h4>
            <h4 className='text-xl font-semibold text-black-light font-jakarta col-span-2'>User Role</h4>
            <h4 className='text-xl font-semibold text-black-light font-jakarta col-span-2'>Status</h4>
          </div>
            <div className='h-screen overflow-y-auto scrollbar-hide pb-10'>
              {
                userDetails.map((data, index)=>(
                  <div className='grid grid-cols-10 items-center px-8 py-4' key={index}>
                    <h4 className='text-lg text-gray font-jakarta'>#78590</h4>
                    <div className='flex items-center gap-x-3 col-span-2'>
                      <img src={profilePic} alt="" className='rounded-full w-10' />
                      <h4 className='text-lg text-gray font-jakarta'>John Doe</h4>
                    </div>
                    <h4 className='text-lg text-gray font-jakarta col-span-3'>Johndoe@gmail.com</h4>
                    <h4 className='text-lg text-gray font-jakarta col-span-2 pl-7'>User</h4>
                    <div className='flex items-center justify-between  col-span-2'>
                      <h4 className='text-lg text-gray font-jakarta'>* Pending</h4>
                      <BsThreeDotsVertical className='size-6' />
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserManagement