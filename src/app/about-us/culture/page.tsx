import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Image from "next/image";

export default function Culture() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <Image
          src="/assets/background-culture.jpeg" 
          alt="Company Culture"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center bg-black/65 justify-center">
          <h1 style={{ fontFamily: "Blackriver" }} className="text-[#FFF5E4] text-5xl text-center font-bold tracking-wide px-6 py-3 rounded-lg">
          Our Values & Culture
          </h1>
        </div>
      </div>

      {/* Culture Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        
        <p className="text-lg text-[#FFF5E4] mb-6">
          At Hideung, we believe that culture is the heart of our company. We are not just crafting boots; 
          we are building a community that values creativity, craftsmanship, and innovation. Our culture is 
          driven by a deep respect for heritage while embracing the future of fashion and technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-[#FFF5E4]">
          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Craftsmanship & Quality</h3>
            <p>We are committed to exceptional craftsmanship, ensuring every pair of boots meets the highest standards of durability and style.</p>
          </div>

          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Innovation & Modernity</h3>
            <p>We honor tradition while constantly evolving with cutting-edge designs and sustainable materials.</p>
          </div>

          <div className="p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Passionate & Collaborative Team</h3>
            <p>Our workplace thrives on teamwork, creativity, and mutual support, making Hideung a great place to grow and innovate.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
