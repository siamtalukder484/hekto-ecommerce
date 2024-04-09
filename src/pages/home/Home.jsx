import React from 'react'
import Homebaner from './homebaner/Homebaner'
import Featuredproduct from './featuredproducts/Featuredproduct'
import Leatestproduct from './leatestproduct/Leatestproduct'
import Shopexoffer from './shopexoffer/Shopexoffer'
import Uniquefeature from './uniquefeatures/Uniquefeature'
import Trendingproduct from './trendingproducts/Trendingproduct'
import Discountitem from './discountitem/Discountitem'
import Topcategories from './topcategories/Topcategories'


const Home = () => {
  return (
    <>
      <Homebaner/>
      <Featuredproduct/>
      <Leatestproduct/>
      <Shopexoffer/>
      <Uniquefeature/>
      <Trendingproduct/>
      <Discountitem/>
      <Topcategories/>
    </>

  )
}

export default Home