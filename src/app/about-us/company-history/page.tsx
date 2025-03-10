import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Image from "next/image";

export default function CompanyHistory() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <Image
          src="/assets/background-company-history.jpeg" 
          alt="Company History"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center bg-black/65 justify-center">
          <h1 style={{ fontFamily: "Blackriver" }} className="text-[#FFF5E4] text-5xl text-center font-bold tracking-wide  px-6 py-3 rounded-lg">
            Company History
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 style={{ fontFamily: "Blackriver" }} className="text-3xl font-bold text-[#FFF5E4] mb-6">Our Journey</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
        Hideung was founded with the spirit of reviving the classic cowboy boots style while integrating modern and innovative touches. Born from a deep appreciation for Western culture and high-quality craftsmanship, Hideung emerges as a footwear brand that combines durability, comfort, and aesthetics in every pair of boots produced.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
        Hideung was established in 2023 by a group of skilled artisans and designers with a vision to bring the legacy of cowboy boots into the modern era. With years of experience in the footwear industry, the founders of Hideung committed themselves to creating boots that are not only stylish but also built to last.
        </p>
        <h2 style={{ fontFamily: "Blackriver" }} className="text-3xl font-bold text-[#FFF5E4] mb-6 mt-6">Key Milestones</h2>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
        📍 2023 – Hideung officially launched its first collection, receiving positive responses from cowboy boots enthusiasts. <br />
        📍 2024 – Expanded into international markets and introduced a new boot variant featuring ultra-comfort sole technology. <br />
        📍 2025 – Unveiled the exclusive "Legacy Series", blending classic designs with premium, eco-friendly materials. <br />
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
        Since its inception, Hideung has remained steadfast in the belief that every step should reflect character and courage. Our boots are more than just footwear—they symbolize adventure and confidence.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
        Today, Hideung continues to grow, innovate, and uphold the craftsmanship tradition that defines our identity.
        </p>
      </div>

      <Footer />
    </>
  );
}
