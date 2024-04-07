import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoGrid } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { IoIosCheckbox } from "react-icons/io";
import ProductImg from '../../componants/ProductImg';
import shopone from '../../assets/images/shopone.png'
import { FaStar } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaSearchPlus } from "react-icons/fa";
import Shopleftsidebar from '../../componants/Shopleftsidebar';
import shoptwo from '../../assets/images/shoptwo.png'
import { CiSearch } from "react-icons/ci";
import shopthree from '../../assets/images/shopthree.png'
import shopfour from '../../assets/images/shopfour.png'
import shopfive from '../../assets/images/shopfive.png'
import shopsix from '../../assets/images/shopsix.png'
import shopseven from '../../assets/images/shopseven.png'
import shopei from '../../assets/images/shopei.png'
const Shopleftside = () => {
  return (
    <section>
        <div className="bg-[#F6F5FF] py-[100px]">
            <div className='max-w-container mx-auto'>
                <div className="ml-[-10px]">
                        <h3 className="font-Josefin text-4xl leading-normal font-bold 151875 pb-2 text-[#101750]">
                            Shop Left Sidebar
                        </h3>
                        <p className="text-black font-lato text-base font-medium leading-normal">
                        Home.Pages.<span className="text-btn-color">Shop Left Sidebar</span>
                        </p>
                </div>
            </div>
        </div>

        <div className='max-w-container mx-auto mt-32 flex gap-[180px]'>
            <div>
                <h3 className='font-bold text-[#151875] text-[22px]'>Ecommerce Acceories & Fashion item </h3>
                <p className='text-[#8A8FB9] text-xs mt-2'>About 9,620 results (0.62 seconds)</p>
            </div>
            <div className='flex gap-[27px]'>
                <div className='flex items-center justify-center gap-[8px]'>
                    <p className='text-[#3F509E] text-base mt-[-4px]'>Per Page</p>
                    <input type="text" name="" id=""  className='border-[#E7E6EF]  border-2 width-[10px] px-[0] w-[55px] h-[25px] '	/>
                </div>
                <div className='flex items-center justify-center gap-[8px]'>
                    <p className='text-[#3F509E] text-base mt-[-4px]'>Sort By:</p>
                    <input type="text" name="" id="" placeholder='Best Match ' className='border-[#E7E6EF]  border-2 w-[100px] px-[0] p-2 h-[25px] '	/>
                    <RiArrowDropDownLine  className='ml-[-30px] text-[#8A8FB9] text-[26px] text-[#151875]'/>
                </div>
                <div className='flex items-center justify-center gap-[8px]'>
                    <p className='text-[#3F509E] text-base mt-[-4px]'>View</p>
                    <IoGrid  className='text-[#151875]'/>
                    <CiCircleList className='text-[#151875]'/>
                    <input type="text" name="" id=""  className='border-[#E7E6EF]  border-2 width-[10px] px-[0] w-[155px] h-[25px] '	/>
                
                </div>

            </div>
        </div>
 
        <div className='max-w-container mx-auto mt-[100px] 	flex'>

            {/* -----------------brand list part---------------- */}
            
            <div className='w-[300px] gap-y-[40px] flex flex-col'>
                <div>
                    <h2 className='font-bold text-[20px] text-[#151875] border-b-2 border-black-600 border-b-2 w-[140px]'>Product Brand</h2>
                    <div className='mt-6 text-[16px] flex  items-center gap-[5px] ml-0'>
                        <IoIosCheckbox className='text-[#E5E0FC]'/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Coaster Furniture</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#E5E0FC]'/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Fusion Dot High Fashion</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#E5E0FC]'/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Unique Furnitture Restor</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#E5E0FC]'/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Dream Furnitture Flipping</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#E5E0FC]'/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Young Repurposed</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#E5E0FC]'/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Green DIY furniture</h4>
                    </div> 
                </div>
                <div>
    
                    <h2 className='font-bold text-[20px] text-[#151875] border-b-2 border-black-600 border-b-2 w-[140px]'>Discount Offer</h2>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] ml-0'>
                        <IoIosCheckbox className='text-[#FFDBF1]'/>
                        <h4 className='text-[16px] text-[#7E81A2] '>20% Cashback</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FFDBF1]'/>
                        <h4 className='text-[16px] text-[#7E81A2] '>5% Cashback Offer</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FFDBF1] '/>
                        <h4 className='text-[16px] text-[#7E81A2] '>25% Discount Offer</h4>
                    </div>
                    
                
                </div>

                <div>
                    <h2 className='font-bold text-[20px] text-[#151875] border-b-2 border-black-600 border-b-2 w-[120px]'>Rating Item</h2>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] ml-0'>
                        <IoIosCheckbox className='text-[#FFF6DA]'/>
                        <div className='flex gap-[3px] items-center justify-center'>
                                <FaStar  className='text-[#FFC416] text-[12px]' />
                                <FaStar className='text-[#FFC416] text-[12px]'/>
                                <FaStar className='text-[#FFC416] text-[12px]'/>
                                <FaStar className='text-[#FFC416] text-[12px]'/>
                                <FaStar className='text-[#B2B2B2] text-[12px]'/>
                                <p className='text-[12px]'>(2341)</p>
                            </div>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FFCC2E]'/>
                        <div className='flex gap-[3px] items-center justify-center'>
                                <FaStar  className='text-[#FFC416] text-[12px]' />
                                <FaStar className='text-[#FFC416] text-[12px]'/>
                                <FaStar className='text-[#FFC416] text-[12px]'/>
                                <FaStar className='text-[#B2B2B2] text-[12px]'/>
                                <FaStar className='text-[#B2B2B2] text-[12px]'/>
                                <p className='text-[12px]'>(1726)</p>
                            </div>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] ml-0'>
                        <IoIosCheckbox className='text-[#FFF6DA]'/>
                        <div className='flex gap-[3px] items-center justify-center'>
                                <FaStar  className='text-[#FFC416] text-[12px]' />
                                <FaStar  className='text-[#FFC416] text-[12px]' />
                                <FaStar className='text-[#B2B2B2] text-[12px]'/>
                                <FaStar className='text-[#B2B2B2] text-[12px]'/>
                                <FaStar className='text-[#B2B2B2] text-[12px]'/>
                                <p className='text-[12px]'>(258)</p>
                            </div>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] ml-0'>
                        <IoIosCheckbox className='text-[#FFF6DA]'/>
                        <div className='flex gap-[3px] items-center justify-center'>
                                <FaStar  className='text-[#FFC416] text-[12px]' />
                                <FaStar  className='text-[#FFC416] text-[12px]' />
                                <FaStar className='text-[#B2B2B2] text-[12px]'/>
                                <FaStar className='text-[#B2B2B2] text-[12px]'/>
                                <FaStar className='text-[#B2B2B2] text-[12px]'/>
                                <p className='text-[12px]'>(25)</p>
                            </div>
                    </div>
                    
                </div>
                <div>
                    <h2 className='font-bold text-[20px] text-[#151875] border-b-2 border-black-600 border-b-2 w-[120px]'>Categories</h2>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] ml-0'>
                        <IoIosCheckbox className='text-[#FFDBF1]'/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Prestashop</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FFDBF1]'/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Magento</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FF3EB2] '/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Bigcommerce</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FFDBF1] '/>
                        <h4 className='text-[16px] text-[#7E81A2] '>osCommerce</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FFDBF1] '/>
                        <h4 className='text-[16px] text-[#7E81A2] '>3dcart</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FFDBF1] '/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Bags</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FFDBF1] '/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Accessories</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FFDBF1] '/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Jewellery</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FFDBF1] '/>
                        <h4 className='text-[16px] text-[#7E81A2] '>Watches</h4>
                    </div>
                </div>

                <div>
                    <h2 className='font-bold text-[20px] text-[#151875] border-b-2 border-black-600 border-b-2 w-[120px]'>Price Filter</h2>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] ml-0'>
                        <IoIosCheckbox className='text-[#FFDBF1]'/>
                        <h4 className='text-[16px] text-[#7E81A2] '>$0.00 - $150.00</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FFDBF1]'/>
                        <h4 className='text-[16px] text-[#7E81A2] '>$150.00 - $350.00</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] '>
                        <IoIosCheckbox className='text-[#FF3EB2] '/>
                        <h4 className='text-[16px] text-[#7E81A2] '>$150.00 - $504.00</h4>
                    </div>
                    <div className='mt-5 text-[16px] flex  items-center gap-[5px] my-4'>
                        <IoIosCheckbox className='text-[#FFDBF1] '/>
                        <h4 className='text-[16px] text-[#7E81A2] '>$450.00 +</h4>
                    </div>
                    <div className='flex justify-start items-center'>
                        <input type="text" name="" id="" placeholder='$10.00 - 20000$'  className='w-[210px] border-[#E7E6EF]  border-2 width-[10px] px-[0] w-[155px] h-[25px] '	/>
                        <CiSearch  className='ml-[-30px] text-[#BCBDDB]' />

                    </div>
                </div>

                <div >
                    <h2 className='font-bold text-[20px] text-[#151875] border-b-2 border-black-600 border-b-2 w-[150px]'>Filter By Color</h2>
                    <div className='flex gap-3'>
                        <div className='my-4 flex justify-start items-center gap-[5px]' >
                            <div className="h-[14px] w-[14px] rounded-full bg-[#5625DF]"></div>
                            <p className='text-[#7E81A2] text-[15px]'> Blue</p>
                        </div>
                        <div className='my-4 flex justify-start items-center gap-[5px]' >
                            <div className="h-[14px] w-[14px] rounded-full bg-[#FF9437]"></div>
                            <p className='text-[#7E81A2] text-[15px]'> Orange</p>
                        </div>
                        <div className='my-4 flex justify-start items-center gap-[5px]' >
                            <div className="h-[14px] w-[14px] rounded-full bg-[#FFBF95]"></div>
                            <p className='text-[#7E81A2] text-[15px]'> Brown</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='my-4 flex justify-start items-center gap-[5px]' >
                            <div className="h-[14px] w-[14px] rounded-full bg-[#33D221]"></div>
                            <p className='text-[#7E81A2] text-[15px]'> Green</p>
                        </div>
                        <div className='my-4 flex justify-start items-center gap-[5px]' >
                            <div className="h-[14px] w-[14px] rounded-full bg-[#FF9437]"></div>
                            <p className='text-[#7E81A2] text-[15px]'> Purple</p>
                        </div>
                        <div className='my-4 flex justify-start items-center gap-[5px]' FF9437>
                            <div className="h-[14px] w-[14px] rounded-full bg-[#26CBFF]"></div>
                            <p className='text-[#7E81A2] text-[15px]'> Sky</p>
                        </div>
                    </div>
                    

                </div>
            </div>

         {/* -------------------imag part----------------  */}

            <div className='w-[1000px] flex flex-col gap-[55px] '>
                <div className='flex bg-[#fff] py-5 px-[18px]'>
                    <div>
                        <img src={shopone} alt=""  className=' h-[220px]'/>
                    </div>
                    <div className='mx-9   mt-[20px]'>
                        <div className='flex justify-start items-center  gap-[83px]  	'>
                            <div>
                                <h4 className='text-[#111C85] font-bold text-[18px] mb-[13px]'>Dictum morbi</h4>
                            </div>
                            <div className='flex gap-1 mt-[-15px]'>
                                <div className="h-[11px] w-[11px] rounded-full bg-[#DE9034]"></div>
                                <div className="h-[11px] w-[11px] rounded-full bg-[#E60584]"></div>
                                <div className="h-[11px] w-[11px] rounded-full bg-[#5625DF]"></div>
                            </div>
                        </div>
                        <div className='flex gap-[16px]  mb-[10px]'>
                            <div className='gap-[10px] flex'>
                                <p className='text-[#111C85] text-[#14px] '>$26.00</p>
                                <p className='text-[#FF2AAA] text-[14px] '><del>$52.00</del></p>
                            </div>
                            <div className='flex gap-[3px]'>
                                <FaStar  className='text-[#FFC416]'/>
                                <FaStar className='text-[#FFC416]'/>
                                <FaStar className='text-[#FFC416]'/>
                                <FaStar className='text-[#FFC416]'/>
                                <FaStar className='text-[#B2B2B2]'/>
                            </div>
                        </div>
                        <p className='text-[#9295AA] text-[16px] w-[530px] mb-[28px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                        <div className='flex gap-[31px]'>
                            <MdOutlineShoppingCart className='text-[#535399]'/>
                            <CiHeart className='text-[#535399]'/>
                            <FaSearchPlus className='text-[#535399] '/>

                        </div>
                    </div>
                </div> 

                <div className='flex bg-[#fff] py-5 px-[18px]'>
                    <div>
                        <img src={shoptwo} alt=""  className='w-[294px] h-[210px]'/>
                    </div>
                    <div className='mx-9  justify-center items-center  mt-[20px]'>
                            <div className='flex justify-start items-center  gap-[83px] 	'>
                                <div>
                                    <h4 className='text-[#111C85] font-bold text-[18px] mb-[13px]'>Sodales sit</h4>
                                </div>
                                <div className='flex gap-1 mt-[-15px]'>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#DE9034]"></div>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#E60584]"></div>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#5625DF]"></div>
                                </div>
                            </div>
                            <div className='flex gap-[16px]  mb-[10px]'>
                                <div className='gap-[10px] flex'>
                                    <p className='text-[#111C85] text-[#14px] '>$26.00</p>
                                    <p className='text-[#FF2AAA] text-[14px] '><del>$52.00</del></p>
                                </div>
                                <div className='flex gap-[3px]'>
                                    <FaStar  className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#B2B2B2]'/>
                                </div>
                            </div>
                            <p className='text-[#9295AA] text-[16px] w-[530px] mb-[28px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                            <div className='flex gap-[31px]'>
                                <MdOutlineShoppingCart className='text-[#535399]'/>
                                <CiHeart className='text-[#535399]'/>
                                <FaSearchPlus className='text-[#535399] '/>

                            </div>
                        </div>
                </div>         

                <div className='flex bg-[#fff] py-5 px-[18px]'>
                    <div>
                        <img src={shopthree} alt=""  className='w-[294px] h-[210px]'/>
                    </div>
                    <div className='mx-9  justify-center items-center  mt-[20px]'>
                        <div className='flex justify-start items-center  gap-[83px] 	'>
                            <div>
                                <h4 className='text-[#111C85] font-bold text-[18px] mb-[13px]'>Nibh varius</h4>
                            </div>
                            <div className='flex gap-1 mt-[-15px]'>
                                <div className="h-[11px] w-[11px] rounded-full bg-[#DE9034]"></div>
                                <div className="h-[11px] w-[11px] rounded-full bg-[#E60584]"></div>
                                <div className="h-[11px] w-[11px] rounded-full bg-[#5625DF]"></div>
                            </div>
                            </div>
                            <div className='flex gap-[16px]  mb-[10px]'>
                                <div className='gap-[10px] flex'>
                                    <p className='text-[#111C85] text-[#14px] '>$26.00</p>
                                    <p className='text-[#FF2AAA] text-[14px] '><del>$52.00</del></p>
                                </div>
                                <div className='flex gap-[3px]'>
                                    <FaStar  className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#B2B2B2]'/>
                                </div>
                            </div>
                            <p className='text-[#9295AA] text-[16px] w-[530px] mb-[28px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                            <div className='flex gap-[31px]'>
                                <MdOutlineShoppingCart className='text-[#535399]'/>
                                <CiHeart className='text-[#535399]'/>
                                <FaSearchPlus className='text-[#535399] '/>

                            </div>
                        </div>
                </div>    

                <div className='flex bg-[#fff] py-5 px-[18px]'>
                        <div>
                            <img src={shopfour} alt=""  className='w-[294px] h-[210px]'/>
                        </div>
                        <div className='mx-9  justify-center items-center  mt-[20px]'>
                            <div className='flex justify-start items-center  gap-[83px] 	'>
                                <div>
                                    <h4 className='text-[#111C85] font-bold text-[18px] mb-[13px]'>Mauris quis</h4>
                                </div>
                                <div className='flex gap-1 mt-[-15px]'>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#DE9034]"></div>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#E60584]"></div>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#5625DF]"></div>
                                </div>
                            </div>
                            <div className='flex gap-[16px]  mb-[10px]'>
                                <div className='gap-[10px] flex'>
                                    <p className='text-[#111C85] text-[#14px] '>$26.00</p>
                                    <p className='text-[#FF2AAA] text-[14px] '><del>$52.00</del></p>
                                </div>
                                <div className='flex gap-[3px]'>
                                    <FaStar  className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#B2B2B2]'/>
                                </div>
                            </div>
                            <p className='text-[#9295AA] text-[16px] w-[530px] mb-[28px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                            <div className='flex gap-[31px]'>
                                <MdOutlineShoppingCart className='text-[#535399]'/>
                                <CiHeart className='text-[#535399]'/>
                                <FaSearchPlus className='text-[#535399] '/>

                            </div>
                        </div>
                </div>  

                <div className='flex bg-[#fff] py-5 px-[18px]'>
                        <div>
                            <img src={shopfive} alt=""  className='w-[294px] h-[210px]'/>
                        </div>
                        <div className='mx-9  justify-center items-center  mt-[20px]'>
                            <div className='flex justify-start items-center  gap-[83px] 	'>
                                <div>
                                    <h4 className='text-[#111C85] font-bold text-[18px] mb-[13px]'>Morbi sagittis</h4>
                                </div>
                                <div className='flex gap-1 mt-[-15px]'>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#DE9034]"></div>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#E60584]"></div>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#5625DF]"></div>
                                </div>
                            </div>
                            <div className='flex gap-[16px]  mb-[10px]'>
                                <div className='gap-[10px] flex'>
                                    <p className='text-[#111C85] text-[#14px] '>$26.00</p>
                                    <p className='text-[#FF2AAA] text-[14px] '><del>$52.00</del></p>
                                </div>
                                <div className='flex gap-[3px]'>
                                    <FaStar  className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#B2B2B2]'/>
                                </div>
                            </div>
                            <p className='text-[#9295AA] text-[16px] w-[530px] mb-[28px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                            <div className='flex gap-[31px]'>
                                <MdOutlineShoppingCart className='text-[#535399]'/>
                                <CiHeart className='text-[#535399]'/>
                                <FaSearchPlus className='text-[#535399] '/>

                            </div>
                        </div>
                </div> 

                <div className='flex bg-[#fff] py-5 px-[18px]'>
                        <div>
                            <img src={shopsix} alt=""  className='w-[294px] h-[210px]'/>
                        </div>
                        <div className='mx-9  justify-center items-center  mt-[20px]'>
                            <div className='flex justify-start items-center  gap-[83px] 	'>
                                <div>
                                    <h4 className='text-[#111C85] font-bold text-[18px] mb-[13px]'>Ultricies venenatis</h4>
                                </div>
                                <div className='flex gap-1 mt-[-15px]'>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#DE9034]"></div>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#E60584]"></div>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#5625DF]"></div>
                                </div>
                            </div>
                            <div className='flex gap-[16px]  mb-[10px]'>
                                <div className='gap-[10px] flex'>
                                    <p className='text-[#111C85] text-[#14px] '>$26.00</p>
                                    <p className='text-[#FF2AAA] text-[14px] '><del>$52.00</del></p>
                                </div>
                                <div className='flex gap-[3px]'>
                                    <FaStar  className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#B2B2B2]'/>
                                </div>
                            </div>
                            <p className='text-[#9295AA] text-[16px] w-[530px] mb-[28px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                            <div className='flex gap-[31px]'>
                                <MdOutlineShoppingCart className='text-[#535399]'/>
                                <CiHeart className='text-[#535399]'/>
                                <FaSearchPlus className='text-[#535399] '/>

                            </div>
                        </div>
                </div>  

                <div className='flex bg-[#fff] py-5 px-[18px]'>
                        <div>
                            <img src={shopseven} alt=""  className='w-[294px] h-[210px]'/>
                        </div>
                        <div className='mx-9  justify-center items-center  mt-[20px]'>
                            <div className='flex justify-start items-center  gap-[83px] 	'>
                                <div>
                                    <h4 className='text-[#111C85] font-bold text-[18px] mb-[13px]'>Ultricies venenatis</h4>
                                </div>
                                <div className='flex gap-1 mt-[-15px]'>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#DE9034]"></div>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#E60584]"></div>
                                    <div className="h-[11px] w-[11px] rounded-full bg-[#5625DF]"></div>
                                </div>
                            </div>
                            <div className='flex gap-[16px]  mb-[10px]'>
                                <div className='gap-[10px] flex'>
                                    <p className='text-[#111C85] text-[#14px] '>$26.00</p>
                                    <p className='text-[#FF2AAA] text-[14px] '><del>$52.00</del></p>
                                </div>
                                <div className='flex gap-[3px]'>
                                    <FaStar  className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#FFC416]'/>
                                    <FaStar className='text-[#B2B2B2]'/>
                                </div>
                            </div>
                            <p className='text-[#9295AA] text-[16px] w-[530px] mb-[28px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                            <div className='flex gap-[31px]'>
                                <MdOutlineShoppingCart className='text-[#535399]'/>
                                <CiHeart className='text-[#535399]'/>
                                <FaSearchPlus className='text-[#535399] '/>

                            </div>
                        </div>
                </div>  

                
            </div>

            
            
        </div>

        <div className="flex justify-center mt-[150px] mb-[150px]">
            <img src={shopei} alt="" />
        </div>

        

        
        

        

    </section>
  )
}

export default Shopleftside
