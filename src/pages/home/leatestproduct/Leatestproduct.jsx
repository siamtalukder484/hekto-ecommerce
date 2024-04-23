import React from 'react'
import Nanohead from '../../../utilities/nanohead/Nanohead'
import productone from '../../../images/image7.png'
import producttwo from '../../../images/image8.png'
import productthree from '../../../images/image9.png'
import productfour from '../../../images/image10.png'
import productfive from '../../../images/image11.png'
import productsix from '../../../images/image12.png'
import Peras from '../../../utilities/Peras'
import Subheading from '../../../utilities/subheading/Subheading'
import { LuShoppingCart } from "react-icons/lu";
import { GiSelfLove } from "react-icons/gi";
import { FaSearchPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import './Leatestproduct.css'
const Leatestproduct = () => {
    //leatestproduct array
    let leatestproductarray = [
        {   
            id: 1,
            img : productone,
            name : "Comfort Handy Craft",
            newprice:"$42.00",
            oldprice : "$60.00",
        },
        {   
            id: 2,
            img : producttwo,
            name : "Comfort Handy Craft",
            newprice:"$42.00",
            oldprice : "$60.00",
        },
        {   
            id: 3,
            img : productthree,
            name : "Comfort Handy Craft",
            newprice:"$42.00",
            oldprice : "$60.00",
        },
        {   
            id: 4,
            img : productfour,
            name : "Comfort Handy Craft",
            newprice:"$42.00",
            oldprice : "$60.00",
        },
        {   
            id: 5,
            img : productfive,
            name : "Comfort Handy Craft",
            newprice:"$42.00",
            oldprice : "$60.00",
        },
        {   
            id: 6,
            img : productsix,
            name : "Comfort Handy Craft",
            newprice:"$42.00",
            oldprice : "$60.00",
        },
    ]

  return (
    <section className=' pb-[100px] bg-[#fff]'>
        <div className='max-w-container mx-auto'>
            <div className='leatest_product_container'>
                <div className='text-center mb-[48px]'>
                    <Subheading text="Leatest Products" style="text-[42px] text-[#1A0B5B] font-[700] font-Josefin capitalize "/>
                    <div className='flex item-center  justify-center gap-x-[58px] mt-[19px]'>
                        <NavLink className="leatest_product_link text-[#151875] text-[18px] font-[400] font-lato capitalize" to = "#">New Arrival</NavLink>
                        <NavLink className="leatest_product_link text-[#151875] text-[18px] font-[400] font-lato capitalize" to = "#">Best Seller</NavLink>
                        <NavLink className="leatest_product_link text-[#151875] text-[18px] font-[400] font-lato capitalize" to = "#">Featured</NavLink>
                        <NavLink className="leatest_product_link text-[#151875] text-[18px] font-[400] font-lato capitalize" to = "#">Special Offer</NavLink>
                    </div>
                </div>
                <div className='flex item-center  justify-between gap-x-[37px] gap-y-[116px] flex-wrap '>
                    {
                        leatestproductarray.map((item , index)=>(
                            <div key={index} className='leatest_product_cart_box cursor-pointer w-[350px] bg-[#F6F7FB] rounded-[10px] relative'>
                                <div className='flex item-center justify-left flex-col gap-y-[15px] absolute left-[20px] bottom-[50px] '>
                                    <LuShoppingCart className='leatest_product_cart_icon text-[#2F1AC4] text-[20px] font-[500] ' />
                                    <GiSelfLove className='leatest_product_cart_icon text-[#1389FF] text-[20px] font-[500]'  />
                                    <FaSearchPlus className='leatest_product_cart_icon text-[#1389FF] text-[20px] font-[500]' />
                                </div>
                                <div className='w-[100%] h-[236px] bg-[#F6F7FB] pt-[46px] pr-[52px] pb-[12px] pl-[40px]'>
                                    <img className='w-[100%] h-[100%] object-cover' src={item.img} alt="not found" />
                                </div> 
                                <div className='flex item-center  justify-between gap-x-[50px] cursor-pointer text-center bg-[#fff]'>
                                    <Nanohead text={item.name} style='text-[18px] text-[#151875] font-[500] font-Josefin capitalize '/>
                                    <div className='flex item-center  justify-right gap-x-[5px]'>
                                        <Peras text={item.newprice} style="text-[center] text-[#151875] text-[14px] font-[400] font-Josefin mb-[12px]"/>
                                        <del className=' text-[center] text-[#FB2E86] text-[14px] font-[400] font-Josefin pb-[12px]'>{item.oldprice}</del>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Leatestproduct