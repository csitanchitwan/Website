"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { events, type Events } from "@/src/data/events";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const formatBold = (s?: string) => {
  if (!s) return "";

  const escaped = s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  return escaped.replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="font-bold">$1</strong>'
  );
};

const EventCard = ({ program, index }: { program: Events; index: number }) => {
  const [imageError, setImageError] = useState(false);
  const images =
    program.gallery && program.gallery.length
      ? program.gallery
      : program.image
      ? [program.image]
      : [];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded overflow-hidden bg-white w-full aspect-16/10 sm:aspect-4/3 md:aspect-16/10"
    >
      {/* Image */}
      {images.length > 0 && !imageError ? (
        <div className="relative w-full h-full overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={imageIndex} // triggers animation on change
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={images[imageIndex]}
                alt={`${program.title} ${imageIndex + 1}`}
                fill
                className="object-cover w-full h-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div className="relative w-full h-full overflow-hidden bg-linear-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <div className="text-center p-4 sm:p-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-full bg-slate-300 flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500" />
            </div>
            <p className="text-slate-600 font-medium text-sm sm:text-base">
              {program.title}
            </p>
          </div>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-900/95 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 font-sora">
            {program.title}
          </h3>
          <p
            className="text-slate-300 text-xs sm:text-sm md:text-sm line-clamp-3 font-poppins"
            dangerouslySetInnerHTML={{ __html: formatBold(program.desc) }}
          />
        </div>
      </div>

      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-[#1eade6]/60 transition-all duration-500"></div>
    </motion.div>
  );
};

export default function Programs() {
  const router = useRouter();
  return (
    <section className="py-20 sm:py-28 bg-linear-to-br from-[#cf4446]/30 via-[#eef2ff] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#cf4446] mb-2 sm:mb-4 font-sora"
          >
            Our Events
          </motion.h2>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#1eade6] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-8 sm:mb-14 inline-block"
          >
            Check out our upcoming events and join us for a great time!
          </motion.span>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-4 sm:gap-6">
          {events.slice(0, 6).map((item, index) => (
            <EventCard key={index} program={item} index={index} />
          ))}
        </div>

        {/* View all Events button */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <button onClick={() => router.push("/events")} className="flex items-center gap-2 bg-[#1eade6] hover:bg-[#1eade6]/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-xl cursor-pointer font-semibold">
            View Other Events <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
