import React from 'react'
import Nanohead from '../../../utilities/nanohead/Nanohead'
import productone from '../../../images/image3.png'
import producttwo from '../../../images/image4.png'
import productthree from '../../../images/image5.png'
import productfour from '../../../images/image6.png'
import Peras from '../../../utilities/Peras'
import Subheading from '../../../utilities/subheading/Subheading'
import { LuShoppingCart } from "react-icons/lu";
import { GiSelfLove } from "react-icons/gi";
import { FaSearchPlus } from "react-icons/fa";
import './Featuredproduct.css'

const Featuredproduct = () => {
    let featurdproductarray = [
        {   
            id: 1,
            img : productone,
            name : "Cantilever chair",
            code : "Code - Y523201",
            price : "$42.00",
        },
        {   
            id: 2,
            img : producttwo,
            name : "Cantilever chair",
            code : "Code - Y523201",
            price : "$42.00",
        },
        {   
            id: 3,
            img : productthree,
            name : "Cantilever chair",
            code : "Code - Y523201",
            price : "$42.00",
        },
        {   
            id: 4,
            img : productfour,
            name : "Cantilever chair",
            code : "Code - Y523201",
            price : "$42.00",
        },
    ]

  return (
    <section className='pt-[129px] pb-[100px] bg-[#fff]'>
        <div className='max-w-container mx-auto'>
            <div>
                <div className='text-center mb-[48px]'>
                    <Subheading text="Featured Products" style="text-[42px] text-[#1A0B5B] font-[700] capitalize "/>
                </div>
                <div className='flex item-center  justify-between gap-x-[29px] flex-wrap '>
                    {
                        featurdproductarray.map((item , index)=>(
                            <div key={index} className='featured_product_cart_box cursor-pointer w-[270px] bg-[#F6F7FB] rounded-[10px] '>
                                <div className='flex item-center justify-left gap-x-[15px] pt-[18px] pl-[20px] '>
                                    <LuShoppingCart className='featured_product_cart_icon text-[#2F1AC4] text-[20px] font-[500] ' />
                                    <GiSelfLove className='featured_product_cart_icon text-[#1389FF] text-[20px] font-[500]'  />
                                    <FaSearchPlus className='featured_product_cart_icon text-[#1389FF] text-[20px] font-[500]' />
                                </div>
                                <div className='w-[100%] h-[236px] bg-[#F6F7FB] pt-[46px] pr-[52px] pb-[12px] pl-[40px]'>
                                    <img className='w-[100%] h-[100%] object-cover' src={item.img} alt="not found" />
                                </div>
                                <div className='featured_product_details_box cursor-pointer text-center pb-[17px] pt-[27px] bg-[#fff] hover:bg-[#2F1AC4] transition-all ease-linear delay-0.3s hover.featured_product_pera:text-[#fff]'>
                                    <Nanohead text={item.name} style='text-[18px] text-[#FB2E86] font-[700] capitalize '/>
                                    <div className='flex item-center  justify-center gap-x-[5px] pt-[12px] pb-[18px] '>
                                        <div className='w-[14px] h-[4px] bg-[#05E6B7] rounded-[2px]'></div>
                                        <div className='w-[14px] h-[4px] bg-[#F701A8] rounded-[2px]'></div>
                                        <div className='w-[14px] h-[4px] bg-[#00009D] rounded-[2px]'></div>
                                    </div>
                                    <Peras text={item.code} style="featured_product_pera text-[center] text-[#151875] text-[14px] font-[400] mb-[12px]"/>
                                    <span className='featured_product_price text-[center] text-[#151875] text-[14px] font-[400] pb-[12px]'>{item.price}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex item-center  justify-center gap-x-[5px] mt-[53px]'>
                    <div className='w-[24px] h-[4px] bg-[#FB2E86] rounded-[2px]'></div>
                    <div className='w-[24px] h-[4px] bg-[#FB2E86] rounded-[2px] opacity-20'></div>
                    <div className='w-[24px] h-[4px] bg-[#FB2E86] rounded-[2px] opacity-20'></div>
                    <div className='w-[24px] h-[4px] bg-[#FB2E86] rounded-[2px] opacity-20'></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featuredproduct