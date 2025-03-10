"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/Cowboy.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black opacity-70 flex flex-col items-center justify-center text-center p-6">
        <p
          style={{ fontFamily: "Blackriver" }}
          className="text-[#FFF5E4] text-2xl md:text-3xl max-w-2xl mt-4 px-4 md:px-0 leading-relaxed"
        >
          Empowering confidence and adventure through high-quality cowboy boots,
          blending classic craftsmanship with modern innovation for every bold
          soul.
        </p>
        <button
          onClick={() => router.push("/about-us/company-history")}
          className="mt-6 px-6 py-1.5 text-md rounded-lg font-bold tracking-wider text-amber-100 bg-amber-800 border-2 border-amber-900 shadow-lg transition-all duration-300 ease-in-out hover:bg-amber-100 hover:text-black"
        >
          About Hideung
        </button>
      </div>
    </section>
  );
};

export default Hero;
