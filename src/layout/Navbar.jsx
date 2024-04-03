import React from 'react'
import { Header } from './Header'
import logoImg from '../assets/images/logo.png'
import { Image } from '../utilities/Image'
import { NavLink } from 'react-router-dom'
import Input from '../componants/Input'
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='py-[15px]'>
            <div className='max-w-container mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <picture>
                            <Image source={logoImg} alt="img not found"/>
                        </picture>
                    </div>
                    <div>
                        <ul className='flex gap-x-[35px]'>
                            <li>
                                <NavLink className="font-lato font-normal text-base capitalize">home</NavLink>
                            </li>
                            <li>
                                <NavLink className="font-lato font-normal text-base capitalize">Pages</NavLink>
                            </li>
                            <li>
                                <NavLink className="font-lato font-normal text-base capitalize">Pages</NavLink>
                            </li>
                            <li>
                                <NavLink className="font-lato font-normal text-base capitalize">Pages</NavLink>
                            </li>
                            <li>
                                <NavLink className="font-lato font-normal text-base capitalize">Shop</NavLink>
                            </li>
                            <li>
                                <NavLink className="font-lato font-normal text-base capitalize">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='relative'>
                        <Input style="border-2  border-[#E7E6EF] px-[15px] py-[8px] w-[300px]" type="text"/>
                        <div className='bg-btn-color py-[11px] px-[13px] inline-block text-white text-xl absolute right-[-7px] top-0 cursor-pointer'>
                            <IoSearchOutline />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar