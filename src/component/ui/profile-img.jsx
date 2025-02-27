import profilePic from '../../assets/img/profile-vi.png'

const ProfileImg = () => {
  return (
    <div className='h-full drop-shadow-lg'>
        <img src={profilePic} alt="Profile Pic" className='h-full'/>
    </div>
  )
}

export default ProfileImg
