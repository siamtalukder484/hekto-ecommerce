import React from 'react'
import Nanohead from '../../../utilities/nanohead/Nanohead'
import productone from '../../../images/image14.png'
import producttwo from '../../../images/image15.png'
import productthree from '../../../images/image16.png'
import productfour from '../../../images/image17.png'
import productfive from '../../../images/image18.png'
import productsix from '../../../images/image19.png'
import productseven from '../../../images/image20.png'
import producteight from '../../../images/image21.png'
import productnine from '../../../images/image22.png'
import Peras from '../../../utilities/Peras'
import Subheading from '../../../utilities/subheading/Subheading'
import Miniheadingtext from '../../../utilities/miniheadingtext/Miniheadingtext'
import { Link } from 'react-router-dom'

const Trendingproduct = () => {
    let trendingproductarray = [
        {   
            id: 1,
            img : productone,
            name : "Cantilever chair",
            updateprice : "$26.00",
            oldprice : "$42.00"
        },
        {   
            id: 2,
            img : producttwo,
            name : "Cantilever chair",
            updateprice : "$26.00",
            oldprice : "$42.00"
        },
        {   
            id: 3,
            img : productthree,
            name : "Cantilever chair",
            updateprice : "$26.00",
            oldprice : "$42.00"
        },
        {   
            id: 4,
            img : productfour,
            name : "Cantilever chair",
            updateprice : "$26.00",
            oldprice : "$42.00"

        },
    ]
  return (
    <section className='pt-[132px] bg-[#fff]'>
        <div className='max-w-container mx-auto'>
            <div>
                <div className='text-center mb-[39px]'>
                    <Subheading text="Trending Products" style="text-[42px] text-[#151875] font-[700] capitalize "/>
                </div>
                <div className='flex item-center justify-between gap-x-[29px] flex-wrap '>
                    {
                        trendingproductarray.map((item , index)=>(
                            <div key={index} className='cursor-pointer w-[270px] bg-[#fff] rounded-[10px] py-[11px] px-[12px] shadow-lg shadow-indigo-500/20 '>
                                <div className='w-[247px] h-[244px] bg-[#F6F7FB]'>
                                    <img className='w-[100%] h-[100%] object-cover' src={item.img} alt="not found" />
                                </div>
                                <div className='cursor-pointer text-center pb-[17px] pt-[15px] bg-[#fff]'>
                                    <Nanohead text={item.name} style='text-[16px] text-[#151875] font-[700] capitalize '/>
                                    <div className='flex items-center justify-center text-center mt-[8px] gap-x-[12px] '>
                                        <Peras text={item.updateprice} style="featured_product_pera text-[center] text-[#151875] text-[14px] font-[400] "/>
                                        <span className='featured_product_price text-[center] text-[##151875] text-[12px] font-[400]'>{item.oldprice}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex item-center  justify-between gap-x-[29px] mt-[39px]'>
                  <div className='w-[420px] bg-[#FFF6FB] pt-[34px] pr-[6px] bd-[2px] pl-[25px]'>
                        <Miniheadingtext text="23% off in all products" style='text-[26px] text-[#151875] font-[600px]'/>
                        <div className='flex justify-between'>
                            <Link className='text-[16px] text-[#FB2E86] cursor-pointer underline decoration-[#FB2E86] ' to = "#">Shop Now</Link>
                            <div className='w-[213px] h-[207px] bg-[#F6F7FB]'>
                                <img className='w-[100%] h-[100%] object-cover' src={productfive} alt="not found" />
                            </div>
                        </div>
                  </div>
                  <div className='w-[420px] bg-[#FFF6FB] pt-[34px] pr-[6px] bd-[2px] pl-[25px]'>
                        <Miniheadingtext text="23% off in all products" style='text-[26px] text-[#151875] font-[600]'/>
                        <Link className='text-[16px] text-[#FB2E86] cursor-pointer underline decoration-[#FB2E86] ' to = "#">View Collection</Link>
                        <div className='flex justify-end'>
                            <div className='w-[312px] h-[173px] bg-[#F6F7FB]'>
                                <img className='w-[100%] h-[100%] object-cover' src={productsix} alt="not found" />
                            </div>
                        </div>
                  </div>
                  <div className='bg-[#ffff]'>
                    <div className='flex items-center justify-left gap-x-[9px] mb-[21px] '>
                        <div className='w-[107px] h-[74px] bg-[#F6F7FB] px-[22px]'>
                            <img className='w-[100%] h-[100%] object-cover' src={productseven} alt="not found" />
                        </div>
                        <div>
                            <Nanohead text='Executive Seat chair' style='text-[16px] text-[#151875] font-[500] mb-[5px]'/>
                            <Peras text='$32.00' style='text-[12px] text-[#151875] font-[400]'/>
                        </div>
                    </div>
                    <div className='flex items-center justify-left gap-x-[9px] mb-[21px] '>
                        <div className='w-[107px] h-[74px] bg-[#F6F7FB] px-[22px]'>
                            <img className='w-[100%] h-[100%] object-cover' src={producteight} alt="not found" />
                        </div>
                        <div>
                            <Nanohead text='Executive Seat chair' style='text-[16px] text-[#151875] font-[500] mb-[5px]'/>
                            <Peras text='$32.00' style='text-[12px] text-[#151875] font-[400]'/>
                        </div>
                    </div>
                    <div className='flex items-center justify-left gap-x-[9px] '>
                        <div className='w-[107px] h-[74px] bg-[#F6F7FB] px-[22px]'>
                            <img className='w-[100%] h-[100%] object-cover' src={productnine} alt="not found" />
                        </div>
                        <div>
                            <Nanohead text='Executive Seat chair' style='text-[16px] text-[#151875] font-[500] mb-[5px]'/>
                            <Peras text='$32.00' style='text-[12px] text-[#151875] font-[400]'/>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trendingproduct