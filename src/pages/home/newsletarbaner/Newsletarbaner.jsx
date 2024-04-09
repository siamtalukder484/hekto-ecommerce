import React from 'react'
import baner from '../../../images/image31.png'
import Subheading from '../../../utilities/subheading/Subheading'
import Button from '../../../componants/Button'
const Newsletarbaner = () => {
  return (
    <section className='w-[100%] h-[462px] relative'>
        <img className='w-[100%] h-[100%] object-cover' src={baner} alt="not found" />
        <div className='max-w-container mx-auto'>
            <div className='mt-[74px] mb-[103px] w-[574px] mx-auto text-center absolute left-[36%] top-[114px]'>
                <Subheading text="Get Leatest Update By Subscribe 0ur Newslater" style='text-[35px] text-[#151875] font-[700] mb-[28px] capitalize' />  
                <Button text='Shop Now' style='bg-[#FB2E86] text-[#fff] text-[17px] font-[500] py-[16px] px-[40px] cursor-pointer '/>         
            </div>
        </div>
    </section>
  )
}

export default Newsletarbaner