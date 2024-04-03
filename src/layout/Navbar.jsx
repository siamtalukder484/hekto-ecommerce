import React from 'react'
import { Header } from './Header'
import logoImg from '../assets/images/logo.png'
import { Image } from '../utilities/Image'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='py-[15px]'>
            <div className='max-w-container mx-auto'>
                <div className='flex justify-between'>
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
                    <div>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar