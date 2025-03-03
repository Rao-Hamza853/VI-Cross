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
    {
      status : 'Pending'
    },
    {
      status : 'Active'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Active'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Active'
    },
    {
      status : 'Active'
    },
    {
      status : 'Active'
    },
    {
      status : 'Active'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Active'
    },
    {
      status : 'Active'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Active'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Active'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Active'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Active'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Active'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Active'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Pending'
    },
    {
      status : 'Pending'
    },
  ]
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar/>
      <div className='bg-secondary h-screen w-full'>
        <header className='h-24 px-5 xl:px-8 py-5 2xl:py-4 flex items-center justify-between'>
          <h3 className='text-2xl xl:text-3xl 2xl:text-4xl text-black-light font-bold font-jakarta'>User Management</h3>
          <div className='h-full flex items-center gap-x-6'>
            <div className='flex items-center justify-center h-full p-3 gap-x-3 bg-primary rounded-2xl drop-shadow-lg'>
              <button className='text-white xl:text-xl font-semibold font-jakarta'>Add Member</button>
              <FaPlus className='fill-white xl:size-6'/>
            </div>
            <SearchBox/>
            <NotificationBtn/>
            <ProfileImg/>
          </div>
        </header>
        <div className='px-10 py-5'>
          <div className='grid grid-cols-10 px-8 py-4 rounded-xl bg-white/85'>
            <h4 className='text-lg xl:text-xl font-semibold text-black-light font-jakarta'>ID</h4>
            <h4 className='text-lg xl:text-xl font-semibold text-black-light font-jakarta col-span-2'>User Name</h4>
            <h4 className='text-lg xl:text-xl font-semibold text-black-light font-jakarta col-span-3'>Email</h4>
            <h4 className='text-lg xl:text-xl font-semibold text-black-light font-jakarta col-span-2'>User Role</h4>
            <h4 className='text-lg xl:text-xl font-semibold text-black-light font-jakarta col-span-2'>Status</h4>
          </div>
            <div className='h-screen overflow-y-auto scrollbar-hide pb-52'>
              {
                userDetails.map((data, index)=>(
                  <div className={` grid grid-cols-10 items-center rounded-xl px-8 py-2 my-3 ${index % 2 === 0 ? "bg-transparent" :"bg-white/80 "} `} key={index}>
                    <h4 className='xl:text-lg text-gray font-jakarta'>{index}</h4>
                    <div className='flex items-center gap-x-3 col-span-2'>
                      <img src={profilePic} alt="" className='rounded-full w-9 xl:w-10' />
                      <h4 className='xl:text-lg text-gray font-jakarta'>John Doe</h4>
                    </div>
                    <h4 className='xl:text-lg text-gray font-jakarta col-span-3'>Johndoe@gmail.com</h4>
                    <h4 className='xl:text-lg text-gray font-jakarta col-span-2 pl-7'>User</h4>
                    <div className='flex items-center justify-between  col-span-2'>
                      <h4 className={`xl:text-lg font-jakarta ${data.status === 'Pending' ? "text-red-500" : "text-green-500"} `}>* {data.status}</h4>
                      <BsThreeDotsVertical className='size-5 xl:size-6' />
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