import React from 'react'
import Nanohead from '../../../utilities/nanohead/Nanohead'
import shopexone from '../../../images/image23.png'
import shopextwo from '../../../images/image24.png'
import shopexthree from '../../../images/image25.png'
import shopexfour from '../../../images/image26.png'
import Peras from '../../../utilities/Peras'
import Subheading from '../../../utilities/subheading/Subheading'

const Shopexoffer = () => {
    //leatestproduct array
    let shopexofferarray = [
        {   
            id: 1,
            img : shopexone,
            support : "24/7 Support",
            pera:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        },
        {   
            id: 2,
            img : shopextwo,
            support : "24/7 Support",
            pera:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        },
        {   
            id: 3,
            img : shopexthree,
            support : "24/7 Support",
            pera:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        },
        {   
            id: 4,
            img : shopexfour,
            support : "24/7 Support",
            pera:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
        },
    ]
  return (
    <section className=' pb-[135px] bg-[#ffff]'>
        <div className='max-w-container mx-auto'>
            <div className='leatest_product_container'>
                <div className='text-center mb-[55px]'>
                    <Subheading text="What Shopex Offer!" style="text-[42px] text-[#151875] font-[700] capitalize "/>
                </div>
                <div className='flex item-center  justify-between gap-x-[30px] flex-wrap '>
                    {
                        shopexofferarray.map((item , index)=>(
                            <div key={index} className=' w-[270px] bg-[#FFFFFF] rounded-[10px] pt-[56px] pb-[45px] shadow-lg shadow-indigo-500/20'>
                                <div className='w-[65px] h-[65px] bg-[#FFFFFF]  mx-auto '>
                                    <img className='w-[100%] h-[100%] object-cover' src={item.img} alt="not found" />
                                </div> 
                                <div className='text-center bg-[#fff] mt-[27px]'>
                                    <Nanohead text={item.support} style='text-[22px] text-[#151875] font-[500] capitalize mb-[20px]'/>
                                    <Peras text={item.pera} style="w-[217px] mx-auto text-[center] text-[#1A0B5B] text-[14px] font-[400] mb-[12px]"/>
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

export default Shopexoffer