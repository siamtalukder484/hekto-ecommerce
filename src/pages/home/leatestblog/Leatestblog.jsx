import React from 'react'
import Nanohead from '../../../utilities/nanohead/Nanohead'
import productone from '../../../images/image32.png'
import producttwo from '../../../images/image33.png'
import productthree from '../../../images/image34.png'
import Peras from '../../../utilities/Peras'
import Subheading from '../../../utilities/subheading/Subheading'
import { FaCalendarDays } from "react-icons/fa6";
import { VscTools } from "react-icons/vsc";
import { Link } from 'react-router-dom'

const Leatestblog = () => {
    let leatestblogarray = [
        {   
            id: 1,
            img : productone,
            casname: "SaberAli",
            date:"21 August,2024",
            name : "Top esssential Trends in 2021",
            pera : "More off this less hello samlande lied much over tightly circa horse taped mightly",
            link :"#",
            linkname : "Read More"
        },
        {   
            id: 2,
            img : producttwo,
            casname: "SaberAli",
            date:"21 August,2024",
            name : "Top esssential Trends in 2021",
            pera : "More off this less hello samlande lied much over tightly circa horse taped mightly",
            link :"#",
            linkname : "Read More"
        },
        {   
            id: 3,
            img : productthree,
            casname: "SaberAli",
            date:"21 August,2024",
            name : "Top esssential Trends in 2021",
            pera : "More off this less hello samlande lied much over tightly circa horse taped mightly",
            link :"#",
            linkname : "Read More"
        },
    ]
  return (
    <section className='pt-[69px] pb-[115px] bg-[#fff]'>
        <div className='max-w-container mx-auto'>
            <div className='leatest_blog_contant_box'>
                <div className='text-center mb-[80px]'>
                    <Subheading text="Leatest Blog" style="text-[42px] text-[#151875] font-[700] capitalize "/>
                </div>
                <div className='flex item-center  justify-between gap-x-[40px] flex-wrap '>
                    {
                        leatestblogarray.map((item , index)=>(
                            <div key={index} className=' w-[350px] bg-[#fff] rounded-[10px] cursor-pointer'>
                                <div className='w-[100%] h-[255px] rounded-[10px]'>
                                    <img className='w-[100%] h-[100%] object-cover rounded-[10px]' src={item.img} alt="not found" />
                                </div>
                                <div className='bg-[#fff] pt-[19px] pb-[14px]'>
                                    <div className='flex item-center justify-left gap-x-[29px] pb-[31px]'>
                                        <div className='flex items-center justify-left gap-x-[2px]'>
                                            <div className='w-[20px] h-[20px]'>
                                                <VscTools className='text-[#FB2E86] w-[100%] h-100%]' />
                                            </div>
                                            <Nanohead text={item.casname} style='text-[14px] text-[#151875] font-[400] '/>
                                        </div>
                                        <div className='flex items-center justify-left gap-x-[2px]'>
                                            <div className='w-[20px] h-[20px]'>
                                                <FaCalendarDays className='text-[#FFA454] w-[100%] h-100%] ' />
                                            </div>
                                            <Nanohead text={item.date} style='text-[14px] text-[#151875] font-[400] '/>
                                        </div>
                                    </div>
                                    <Nanohead text={item.name} style='text-[18px] text-[#151875] font-[700] capitalize mb-[17px] transition-all ease-linear delay-0.3s hover:text-[#FB2E86] '/>
                                    <Peras text={item.pera} style=" w-[310px] text-[center] text-[#72718F] text-[16px] font-[400] leading-[180%]"/>
                                    <div className='leatest_blog_link_box mt-[17px]'>
                                        <Link className='text-[16px] text-[#151875] font-[400] cursor-pointer underline decoration-[#151875] transition-all ease-linear delay-0.3s hover:text-[#FB2E86] hover:underline hover:decoration-[#FB2E86] ' to={item.link}>{item.linkname}</Link>
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

export default Leatestblog