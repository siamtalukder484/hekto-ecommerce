import React from 'react'
import ProductImg from '../../componants/ProductImg'
import productImgOne from '../../assets/images/product1.png'

const Home = () => {
  return (
    <div className='py-[100px]'>
      <div className='max-w-container mx-auto'>
        <div className='flex gap-6'>
          <ProductImg img={productImgOne} productname="Cantilever chair" code="X234564"  price="$56.78"/>
          <ProductImg img={productImgOne} productname="Cantilever chair" code="X234564"  price="$56.78"/>
        </div>
      </div>
    </div>
  )
}

export default Home