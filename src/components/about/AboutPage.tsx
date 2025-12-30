"use client";

import Image from "next/image";
import Card from "@/src/ui/Card";
import { team } from "@/src/data/about";

import AboutImage from "@/public/assets/AboutImage.jpg";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased">
    
      {/* Who We Are */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-1">
          <span className="inline-block bg-[#1eade6]/40 text-[#cf4446] px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3">
            WHO WE ARE
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b2c48] leading-tight font-sora">
            About <span className="text-[#cf4446]">Us</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1 text-sm sm:text-base md:text-lg">
            <p className="text-slate-600 leading-relaxed font-poppins mb-4">
              CSIT Association of Nepal (CSITAN) is a non-profit,
              non-governmental, and non-political service-oriented organization established in
              2011 to support BSc.CSIT students across Nepal by strengthening their technical potential and academic development.
            </p>
            <p className="text-slate-600 leading-relaxed font-poppins mb-4">
              CSITAN is connected with more than 1000 students from over 60 colleges nationwide through five regional committees, working as a common platform between students, faculty members, and the IT industry.

            </p>
            <p className="text-slate-600 leading-relaxed font-poppins">
              CSITAN–Chitwan represents the Chitwan regional committee and actively organizes workshops, seminars, student interaction programs and technical sessions to enhance knowledge sharing, collaboration and leadership among local CSIT students.

            </p>
          </div>
          <div className="order-1 md:order-2">
              <Image
                src={AboutImage}
                alt="CSITAN Chitwan"
                width={600}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full max-w-sm sm:max-w-md mx-auto rounded-xl shadow-xl object-cover"
              />
          </div>
        </div>

        <div className="bg-linear-to-br from-[#9adbf5] to-[#e4afb0] rounded-xl p-5 sm:p-8 md:p-8 border border-[#C8E6C9] mt-14 sm:mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1b2c48] mb-4 font-sora">
            Our Mission & Core Values
          </h3>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-poppins mb-6">
            Our motive is “Calibrating Technical Potentials” — measuring and improving students’ technical abilities while directing their attention to practical IT skills. We aim to prepare students to become skilled IT professionals after completing their academic journey, while also identifying academic issues and representing students to concerned stakeholders.

          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "1000+ Students",
                desc: "Connected CSIT students from more than 60 colleges across Nepal through CSITAN.",
              },
              {
                title: "100+ Events",
                desc: "Organizing seminars, hackathons, and tech events that foster learning, leadership, and innovation.",
              },
              {
                title: "Since 2011",
                desc: "Serving CSIT students nationwide as a non-profit and service-oriented organization.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur rounded-xl p-5 shadow-md hover:shadow-lg transition`}
              >
                <h4 className="text-lg font-bold text-[#1e7c85] mb-2 font-poppins">
                  {item.title}
                </h4>
                <p className="text-slate-600 font-poppins text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* our team */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex items-center justify-center text-[#1b2c48] font-sora">
            Our <span className="text-[#cf4446]">Team</span>
          </h2>
          <span className="block text-xs sm:text-sm font-semibold tracking-wider mt-2 text-[#1e7c85]">
            MEET THE PEOPLE
          </span>
        </div>

        <Card items={team} />
      </section>
    </main>
  );
};

export default AboutPage;
