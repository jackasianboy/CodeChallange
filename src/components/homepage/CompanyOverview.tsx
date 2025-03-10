"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CompanyOverview = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center gap-8 p-6 md:p-16">
      {/* Bagian Kiri: Gambar */}
      <div className="w-full md:w-1/3 flex justify-center">
        <Image
          src="/assets/cepatu.jpeg"
          alt="Boots"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Bagian Kanan: Carousel */}
      <div className="w-full md:w-2/3">
        <Swiper
          modules={[Pagination, Autoplay]} 
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }} 
          className="w-full"
          style={
            {
              "--swiper-pagination-color": "#D5C7A3", 
            } as React.CSSProperties
          }
        >
          <SwiperSlide>
            <div className="text-left py-8 px-10 w-fit rounded-lg shadow-lg">
              <h2
                style={{ fontFamily: "Blackriver" }}
                className="text-2xl md:text-3xl font-bold text-[#FFF5E4]"
              >
                About Hideung
              </h2>
              <p className="text-gray-300 mt-4 mb-3">
                Hideung adalah merek sepatu yang lahir dari semangat kebebasan
                dan keberanian, mengusung gaya Western, cowboy, dan boots dengan
                perpaduan desain klasik dan inovasi modern. Dibuat dengan
                material berkualitas tinggi dan pengerjaan tangan yang teliti,
                setiap pasang sepatu Hideung tidak hanya menawarkan ketahanan
                dan kenyamanan, tetapi juga menghadirkan karakter khas bagi
                setiap pemakainya.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-left py-8 px-10 w-fit rounded-lg shadow-lg">
              <h2
                style={{ fontFamily: "Blackriver" }}
                className="text-2xl md:text-3xl font-bold text-[#FFF5E4]"
              >
                Our History
              </h2>
              <p className="text-gray-300 mt-4 mb-3">
                Hideung berawal dari kecintaan kami terhadap budaya Western dan
                gaya hidup petualang. Terinspirasi oleh daya tahan dan estetika
                sepatu koboi klasik, kami memulai perjalanan ini dengan tujuan
                menghadirkan sepatu boots premium yang tidak hanya bergaya,
                tetapi juga fungsional untuk berbagai medan. Dengan dedikasi
                tinggi dalam craftsmanship, Hideung berkembang menjadi simbol
                kepercayaan diri bagi mereka yang memiliki jiwa petualang dan
                berani mengekspresikan diri.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-left py-8 px-10 w-fit rounded-lg shadow-lg">
              <h2
                style={{ fontFamily: "Blackriver" }}
                className="text-2xl md:text-3xl font-bold text-[#FFF5E4]"
              >
                Our Team
              </h2>
              <p className="text-gray-300 mt-4 mb-3">
                Di balik setiap pasang sepatu Hideung, terdapat tim yang penuh
                dedikasi dan passion terhadap dunia fashion dan craftsmanship.
                Dari desainer yang mengembangkan konsep unik hingga pengrajin
                yang memastikan setiap detail dibuat dengan sempurna, tim kami
                bekerja dengan komitmen tinggi untuk memberikan produk terbaik
                bagi pelanggan. Kami percaya bahwa keunggulan terletak pada
                detail, kualitas, dan inovasi, yang menjadi prinsip utama dalam
                setiap produk kami.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-left py-8 px-10 w-fit rounded-lg shadow-lg">
              <h2
                style={{ fontFamily: "Blackriver" }}
                className="text-2xl md:text-3xl font-bold text-[#FFF5E4]"
              >
                Our Values
              </h2>
              <p className="text-gray-300 mt-4 mb-3">
                Hideung bukan sekadar merek, tetapi juga sebuah gaya hidup. Kami
                menghargai keberanian, kebebasan, dan petualangan, yang
                tercermin dalam setiap desain kami. Budaya kerja kami
                mengutamakan kreativitas, inovasi, dan kerja sama tim,
                memastikan bahwa setiap produk yang kami hasilkan memiliki ciri
                khas dan keunggulan yang membedakan kami dari yang lain. Kami
                percaya bahwa sepatu bukan hanya pelindung kaki, tetapi juga
                ekspresi diri.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CompanyOverview;
