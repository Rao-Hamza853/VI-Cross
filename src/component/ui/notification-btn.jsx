import { RiNotification2Line } from "react-icons/ri";

const NotificationBtn = () => {
  return (
    <div className='bg-white h-full px-3 flex items-center justify-center rounded-2xl relative drop-shadow-lg'>
        <RiNotification2Line className='size-7' />
        <div className='bg-red-500 w-4 h-4 text-white text-xs flex items-center justify-center rounded-md absolute top-2 left-6'>
         8
        </div>
    </div>
  )
}

export default NotificationBtn
