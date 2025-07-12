import Image from "next/image";
import { MarqueeDemo } from "./utils/Marqueeline"; // Pastikan ini sudah berfungsi
import { MentorCarousel } from "./utils/MentorCarousel";

export default function Home() {
  const items = [
    {
      title: "Temukan Beasiswa Impianmu",
      description: "Kami bantu kamu mencari beasiswa yang cocok dan sesuai minat.",
      image: "/image/asset02.png",
    },
    {
      title: "Bimbingan Langkah demi Langkah",
      description: "Dari persiapan berkas hingga submit — kamu tidak sendirian!",
      image: "/image/asset01.png",
    },
    {
      title: "Tips & Trik dari Awardee",
      description: "Belajar dari pengalaman mereka yang sudah lolos seleksi.",
      image: "/image/asset04.png",
    },
    {
      title: "Simulasi & Latihan Wawancara",
      description: "Latihan wawancara langsung agar kamu tampil percaya diri.",
      image: "/image/asset03.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-100 to-white py-16 px-8 sm:px-12 lg:px-16 flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl w-full">
          {/* Image on left for desktop, top for mobile */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <Image
              src="/image/asset-hero.png" 
              alt="Beasiswa Banner"
              height={500}
              width={500}
              className="rounded-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text content on right for desktop, bottom for mobile */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Siapkan Dirimu dari Sekarang & Raih <span className="text-blue-600">Beasiswa Impianmu</span>!
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Belajar langsung dari mereka yang sudah <span className="font-semibold text-amber-600">LOLOS beasiswa</span>! Akses materi eksklusif, tips sukses, dan strategi jitu — kapan saja, di mana saja.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* What Do We Do Section */}
      <section className="py-16 px-8 sm:px-12 lg:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
         Apa yang Kami  <span className="text-amber-400">Lakukan? </span>
        </h2>
        <div className="flex overflow-x-auto gap-8 pb-4 scroll-smooth no-scrollbar justify-start md:justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 sm:w-80 rounded-2xl border border-blue-200 shadow-sm bg-white transform hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> {/* Overlay gelap */}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-base text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mentor Carousel Section */}
      <section className="py-16 px-8 sm:px-12 lg:px-16 bg-gradient-to-b from-white via-blue-200 to-white">
        <MentorCarousel />
      </section>

      {/* Marquee/Testimonial Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Apa Kata <span className="text-blue-600">Alumni Kami</span>?
        </h2>
        <MarqueeDemo />
      </section>
    </>
  );
}