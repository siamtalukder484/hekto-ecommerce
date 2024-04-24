import React from 'react'
import { FaStar } from "react-icons/fa6";



const Rating = ({ productname, deletPrice, price,review}) => {
  return (
    <div>
        <div class="flex  items-center gap-[9px] ">
            <div className='flex items-center  gap-[3px]'>
            <div className='w-3 h-3 text-yellow-300'> <FaStar /> </div> 
            <div className='w-3 h-3 text-yellow-300'> <FaStar /> </div>
            <div className='w-3 h-3 text-yellow-300'> <FaStar /> </div>
            <div className='w-3 h-3 text-yellow-300'> <FaStar /> </div>
            <div className='w-3 h-3 text-yellow-300'> <FaStar /> </div>
            </div>
            <div className='text-sm font-semibold items-center '>{review}</div>
        </div>
    
          <div className='flex pt-[14px] gap-4 '>
              <span className='text-hading-color font-lato font-normal text-lg'>{price}</span>
              <del className='text-btn-color font-lato font-bold text-lg '>{deletPrice}</del>
              
          </div>


    
    </div>
  )
}

export default Rating