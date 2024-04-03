import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";

export const Header = () => {
  return (
    <header className='bg-head-bg py-[15px]'>
        <div className='max-w-container mx-auto'>
            <div>  
                <div className='flex gap-x-[45px]'>
                    <div><h5 className='flex items-center gap-x-[10px] text-white font-Josefin font-semibold text-sm'> <MdEmail /><Link to="#">example@gmail.com</Link></h5></div>
                    <div><h5 className='flex items-center gap-x-[10px] text-white font-Josefin font-semibold text-sm'> <MdAddCall /><Link to="#">+88 0170000000</Link></h5></div>
                </div>
            </div>
            <div></div>
        </div>
    </header>
  )
}
