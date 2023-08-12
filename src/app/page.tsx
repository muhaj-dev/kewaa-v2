import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import What from "@/components/Home/What";
import hbg from "../assets/hbg.png"
import Image from "next/image";
export default function HomePage() {
  return (
    <>
      <div className="relative" >
      <Image
        src={hbg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
        <div className="max-w-[95rem] relative mx-auto px-[5%]">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="lg:mt-20">
      <What />
      </div>
      <div className="h-[1px] mb-16 bg-gray-600  w-full"></div>
      <Footer useCustomBackground={false} />
    </>
  );
}
