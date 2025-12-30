import { Users, Lightbulb, Rocket, HeartHandshake } from "lucide-react";

export type about = {
  sm: number;
};

const About = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#f0f9ff] via-[#eef2ff] to-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute -top-32 -right-20 w-72 h-72 sm:w-[350px] sm:h-[350px] bg-[#1eade6]/60 blur-[80px] sm:blur-[110px] rounded-full" />
      <div className="absolute bottom-0 -left-20 w-72 h-72 sm:w-[350px] sm:h-[350px] bg-[#cf4446]/60 blur-[100px] sm:blur-[130px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* LEFT TEXT */}
        <div className="w-full">
          <span className="inline-block text-[#1eade6] text-sm sm:text-base font-semibold tracking-widest uppercase">
            About CSITAN – Chitwan
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 sm:mt-5 leading-snug">
            More Than a Community – A Platform for Your IT Journey
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-full md:max-w-xl">
            CSITAN–Chitwan works as a bridge between CSIT students, faculty members and the technology industry. We help students raise their voices regarding academic issues while creating opportunities to collaborate, learn and grow.

          </p>

          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-slate-500 max-w-full md:max-w-xl">
            Through regular workshops, seminars, project showcases and peer guidance, we ensure every member receives practical exposure beyond the classroom.


          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:mt-0">
          {[
            { icon: Lightbulb, title: "Calibrating", desc: "Measuring and improving students’ technical abilities" },
            { icon: Users, title: "Student Network", desc: "1000+ students from 60+ colleges across Nepal" },
            { icon: Rocket, title: "Career Readiness", desc: "Preparing students to become skilled IT professionals" },
            { icon: HeartHandshake, title: "Industry Bridge", desc: "Connecting students, faculty & tech industries" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <Icon className="text-[#1eade6] w-6 h-6 sm:w-7 sm:h-7" />
                <h4 className="mt-3 sm:mt-4 font-semibold text-slate-900 text-lg sm:text-base">{item.title}</h4>
                <p className="text-sm sm:text-sm text-slate-600 mt-1 sm:mt-2">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
