import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Market/Navbar'
import Trending from '@/components/Market/Trending'
import React from 'react'

const page = () => {
  return (
    <div className='mx-auto'>
      <Navbar />
      <div className='mx-auto'>
      <Trending title={`Trending`} />
      <Trending title={`New Listing`} />
      <Trending title={`Listed Collections`} />
      </div>
      
      
      <div className='lg:mt-72'>
      <div className="h-[1px] mb-16 bg-gray-600  w-full"></div>
      <Footer useCustomBackground={true} />
      </div>

    </div>
  )
}

export default page







