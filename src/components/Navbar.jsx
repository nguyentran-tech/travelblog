import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='font-primary flex items-center justify-center py-5 font-bold'>
        <ul className='sm:flex gap-24 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p className='text-[20px] text-primary'>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-secondary hidden' />
            </NavLink>
            <NavLink to='/our-trip' className='flex flex-col items-center gap-1'>
                <p className='text-[20px] text-primary'>DESTINATION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-secondary hidden' />
            </NavLink>
            <NavLink to='/image-gallery' className='flex flex-col items-center gap-1'>
                <p className='text-[20px] text-primary'>GALLERY</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-secondary hidden' />
            </NavLink>
        </ul>
    </div>
  )
}

export default Navbar