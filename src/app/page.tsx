import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import What from "@/components/Home/What";



export default function HomePage() {
  return (
    <>
    <div
      className=" bg-cover bg-center h-screen w-full bg px-[5%]"
    >
      <Navbar />
      <Hero />
      
    </div>
    <What />
    <Footer />
    </>

  );
}
