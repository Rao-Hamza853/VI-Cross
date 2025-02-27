import { RiNotification2Line } from "react-icons/ri";

const NotificationBtn = () => {
  return (
    <div className='bg-white h-full px-4 flex items-center justify-center rounded-2xl relative drop-shadow-lg'>
        <RiNotification2Line className='size-8' />
        <div className='bg-red-500 w-5 h-5 text-white flex items-center justify-center rounded-lg absolute top-3 left-8'>
         8
        </div>
    </div>
  )
}

export default NotificationBtn
