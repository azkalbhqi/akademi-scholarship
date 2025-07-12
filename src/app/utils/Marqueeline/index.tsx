"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

export const reviews = [
    {
      name: "Aulia Rahman",
      username: "@auliarahman",
      body: "Berkat Akademi Scholarship, aku lolos beasiswa impian ke luar negeri! Materinya sangat lengkap dan mudah dipahami.",
      img: "https://avatar.vercel.sh/aulia",
    },
    {
      name: "Nabila Zahra",
      username: "@nabilazahra",
      body: "Mentornya suportif banget, aku jadi percaya diri waktu wawancara beasiswa. Highly recommended!",
      img: "https://avatar.vercel.sh/nabila",
    },
    {
      name: "Kevin Wijaya",
      username: "@kevinwijaya",
      body: "Platform ini ngebantu aku nyusun motivation letter dan CV dengan baik. Akhirnya keterima beasiswa unggulan!",
      img: "https://avatar.vercel.sh/kevin",
    },
    {
      name: "Salsa Putri",
      username: "@salsaputri",
      body: "Aku suka banget dengan tips & trik yang dikasih. Semua dijelaskan praktis dan langsung bisa dipraktikkan.",
      img: "https://avatar.vercel.sh/salsa",
    },
    {
      name: "Dimas Kurniawan",
      username: "@dimaskurn",
      body: "Dulu bingung mulai dari mana, sekarang udah keterima LPDP berkat bimbingan Akademi Scholarship. Terima kasih!",
      img: "https://avatar.vercel.sh/dimas",
    },
    {
      name: "Ayu Maharani",
      username: "@ayumhrn",
      body: "Belajarnya fleksibel, cocok banget buat mahasiswa sibuk. Dapat banyak insight yang nggak diajarin di kampus.",
      img: "https://avatar.vercel.sh/ayu",
    },
    {
      name: "Aulia Rahman",
      username: "@auliarahman",
      body: "Berkat Akademi Scholarship, aku lolos beasiswa impian ke luar negeri! Materinya sangat lengkap dan mudah dipahami.",
      img: "https://avatar.vercel.sh/aulia",
    },
    {
      name: "Nabila Zahra",
      username: "@nabilazahra",
      body: "Mentornya suportif banget, aku jadi percaya diri waktu wawancara beasiswa. Highly recommended!",
      img: "https://avatar.vercel.sh/nabila",
    },
    {
      name: "Kevin Wijaya",
      username: "@kevinwijaya",
      body: "Platform ini ngebantu aku nyusun motivation letter dan CV dengan baik. Akhirnya keterima beasiswa unggulan!",
      img: "https://avatar.vercel.sh/kevin",
    },
    {
      name: "Salsa Putri",
      username: "@salsaputri",
      body: "Aku suka banget dengan tips & trik yang dikasih. Semua dijelaskan praktis dan langsung bisa dipraktikkan.",
      img: "https://avatar.vercel.sh/salsa",
    },
    {
      name: "Dimas Kurniawan",
      username: "@dimaskurn",
      body: "Dulu bingung mulai dari mana, sekarang udah keterima LPDP berkat bimbingan Akademi Scholarship. Terima kasih!",
      img: "https://avatar.vercel.sh/dimas",
    },
    {
      name: "Ayu Maharani",
      username: "@ayumhrn",
      body: "Belajarnya fleksibel, cocok banget buat mahasiswa sibuk. Dapat banyak insight yang nggak diajarin di kampus.",
      img: "https://avatar.vercel.sh/ayu",
    },
  ];
  

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-200 bg-white hover:bg-gray-100",
        "dark:border-gray-700  "
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black ">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-500 ">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-800">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-6">
      <Marquee className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
    </div>
  );
}
