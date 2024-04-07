import React from 'react'
import { IoIosCheckbox } from "react-icons/io";
const Shopleftsidebar = ({brandname,iconstyle,brandlist,brandlist1 }) => {
  return (
    <div>
      <div className='max-w-container mx-auto mt-[100px] flex gap-[40px] '>
            
            <div className='w-[300px] '>
              
                <h2 className='font-bold text-[20px] text-[#151875] border-b-2 border-black-600 border-b-2 w-[140px]'>{brandname}</h2>
                <div className='mt-6 text-[16px] flex  items-center gap-[7px] ml-0'>
                  <IoIosCheckbox className={iconstyle}/>
                    <h4 className='text-[16px] text-[#7E81A2] '>{brandlist}</h4>
                    <h4 className='text-[16px] text-[#7E81A2] '>{brandlist1}</h4>
                </div>
                
            </div>
            <div className='flex '>
                <div>
                  <img src="" alt="" />
                    {/* <img src={img} alt=""  className='w-[284px] h-[197px]'/> */}
                </div>
                <div className='mx-9  justify-center items-center  mt-[20px]'>
                    <h4 className='text-[#111C85] font-bold text-[18px] mb-[13px]'>Dictum morbi</h4>
                    <div className='flex gap-[16px]  mb-[10px]'>
                        <div className='gap-[10px] flex'>
                            <p className='text-[#111C85] text-[#14px] '>$26.00</p>
                            <p className='text-[#FF2AAA] text-[14px] '>$52.00</p>
                        </div>
                        <div className='flex gap-[3px]'>
                           
                        </div>
                    </div>
                    <p className='text-[#9295AA] text-[16px] w-[530px] mb-[28px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <div className='flex gap-[31px]'>
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shopleftsidebar
