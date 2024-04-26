import React from 'react'
import { Image } from '../../utilities/Image'
import blogImg from '../../assets/images/blogImage.png'
import blogVideo1 from '../../assets/images/blogVido1.png'
import blogVideo2 from '../../assets/images/blogVideo2.png'
import blogImg1 from '../../assets/images/blogImg1.png'
import blogImg2 from '../../assets/images/blogImg2.png'
import blogImg3 from '../../assets/images/blogImg3.png'
import blogImg4 from '../../assets/images/blogImg4.png'
import { FaPenNib } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import PeraGrap from '../../utilities/PeraGrap';
import Miniheadingtext from '../../utilities/miniheadingtext/Miniheadingtext';
import { GrPlayFill } from "react-icons/gr";
import Span from '../../utilities/spantxt/Span'
import { IoStar } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import blogPost1 from '../../assets/images/blogPost1.png'
import blogPost2 from '../../assets/images/blogPost2.png'
import BlogPost from '../../componants/BlogPost'
import Input from '../../componants/Input'
import Button from '../../componants/Button'
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import Nanohead from '../../utilities/nanohead/Nanohead'
import { CiSearch } from "react-icons/ci";
import recentPost1 from '../../assets/images/post1.png'
import recentPost2 from '../../assets/images/post2.png'
import recentPost3 from '../../assets/images/post3.png'
import recentPost4 from '../../assets/images/post4.png'
import sale1 from '../../assets/images/sale1.png'
import sale2 from '../../assets/images/sale2.png'
import sale3 from '../../assets/images/sale3.png'
import offer1 from '../../assets/images/offer1.png'
import offer2 from '../../assets/images/offer2.png'
import offer3 from '../../assets/images/offer3.png'
import offer4 from '../../assets/images/offer4.png'
import shopBrand from '../../assets/images/brand_img.png'










const Blog = () => {

  let productarray = [
    {   
        id: 1,
        img : blogImg1,
        name : "Quam sed",
        newprice:"$42.00",
        oldprice : "$60.00",
    },
    {   
        id: 2,
        img : blogImg2,
        name : "Tristique sed",
        newprice:"$22.00",
        oldprice : "$56.00",
    },
    {   
        id: 3,
        img : blogImg3,
        name : "A etiam",
        newprice:"$22.00",
        oldprice : "$56.00",
    },
    {   
        id: 4,
        img : blogImg4,
        name : "Mi nisi",
        newprice:"$42.00",
        oldprice : "$60.00",
    }

]

let postarry = [
  {
    id: 1,
    img:blogPost1,
    title:"Sapien ac",
    date:"Jan 09 2020",
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur."
  },
  {
    id: 2,
    img:blogPost2,
    title:"Augue conva",
    date:"Aug 18 2020",
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur."
  },
]
let recentPost = [
  {
    id: 1,
    img:recentPost1,
    title:"It is a long established fact",
    date:"Aug 09 2020",
  },
  {
    id: 2,
    img:recentPost2,
    title:"It is a long established fact",
    date:"Aug 09 2020",
   
  },
  {
    id: 3,
    img:recentPost3,
    title:"It is a long established fact",
    date:"Aug 09 2020",
   
  },
  {
    id: 4,
    img:recentPost4,
    title:"It is a long established fact",
    date:"Aug 09 2020",
   
  },
]
let saleProduct = [
  {
    id: 1,
    img:sale1,
    title:"Elit ornare in enim mauris.",
    date:"Aug 09 2020",
  },
  {
    id: 2,
    img:sale2,
    title:"Viverra pulvinar et enim.",
    date:"Aug 09 2020",
   
  },
  {
    id: 3,
    img:sale3,
    title:"Mattis varius donec fdsfd",
    date:"Aug 09 2020",
   
  },
 
]
let offerProduct = [
  {
    id: 1,
    img:offer1,
    title:"Duis lectus est.",
    offer:"$12.00 - $15.00",
  },
  {
    id: 2,
    img:offer2,
    title:"Sed placerat.",
    offer:"$12.00 - $15.00",
  },
  {
    id: 3,
    img:offer3,
    title:"Netus proin.",
    offer:"$12.00 - $15.00",
  },
  {
    id: 4,
    img:offer4,
    title:"Platea in.",
    offer:"$12.00 - $15.00",
  },
 
]



  return (
   <>
   <section>
     <div className='bg-about-bg'>
      <div className='max-w-container mx-auto pt-[96px] pb-[126px]'>
        <h3 className='font-Josefin text-[36px] font-bold leading-0 mb-[9px]'>Single Blog</h3>
        <ul className='flex'>
          <li className='font-lato text-[16px] font-semibold text-txt-color'>Home <span className='my-0 mx-1.5'>.</span> </li>
          <li className='font-lato text-[16px] font-semibold text-txt-color'>Pages <span className='my-0 ml-[3px] mr-[7px] text-btn-color'>.</span></li>
          <li className='font-lato text-[16px] font-semibold text-btn-color'>Single Blog</li>
        </ul>
      </div>
    </div>
    <div className='pt-[105px] max-w-container mx-auto'>
      <div className='flex gap-[30px]'>
      <div className='w-[870px] flex flex-col'>
       <div>
       <div className='w-[870px] h-[453px]'> 
           <Image style="w-[100%] h-[100%] object-cover" source={blogImg} alt="not found"/>
        </div>
        <div className='flex items-center gap-[27px] mt-[27px]'>
            <div className='flex items-center gap-[10px]'>
            <FaPenNib className='text-[11px] text-[#FB2E86]' />
             <PeraGrap style="text-sm	font-Josefin capitalize font-normal text-[#151875] px-[43px] py-[5px] bg-[#FFE7F9] rounded-sm	" text="Surf Auxion"/>
            </div>
            <div  className='flex items-center gap-[10px]'>
            <FaRegCalendarAlt className='text-[11px] text-[#FFA454]'/>
            <PeraGrap style="text-sm	font-Josefin capitalize font-normal text-[#151875] px-[43px] py-[5px] bg-[#FFECE2] rounded-sm	" text="Aug 09 2020"/>
            </div>
        </div>
        <div className='mt-7'>
          <Miniheadingtext style="w-[730px] text-3xl	font-Josefin font-bold	 text-[#151875]" text="Mauris at orci non vulputate diam tincidunt nec."/>
          <PeraGrap style="w-[852px] text-base font-normal font-lato mt-[23px] mb-[63px] text-[#8A8FB9]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."/>
          <PeraGrap style="w-[871px] text-base font-normal font-lato mt-[63px] mb-[78px] text-[#8A8FB9]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, "/>
          <PeraGrap style="w-[832px] text-lg italic font-semibold font-Josefin mt-[23px] pl-[14px] text-[#969CB4] relative after:absolute after:content-[''] after:w-[2px] after:h-[141px] after:bg-[#FC45A0] after:left-0 after:top-[-27px]" text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”"/>
        </div>
        <div className='pt-[61px] flex items-center justify-between gap-[34px]'>
          <div className='w-[418px] h-[245px] relative'>
          <Image style="w-[100%] h-[100%] object-cover" source={blogVideo2} alt="not found"/>
          <div className='w-[60px] h-[60px] rounded-full bg-white  absolute top-[50%] left-[50%] translate-y-topMiddle	translate-x-leftMiddle flex justify-center items-center'>
             <GrPlayFill className='text-[18px] text-[#FC45A0]' />
          </div>
          </div>
          <div className='w-[418px] h-[245px] relative'>
          <Image style="w-[100%] h-[100%] object-cover" source={blogVideo1} alt="not found"/>
          <div className='w-[60px] h-[60px] rounded-full bg-white  absolute top-[50%] left-[50%] translate-y-topMiddle	translate-x-leftMiddle flex justify-center items-center'>
             <GrPlayFill className='text-[18px] text-[#FC45A0]' />
          </div>
          </div>
        </div>
        <div className='mt-[45px] mb-[51px]'>
        <PeraGrap style="w-[871px] text-base font-normal font-lato  text-[#8A8FB9]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, "/>
        </div>
        <div className='flex item-center gap-[12px] mb-[63px]'>
          {
            productarray.map((item,index)=>(
          <div key={index} className='w-[209px]'>
            <div className='w-[209px] h-[254px]'>
            <Image style="w-[100%] h-[100%] object-cover" source={item.img} alt="not found"/>
            <PeraGrap style="mt-[15px] ml-[23px] font-Josefin text-xl	font-normal	mb-3" text={item.name}/>
            <div className='flex items-center gap-[18px] ml-[13px]'>
              <div className='flex items-center justify-center gap-[9px]'>
                <Span style="font-Josefin text-sm	font-normal text-[#151875]" text={item.newprice}/>
                <del className='font-Josefin text-sm	font-normal text-[#FC45A0]'>{item.oldprice}</del>
              </div>
              <div className='flex items-center mt-[-2px] gap-[2px]'>
              <IoStar className='text-[10px] text-[#FFD659]'/>
              <IoStar className='text-[10px] text-[#FFD659]'/>
              <IoStar className='text-[10px] text-[#FFD659]'/>
              <IoStar className='text-[10px] text-[#FFD659]'/>
              <IoStar className='text-[10px] text-[#B2B2B2]'/>
              </div>
            </div>
            </div >
          </div>
            ))
          }
        </div>
        <div>
           <PeraGrap style=" w-[871px] text-[15px]	font-normal font-Josefin text-[#8A8FB9]	mt-[103px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, "/>
           <PeraGrap style=" w-[871px] text-base	font-light font-Josefin text-[#8A8FB9]	mt-[32px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, "/>
        </div>
       </div>
        <div className='pt-[59px] text-center flex justify-start items-center mx-auto gap-x-[14px]'>
          <div className='w-[25px] h-[25px] rounded-full bg-[#5625DF] text-center flex cursor-pointer items-center justify-center'>
          <TiSocialFacebook className='text-white text-base'/>
          </div>
          <div className='w-[25px] h-[25px] rounded-full bg-[#FC45A0] text-center flex cursor-pointer items-center justify-center'>
          <RiInstagramFill className='text-white text-base'/>
          </div>
          <div className='w-[25px] h-[25px] rounded-full bg-[#37DAF3] text-center flex cursor-pointer items-center justify-center'>
          <IoLogoTwitter className='text-white text-base'/>
          </div>
        </div>
        <div className='pt-[27px] flex items-center justify-between'>
          <div className='flex items-center cursor-pointer	'> 
            <BsArrowLeft className='text-[18px] text-pera-color'/><PeraGrap style="text-base	font-lato text-pera-color font-medium" text="Previous Post"/>
            </div>
          <div className='flex items-center cursor-pointer	'> 
           <PeraGrap style="text-base	font-lato text-pera-color font-medium" text="Next Post"/> <BsArrowRight  className='text-[18px] align-bottom		 text-pera-color'/>
            </div>
        </div>
        <div className='mt-[111px] flex flex-col gap-y-[30px]'>
            {
              postarry.map((item, index)=>(
               <BlogPost key={index} sorce={item.img} title={item.title} date={item.date}  discription={item.discription}/>
              ))
            }

        </div>
        <div className='pt-[135px] w-[717px]'>
        <form className="space-y-5 text-center">
                <div className="flex items-center justify-between gap-x-[33px] ">
                  <div className="w-[341px] relative">
                  <FaUserAlt className='absolute text-[13px] text-[#a4b6c8b3] top-[50%]  translate-y-topMiddle left-[9px]'/>
                    <Input
                      type="text"
                      style="w-full border border-[#a4b6c8b3] pl-[28px] pt-[10px] pb-[13px] rounded-[3px] outline-none text-base font-lato font-normal leading-normal text-pera-color "
                      placeholder="Your Name*"
                      name="fullName"
                      required
                    />
                  </div>
                  <div className="w-[341px] relative">
                  <MdEmail  className='absolute text-[14px] text-[#a4b6c8b3] top-[50%]  translate-y-topMiddle left-[9px]'/>
                    <Input
                      type="email"
                      style="w-full border border-[#a4b6c8b3] pl-[28px] pt-[10px] pb-[13px] rounded-[3px] outline-none text-base font-lato font-normal leading-normal text-pera-color"
                      placeholder="Write Your Email*"
                      name="email"
                    />
                  </div>
                </div>
                <div className='relative'>
                <BiSolidMessageRounded  className='absolute text-[14px] text-[#a4b6c8b3] top-[30px]   left-[20px]'/>
                  <textarea
                    className="w-[717px] h-[205px] border border-[#a4b6c8b3] pt-[21px] pl-[39px] rounded-[3px] outline-none text-base font-lato font-normal leading-normal text-pera-color resize-none		"
                    name=""
                    id=""
                    placeholder="Write your comment*"
                  ></textarea>
                </div>
                <div className='pt-[25px] pb-[45px] flex items-center gap-x-[5px] justify-start text-[#a4b6c8b3]'>
                  <Input
                  type="checkbox"
                  style=""
                  name=""/>
                  <PeraGrap style="text-[13px] font-lato font-medium	" text="Save my name, email, and website in this browser for the next time I comment."/> 
                </div>
                <Button
                  text="Continue Shipping"
                  style="py-[15px] px-[271px] bg-[#FC45A0] text-white font-Josefin  text-[17px] font-normal leading-[25px] rounded-[3px] pointer	"
                />
              </form>

        </div>
      </div>
      <div className='w-[270px]'>
        <div>
          <div className='flex flex-col gap-y-[15px]'>
            <Nanohead style="text-[22px] font-Josefin font-semibold	leading-6	text-[#151875]" text="Search"/>
            <div className='w-[270px] h-10 relative'>
                <Input
                   style="w-[100%] h-[100%] border border-[#a4b6c8b3] text-pera-color text-base pl-3 pr-8 rounded-[3px] outline-none text-base font-lato"
                />
                <CiSearch className="absolute top-[50%]  translate-y-topMiddle right-[10px] text-[#8296a9b3] cursor-pointer"/>
            </div>
          </div>
          <div className='pt-[52px]'>
          <Nanohead style="text-[22px] font-Josefin font-semibold	leading-6	text-[#151875]" text="Categories"/>
          <div className='pt-[25px] flex items-center gap-x-[10px]'>
            <div  className='flex flex-col gap-y-[12px]'>
              <PeraGrap style="text-sm font-Josefin font-normal w-[122px] transition-all duration-300	rounded	 hover:w-[122px] text-[#3F509E] cursor-pointer py-2 pl-[9px] pr-[33px] hover:py-2 hover:pl-[9px] hover:pr-[33px] hover:bg-[#FC45A0] hover:text-[#fff]" text="Hobbies (14)"/>
              <PeraGrap style="text-sm font-Josefin font-normal w-[122px] transition-all duration-300	rounded	 hover:w-[122px] text-[#3F509E] cursor-pointer py-2 pl-[9px] pr-[33px] hover:py-2 hover:pl-[9px] hover:pr-[33px] hover:bg-[#FC45A0] hover:text-[#fff]" text="Women (21)"/>
              <PeraGrap style="text-sm font-Josefin font-normal w-[122px] transition-all duration-300	rounded	 hover:w-[122px] text-[#3F509E] cursor-pointer py-2 pl-[9px] pr-[33px] hover:py-2 hover:pl-[9px] hover:pr-[33px] hover:bg-[#FC45A0] hover:text-[#fff]" text="Women (21)"/>
            </div>
            <div  className='flex flex-col gap-y-[12px]'>
              <PeraGrap style="text-sm font-Josefin font-normal w-[122px] transition-all duration-300	rounded	 hover:w-[122px] text-[#3F509E] cursor-pointer py-2 pl-[9px] pr-[33px] hover:py-2 hover:pl-[9px] hover:pr-[33px] hover:bg-[#FC45A0] hover:text-[#fff]" text="Women (21)"/>
              <PeraGrap style="text-sm font-Josefin font-normal w-[122px] transition-all duration-300	rounded	 hover:w-[122px] text-[#3F509E] cursor-pointer py-2 pl-[9px] pr-[33px] hover:py-2 hover:pl-[9px] hover:pr-[33px] hover:bg-[#FC45A0] hover:text-[#fff]" text="Women (21)"/>
              <PeraGrap style="text-sm font-Josefin font-normal w-[122px] transition-all duration-300	rounded	 hover:w-[122px] text-[#3F509E] cursor-pointer py-2 pl-[9px] pr-[33px] hover:py-2 hover:pl-[9px] hover:pr-[33px] hover:bg-[#FC45A0] hover:text-[#fff]" text="Women (21)"/>
            </div>
          </div>
          </div>
          <div className='pt-[37px]'>
          <Nanohead style="text-[22px] font-Josefin font-semibold	leading-6	text-[#151875]" text="Recent Post"/>
          <div className='pt-[37px] flex flex-col gap-y-[22px]' >
            {
              recentPost.map((item, index)=>(

                <div key={index} className='w-[250px] flex gap-x-[5px]'>
                <div className='w-[70px] h-[51px]'>
                  <Image style="w-[100%] h-[100%] object-cover" source={item.img} alt="not found"/>
                </div>
                <div className='flex flex-col gap-y-[5px] pt-[7px]'>
                  <PeraGrap style="text-sm	font-normal	font-Josefin leading-3	text-[#3F509E]" text={item.title}/>
                  <Span  style="text-[11px]	font-semibold	font-lato leading-3	text-[#8A8FB9]" text={item.date}/>
                </div>
              </div>

              ))
            }
          </div>
          </div>
          <div className='pt-[37px]'>
          <Nanohead style="text-[22px] font-Josefin font-semibold	leading-6	text-[#151875]" text="Sale Product"/>
          <div className='pt-[37px] flex flex-col gap-y-[22px]' >
            {
              saleProduct.map((item, index)=>(

                <div key={index} className='w-[250px] flex gap-x-[5px]'>
                <div className='w-[70px] h-[51px]'>
                  <Image style="w-[100%] h-[100%] object-cover" source={item.img} alt="not found"/>
                </div>
                <div className='flex flex-col gap-y-[5px] pt-[7px]'>
                  <PeraGrap style="text-sm	font-normal	font-Josefin leading-3	text-[#3F509E]" text={item.title}/>
                  <Span  style="text-[11px]	font-semibold	font-lato leading-3	text-[#8A8FB9]" text={item.date}/>
                </div>
              </div>

              ))
            }
          </div>
          </div>
          <div className='pt-[37px]'>
          <Nanohead style="text-[22px] font-Josefin font-semibold	leading-6	text-[#151875]" text="Offer product"/>
          <div className='pt-[37px] flex gap-x-[15px]  gap-y-[30px] flex-wrap'>
                {
                  offerProduct.map((item, index) =>(
            <div key={index} className='w-[126px]'>
                <div className='w-[126px] h-[80px]'>
                    <Image style="w-[100%] h-[100%] object-cover" source={item.img} alt="not found"/>
                </div>
                <div className='text-center mt-[9px]'>
                  <PeraGrap style="text-sm	font-semibold	font-lato leading-4	text-[#151875]" text={item.title}/>
                  <Span  style="text-[11px]	font-semibold	font-lato leading-3	text-[#8A8FB9]" text={item.offer}/>
                </div>
            </div>
                  ))
                }
            </div>
          </div>
          <div className='pt-[37px]'>
            <Nanohead style="text-[22px] font-Josefin font-semibold	leading-6	text-[#151875]" text="Follow"/>
              <div className='pt-[15px] flex gap-x-[14px] items-center'>
                <div className='w-[25px] h-[25px] rounded-full bg-[#5625DF] text-center flex cursor-pointer items-center justify-center'>
              <TiSocialFacebook className='text-white text-base'/>
            </div>
              <div className='w-[25px] h-[25px] rounded-full bg-[#FC45A0] text-center flex cursor-pointer items-center justify-center'>
             <RiInstagramFill className='text-white text-base'/>
             </div>
             <div className='w-[25px] h-[25px] rounded-full bg-[#37DAF3] text-center flex cursor-pointer items-center justify-center'>
             <IoLogoTwitter className='text-white text-base'/>
          </div>
        </div>
          </div>
          <div className='pt-[37px]'>
          <Nanohead style="text-[22px] font-Josefin font-semibold	leading-6	text-[#151875]" text="Tags"/>
          <div className='pt-[18px] grid grid-cols-3	gap-x-[41px] gap-y-3'>
          <PeraGrap style="text-base relative cursor-pointer after:absolute after:content-[''] after:w-[57px] after:h-[1px] after:bg-[#151875] hover:text-[#FC45A0] hover:after:bg-[#FC45A0]  after:left-0 after:bottom-[0px] font-semibold	font-lato transition-all duration-300 	text-[#151875]" text="General"/>
          <PeraGrap style="text-base relative cursor-pointer after:absolute after:content-[''] after:w-[52px] after:h-[1px] after:bg-[#151875] hover:text-[#FC45A0] hover:after:bg-[#FC45A0]  after:left-0 after:bottom-[0px] font-semibold	font-lato transition-all duration-300 	text-[#151875]" text="Atsanil"/>
          <PeraGrap style="text-base relative cursor-pointer after:absolute after:content-[''] after:w-[41px] after:h-[1px] after:bg-[#151875] hover:text-[#FC45A0] hover:after:bg-[#FC45A0]  after:left-0 after:bottom-[0px] font-semibold	font-lato transition-all duration-300 	text-[#151875]" text="Insas."/>
          <PeraGrap style="text-base relative cursor-pointer after:absolute after:content-[''] after:w-[55px] after:h-[1px] after:bg-[#151875] hover:text-[#FC45A0] hover:after:bg-[#FC45A0]  after:left-0 after:bottom-[0px] font-semibold	font-lato transition-all duration-300 	text-[#151875]" text="Bibsaas"/>
          <PeraGrap style="text-base relative cursor-pointer after:absolute after:content-[''] after:w-[43px] after:h-[1px] after:bg-[#151875] hover:text-[#FC45A0] hover:after:bg-[#FC45A0]  after:left-0 after:bottom-[0px] font-semibold	font-lato transition-all duration-300 	text-[#151875]" text="Nulla."/>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
   </section>
   <section className='pt-[106px] max-w-container mx-auto'>
   <div className=' flex items-center justify-center'>
              <picture>
                <Image source={shopBrand} alt="FAQ Image Not Found"/>
              </picture>
          </div>
   </section>
   </>
   
    
  )
}

export default Blog
