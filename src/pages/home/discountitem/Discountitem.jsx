import React from 'react'
import Peras from '../../../utilities/Peras'
import Button from '../../../componants/Button'
import imageone from '../../../images/image27.png'
import Nanohead from '../../../utilities/nanohead/Nanohead'
import Subheading from '../../../utilities/subheading/Subheading'
import { FaCheck } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'


const Discountitem = () => {
  return (
    <section className='pt-[126px] bg-[#fff]'>
        <div className='max-w-container mx-auto'>
            <div className='discount_item_contant'>
                <div className='text-center mb-[37px]'>
                    <Subheading text="Leatest Products" style="text-[42px] text-[#151875] font-[700] capitalize "/>
                </div>
                <div>
                    <div className='flex item-center  justify-center gap-x-[58px]'>
                        <NavLink className=" text-[#151875] text-[18px] font-[400] capitalize cursor-pointer hover:text-[#FB2E86] hover:underline hover:decoration-[#FB2E86] transition-all ease-linear delay-0.3s" to = "#">Wood Chair</NavLink>
                        <NavLink className=" text-[#151875] text-[18px] font-[400] capitalize cursor-pointer hover:text-[#FB2E86] hover:underline hover:decoration-[#FB2E86] transition-all ease-linear delay-0.3s" to = "#">Plastic Chair</NavLink>
                        <NavLink className=" text-[#151875] text-[18px] font-[400] capitalize cursor-pointer hover:text-[#FB2E86] hover:underline hover:decoration-[#FB2E86] transition-all ease-linear delay-0.3s" to = "#">Featured</NavLink>
                    </div>
                    <div className='flex items-center justify-between relative'>
                        <div className=' w-[50%] discount_contant_box'>
                            <div className='discount_contant'>
                                <Subheading text='20% Discount Of All Products' style='w-[509px] leading-[150%] mb-[15px] text-[35px] text-[#151875] font-[600]'/>
                                <Nanohead text="Eams Sofa Compact" style='text-[21px] text-[#FB2E86] font-[500] mb-[21px]'/>
                                <Peras text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum." style=' w-[523px] text-[17px] text-[#B7BACB] font-[400] mb-[21px]'/>
                            </div>
                            <div className='flex items-center justify-between gap-x-[44px] flex-wrap'>
                                {
                                    [1,2,3,4].map((item,imdex)=>(
                                        <div key={imdex} className='flex items-center justify-left gap-x-[6px]'>
                                            <FaCheck />
                                            <Peras text="Material expose like metals" style='text-[16px] text-[#B7BACB] font-[400]'/>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='text-[left] mt-[37px]'>
                                <Button text='Shop Now' style='bg-[#FB2E86] text-[#fff] text-[17px] font-[500] py-[19px] px-[48px] cursor-pointer '/>
                            </div>
                        </div>
                        <div className='w-[558px] h-[550px] '>
                            <img className='w-[100%] h-[100%] object-cover relative z-40' src={imageone} alt="not found" />
                        </div>
                        <div className='w-[472px] h-[472px] rounded-[50%] bg-[#FCECF1] absolute right-[50px] top-[20px] z-30'></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discountitem