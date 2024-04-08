import React from 'react'
import { Image } from '../utilities/Image'
import footerImg from '../assets/images/logo.png'
import Input from '../componants/Input'
import Button from '../componants/Button'
import PeraGrap from '../utilities/PeraGrap'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='py-[100px] bg-footer-bg'>
      <div className='max-w-container mx-auto'>
        <div className='flex justify-between'>
          <div>
              <div className='pb-[30px]'>
                <picture>
                  <Image source={footerImg} alt="img not found"/>
                </picture>
              </div>
              <div className='w-[370px] relative'>
                <Input placeholder="Enter Email Address" type="email" style=" rounded-md  border-0 outline-0 py-[14px] px-[20px] text-heading-color font-lato text-base font-normal placeholder:text-heading-color placeholder:capitalize placeholder:font-lato placeholder:text-base w-full"/>
                <Button text="Sign Up" style="bg-btn-color py-[14px] px-[40px] rounded-md text-white font-lato font-medium capitalize absolute top-0 right-0"/>
              </div>
              <div className='pt-[25px]'>
                <span className='text-heading-color font-lato text-base font-normal capitalize'>Contact Info</span>
                <PeraGrap text="16/4/ Danmondhi, Dhaka, Bangladesh" style="font-lato text-base font-normal text-pera-color pt-[10px]"/>
              </div>
          </div>
          <div>
            <h2 className='text-txt-color font-semibold text-2xl font-Josefin capitalize '>Catagories</h2>
            <div className='pt-[20px]'>
              <ul className='flex flex-col gap-[20px]'>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Laptops & Computers</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Cameras & Photography</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Smart Phones & Tablets</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Video Games & Consoles</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Waterproof Headphones</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className='text-txt-color font-semibold text-2xl font-Josefin capitalize '>Customer Care</h2>
            <div className='pt-[20px]'>
              <ul className='flex flex-col gap-[20px]'>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>My Account</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Discount</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Returns</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Orders History</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Order Tracking</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className='text-txt-color font-semibold text-2xl font-Josefin capitalize '>Pages</h2>
            <div className='pt-[20px]'>
              <ul className='flex flex-col gap-[20px]'>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Blog</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Browse the Shop</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Category</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Pre-Built Pages</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>Visual Composer Elements</Link></li>
                <li><Link to="#" className='text-pera-color font-Josefin font-normal capitalize'>WooCommerce Pages</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
