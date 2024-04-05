import React from "react";
import Input from "../../componants/Input";
import Button from "../../componants/Button";
import { Link } from "react-router-dom";
import { Image } from "../../utilities/Image";
import brandImg from "../../assets/images/brand_img.png";

const Login = () => {
  return (
    <section>
      <div className="bg-[#F6F5FF] py-[100px]">
        <div className="max-w-container mx-auto">
          <div className="pl-[71px]">
            <h3 className="font-Josefin text-4xl leading-normal font-bold pb-2 text-[#101750]">
              My Account
            </h3>
            <p className="text-black font-lato text-base font-medium leading-normal">
              Home.Pages.<span className="text-btn-color">My Account</span>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-container mx-auto">
        <div className="py-[120px]">
          <h3 className="text-center text-2xl text-black font-bold leading-normal font-josefin">
            Login
          </h3>
          <p className="text-center">
            Please login using account detail bellow.
          </p>
          <div className="flex items-center justify-center">
            <form className="space-y-4 pt-7">
              <div>
                <Input
                  style="border border-[#C2C5E1] p-[15px] outline-none w-[432px] rounded-[3px] text-base text-[#9096B2] font-lato font-normal leading-normal"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <Input
                  style="border border-[#C2C5E1] p-[15px] outline-none w-[432px] rounded-[3px] text-base text-[#9096B2] font-lato font-normal leading-normal"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <p className="cursor-pointer text-[#9096B2] font-lato font-normal text-base leading-normal hover:text-[#C2C5E1]">
                  Forgot your password?
                </p>
              </div>
              <div>
                <Button
                  text="Sign In"
                  style="bg-btn-color px-[190px] py-[14px] rounded-[3px] text-white text-base font-bold leading-normal font-lato"
                />
              </div>
              <div>
                <p className="text-[#9096B2] font-lato font-normal text-base leading-normal text-center">
                  Don't have an account?{" "}
                  <Link className="hover:text-[#C2C5E1]">Create Acccount</Link>
                </p>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center py-[110px]">
            <Image alt="Brand Image Missing" source={brandImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
