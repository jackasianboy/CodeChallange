import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Image from "next/image";

const teamMembers = [
  {
    name: "Jack",
    position: "Founder & CEO",
    image: "/assets/leader/our-team-jack.jpeg",
    description: "Jack adalah visioner di balik Hideung, dengan pengalaman lebih dari 10 tahun di industri fashion dan craftsmanship. Ia memiliki dedikasi tinggi dalam menciptakan produk yang menggabungkan estetika klasik dan inovasi modern."
  },
  {
    name: "Salman",
    position: "Chief Operating Officer",
    image: "/assets/leader/our-team-salman.jpeg",
    description: "Salman memiliki pengalaman luas dalam manajemen operasional dan supply chain. Dengan keahliannya, ia memastikan bahwa setiap proses produksi berjalan efisien dan sesuai standar kualitas tinggi."
  },
  {
    name: "Cecilia",
    position: "Head of Design",
    image: "/assets/leader/our-team-cecilia.jpeg",
    description: "Cecilia adalah desainer berbakat dengan pengalaman lebih dari 8 tahun di industri sepatu. Ia menggabungkan desain klasik dengan elemen modern untuk menciptakan produk yang unik dan berkualitas tinggi."
  },
  {
    name: "John",
    position: "Marketing Director",
    image: "/assets/leader/our-team-john.jpeg",
    description: "John adalah ahli strategi pemasaran dengan rekam jejak sukses dalam membangun brand global. Dengan pendekatannya yang inovatif, Hideung berhasil menarik perhatian pasar internasional."
  },
];

export default function Team() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <Image
          src="/assets/our-team.jpeg"
          alt="Our Team"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center bg-black/65 justify-center">
          <h1
            style={{ fontFamily: "Blackriver" }}
            className="text-[#FFF5E4] text-5xl text-center font-bold tracking-wide px-6 py-3 rounded-lg"
          >
            Our Team
          </h1>
        </div>
      </div>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="rounded-lg shadow-lg p-6">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h3 style={{ fontFamily: "Blackriver" }} className="mt-4 text-xl font-semibold text-[#FFF5E4]">{member.name}</h3>
              <p className="text-[#FFF5E4] mt-2 font-medium">{member.position}</p>
              <p className="mt-2 text-sm text-justify text-[#FFF5E4]">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
