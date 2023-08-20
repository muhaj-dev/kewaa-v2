"use client";

import React, { useState, useRef, useEffect } from "react";
import trend1 from "../../assets/trend1.png";
import progress from "../../assets/progress.png";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Image from "next/image";
import { motion } from "framer-motion";


const Trending = ({ title }: any) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [containerWidth, setContainerWidth] = useState<number | null>(null);
    const draggableRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
        if (draggableRef.current) {
          const container = draggableRef.current.parentElement;
          if (container) {
            setContainerWidth(container.offsetWidth);
            console.log(container.offsetWidth)
          }
        }
      }, []);
    
      const dragConstraints = {
        left: -1757,
        right: 0,
      };
  const card = [
    {
      id: 1,
      img: trend1,
      name: "Real Estate1",
      cont: "Experience Virtual Tours of Luxury Properties Worldwide.",
      price: "$60,000",
      out: "33/200",
    },
    {
      id: 2,
      img: trend1,
      name: "Real Estate2",
      cont: "Experience Virtual Tours of Luxury Properties Worldwide.",
      price: "$60,000",
      out: "33/200",
    },
    {
      id: 3,
      img: trend1,
      name: "Real Estate3",
      cont: "Experience Virtual Tours of Luxury Properties Worldwide.",
      price: "$60,000",
      out: "33/200",
    },
    {
      id: 4,
      img: trend1,
      name: "Real Estate4",
      cont: "Experience Virtual Tours of Luxury Properties Worldwide.",
      price: "$60,000",
      out: "33/200",
    },
    {
      id: 5,
      img: trend1,
      name: "Real Estate5",
      cont: "Experience Virtual Tours of Luxury Properties Worldwide.",
      price: "$60,000",
      out: "33/200",
    },
    {
      id: 6,
      img: trend1,
      name: "Real Estate6",
      cont: "Experience Virtual Tours of Luxury Properties Worldwide.",
      price: "$60,000",
      out: "33/200",
    },
    {
      id: 7,
      img: trend1,
      name: "Real Estate7",
      cont: "Experience Virtual Tours of Luxury Properties Worldwide.",
      price: "$60,000",
      out: "33/200",
    },
  ];

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= card.length) {
      newIndex = card.length = 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="w-[87%] overflow-x-hidden mx-auto my-28">
      <p className="font-bold text-[2rem]">{title}</p>
      <motion.div
      drag='x'
      ref={draggableRef}
      dragConstraints={dragConstraints}
        style={{ transform: `translate(-${activeIndex * 10}%)` }}
        className="carousel w-fit flex ease-in-out justify-start gap-12 md:items-center my-[5rem]"

      >

        {card.map?.((item) => (
          <div
            key={item.id}
            className="bg-[#EEEEFF] w-[270px] md:w-[280px] text-[#383838] rounded-[16px]"
          >
            <div>
              <Image src={item.img} alt="o" className="h-[200px] w-[100%]" />
            </div>

            <div className="flex gap-2 w-[90%] mx-auto">
              <Image
                src={item.img}
                alt="o"
                className="h-[65px] border-[3px] border-white w-[29%] rounded-md mt-[-10%]"
              />
              <p className="mt-2 font-semibold text-[20px]">{item.name}</p>
            </div>
            <div className="px-[5%] py-[2%]  rounded-b-md ">
              <p className="text-[#383838] font-light text-[.9rem] mt-[15px] w-[90%]">
                {item.cont}
              </p>
              <div className="flex justify-between  my-[5%]">
                <div>
                  <h5 className="text-[#383838] font-light text-[0.9rem] mb-1">
                    Trading Volume:
                  </h5>
                  <p className="text-[#383838] text-[1rem] font-bold ">{item.price}</p>
                </div>
                <div>
                  <h5 className="text-[#383838]  font-light text-[0.9rem] ">
                    Available Fraction
                  </h5>
                  <Image src={progress} className="my-1" alt="" />
                  <p className="text-[#383838] text-end text-[0.8rem] font-semibold ">{item.out}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div className=" mx-auto flex w-fit">
      <button
          className="mr-5"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <MdOutlineKeyboardArrowLeft className='h-[30px] w-[30px]' />
        </button>
        {card.map?.((item, index) => {
          return (
            <button
            key={item.id}
              onClick={() => {
                updateIndex(index);
              }}
              className={`px-2.5 py-1 mx-1.5 ${
                index === activeIndex ? "bg-white text-black" : "bg-[#383838] text-white"
              }`}
            >
              {item.id}
            </button>
          );
        })}
          <button
          className="ml-5"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
                 <MdOutlineKeyboardArrowRight className='h-[30px] w-[30px]' />

        </button>
      </div>
    </div>
  );
};

const TrendCard = ({ src }: any) => {
  return (
    <>
      <div className="bg-[#EEEEFF] md:w-[50%] lg:w-[22%] text-[#383838] rounded-[16px] my-[7%] lg:my-[0%] ">
        <div>
          <Image src={src} alt="" className="h-[200px] w-[100%]" />
        </div>

        <div className="flex justify-center  ">
          <Image
            src={src}
            alt=""
            className="h-[60px] w-[60px] rounded-md mt-[-10%]"
          />
          <p className="ml-[5%]">Real Estate</p>
        </div>
        <div className="px-[5%] py-[2%]  rounded-b-md ">
          <p className="text-[#383838] text-[0.6rem] mt-[3%] w-[60%]">
            Experience Virtual Tours of Luxury Properties Worldwide.
          </p>
          <div className="flex justify-between items-center my-[5%]">
            <div>
              <h5 className="text-[#383838] text-[0.6rem] ">Trading Volume:</h5>
              <p className="text-[#383838] text-[0.6rem] ">$60,000</p>
            </div>
            <div>
              <h5 className="text-[#383838] text-[0.6rem] ">
                Available Fraction
              </h5>
              <Image src={progress} alt="" />
              <p className="text-[#383838] text-[0.6rem] ">33/200</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trending;
