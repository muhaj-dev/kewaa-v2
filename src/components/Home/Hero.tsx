import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="my-[7%]">
        <h3 className="text-[4.5rem]   font-Lato font-black leading-[1.4]">
          Liquidity layer for <br /> tokenized{" "}
          <span className="drop-shadow-[-3px_-2px_0px_#70C492]">assets</span>
        </h3>
        <p className=" lg:text-[0.9rem] text-[1.5rem]">
          Kewaa provides liquidity for asset backed security tokens
          <br />
          including assets like real estate, bonds, shares and collectables.{" "}
        </p>
      </div>
      <button className="bg-[#70C492] text-[#3A3A3A] lg:py-[1%] px-[1%] rounded-md lg:w-[30%] w-[100%]  py-[3%] lg:my-[0%] my-[15%] font-[700]">
        Explore Ecosystem
      </button>
    </div>
  );
};

export default Hero;
