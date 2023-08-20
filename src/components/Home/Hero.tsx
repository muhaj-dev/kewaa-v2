import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="my-[7%] mx-8">
        <h3 className="lg:text-[4.5rem] text-[2rem]  font-Lato font-black leading-[1.1] mb-3">
          Liquidity layer for <br /> tokenized{" "}
          <span className="drop-shadow-[-3px_-2px_0px_#70C492]">assets</span>
        </h3>
        <p className=" text-[1rem]">
          Kewaa provides liquidity for asset backed security tokens
          <br />
          including assets like real estate, bonds, shares and collectables.{" "}
        </p>
      </div>
      <button className="bg-[#70C492] text-[#3A3A3A] lg:py-[1%] px-[1%] lg:mx-8  rounded-md lg:w-[20%] w-[100%]  py-[3%] lg:my-[0%] my-[15%] font-[700]">
        Explore Ecosystem
      </button>
    </div>
  );
};

export default Hero;
