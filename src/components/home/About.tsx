import { Users, Lightbulb, Rocket, HeartHandshake } from "lucide-react";
import Image from "next/image";

import AboutImage from "@/public/assets/AboutImage.jpg";

export type about = {
  sm: number;
};

const About = () => {
  return (
    <section className="py-20 sm:py-28 bg-linear-to-br from-[#f0f9ff] via-[#eef2ff] to-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute -top-32 -right-20 w-72 h-72 sm:w-[350px] sm:h-[350px] bg-[#1eade6]/60 blur-[80px] sm:blur-[110px] rounded-full" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 sm:w-[350px] sm:h-[350px] bg-[#cf4446]/60 blur-[100px] sm:blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 items-center">
        {/* LEFT TEXT */}
        <div className="w-full">
          <span className="inline-block text-[#1eade6] text-sm sm:text-base font-semibold tracking-widest uppercase">
            About CSITAN – Chitwan
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-4 sm:mt-5 w-full">
            More Than a Community
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-full md:max-w-xl">
            CSITAN–Chitwan works as a bridge between CSIT students, faculty
            members and the technology industry. We help students raise their
            voices regarding academic issues while creating opportunities to
            collaborate, learn and grow.
          </p>

          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-slate-500 max-w-full md:max-w-xl">
            Through regular workshops, seminars, project showcases and peer
            guidance, we ensure every member receives practical exposure beyond
            the classroom.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full flex justify-center md:justify-end">
          <div className="relative w-full max-w-md sm:max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-white/40 backdrop-blur-md">
            <Image
              src={AboutImage}
              alt="CSITAN Chitwan Group"
              className="w-full h-full object-cover"
            />

            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
