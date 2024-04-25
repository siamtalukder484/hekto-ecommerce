import React from 'react'
import PeraGrap from '../utilities/PeraGrap'
import Span from '../utilities/spantxt/Span'
import { Image } from '../utilities/Image'

const BlogPost = ({sorce, title, date, discription}) => {
  return (
    <div className='pt-[15px] pb-[15px] pl-[13px] pr-[29px] shadow-blogPost-shadoe w-[667px]  flex gap-x-[14px]'>
    <div className='w-[103px] h-[106px]'>
      <Image style="w-[100%] h-[100%] object-cover" source={sorce} alt="not found"/>
    </div>
    <div className='flex flex-col w-[506px] mt-[20px]'>
      <div className='flex gap-x-[31px] items-center'>
      <PeraGrap style="text-[18px] font-Josefin text-[#363385] leading-5" text={title}/>
      <Span style="text-xs font-lato text-[#A3A2B6] leading-4 font-normal" text={date}/>
      </div>
      <Span style="leading-7 text-sm font-lato text-[#A3A2B6]  font-normal	" text={discription}/>
    </div>
  </div>
  )
}

export default BlogPost