import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Market/Navbar'
import Trending from '@/components/Market/Trending'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Trending title={`Trending`} />
      <Trending title={`New Listing`} />
      <Trending title={`Listed Collections`} />
      <Footer />

    </div>
  )
}

export default page







