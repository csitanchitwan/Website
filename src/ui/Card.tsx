import Link from "next/link";
import Image from "next/image";

interface CardItem {
  id: string | number;
  name: string;
  post: string;
  image: string;
}

interface CardProps {
  items: CardItem[];
}

export default function Card({ items }: CardProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {items.map((i) => (
        <article
          key={i.id}
          className="group bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus-within:ring-4 focus-within:ring-[#11717a]/10 flex flex-col h-full items-center text-center border border-[#1eade6]"
          aria-labelledby={`svc-${i.id}-title`}
        >
          <div className="mb-4">
            <div className="w-20 h-20 sm:w-30 sm:h-30 relative rounded-full shadow-md transition-transform group-hover:scale-105 border-2 border-green-300">
              <Image src={i.image} alt={i.name} fill 
              sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
              className="rounded-full object-cover" />
            </div>
          </div>

          <h3
            id={`svc-${i.id}-title`}
            className="text-sm sm:text-lg font-semibold text-[#cf4446] leading-tight"
          >
            {i.name}
          </h3>
          <p className="mt-1 text-xs sm:text-base text-[#1eade6] font-poppins">
            {i.post}
          </p>
        </article>
      ))}
    </div>
  );
}
