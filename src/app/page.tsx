import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import What from "@/components/Home/What";

export default function HomePage() {
  return (
    <>
      <div className=" bg-cover bg-center h-screen w-full bg px-[5%] ">
        <div className="max-w-[80rem] mx-auto">
          <Navbar />
          <Hero />
        </div>
      </div>
      <What />
      <div className="h-[1px] mb-16 bg-gray-600  w-full"></div>
      <Footer />
    </>
  );
}
