"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icon panah, bisa ganti
import { MentorCard } from "../MentorCard";

export function MentorCarousel() {
  const mentors = [
    {
      name: "Aulia Rahman",
      university: "Universitas Indonesia",
      info: "Penerima Beasiswa LPDP | Ilmu Komunikasi",
      image: "/image/mentor.png",
    },
    {
      name: "Nabila Zahra",
      university: "Universitas Gadjah Mada",
      info: "Awardee Beasiswa IISMA 2023 | Hubungan Internasional",
      image: "/image/mentor.png",
    },
    {
      name: "Kevin Wijaya",
      university: "Institut Teknologi Bandung",
      info: "Beasiswa Unggulan Kemendikbud | Teknik Informatika",
      image: "/image/mentor.png",
    },
    {
      name: "Budi Santoso",
      university: "Universitas Airlangga",
      info: "Beasiswa Unggulan Kemendikbud | Akuntansi",
      image: "/image/mentor.png",
    },
    {
      name: "Siti Aminah",
      university: "Universitas Padjadjaran",
      info: "Penerima Beasiswa Djarum | Hukum",
      image: "/image/mentor.png",
    },
    {
      name: "Joko Susilo",
      university: "Universitas Diponegoro",
      info: "Beasiswa Cendekia Baznas | Teknik Elektro",
      image: "/image/mentor.png",
    },
  ];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    
    const cardWidth = container.querySelector(".mentor-card")?.clientWidth || 0;
    const gap = 24; // Corresponds to 'gap-6' (6 * 4px = 24px)
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Temui Para Mentor Kami</h2>

      {/* Carousel Container */}
      <div className="relative">
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-1 snap-x snap-mandatory"
        >
          {mentors.map((mentor, idx) => (
            // Add 'flex-none' and responsive widths for desired display
            <div key={idx} className="flex-none w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mentor-card snap-center">
              <MentorCard {...mentor} />
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -left-3 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-blue-100"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -right-3 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-blue-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}