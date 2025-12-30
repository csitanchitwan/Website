import { ArrowRight, Building2, CalendarClock, CalendarDays, Globe2, GraduationCap, Handshake, MapPinned, Sparkles, Users } from "lucide-react";

const stats = [
  { icon: Users, title: "Connected Students", value: "1000+" },
  { icon: Building2, title: "College Involved", value: "60+" },
  { icon: MapPinned, title: "Regional Committees", value: "5" },
  { icon: CalendarClock, title: "Established", value: "2011 AD" },
]
export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-start md:items-center bg-[#060B1E]/90 overflow-hidden px-4 sm:px-6 lg:px-10 py-10 md:py-0">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-25 w-125 h-125 bg-[#1eade6]/50 blur-[160px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-113 h-113 bg-[#cf4446]/40 blur-[140px] rounded-full animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto md:py-18 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-starts md:items-center">
        {/* LEFT CONTENT */}
        <div className="w-full">
          <span className="inline-flex items-center gap-1 sm:gap-2 bg-indigo-500/20 text-[#1aede6]/70 px-4 py-2 rounded-full text-xs ms:text-sm font-semibold max-w-full">
            <Sparkles size={16} /> CSIT Association of Nepal – Chitwan
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mt-4 sm:mt-6">
            Calibrating <span className="text-[#1eade6]">Technical Potentials </span>
            <br />
            of CSIT Students
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-full md:max-w-xl">
            A non-profit, non-governmental and non-political organization established in 2011, CSITAN is dedicated to connecting CSIT students from over 60 colleges across Nepal through workshops, mentorship, industry collaboration and academic support.

          </p>

          <div className="mt-6 sm:mt-8 flex gap-4 sm:gap-6">
            <button className="flex items-center justify-center gap-2 bg-[#1eade6] hover:bg-[#1eade6]/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-xl cursor-pointer font-semibold">
              View Our Events <ArrowRight size={18} />
            </button>

            <button className="border border-[#1eade6] text-[#1eade6] px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#1eade6]/10 cursor-pointer font-semibold">Become a Member </button>
          </div>

          {/* Floating Stats */}
          <div className="mt-6 sm:mt-10 flex flex-wrap gap-10 justify-center items-center text-center">
            {[
              ["1000+", "Students Connected"],
              ["60+", "Affiliated Colleges"],
              ["5", "Regional Committees"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="text-2xl sm:text-3xl font-bold text-white">{num}</p>
                <p className="text-gray-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mb-10 md:mb-0">
          {/* Glow Background */}
          <div className="absolute -inset-1 bg-linear-to-tr from-[#cf4446] via-[#1eade6] to-pink-500 opacity-40 rounded-3xl" />

          <div className="relative grid grid-cols-2 gap-4 sm:gap-6 bg-white/5 border border-white/10 p-4 sm:p-8 rounded-3xl shadow-2xl">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
              <div
                key={item.title}
                className="flex items-center gap-3 sm:gap-4 bg-white/10 border border-white/10 rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all text-center"
              >
              <div className="hidden sm:block bg-[#cf4446] p-2 sm:p-3 rounded-xl w-fit">
                <Icon size={26} />
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-300">{item.title}</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mt-1 sm:mt-2">
                  {item.value}
                </p>
                </div>
              </div>
              );
            })}

            {/* Floating Highlight Card */}
            <div className="col-span-2 mt-2 sm:mt-4 bg-[#1eade6]/40 border border-indigo-500/30 p-3 sm:p-4 rounded-2xl text-center">
              <p className="text-indigo-300 text-lg sm:text-xl">Next Event</p>
              <p className="text-white text-xl sm:text-2xl font-extrabold mt-1 sm:mt-2">Comming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
