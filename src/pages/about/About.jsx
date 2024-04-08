import React from 'react'
import { Image } from '../../utilities/Image'
import aboutImg from '../../assets/images/About_img.png'
import Button from '../../componants/Button'

const About = () => {
  return (
    <section>
      <div className="bg-[#F6F5FF] py-[100px]">
        <div className="max-w-container mx-auto">
          <div className="pl-[71px]">
            <h3 className="font-Josefin text-4xl leading-normal font-bold pb-2 text-[#101750]">
              About Us
            </h3>
            <p className="text-black font-lato text-base font-medium leading-normal">
              Home. Pages . <span className="text-btn-color">About us</span>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-container mx-auto">
        <div className="pt-[120px] pb-[141px]">
          <div className="flex gap-x-[50px]">
            <div className="w-[555px] h-[390px] bg-[#2B3CAB] rounded-[6px]">
              <Image
                style="ml-[15px] pb-[15px] w-[555px] h-[390px]"
                source={aboutImg}
                alt="About Image"
              />
            </div>
            <div className="pt-[41px]">
              <h2 className="text-[#151875] text-4xl font-bold leading-[48px] font-josefin capitalize w-[522px]">
                Know About Our Ecomerce Business, History
              </h2>
              <p className="w-[550px] text-base text-pera-color leading-[25px] font-semibold font-lato mt-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <Button
                  text="Contact us"
                  style="mt-[70px] py-[9px] px-[41px] bg-btn-color text-white font-josefin text-base font-normal leading-[25px] rounded-[3px]"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
