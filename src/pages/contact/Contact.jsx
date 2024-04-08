import React from "react";
import { Image } from "../../utilities/Image";
import contactImg from "../../assets/images/contact_img.png";
import Input from "../../componants/Input";
import Button from "../../componants/Button";

const Contact = () => {
  return (
    <section>
      <div className="bg-[#F6F5FF] py-[100px]">
        <div className="max-w-container mx-auto">
          <div className="pl-[71px]">
            <h3 className="font-Josefin text-4xl leading-normal font-bold pb-2 text-[#101750]">
              Contact Us
            </h3>
            <p className="text-black font-lato text-base font-medium leading-normal">
              Home.Pages.<span className="text-btn-color">Contact us</span>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-container mx-auto">
        <div className="py-[120px] flex items-center justify-between gap-x-5">
          <div className="space-y-4">
            <h2 className="text-[#151875] text-4xl font-bold leading-[48px] font-josefin capitalize">
              Information About us
            </h2>
            <p className="w-[600px] text-base text-pera-color leading-[25px] font-semibold font-lato">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <div className="flex items-center gap-x-3 pt-6">
              <div className="h-[25px] w-[25px] rounded-full bg-[#5625DF]"></div>
              <div className="h-[25px] w-[25px] rounded-full bg-[#FF27B7]"></div>
              <div className="h-[25px] w-[25px] rounded-full bg-[#37DAF3]"></div>
            </div>
          </div>
          <div className="space-y-[25px]">
            <h2 className="text-[#151875] text-4xl font-bold leading-[48px] font-josefin capitalize">
              contact way
            </h2>
            <div className="flex gap-[40px] flex-wrap justify-between">
              <div className="w-[254px] flex items-center gap-x-[15px]">
                <div className="h-[45px] w-[45px] rounded-full bg-[#5625DF]"></div>
                <div className="">
                  <p className="text-pera-color font-semibold text-base font-lato leading-[25px] capitalize">
                    Tel: 877-67-88-99{" "}
                  </p>
                  <p className="text-pera-color font-semibold text-base font-lato leading-[25px] capitalize">
                    E-Mail: shop@store.com
                  </p>
                </div>
              </div>
              <div className="w-[254px] flex items-center gap-x-[15px]">
                <div className="h-[45px] w-[45px] rounded-full bg-btn-color"></div>
                <div className="">
                  <p className="text-pera-color font-semibold text-base font-lato leading-[25px] capitalize">
                    support forum{" "}
                  </p>
                  <p className="text-pera-color font-semibold text-base font-lato leading-[25px] capitalize">
                    for over 24hr
                  </p>
                </div>
              </div>
              <div className="w-[254px] flex items-center gap-x-[15px]">
                <div className="h-[45px] w-[45px] rounded-full bg-[#FFB265]"></div>
                <div className="">
                  <p className="text-pera-color font-semibold text-base font-lato leading-[25px] capitalize">
                    20 Margaret st, London{" "}
                  </p>
                  <p className="text-pera-color font-semibold text-base font-lato leading-[25px] capitalize">
                    Great britain, 3NM98-LK
                  </p>
                </div>
              </div>
              <div className="w-[254px] flex items-center gap-x-[15px]">
                <div className="h-[45px] w-[45px] rounded-full bg-[#1BE982]"></div>
                <div className="">
                  <p className="text-pera-color font-semibold text-base font-lato leading-[25px] capitalize">
                    Free standard shipping
                  </p>
                  <p className="text-pera-color font-semibold text-base font-lato leading-[25px] capitalize">
                    on all orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pb-[200px]">
          <div className="space-y-7">
            <h2 className="text-[#151875] text-4xl font-bold leading-[48px] font-josefin capitalize">
              get in touch
            </h2>
            <p className="w-[600px] text-base text-pera-color leading-[25px] font-semibold font-lato pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>
            <div>
              <form className="space-y-5">
                <div className="flex items-center gap-x-4 ">
                  <div className="w-[255px]">
                    <Input
                      type="text"
                      style="w-full border border-[#a4b6c8b3] p-3 rounded-[3px] outline-none text-base font-lato font-normal leading-normal text-pera-color"
                      placeholder="Your Name*"
                      name="fullName"
                      required
                    />
                  </div>
                  <div className="w-[255px]">
                    <Input
                      type="email"
                      style="w-full border border-[#a4b6c8b3] p-3 rounded-[3px] outline-none text-base font-lato font-normal leading-normal text-pera-color"
                      placeholder="Your Email*"
                      name="fullName"
                    />
                  </div>
                </div>
                <div className="w-[526px]">
                  <Input
                    type="text"
                    style="w-full border border-[#a4b6c8b3] p-3 rounded-[3px] outline-none text-base font-lato font-normal leading-normal text-pera-color"
                    placeholder="Subject*"
                    name="fullName"
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="w-[526px] border border-[#a4b6c8b3] p-3 rounded-[3px] outline-none text-base font-lato font-normal leading-normal text-pera-color"
                    name=""
                    id=""
                    placeholder="Type Your Message*"
                  ></textarea>
                </div>
                <Button
                  text="Send Mail"
                  style="py-[9px] px-[41px] bg-btn-color text-white font-josefin text-base font-normal leading-[25px] rounded-[3px]"
                />
              </form>
            </div>
          </div>
          <div className="">
            <Image style="" source={contactImg} alt="Contact Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
