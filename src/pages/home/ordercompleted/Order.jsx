import React from 'react'
import Button from '../../../componants/Button'

const Order = () => {
  return (
    <div>
      <div className="bg-[#F6F5FF] py-[100px]">
        <div className="max-w-container mx-auto">

          <div className="pl-[71px]">
            <h3 className="font-Josefin text-[36px] leading-normal font-bold pb-2 pl-2 text-[#101750]">Order Completed</h3>
            <p className="text-black font-Lato text-[16px] leading-normal font-medium pb-2 pl-2 text-[#101750]">Home . page . <span className="text-btn-color">Order completed</span> </p>
          </div>
         
        </div>
      </div>
      <div className="py-[400px]">
            <div className="max-w-container mx-auto">
              <div className='flex items-center justify-center flex-col relative'>
                <div className="flex items-center justify-center rounded-full bg-[#f0f0f0] p-12 overflow-hidden">
                <img className="pr-[30px] absolute top-[25px] right-[530px]  object-cover z-40 " src="/src/images/image28.png" alt="" />

                </div>
                <div className="flex items-center justify-center flex-col ">
                  <h2 className="w-[870px] font-Josefin text-[36px] leading-normal font-bold pb-2 pl-[200px] text-[#101750]">Your Order Is Completed! </h2>
                  <p className=" w-[870px] font-Lato text-[16px] leading-normal font-medium pb-2 pl-[200px] text-[#8D92A7]">Thank you for your order! Your order is being processed and will be completed within 3-6
                  hours. You will receive an email confirmation when your order is completed.</p>
                </div>
                <div className='text-[left] mt-[37px]'>
                  <Button text='Continue Shopping' style='bg-[#FB2E86] text-[#fff] text-[17px] font-[500] py-[19px] px-[48px] cursor-pointer '/>
                </div>
                <div className="flex items-center justify-center absolute">
                  <img className='right-[453px] top-[-61px] relative  ' src="/src/images/clock 1.png" alt="" />
                </div>
                <div className="flex items-center justify-center absolute">
                  <img className='right-[-670px] top-[255px] relative  ' src="/src/images/checklist 1.png" alt="" />
                </div>
                <div className="flex items-center justify-center absolute">
                  <img className=' top-[418px] relative' src="/src/images/image29.png" alt="" />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Order