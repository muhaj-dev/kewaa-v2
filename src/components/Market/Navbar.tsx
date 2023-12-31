"use client"; 
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/log.png'
import search from '../../assets/search.png'
import nav from '../../assets/hamburger.png'
import footerBg from "../../assets/footerbg.png";
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
        <div className='flex justify-between items-center h-[15vh] px-[5%]'>
    
        <ul className='flex items-center justify-between w-[80%] '>
            <li>
                <Link href="/">
                <div style={{ width: '150px', height: '150px' }}>
  <Image src={logo} alt="" />
</div>
                </Link>
            </li>
            <li className='text-[0.8rem] border border-[#C9C9C9] rounded-md  py-[1%] px-[1%] flex w-[60%]'>
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
    const [toggleNavbar, setToggleNavBar] = useState(false);
    let navDisplay = () => {
      return (
        <div className="flex justify-between items-center ">
          <ul className="flex items-center justify-between w-[30%] ">
            <li>
              <Link href="/">
                <Image src={logo} alt="Logo" width={200} height={200} />
              </Link>
            </li>
          </ul>
          {!toggleNavbar ? (
            <Image
              onClick={() => setToggleNavBar(true)}
              src={nav}
              alt="Logo"
              className="cursor-pointer h-[3vh]"
            />
          ) : (
            <p
              onClick={() => setToggleNavBar(false)}
              className="cursor-pointer text-[2.3rem]"
            >
              X
            </p>
          )}
        </div>
      );
    };
    return (
      <div className="h-[15vh]">
        {!toggleNavbar && navDisplay()}
  
        {toggleNavbar && (
          <div
            className="h-screen w-full
           backdrop-blur-sm bg-white/30  z-50  fixed   top-[0%] left-[0%]"
          >
            <div className="pr-8"> {navDisplay()} </div>
            <div className="grid items-center justify-center   w-full mt-[170px] ">
              <div className=" flex flex-col gap-4 min-w-[110px] mx-auto text-center">
                <Link
                  href="/market"
                  onClick={() => setToggleNavBar(false)}
                  className="bg-[#A6A8AB] text-[#3A3A3A] py-2 px-6 rounded-xl"
                >
                  Market Place
                </Link>
                <Link
                  onClick={() => setToggleNavBar(false)}
                  href="/another-page "
                  className="hover:bg-[#A6A8AB] p-4 rounded-xl"
                >
                  About
                </Link>
                <Link
                  onClick={() => setToggleNavBar(false)}
                  href="/another-page"
                  className="hover:bg-[#A6A8AB] p-4 rounded-xl"
                >
                  Docs
                </Link>
                <Link
                  onClick={() => setToggleNavBar(false)}
                  href="/another-page"
                  className="hover:bg-[#A6A8AB] p-4 rounded-xl"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

export default Navbar