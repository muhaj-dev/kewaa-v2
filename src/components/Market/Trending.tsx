import React from 'react'
import trend1 from '../../assets/trend1.png'
import trend2 from '../../assets/trending.png'
import progress from '../../assets/progress.png'
import Image from 'next/image'

const Trending = ({title}:any) => {
  return (
    <div className='px-[5%]'>
        <h3>{title}</h3>

        <div className='flex flex-col lg:flex-row justify-between md:items-center my-[5%]'>
            <TrendCard  src={trend1}/>
            <TrendCard src={trend1}/>
            <TrendCard src={trend1}/>
        </div>
        

    </div>
  )
}

const TrendCard = ({src}:any) => {
    return (
        <div className='bg-[#EEEEFF] md:w-[50%] lg:w-[22%] text-[#383838] rounded-[16px] my-[7%] lg:my-[0%] '>
            <div>
            <Image src={src} alt= '' className='h-[200px] w-[100%]' />
            </div>

            <div className='flex justify-center  '>
                <Image src={src} alt= '' className='h-[60px] w-[60px] rounded-md mt-[-10%]' />
                <p className='ml-[5%]'>Real Estate</p>

            </div>
            <div className='px-[5%] py-[2%]  rounded-b-md '>
                <p className='text-[#383838] text-[0.6rem] mt-[3%] w-[60%]'>Experience Virtual Tours of Luxury Properties Worldwide.</p>
                <div className='flex justify-between items-center my-[5%]'>
                    <div>
                        <h5 className='text-[#383838] text-[0.6rem] '>Trading Volume:</h5>
                        <p className='text-[#383838] text-[0.6rem] '>$60,000</p>
                    </div>
                    <div>
                        <h5 className='text-[#383838] text-[0.6rem] '>Available Fraction</h5>
                        <Image src={progress} alt= '' />
                        <p className='text-[#383838] text-[0.6rem] '>33/200</p>
                    </div>

                </div>

            </div>
            


        </div>
    )
}
export default Trending