"use client";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Brad Pitt",
    feedback:
      "Sepatu ini luar biasa! Kualitasnya sangat baik dan sangat nyaman dipakai sepanjang hari.",
    image: "/assets/testimonials/user1.jpeg",
  },
  {
    id: 2,
    name: "Emma Watson",
    feedback:
      "Desainnya sangat klasik dan stylish. Cocok untuk acara formal maupun santai!",
    image: "/assets/testimonials/user2.jpeg",
  },
  {
    id: 3,
    name: "Angelina Jolie",
    feedback:
      "Bahan kulitnya berkualitas tinggi dan sangat tahan lama. Saya sangat puas dengan pembelian ini.",
    image: "/assets/testimonials/user3.jpeg",
  },
  {
    id: 4,
    name: "Jihyo",
    feedback:
      "Sepatu terbaik yang pernah saya beli. Nyaman, elegan, dan benar-benar berkelas.",
    image: "/assets/testimonials/user4.jpeg",
  },
];

const Testimonial = () => {
  return (
    <section className="p-6 md:p-16">
      <h2
        className="text-3xl md:text-4xl font-bold text-[#FFF5E4] text-center mb-8"
        style={{ fontFamily: "Blackriver" }}
      >
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#FFF5E4] p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105"
          >
            {/* Avatar */}
            <div className="w-24 h-24 mx-auto relative">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>

            {/* Nama & Feedback */}
            <h3
              className="text-xl font-semibold text-gray-900 mt-4"
              style={{ fontFamily: "Blackriver" }}
            >
              {testimonial.name}
            </h3>
            <p className="text-gray-700 text-sm mt-2 italic">
              &quot;{testimonial.feedback}&quot;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
