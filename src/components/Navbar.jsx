import React from 'react'
import { NavLink, useNavigate } from 'react-router'
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className='nav flex justify-between font-sans p-3 items-center px-10' >
      <div> <h1 className='  text-3xl font-bold cursor-pointer' onClick={()=>navigate('/')}>Trexo</h1> </div>
      <div className=' '><NavLink to="/userdata">Users</NavLink></div>
    </div>
  )
}

export default Navbar
