import React from 'react'
import { Image } from '../utilities/Image'

const ProductImg = ({productname, code, price, img}) => {
  return (
    <div className='w-[270px] shadow-product-shadow'>
        <div className='w-full bg-product-bg'>
            <div className='w-[280px] h-[280px] pt-[40px] pb-[12px] px-[40px] mx-auto overflow-hidden'>
                <Image source={img} alt="img not found" style="w-full h-full object-cover"/>
            </div>
        </div>
        <div className='py-[15px] text-center'>
            <h3 className='text-btn-color font-lato font-bold capitalize pb-[15px]'>{productname}</h3>
            <h6 className='text-heading-color font-Josefin font-normal pb-[8px]'>Code: {code}</h6>
            <span className='text-hading-color font-lato font-normal '>{price}</span>
        </div>
    </div>
  )
}

export default ProductImg