"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FFF5E4] text-black py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo dan Deskripsi */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/assets/CompanyLogo.png" alt="Company Logo" width={150} height={50} />
            <p className="mt-4 text-center md:text-left text-sm opacity-80">
              Hideung - "Step Into the Wild, Walk with Pride."
            </p>
          </div>

          {/* Sosial Media & Kontak */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 hover:text-amber-800 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 hover:text-amber-800 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 hover:text-amber-800 transition" />
              </a>
            </div>
            <p className="text-sm mt-4 opacity-80">Email: support@hideung.com</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-950 mt-8 pt-4 text-center text-sm opacity-80">
          &copy; {new Date().getFullYear()} Hideung. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
