import React from 'react'
import { Image } from '../utilities/Image'
import footerImg from '../assets/images/logo.png'
import Input from '../componants/Input'
import Button from '../componants/Button'
import PeraGrap from '../utilities/PeraGrap'

export const Footer = () => {
  return (
    <footer className='py-[100px] bg-footer-bg'>
      <div className='max-w-container mx-auto'>
        <div>
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
              <div>
                <span>Contact Info</span>
                <PeraGrap text="17 Princess Road, London, Greater London NW1 8JR, UK"/>
              </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  )
}
