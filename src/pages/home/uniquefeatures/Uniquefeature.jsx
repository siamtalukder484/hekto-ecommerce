import React from 'react'
import Peras from '../../../utilities/Peras'
import Headingtext from '../../../utilities/headingtext/Headingtext'
import Button from '../../../componants/Button'
import imagetwo from '../../../images/image13.png'
import Nanohead from '../../../utilities/nanohead/Nanohead'

const Uniquefeature = () => {
  return (
    <section className='py-[15px] bg-[#F2F0FF] relative'>
        <div className='max-w-container mx-auto'>
            <div className='flex items-center justify-between relative'>
                <div className='w-[558px] h-[550px] '>
                    <img className='w-[100%] h-[100%] object-cover relative z-40' src={imagetwo} alt="not found" />
                </div>
                <div>
                    <Headingtext text='Unique Features Of leatest & Trending Poducts' style='w-[627px] leading-[150%] mb-[29px] text-[53px] text-[#151875] font-[600]'/>
                    <div className='flex justify-left gap-y-[13px] flex-col'>
                        <div className='flex items-center justify-left gap-x-[17px]'>
                            <div className='w-[10px] h-[10px] bg-[#FB2E86] rounded-[50%]'></div>
                            <Peras text='All frames constructed with hardwood solids and laminates' style='w-[457px]  text-[16px] text-[#ACABC3] font-[700] leading-[180%]'/>
                        </div>
                        <div className='flex items-center justify-left gap-x-[17px]'>
                            <div className='w-[10px] h-[10px] bg-[#151875] rounded-[50%]'></div>
                            <Peras text='All frames constructed with hardwood solids and laminates' style='w-[457px]  text-[16px] text-[#ACABC3] font-[700] leading-[180%]'/>
                        </div>
                        <div className='flex items-center justify-left gap-x-[17px]'>
                            <div className='w-[10px] h-[10px] bg-[#1389FF] rounded-[50%]'></div>
                            <Peras text='All frames constructed with hardwood solids and laminates' style='w-[457px]  text-[16px] text-[#ACABC3] font-[700] leading-[180%]'/>
                        </div>
                    </div>
                    <div className='flex items-center justify-left gap-x-[19px] mt-[23px]'>
                        <Button text='Shop Now' style='bg-[#FB2E86] text-[#fff] text-[17px] font-[500] py-[16px] px-[40px] cursor-pointer '/>
                        <div >
                            <Nanohead text='B&B Italian Sofa ' style='text-[14px] text-[#151875] font-[400] mb-[3px]'/>
                            <span className='text-[14px] text-[#151875] font-[400]'>$32.00</span>
                        </div>
                    </div>
                </div>
                <div className='w-[500px] h-[500px] rounded-[50%] bg-[#ECD2FA] absolute left-[0] top-[-5px] z-30'></div>
            </div>
        </div>
    </section>
  )
}

export default Uniquefeature