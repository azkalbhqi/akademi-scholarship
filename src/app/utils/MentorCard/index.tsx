import Image from "next/image";

type Mentor = {
  name: string;
  university: string;
  info: string;
  image: string;
};

export function MentorCard({ name, university, info, image }: Mentor) {
  return (
    <div className="relative w-[250px] h-[360px] rounded-xl overflow-hidden shadow-lg bg-blue-900">
      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover z-10"
      />

      {/* Overlay */}
      <div className="absolute z-20 inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent" />

      {/* Text Content */}
      <div className="absolute z-50 bottom-4 left-4 text-white">
        <p className="text-sm font-medium opacity-70">{university}</p>
        <h2 className="text-xl font-bold leading-tight -mt-1">{name}</h2>
        <p className="text-xs font-medium opacity-80 mt-1">{info}</p>
      </div>

      {/* Blue Diagonal Shape (simulasi seperti desain) */}
      <div className="absolute -rotate-45 top-10 left-[-60px] w-[300px] h-[60px] bg-blue-500/30" />
    </div>
  );
}
