import React from 'react'
import { Image } from '../../utilities/Image'
import about_img from '../../assets/images/About_img.png'
import freedelivery from '../../assets/images/free-delivery 1.png'
import cashback from '../../assets/images/cashback 1.png'
import quality from '../../assets/images/premium-quality 1.png'
import support from '../../assets/images/24-hours-support 1.png'
import maskgroup_1 from '../../assets/images/Mask Group-1.png'
import maskgroup_2 from '../../assets/images/Mask Group-2.png'
import maskgroup_3 from '../../assets/images/Mask Group-3.png'
import Button from '../../componants/Button'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const About = () => {
  return (
    <>
    {/* ----------About-start--------- */}
     <div className='bg-about-bg'>
      <div className='max-w-container m-auto pt-[96px] pb-[126px]'>
          <h3 className='font-Josefin text-[36px] font-bold leading-0 mb-[9px]'>About Us</h3>
          <ul className='flex'>
            <li className='font-lato text-[16px] font-semibold text-txt-color'>Home <span className='my-0 mx-1.5'>.</span> </li>
            <li className='font-lato text-[16px] font-semibold text-txt-color'>Pages <span className='my-0 ml-[3px] mr-[7px] text-btn-color'>.</span></li>
            <li className='font-lato text-[16px] font-semibold text-btn-color'>About Us</li>
          </ul>
        </div>
      </div>
      {/* ----------About-end--------- */}
      {/* ----------History-start--------- */}
        <div className='max-w-container m-auto pt-[96px] pt-[120px] relative'>
          <div className='flex gap-[30px]'>
            <div className='w-[552px] h-[409px] bg-about_img_bg rounded-md absolute top-[96px] left-[-15px] z-[-1]'></div>
            <Image source={about_img} alt="Image Not Found"/>
            <div>
              <h3 className='font-Josefin text-[36px] font-bold leading-[48px] text-heading-color mt-[41px] mb-[14px] capitalize'>Know About Our Ecomerce Business, History</h3>
              <p className='w-[95%] font-lato text-[16px] font-medium leading-[25.6px] text-pera-color'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
              <Button style="font-lato text-[18px] font-medium rounded-[3px] px-[30px] py-[9px] bg-btn-color text-white mt-[100px]" text="Contact us"/>
            </div>
          </div>
        </div>
        {/* -----------History-end-------- */}
        {/* -----------Features-start-------- */}
        <div className='max-w-container m-auto'>
          <h2 className='font-Josefin text-[42px] font-bold text-black text-center mt-[140px] mb-[67px]'>Our Features</h2>
            <div className='flex gap-7 mb-[133px] cursor-pointer'>
              <div className='w-[270px] bg-white shadow-features-shadow pt-[62px] pb-[45px] relative after:absolute after:w-[270px] after:h-[2px] after:bg-transparent after:bottom-0 after:left-0 hover:after:bg-features-bg after:duration-300'>
                <Image source={freedelivery} alt="Image Not Found" style="m-auto"/>
                <h4 className='font-Josefin text-[22px] font-bold text-heading-color text-center my-5'>Free Delivery</h4>
                <p className='font-lato text-[16px] font-bold leading-[25.6px] text-pera-color text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
              <div className='w-[270px] bg-white shadow-features-shadow pt-[62px] pb-[45px] relative after:absolute after:w-[270px] after:h-[2px] after:bg-transparent after:bottom-0 after:left-0 hover:after:bg-features-bg after:duration-300'>
                <Image source={cashback} alt="Image Not Found" style="m-auto"/>
                <h4 className='font-Josefin text-[22px] font-bold text-heading-color text-center my-5'>100% Cash Back</h4>
                <p className='font-lato text-[16px] font-bold leading-[25.6px] text-pera-color text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
              <div className='w-[270px] bg-white shadow-features-shadow pt-[62px] pb-[45px] relative after:absolute after:w-[270px] after:h-[2px] after:bg-transparent after:bottom-0 after:left-0 hover:after:bg-features-bg after:duration-300'>
                <Image source={quality} alt="Image Not Found" style="m-auto"/>
                <h4 className='font-Josefin text-[22px] font-bold text-heading-color text-center my-5'>Quality Product</h4>
                <p className='font-lato text-[16px] font-bold leading-[25.6px] text-pera-color text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
              <div className='w-[270px] bg-white shadow-features-shadow pt-[62px] pb-[45px] relative after:absolute after:w-[270px] after:h-[2px] after:bg-transparent after:bottom-0 after:left-0 hover:after:bg-features-bg after:duration-300'>
                <Image source={support} alt="Image Not Found" style="m-auto"/>
                <h4 className='font-Josefin text-[22px] font-bold text-heading-color text-center my-5'>24/7 Support</h4>
                <p className='font-lato text-[16px] font-bold leading-[25.6px] text-pera-color text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
            </div>
          </div>
        {/* -----------Features-end-------- */}
        {/* ---------Reaviw-start--------- */}
         <div className='bg-about-bg mb-[305px]'>
            <h2 className='font-Josefin text-[42px] font-bold text-black text-center pt-[71px] pb-16'>Our Client Say!</h2>
            <div className='max-w-container mx-auto pb-[77px]'>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                >
              <SwiperSlide>
                <div className='flex gap-[13px] justify-center '>
                  <div className='w-[55px] h-[55px] overflow-hidden object-cover mt-[9px]'>
                      <Image source={maskgroup_1} alt="Image Not Found"/>
                  </div>
                  <div className='w-[55px] h-[55px] overflow-hidden object-cover'>
                      <Image source={maskgroup_2} alt="Image Not Found"/>
                  </div>
                  <div className='w-[55px] h-[55px] overflow-hidden object-cover mt-[9px]'>
                      <Image source={maskgroup_3} alt="Image Not Found"/>
                  </div>
                </div>
                  <div className='text-center'>
                  <h4 className='font-lato text-[22px] font-semibold text-heading-color mt-[25px]'>Selina Gomez</h4>
                  <h6 className='font-lato text-[10px] font-bold leading-[25.6px] text-pera-color mb-[14px]'>Ceo At Webecy Digital</h6>
                  <p className='font-lato text-[16px] font-bold leading-[25.6px] text-pera-color w-[60%] mx-auto pb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                </div>
              </SwiperSlide>
                <SwiperSlide>
                  <div className='flex gap-[13px] justify-center '>
                    <div className='w-[55px] h-[55px] overflow-hidden object-cover mt-[9px]'>
                        <Image source={maskgroup_1} alt="Image Not Found"/>
                    </div>
                    <div className='w-[55px] h-[55px] overflow-hidden object-cover'>
                        <Image source={maskgroup_2} alt="Image Not Found"/>
                    </div>
                    <div className='w-[55px] h-[55px] overflow-hidden object-cover mt-[9px]'>
                        <Image source={maskgroup_3} alt="Image Not Found"/>
                  </div>
                </div>
                  <div className='text-center'>
                    <h4 className='font-lato text-[22px] font-semibold text-heading-color mt-[25px]'>Selina Gomez</h4>
                    <h6 className='font-lato text-[10px] font-bold leading-[25.6px] text-pera-color mb-[14px]'>Ceo At Webecy Digital</h6>
                    <p className='font-lato text-[16px] font-bold leading-[25.6px] text-pera-color w-[60%] mx-auto pb-[77px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                  </div>
              </SwiperSlide>
                <SwiperSlide>
                  <div className='flex gap-[13px] justify-center '>
                    <div className='w-[55px] h-[55px] overflow-hidden object-cover mt-[9px]'>
                        <Image source={maskgroup_1} alt="Image Not Found"/>
                    </div>
                    <div className='w-[55px] h-[55px] overflow-hidden object-cover'>
                        <Image source={maskgroup_2} alt="Image Not Found"/>
                    </div>
                    <div className='w-[55px] h-[55px] overflow-hidden object-cover mt-[9px]'>
                        <Image source={maskgroup_3} alt="Image Not Found"/>
                    </div>
                  </div>
                  <div className='text-center'>
                    <h4 className='font-lato text-[22px] font-semibold text-heading-color mt-[25px]'>Selina Gomez</h4>
                    <h6 className='font-lato text-[10px] font-bold leading-[25.6px] text-pera-color mb-[14px]'>Ceo At Webecy Digital</h6>
                    <p className='font-lato text-[16px] font-bold leading-[25.6px] text-pera-color w-[60%] mx-auto pb-[77px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
         </div>
      {/* ----------Reaviw-end--------- */}
    </>
  )
}

export default About