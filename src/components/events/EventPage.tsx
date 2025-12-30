"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { events, type Events } from "@/src/data/events";

// simple helper to support **bold** in descriptions
const formatBold = (s?: string) => {
  if (!s) return "";
  // escape HTML entities
  const escaped = s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  // replace **bold** with <strong class="font-semibold">...</strong>
  return escaped.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold">$1</strong>');
};

const EventCard = ({
  program,
  index,
}: {
  program: Events;
  index: number;
}) => {
  const [imageError, setImageError] = useState(false);
  const images = program.gallery && program.gallery.length ? program.gallery : program.image ? [program.image] : [];
  const [imageIndex, setImageIndex] = useState(0);

  const prevImage = () => {
    if (images.length <= 1) return;
    setImageIndex((i) => (i - 1 + images.length) % images.length);
    setImageError(false);
  };

  const nextImage = () => {
    if (images.length <= 1) return;
    setImageIndex((i) => (i + 1) % images.length);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
  }; 

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
        {/* Image Section (supports gallery) */}
        <div className="relative w-full aspect-video overflow-hidden">
          {images.length > 0 && !imageError ? (
            <>
              <Image
                src={images[imageIndex]}
                alt={`${program.title} image ${imageIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover w-full h-full"
                onError={handleImageError}
              />

              {/* Prev / Next buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-md flex items-center justify-center text-[#1b2c48] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-md flex items-center justify-center text-[#1b2c48] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/95 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 font-sora">
                    {program.title}
                  </h3>
                  <p className="text-slate-300 text-xs mb-4 line-clamp-2 font-poppins" dangerouslySetInnerHTML={{ __html: formatBold(program.desc) }} />
                </div>
              </div>
            </>
          ) : (
            <div className="relative w-full h-full bg-linear-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-slate-500" />
                </div>
                <p className="text-slate-600 font-medium text-sm">
                  {program.title}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3 mt-3 overflow-x-auto px-2">
            {images.map((src, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setImageIndex(idx);
                  setImageError(false);
                }}
                className={`flex-none w-24 h-14 rounded-md overflow-hidden border ${idx === imageIndex ? 'border-[#1eade6]' : 'border-gray-200'}`}
              >
                <Image src={src} alt={`${program.title} thumbnail ${idx + 1}`} width={240} height={140} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        )}

        {/* Content Section */}
        <div className="p-6 lg:p-8">
          {/* Title */}
          <div className="flex items-start gap-4 mb-5">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl md:text-2xl font-bold text-[#1b2c48] font-sora mb-3 group-hover:text-[#1eade6] transition-colors">
                {program.title}
              </h3>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-2 mb-5">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-full border border-gray-200">
              <Calendar size={14} className="text-[#cf4446]" />
              <span className="text-xs font-medium font-poppins text-gray-700">
                {program.date}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-full border border-gray-200">
              <MapPin size={14} className="text-[#cf4446]" />
              <span className="text-xs font-medium font-poppins text-gray-700">
                {program.venue}
              </span>
            </div>
          </div>

          {/* Description - Full text */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-poppins mb-6" dangerouslySetInnerHTML={{ __html: formatBold(program.desc) }} />
        </div>
    </motion.div>
  );
};

const EventPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased">
     
      {/* Events Items */}
      <section id="events" className="relative w-full py-16 sm:py-20 overflow-hidden">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b2c48] leading-tight px-2">Our <span className="text-[#cf4446]">Events</span></h1>
          <p className="text-[#1e7c85] mt-2 text-sm sm:text-base">Check out our upcoming events and join us for a great time!</p>
        </div>
        <div className="max-w-7xl px-4 sm:px-6 lg:px-10 mx-auto">
          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 sm:gap-6">
            {events.map((item, i) => (
              <EventCard key={i} program={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default EventPage;