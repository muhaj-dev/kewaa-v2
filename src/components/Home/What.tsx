import React from 'react'
import Image from 'next/image';
import what from '../../assets/what.png'
import how from '../../assets/how.png'
import whatbg from '../../assets/whatsvg.png'
import lines from '../../assets/Lines.png'
import ellipse from '../../assets/ellipse.png'
import eco from '../../assets/ecobg.png'
import EcoCard from './EcoCard';

const What = () => {
  return (
    <div className='bg-[#03060f]  lg:px-[0%] '>
        <div className='flex px-[5%] lg:px-[0%]'>
            <div className='lg:ml-[15%] pt-[7%]'>
                <h3 className='text-[3rem] lg:text-[2rem] font-[600] flex lg:flex-row flex-col'><span><Image src={what} alt="" /></span>What we do?</h3>
                <p className='lg:w-[70%] text-[1.3rem] lg:font-[300] font-[500] text-[#C5C5C5]  relative z-[5]'>Kewaa tokenizes real world assets and enables fractional investment of real estate, bonds, shares and collectables to allow more individuals into the market.</p>   
            </div>
            <Image src={whatbg} alt=""  className='h-[1000px] w-[1000px] absolute right-[0%] mt-[-15%]'/>
        </div>
        <div className='lg:flex justify-center hidden '>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="297" viewBox="0 0 12 297" fill="none">
                <path d="M6.00001 297L11.7735 287L0.22651 287L6.00001 297ZM5 4.37114e-08L5.00001 288L7.00001 288L7 -4.37114e-08L5 4.37114e-08Z" fill="#C5C5C5"/>
            </svg>

        </div>

               
       
        <div className='lg:ml-[30%] lg:mt-[2%] relative z-[5] px-[5%] lg:px-[0%] mt-[50%] '>
            <h3 className='text-[3rem] lg:text-[2rem] font-[600]'><span><Image src={how} alt="" /></span>How it works?</h3>
            <p className='lg:w-[50%] w-[100%] lg:text-[0.9rem] text-[1.3rem] lg:font-[300] font-[500] text-[#C5C5C5] '>Kewaa tokenizes real world assets and enables fractional investment.</p>
            <div className='flex ml-[5%] py-[5%]'>
                <Image src={lines} alt="lines" className='py-[1%] hidden lg:block'/>
                <Image src={ellipse} alt="lines" className='ml-[5%]'/>
                <ul className='font-[300] flex flex-col justify-between ml-[3%]'>
                    <li>Kewaa tokenizes real world assets.</li>
                    <li>Kewaa tokenizes real world assets.</li>
                    <li>Kewaa tokenizes real world assets.</li>
                    <li>Kewaa tokenizes real world assets.</li>
                </ul>
            </div>
            {/* <Image src={eco} alt=""  className='h-[1000px] w-[1000px] absolute left-[0%] mt-[-25%] '/> */}
        </div>

        <div className='lg:ml-[5%] relative z-[5] pl-[2.5%] lg:px-[0%] mt-[50%] lg:mt-[0%]'>
                <h3 className='text-[2rem] font-[600] flex lg:w-[30%] w-[100%] my-[8%] lg:my-[0%] '>An ecosystem of investment options powered by Kewaa</h3>
                <p className='lg:text-[0.9rem] text-[1.3rem] font-[300] lg:w-[50%] my-[1%] text-[#C5C5C5]'>Explore the growing ecosystem of fractionalized security tokens. 
            The Kewaa ecosystem is comprised of real estate, bonds, shares and collectables.</p>   
        </div>

        <div className='flex flex-col lg:flex-row justify-between px-[5%] my-[8%]'>
            <EcoCard imgbg={`bg-[#358B58]`} cardbg={`bg-[#131B16]`}  />
            <EcoCard imgbg={`bg-[#AA9300]`} cardbg={`bg-[#342D00]`}/>
            <EcoCard imgbg={`bg-[#A6A8AB]`} cardbg={`bg-[#383838]`}/> 

        </div>
        

       

        
       
    </div>
  )
}

export default What