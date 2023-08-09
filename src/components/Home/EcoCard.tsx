import React from 'react'
import Image from 'next/image';
import ecoimage from '../../assets/ecoimage.png'

const EcoCard = ({imgbg, cardbg}:any) => {
  return (
    <div className={`border rounded-md lg:w-[20%] relative z-[5] py-[8%] px-[5%] lg:px-[2%] lg:py-[1%] my-[13%] lg:my-[0%] ${cardbg}`}>
        <Image src={ecoimage} alt="eco" className={`mt-[-15%] border rounded-md py-[4%] px-[2%] ${imgbg}`}/>
        <h3>Real Estate</h3>
        <p className='lg:text-[0.8rem] text-[1.3rem] font-[300]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit...</p>
    </div>
  )
}

export default EcoCard