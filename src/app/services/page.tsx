import Product from "@/components/homepage/Product";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <Header />
    <Product isServices/>
      <Footer />
    </>
  );
}
