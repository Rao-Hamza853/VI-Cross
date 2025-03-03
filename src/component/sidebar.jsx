import { Link, useLocation } from 'react-router';
import logo from '../assets/img/vi-cross-logo.png'
import { links } from '../lib/constant';



const Sidebar = () => {
  const location = useLocation()
  return (
    <div className='bg-primary h-screen w-[20%] p-3 xl:p-5 2xl:p-8'>
      <div className='bg-gray-80 flex flex-col items-center w-full gap-y-20'>
        <img src={logo} alt="Logo" className='w-[60%] mt-5' />
        <div className='w-full space-y-3'>
          {
            links.map((link)=>(
              <Link to={link.path} key={link.id} className={`${location.pathname === link.path ? "bg-white" : "bg-transparent"} flex items-center gap-1.5 px-2 py-2 xl:py-3 xl:gap-4 xl:px-4 2xl:py-5 rounded-xl`}>
                <link.icon  className={`${location.pathname === link.path ? "text-primary" : "text-white"} size-5`} />
                <p className={`xl:text-xl ${location.pathname === link.path ? "text-primary" : "text-white"} ${location.pathname === link.path ? "font-extrabold" : "font-normal"} leading-5 font-jakarta`}>{link.title}</p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar

