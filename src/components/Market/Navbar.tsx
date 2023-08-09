"use client"; 
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/log.png'
import search from '../../assets/search.png'
import nav from '../../assets/hamburger.png'

const Navbar = () => {
    const [width, setWidth] = useState(window.innerWidth)
    console.log(width)


  return (
   <>
   {width > 768 ? <DeskNav />: <MobileNav />}
   </>
  )
}

const DeskNav = () => {

    return(
        <div className='flex justify-between items-center h-[15vh] px-[5%]'>
        <ul className='flex items-center justify-between w-[80%] '>
            <li>
                <Link href="/">
                    <Image src={logo} alt="Logo" width={100} height={100} />
                </Link>
            </li>
            <li className='text-[0.8rem] border border-[#C9C9C9] rounded-md w-[40%] py-[1%] px-[1%] flex w-[60%]'>
                <span><Image src={search} alt="Logo" /></span>
                <input className='bg-[transparent] w-[90%] pl-[2%] mx-auto' placeholder='Please input search details.'/>
            </li>
            <li className='text-[0.8rem]'>
                <Link href="/another-page">
                    Connect
                </Link>
            </li>
            <li className='text-[0.8rem]'>
                <Link href="/another-page">
                    Register
                </Link>
            </li>
            
        </ul>
        <Link href="/login" className='bg-[#70C492] text-[#3A3A3A] py-[0.5%] px-[1%] rounded-md w-[10%] flex justify-center'>Login</Link>



    </div>
    )
}

const MobileNav = () => {

    return(
        <div className='flex justify-between items-center h-[15vh] pr-[5%]'>
        <ul className='flex items-center justify-between w-[30%] '>
            <li>
                <Link href="/">
                    <Image src={logo} alt="Logo" width={200} height={200} />
                </Link>
            </li>
            
            
        </ul>
        <Image src={nav} alt="Logo" className='h-[3vh]' />



    </div>
    )
}

export default Navbar