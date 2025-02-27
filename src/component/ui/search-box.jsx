import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className='bg-white h-full flex items-center justify-center gap-x-2 p-5 rounded-2xl drop-shadow-lg'>
        <IoSearchOutline className='size-9' />
        <input type="text" placeholder='Search in dashboard...' className='w-[30rem] outline-none text-xl' />
    </div>
  )
}

export default SearchBox
