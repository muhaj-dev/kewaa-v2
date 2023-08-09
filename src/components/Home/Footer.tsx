import Link from 'next/link'
import React from 'react'
import footerBg from '../../assets/footerbg.png'
import footerlogo from '../../assets/footerlogo.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import discord from '../../assets/discord.png'
import github from '../../assets/github.png'
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
        <div className='flex justify-between lg:w-[30%] pl-[5%] '>
            <ul className='flex flex-col justify-start h-[25vh]'>
                <li className='font-[900] text-[1.3rem] lg:text-[1.0rem]'>KEWAA</li>
                <li className='lg:text-[0.8rem] text-[1.2rem] mt-[15%] text-[#C5C5C5]'>
                    <Link href="/another-page ">
                        Home
                    </Link>
                </li>
                <li className='lg:text-[0.8rem] text-[1.2rem] mt-[15%] text-[#C5C5C5]'>
                    <Link href="/another-page">
                        About
                    </Link>
                </li>
                <li className='lg:text-[0.8rem] text-[1.2rem] mt-[15%] text-[#C5C5C5]'>
                    <Link href="/another-page">
                        Market Place
                    </Link>
                </li>
                <li className='lg:text-[0.8rem] text-[1.2rem] mt-[15%] text-[#C5C5C5]'>
                    <Link href="/another-page">
                        Docs
                    </Link>
                </li>
            </ul>

            <ul className='flex flex-col justify-start h-[25vh]'>
                <li className='font-[700]'>ABOUT</li>
                <li className='lg:text-[0.8rem] text-[1.2rem] mt-[15%] text-[#C5C5C5] mt-[8%]'>
                    <Link href="/another-page ">
                        Careers
                    </Link>
                </li>
                <li className='lg:text-[0.8rem] text-[1.2rem] mt-[15%] text-[#C5C5C5] mt-[8%]'>
                    <Link href="/another-page">
                        Legal Framework
                    </Link>
                </li>
                <li className='lg:text-[0.8rem] text-[1.2rem] mt-[15%] text-[#C5C5C5] mt-[8%]'>
                    <Link href="/another-page">
                        Terms and Conditions
                    </Link>
                </li>
            </ul>

        </div>
        <Image src={footerBg} alt="" className='h-[500px] w-[500px] absolute right-[0%] mt-[-27%] hidden lg:block'/>

        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between px-[3%] my-[5%] lg:my-[0%]' >
            <Image src={footerlogo} alt="" className='h-[70px] w-[70px]'/>
            <p className='text-[#C5C5C5] text-[1.3rem] lg:text-[0.8rem]'>Copyright 2023</p>
            <ul className='flex items-center justify-between relative z-[5] lg:w-[10%] w-[60%]'>
                <li className='text-[0.8rem] mt-[15%]'>
                    <Link href="/another-page ">
                        <Image src={twitter} alt="" className='lg:h-[30px] lg:w-[30px]' />
                    </Link>
                </li>
                <li className='text-[0.8rem] mt-[15%]'>
                    <Link href="/another-page ">
                        <Image src={linkedin} alt="" className='lg:h-[30px] lg:w-[30px]' />
                    </Link>
                </li>
                <li className='text-[0.8rem] mt-[15%]'>
                    <Link href="/another-page ">
                        <Image src={discord} alt="" className='lg:h-[15px] lg:w-[15px]' />
                    </Link>
                </li>
                <li className='text-[0.8rem] mt-[15%]'>
                    <Link href="/another-page ">
                        <Image src={github} alt="" className='lg:h-[15px] lg:w-[15px]'/>
                    </Link>
                </li>
            </ul>

            
        </div>
        
       

    </div>
  )
}

export default Footer