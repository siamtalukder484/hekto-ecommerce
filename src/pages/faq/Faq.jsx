import React from 'react'
import { Link } from 'react-router-dom'

const Faq = () => {
  return (
    <div>
       <div className="bg-[#F6F5FF] py-[100px]">
        <div className="max-w-container mx-auto">
          <div className="pl-[71px]">
            <h3 className="font-Josefin text-4xl leading-normal font-bold pb-2 text-[#101750]">
              FAQ
            </h3>
            <p className="text-black font-lato text-base font-medium leading-normal">
              Home.Pages.<Link className="text-btn-color" to="#">My Account</Link>
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Faq