import React from 'react'
import { Image } from '../../utilities/Image'
import { Link } from 'react-router-dom'
// import errorImg from '../../assets/images/404.png'
import Button from '../../componants/Button'

export const ErrorPage = () => {
  return (
    <div>
        <div className='bg-footer-bg py-[100px]'>
            <div className='max-w-container mx-auto'>
                <h2 className='text-heading-color font-bold font-Josefin capitalize text-3xl'>404 Not Found</h2>
                <p className='text-txt-color capitalize font-lato font-medium'>Home. Page <Link className='text-btn-color' to="/home">404 not Found</Link></p>
            </div>
        </div>
        <div className='text-center'>
           <div className='w-[800px] h-[600px] mx-auto'>
            <picture>
                    {/* <Image source={errorImg} alt="not found "/> */}
                </picture>
           </div>
            <div>
                <h4 className='text-heading-color font-Josefin font-medium pb-[36px]'>oops! The page you requested was not found!</h4>
                <Link to="/">
                    <Button text="Back To Home" style="bg-btn-color py-[14px] px-[40px] rounded-md text-white font-lato font-medium capitalize "/>
                </Link>
            </div>
        </div>
    </div>
  )
}
