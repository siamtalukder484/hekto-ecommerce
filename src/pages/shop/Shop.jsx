import React from 'react'
import { Link } from 'react-router-dom'
import ProductImg from '../../componants/ProductImg'
import PeraGrap from '../../utilities/PeraGrap'
import shopOne from '../../assets/images/shop1.png'
import shopTow from '../../assets/images/shop2.png'
import shopThree from '../../assets/images/shop3.png'
import shopFour from '../../assets/images/shop4.png'
import shopFive from '../../assets/images/shop5.png'
import shopSex from '../../assets/images/shop6.png'
import shopSeven from '../../assets/images/shop7.png'
import shopEight from '../../assets/images/shop8.png'
import shopNine from '../../assets/images/shop9.png'
import shopTen from '../../assets/images/shop10.png'
import shopEleven from '../../assets/images/shop11.png'
import shopTwelve from '../../assets/images/shop12.png'
import { Image } from '../../utilities/Image'
import shopBrand from '../../assets/images/brand_img.png'
const Shop = () => {
  return (
    <div>
      <div className="bg-[#F6F5FF] py-[100px]">
        <div className="max-w-container mx-auto">
          <div className="pl-[71px]">
            <h3 className="font-Josefin text-4xl leading-normal font-bold pb-2 text-[#101750]">
              Shop Grid Default
            </h3>
            <p className="text-black font-lato text-base font-medium leading-normal">
              Home.Pages.<Link className="text-btn-color" to="#">Shop Grid Default</Link>
            </p>
          </div>
        </div>
      </div>
      <div className='py-[100px]'>
        <div className='max-w-container mx-auto'>
          <div className='flex  justify-between'>
            <div>
              <h2 className='text-[22px] font-Josefin font-semibold capitalize text-heading-color'>Ecommerce Acceories & Fashion item </h2>
              <PeraGrap text="About 9,620 results (0.62 seconds)" style="text-pera-color font-lato font-normal text-sm"/>
            </div>
            <div className='flex gap-[30px]'>
              <label htmlFor="" className='text-base font-lato font-normal text-heading-color'>Per Page: </label>
              <label htmlFor="" className='text-base font-lato font-normal text-heading-color'>Sort By: </label>
              <label htmlFor="" className='text-base font-lato font-normal text-heading-color'>View: </label>
            </div>
          </div>
          <div className='flex gap-[24px] flex-wrap pt-[70px]'>
            <div>
              <ProductImg img={shopOne} productname="Vel elit euismod" price="$30.5" deletPrice="$50.67"/>
            </div>
            <div>
              <ProductImg img={shopTow} productname="Ultricies condimentum imperdiet" price="$30.5" deletPrice="$50.67"/>
            </div>
            <div>
              <ProductImg img={shopThree} productname="Vitae suspendisse sed" price="$30.5" deletPrice="$50.67"/>
            </div>
            <div>
              <ProductImg img={shopFour} productname="Sed at fermentum" price="$30.5" deletPrice="$50.67"/>
            </div>
            <div>
              <ProductImg img={shopFive} productname="Ultrices mauris sit" price="$30.5" deletPrice="$50.67"/>
            </div>
            <div>
              <ProductImg img={shopSex} productname="Sollicitudin amet orci" price="$30.5" deletPrice="$50.67"/>
            </div>
            <div>
              <ProductImg img={shopSeven} productname="Vestibulum magna laoreet" price="$30.5" deletPrice="$50.67"/>
            </div>
            <div>
              <ProductImg img={shopEight} productname="Fusce pellentesque at" price="$30.5" deletPrice="$50.67"/>
            </div>
            <div>
              <ProductImg img={shopNine} productname="Pellentesque condimentum ac" price="$30.5" deletPrice="$50.67"/>
            </div>
            <div>
              <ProductImg img={shopTen} productname="Cras scelerisque velit" price="$30.5" deletPrice="$50.67"/>
            </div>
            <div>
              <ProductImg img={shopEleven} productname="Lectus vulputate faucibus" price="$30.5" deletPrice="$50.67"/>
            </div>
            <div>
              <ProductImg img={shopTwelve} productname="Purus risus, ut" price="$30.5" deletPrice="$50.67"/>
            </div>
          </div>
          <div className='pt-[80px] flex items-center justify-center'>
              <picture>
                <Image source={shopBrand} alt="FAQ Image Not Found"/>
              </picture>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop