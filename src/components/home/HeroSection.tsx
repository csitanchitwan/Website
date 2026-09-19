"use client";

import {
  ArrowRight,
  Building2,
  CalendarClock,
  MapPinned,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";

const stats = [
  { icon: Users, label: "Connected Students", value: "1000+" },
  { icon: Building2, label: "College Involved", value: "60+" },
  { icon: MapPinned, label: "Regional Committees", value: "5" },
  { icon: CalendarClock, label: "Established", value: "2011 AD" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden bg-[#060B1E] px-4 sm:px-6 lg:px-10 py-16 md:py-24">
      {/* Static, restrained background — faint grid + a single soft corner wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(120% 90% at 15% 10%, #000 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(120% 90% at 15% 10%, #000 40%, transparent 80%)",
          }}
        />
        <div className="absolute -top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-[#1eade6]/10 blur-[140px]" />
        <div className="absolute bottom-[-10rem] left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-[#cf4446]/10 blur-[150px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-10"
      >
        {/* LEFT — message + actions */}
        <div className="md:col-span-7">
          <motion.span
            variants={item}
            className="inline-block rounded-md bg-[#cf4446] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm sm:text-sm"
          >
            CSIT Association of Nepal (CSITAN) – Chitwan
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Calibrating the{" "}
            <span className="bg-linear-to-r from-[#1eade6] to-[#5fd0f0] bg-clip-text text-transparent">
              Technical Potential
            </span>{" "}
            of CSIT Students
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg"
          >
            A non-profit, non-governmental and non-political organization
            established in 2011, connecting CSIT students across 60+ colleges in
            Nepal through workshops, mentorship, industry collaboration and
            academic support.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <button
              onClick={() => router.push("/events")}
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#cf4446] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#cf4446]/25 transition-all hover:bg-[#b83a3c] sm:px-7"
            >
              View Our Events
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => router.push("/contact-us")}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-[#1eade6] px-6 py-3.5 font-semibold text-[#1eade6] transition-colors hover:bg-[#1eade6] hover:text-[#060B1E] sm:px-7"
            >
              Become a Member
            </button>
          </motion.div>
        </div>

        {/* RIGHT — creative stat card */}
        <motion.div variants={item} className="md:col-span-5">
          <div className="animate-floaty relative">
            {/* soft glow behind the card */}
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-[#1eade6]/10 blur-2xl"
            />
            {/* static gradient ring */}
            <div
              aria-hidden
              className="absolute -inset-px rounded-3xl bg-linear-to-br from-[#1eade6]/70 via-white/10 to-[#cf4446]/70"
            />
            <div className="relative rounded-3xl bg-[#0a1024]/90 p-4 backdrop-blur-xl sm:p-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.45 + i * 0.1, duration: 0.4 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#1eade6]/50 hover:bg-white/[0.07] sm:p-5"
                  >
                    {/* corner glow on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#1eade6]/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <div className="mb-3 inline-flex rounded-xl bg-[#cf4446] p-2.5 text-white shadow-lg shadow-[#cf4446]/30 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                    <p className="bg-linear-to-br from-white to-slate-400 bg-clip-text text-3xl font-extrabold leading-none text-transparent sm:text-4xl">
                      {value}
                    </p>
                    <p className="mt-2 text-xs font-medium text-slate-400 sm:text-sm">
                      {label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
