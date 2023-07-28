import React from 'react'
// import { Aboutbrand } from '../components/Aboutbrand'
import { Landing } from '../components/Landing'
import { Layout } from '../components/Layout'
// import { Newsletter } from '../components/Newsletter'
// import { FeaturedProducts } from '../components/FeedContainer'



export const Home = () => {
  return (
    <>
      <Layout>
        <div className='Home text-center'>
          <Landing />
          {/* <FeaturedProducts /> */}
          {/* <Aboutbrand />
          <Newsletter /> */}
      </div>
      </Layout>
    </>
  )
}

