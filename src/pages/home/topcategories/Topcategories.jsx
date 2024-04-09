import React from 'react'
import Nanohead from '../../../utilities/nanohead/Nanohead'
import productone from '../../../images/image28.png'
import producttwo from '../../../images/image29.png'
import productthree from '../../../images/image30.png'
import productfour from '../../../images/image28.png'
import Peras from '../../../utilities/Peras'
import Subheading from '../../../utilities/subheading/Subheading'
import './Topcategories.css'

const Topcategories = () => {
    let topcategoriesproductarray = [
        {   
            id: 1,
            img : productone,
            name : "Mini LCW Chair",
            price : "$42.00",
        },
        {   
            id: 2,
            img : producttwo,
            name : "Mini LCW Chair",
            price : "$42.00",
        },
        {   
            id: 3,
            img : productthree,
            name : "Mini LCW Chair",
            price : "$42.00",
        },
        {   
            id: 4,
            img : productfour,
            name : "Mini LCW Chair",
            price : "$42.00",
        },
    ]
  return (
    <section className='pt-[79px] pb-[125px] bg-[#fff]'>
        <div className='max-w-container mx-auto'>
            <div className='top_categories_contant_box'>
                <div className='text-center mb-[56px]'>
                    <Subheading text="top categories" style="text-[42px] text-[#151875] font-[700] capitalize "/>
                </div>
                <div className='flex item-center  justify-between gap-x-[30px] flex-wrap '>
                    {
                        topcategoriesproductarray.map((item , index)=>(
                            <div key={index} className=' w-[270px] bg-[#fff] cursor-pointer relative '>
                                 <div className='top_categories_iamge_background_cercle z-10'></div>
                                <div className='top_categories_iamge_box flex items-center justify-center relative z-20 '>
                                    <div className='w-[178px] h-[178px] flex items-center justify-center'>
                                        <img className='w-[100%] h-[100%] object-cover' src={item.img} alt="not found" />
                                    </div>
                                </div>
                                <div className=' text-center  mt-[27px] bg-[#fff]'>
                                    <Nanohead text={item.name} style='text-[20px] text-[#151875] font-[700] capitalize '/>
                                    <Peras text={item.price} style=" text-[center] text-[#151875] text-[16px] font-[400] mb-[12px]"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='mx-auto mt-[38px] flex item-center justify-center gap-x-[11px] text-center'>
                    {
                        [1,2,4].map((item,index)=>(
                            <div key={index} className=' w-[10px] h-[10px] rounded-[50%] bg-[#FB2E86]'></div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Topcategories