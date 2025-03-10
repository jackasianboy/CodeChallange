import CompanyOverview from "@/components/homepage/CompanyOverview";
import Hero from "@/components/homepage/Hero";
import Product from "@/components/homepage/Product";
import Testimonial from "@/components/homepage/Testimonials";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CompanyOverview/>
      <Product isServices={false}/>
      <Testimonial/>
      <Footer />
    </>
  );
}
