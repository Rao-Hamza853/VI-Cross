import React from 'react'

const AcceptBtn = ({bgColor}) => {
  return (
    <div>
      <button className={`${bgColor === "green" ? "bg-[#3ABB5D]" : "bg-[#FF5B5B]"} text-white px-6 py-1.5 rounded-md cursor-pointer`}>{bgColor === "green" ? "Accept" : "Reject"}</button>
    </div>
  )
}

export default AcceptBtn
