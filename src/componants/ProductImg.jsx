import React from 'react'
import { Image } from '../utilities/Image'


const ProductImg = ({productname, deletPrice, price, img}) => {
  return (
    <div className='w-[270px] shadow-product-shadow'>
        <div className='w-full bg-product-bg'>
            <div className='w-[300px] h-[300px] py-[70px] px-[60px] mx-auto overflow-hidden'>
                <Image source={img} alt="img not found" style="w-full h-full object-cover"/>
            </div>
        </div>
        <div className='py-[15px] text-center'>
            <h3 className='text-heading-color text-base font-lato font-bold capitalize pb-[15px]'>{productname}</h3>
           <div className='flex gap-[10px] justify-center'>
            <div className='w-[15px] h-[15px] bg-[#DE9034] rounded-[50%] '></div>
            <div className='w-[15px] h-[15px] bg-[#EC42A2] rounded-[50%] '></div>
            <div className='w-[15px] h-[15px] bg-[#8568FF] rounded-[50%] '></div>
           </div>
           <div className='flex gap-[10px] justify-center pt-4'>
              <span className='text-hading-color font-lato font-normal text-lg'>{price}</span>
              <del className='text-btn-color font-lato font-bold text-lg '>{deletPrice}</del>
           </div>
        </div>
    </div>
  )
}

export default ProductImg