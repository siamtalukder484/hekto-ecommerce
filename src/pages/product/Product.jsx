import React from 'react'
import { Link } from 'react-router-dom'
import ProductpageOne from'../../images/productpage1.png'
import ProductpageTwo from '../../images/productimg2.png'
import ProductpageThree from '../../images/productimg3.png'
import ProductpageFour from '../../images/productimg4.png'
import Rating from './Rating'
import { FaRegHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import ProductRelatedOne from '../../images/productimg5.png'
import ProductRelatedTwo from '../../images/productimg6.png'
import ProductRelatedThree from '../../images/productimg7.png'
import ProductRelatedFour from '../../images/productimg8.png'
import ProductSponsor from '../../images/productimg9.png'



export const Product = ({price}) => {
  return (
    <div>   
      <div className="bg-[#F6F5FF] py-[100px]">
       <div className="max-w-container mx-auto">
        <h3 className="font-Josefin text-4xl leading-normal font-bold pb-2 text-[#101750]">
        Product Details
        </h3>
        <p className="text-black  font-lato text-base font-medium leading-normal">
          Home.Pages.<Link className="text-btn-color" to="#">Product Details</Link>
        </p>
       
      </div>
     </div>
      <div className="bg-[#FFFFFF]"> 
        <div className="max-w-container mx-auto pt-[134px] pb-[131px] ">
          <div className="bg-[#FFFFFF] w-[1170px] h-[509px] shadow-2xl">
           <div className="pt-3.5 pl-3 pb-2 flex  gap-[21px]">
            <div className="flex flex-wrap pb-2 ">
              <div className="  flex  flex-col gap-[11px]">
                 <div>
                  <img src={ProductpageOne} className="object-cover	overflow-hidden h-[151px]  w-[155px]" />
                  </div>
                <div>
                  <img src={ProductpageTwo} className="object-cover	overflow-hidden h-[151px]  w-[155px]" />
                 </div>
                <div>
                  <img src={ProductpageThree} className="object-cover	overflow-hidden h-[151px]  w-[155px]" />
                 </div>
              </div>
             </div>
              <div className="">
                 <div>
                  <img src={ProductpageFour} className="object-cover overflow-hidden h-[476px] w-[375px]" />
                 </div>
              </div>
             <div className="  pt-[74px] pl-10	">
                <h3 className="font-semibold font-Josefin	text-4xl text-[#0D134E]">Playwood arm chair</h3>
                <div className='pt-[13px]'>{<Rating review="(22)" price="$32.00" deletPrice="$32.00"/>}</div>
                <h4 className='font-semibold	text-base	text-[#0D134E] 
                pt-[14px]'>Color</h4>
                  <p className='font-semibold font-Josefin text-[#A9ACC6]	text-base	w-[545px] h-[50px] leading-normal pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                  <h3 className='pt-[34px] pl-[114px] text-base 
                  cursor-pointer flex gap-[20px] items-center font-semibold hover:text-[#535399] '>Add To cart<FaRegHeart/></h3>
                  <div className='flex flex-col gap-[10px] pt-[17px] font-semibold	font-Josefin'>
                    <h4>Categories:</h4>
                    <h4>Tags</h4>
                    <h4 className='flex items-center gap-[10px] cursor-pointer font-Josefin	'>Share <FaFacebook /> <AiFillInstagram className='text-[#E4405F] 
                    rounded-full'/><AiFillTwitterCircle /></h4>
                  </div>
             </div>
           </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F8FE] py-[100px] ">
          <div className="max-w-container mx-auto">
              <div className="flex gap-[63px] font-semibold text-2xl 
              text-[#0D134E] font-Josefin " >
              <div className='underline'>
                <h3 >Description</h3>
              </div>
              <div>
                <h3>Additional Info</h3>
              </div>
              <div>
                <h3>Reviews</h3>
              </div>
              <div>
                <h3>Video</h3>
              </div>
              </div>
              <div className='flex flex-col pt-[59px]'>
                <div>
                  <h3 className='font-semibold text-xl text-[#0D134E] font-Josefin '>Varius tempor.</h3>
                  <p className='font-semibold text-base text-[#A9ACC6] w-[1153px] pt-[14px] font-Josefin	leading-relaxed	 '>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                </div>
                <div className='pt-[36px]'>
                  <h3 className='font-semibold text-xl text-[#0D134E] font-Josefin' >More details</h3>
                  <div className='pt-4 flex flex-col gap-3.5 '>
                    <p className='flex items-center gap-2  font-Josefin text-base font-semibold text-[#A9ACC6]'><FaArrowRight />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    <p className='flex items-center gap-2  font-Josefin text-base font-semibold text-[#A9ACC6]'><FaArrowRight />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    <p className='flex items-center gap-2 font-Josefin text-base font-semibold text-[#A9ACC6]'><FaArrowRight />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    <p className='flex items-center gap-2 font-Josefin text-base font-semibold text-[#A9ACC6]'><FaArrowRight />Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>                    
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div className='bg-[#FFFFFF] py-[100px]'>
        <div className='max-w-container mx-auto'>
              <div className=''>
                <h3 className='text-[#101750] text-4xl	font-bold	font-Josefin'>Related Products</h3>
              </div>
              <div className='flex pt-[47px] gap-[29px]'>
                  <div>
                    <img src={ProductRelatedOne} className="object-cover	overflow-hidden w-[270px] h-[340px]" />
                    <div className=' pt-[13px] gap-11 flex text-base font-semibold  font-Josefin text-[#101750] '>
                      <div className='gap-[15px] w-[147px] h-11'>
                      <h3 >Mens Fashion Wear</h3>
                      <span>{price='$43.00'}</span>
                      </div>
                      <div className='items-center'><Rating/></div>                                     
                    </div>
                  </div>
                  <div>
                    <img src={ProductRelatedTwo} className="object-cover	overflow-hidden w-[270px] h-[340px]" />
                    <div className=' pt-[13px] gap-11 flex text-base font-semibold  font-Josefin text-[#101750] '>
                      <div className='gap-[15px] w-[147px] h-11'>
                      <h3 >Women’s Fashion</h3>
                      <span>{price='$67.00'}</span>
                      </div>
                      <div className='items-center'><Rating/></div>                                     
                    </div>
                  </div>
                  <div>
                    <img src={ProductRelatedThree} className="object-cover	overflow-hidden w-[270px] h-[340px]" />
                    <div className=' pt-[13px] gap-[5px] flex text-base font-semibold  font-Josefin text-[#101750] '>
                      <div className='gap-[15px] w-[187px] h-11'>
                      <h3 >Wolx Dummy Fashion</h3>
                      <span>{price='$67.00'}</span>
                      </div>
                      <div className='items-center'><Rating/></div>                                     
                    </div>
                  </div>
                  <div>
                    <img src={ProductRelatedFour} className="object-cover	overflow-hidden w-[270px] h-[340px]" />
                    <div className=' pt-[13px] gap-[6px] flex text-base font-semibold  font-Josefin text-[#101750] '>
                      <div className='gap-[15px] w-[187px] h-11'>
                      <h3 >Top Wall Digital Clock</h3>
                      <span>{price='$51.00'}</span>
                      </div>
                      <div className='items-center'><Rating/></div>                                     
                    </div>
                  </div>                                
              </div>
              <div className='pt-[125px] items-center pl-[137px]'>
                <img src={ProductSponsor} alt="" />
              </div>
         </div>
      </div>
   </div>

  )
}
