"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="bg-[#FFF5E4] text-black shadow-md w-full z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wide">
            <Image src="/assets/CompanyLogo.png" alt="Company Logo" width={150} height={40} />
          </Link>

          {/* Desktop Menu */}
          <nav style={{ fontFamily: "Blackriver" }} className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-yellow-600 transition duration-300">
              Home
            </Link>
            <div className="relative group">
              <button className="hover:text-yellow-600 flex items-center gap-1 transition duration-300">
                About Us <ChevronDown size={18} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Link href="/about-us/company-history" className="block px-4 py-2 hover:bg-gray-200">
                  Company History
                </Link>
                <Link href="/about-us/culture" className="block px-4 py-2 hover:bg-gray-200">
                  Culture
                </Link>
              </div>
            </div>
            <Link href="/services" className="hover:text-yellow-600 transition duration-300">
              Services
            </Link>
            <Link href="/our-team" className="hover:text-yellow-600 transition duration-300">
              Our Team
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full h-[90vh] bg-black/60 backdrop-blur-md border border-white/20 rounded-lg p-4">
          {!isAboutOpen ? (
            <nav style={{ fontFamily: "Blackriver" }} className="text-amber-100 text-center flex flex-col items-center justify-center h-full space-y-10 py-4 px-6 text-2xl">
              <Link href="/" className="hover:text-yellow-600 transition duration-300">
                Home
              </Link>
              <button onClick={() => setIsAboutOpen(true)} className="hover:text-yellow-600 transition duration-300">
                About Us
              </button>
              <Link href="/services" className="hover:text-yellow-600 transition duration-300">
                Services
              </Link>
              <Link href="/our-team" className="hover:text-yellow-600 transition duration-300">
                Our Team
              </Link>
            </nav>
          ) : (
            <nav className="text-amber-100 text-center flex flex-col h-full items-center justify-center space-y-6 py-4 px-6 text-2xl">
              <button onClick={() => setIsAboutOpen(false)} className="text-lg font-bold hover:text-yellow-600">
                ← Back
              </button>
              <Link style={{ fontFamily: "Blackriver" }} href="/about-us/company-history" className="hover:text-yellow-600 transition duration-300">
                Company History
              </Link>
              
              <Link style={{ fontFamily: "Blackriver" }} href="/about-us/culture" className="hover:text-yellow-600 transition duration-300">
                Culture
              </Link>
            </nav>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
