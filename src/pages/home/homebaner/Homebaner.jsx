import React from 'react'
import Peras from '../../../utilities/Peras'
import Headingtext from '../../../utilities/headingtext/Headingtext'
import Button from '../../../componants/Button'
import imageone from '../../../images/image1.png'
import imagetwo from '../../../images/image2.png'
import Miniheadingtext from '../../../utilities/miniheadingtext/Miniheadingtext'

const Homebaner = () => {
  return (
    <section className='pt-[39px] pb-[36px] bg-[#F2F0FF]'>
        <div className='max-w-container mx-auto relative'>
          <div className='w-[180px] h-[350px] absolute left-[-256px] top-[0]'>
            <img className='w-[100%] h-[100%] object-cover' src={imageone} alt='not found'/>
          </div>
            <div className='flex items-center justify-between gap-x-[22px] relative'>
                <div>
                    <Peras text='Best Furniture For Your Castle....' style=' w-[260px] capitalize  text-[16px] text-[red] font-[700] font-lato'/>
                    <Headingtext text='New Furniture Collection Trends in 2024' style='w-[664px] leading-[150%] mt-[12px] mb-[12px] text-[53px] text-[black] font-[700] font-Josefin'/>
                    <Peras text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.' style='w-[600px]  text-[16px] text-[#8A8FB9] font-[700] font-lato mb-[43px] leading-[180%]'/>
                    <Button text='Shop Now' style='bg-[#FB2E86] text-[#fff] text-[17px] font-[500] font-Josefin py-[16px] px-[40px] cursor-pointer '/>
                </div>
                <div className='w-[629px] h-[550px] '>
                    <img className='w-[100%] h-[100%] object-cover relative z-40' src={imagetwo} alt="not found" />
                </div>
                <div className='w-[500px] h-[500px] rounded-[50%] bg-[#ECD2FA] absolute right-[0] top-[-5px] z-30'></div>
                <div className='w-[500px] h-[500px] rounded-[50%] bg-[red] absolute right-[-40px] top-[-20px] z-20 opacity-5'></div>
                <div className='flex items-center justify-center w-[100px] h-[100px] text-[37px] text-[#fff] rounded-[50%] bg-[#00C1FE] leading-[150%] absolute right-[-30px] top-[0] z-10'>
                  <Miniheadingtext text='50% off' style='w-[69px] text-[27px] text-[#fff] text-center font-[700] font-Josefin mx-auto leading-[150%]'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homebaner