import React from 'react'
import { Link } from 'react-router-dom'
import PeraGrap from '../../utilities/PeraGrap'

const Faq = () => {
  return (
    <div>
       <div className="bg-[#F6F5FF] py-[100px]">
        <div className="max-w-container mx-auto">
          <div className="pl-[71px]">
            <h3 className="font-Josefin text-4xl leading-normal font-bold pb-2 text-[#101750]">
              FAQ
            </h3>
            <p className="text-black font-lato text-base font-medium leading-normal">
              Home.Pages.<Link className="text-btn-color" to="#">My Account</Link>
            </p>
          </div>
        </div>
      </div>
      <div className='max-w-container mx-auto'>
        <div className='flex py-[100px]'>
          <div className=''>
            <h2 className='text-4xl font-Josefin font-bold capitalize text-heading-color pb-[60px]'>Generel Information</h2>

            <div className='flex flex-col gap-[65px]'>
              <div>
                <h3 className='text-2xl font-Josefin font-semibold capitalize text-heading-color pb-[15px]'>Eu dictumst cum at sed euismood condimentum?</h3>
                <PeraGrap style="text-pera-color font-lato font-normal text-sm max-w-[470px] leading-6" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."/>
              </div>
              <div>
                <h3 className='text-2xl font-Josefin font-semibold capitalize text-heading-color pb-[15px]'>Magna bibendum est fermentum eros.</h3>
                <PeraGrap style="text-pera-color font-lato font-normal text-sm max-w-[470px] leading-6" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."/>
              </div>
              <div>
                <h3 className='text-2xl font-Josefin font-semibold capitalize text-heading-color pb-[15px]'>Odio muskana hak eris conseekin sceleton?</h3>
                <PeraGrap style="text-pera-color font-lato font-normal text-sm max-w-[470px] leading-6" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."/>
              </div>
              <div>
                <h3 className='text-2xl font-Josefin font-semibold capitalize text-heading-color pb-[15px]'>Elit id blandit sabara boi velit gua mara?</h3>
                <PeraGrap style="text-pera-color font-lato font-normal text-sm max-w-[470px] leading-6" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."/>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Faq