import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
        <nav className='flex items-center font-bold gap-[20px] justify-center mt-[40px]'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
  )
}
