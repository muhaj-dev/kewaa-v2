import React from "react";
import Image from "next/image";
import ecoimage from "../../assets/ecoimage.png";

const EcoCard = ({ imgbg, cardbg }: any) => {
  return (
    <div
      className={`border rounded-lg w-full  relative z-[5] px-3 sm:px-6 pt-16 pb-8 ${cardbg}`}
    >
      <div
        className={` border rounded-md p-2 sm:p-4 absolute -top-8 w-fit ${imgbg}`}
      >
        <Image src={ecoimage} alt="eco" />
      </div>
      <h3>Real Estate</h3>
      <p className="lg:text-[0.8rem] text-[1.3rem] font-[300]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet. Amet minim mollit...
      </p>
    </div>
  );
};

export default EcoCard;
