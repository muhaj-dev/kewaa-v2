"use client"; 
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/log.png'
import nav from '../../assets/hamburger.png'

const Navbar = () => {
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      setWidth(window.innerWidth);
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <>
        {width > 768 ? <DeskNav /> : <MobileNav />}
      </>
    );
  };

const DeskNav = () => {

    return(
        <div className='flex justify-between items-center h-[15vh] pr-[5%]'>
        <ul className='flex items-center justify-between w-[30%] '>
            <li>
                <Link href="/">
                    <Image src={logo} alt="Logo" width={200} height={200} />
                </Link>
            </li>
            <li className='text-[1rem]'>
                <Link href="/another-page ">
                    About
                </Link>
            </li>
            <li className='text-[1rem]'>
                <Link href="/another-page">
                    Docs
                </Link>
            </li>
            <li className='text-[1rem]'>
                <Link href="/another-page">
                    Contact
                </Link>
            </li>
            
        </ul>
        <Link href="/market" className='bg-[#A6A8AB] text-[#3A3A3A] py-[1%] px-[1%] rounded-md'>Market Place</Link>



    </div>
    )
}

const MobileNav = () => {

    return(
        <div className='flex justify-between items-center h-[15vh]'>
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