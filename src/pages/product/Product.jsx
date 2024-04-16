import React from 'react'
import { Link } from 'react-router-dom'

export const Product = () => {
  return (
    <div>   
      <div className="bg-[#F6F5FF] py-[100px]">
      <div className="max-w-container mx-auto">
      <div className="pl-[71px]">
        <h3 className="font-Josefin text-4xl leading-normal font-bold pb-2 text-[#101750]">
        Product Details
        </h3>
        <p className="text-black font-lato text-base font-medium leading-normal">
          Home.Pages.<Link className="text-btn-color" to="#">Product Details</Link>
        </p>
      </div>
    </div>
  </div></div>
  )
}
