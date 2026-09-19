"use client";

import { motion, Variants } from "framer-motion";
import { Megaphone, CalendarDays, GraduationCap, Network } from "lucide-react";

const features = [
  {
    icon: Megaphone,
    title: "Academic Issue Advocacy",
    desc: "Identifying students’ academic problems and raising them to concerned stakeholders for better learning outcomes.",
  },
  {
    icon: CalendarDays,
    title: "Workshops & Events",
    desc: "Providing opportunities to participate in workshops and seminars to expand knowledge in various CS & IT fields.",
  },
  {
    icon: GraduationCap,
    title: "Guidance & Study Support",
    desc: "Offering guidance and support from seniors for studies, projects, and career preparation.",
  },
  {
    icon: Network,
    title: "Community Network",
    desc: "A nationwide CSIT student community sharing opportunities, resources, and support.",
  },
];

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } },
};

export default function FeatureSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-[#eefaff] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-2 text-3xl font-bold text-[#1b2c48] sm:mb-3 sm:text-4xl lg:text-5xl"
        >
          What We <span className="text-[#cf4446]">Do</span>
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-[#1eade6] sm:text-sm"
        >
          Serving CSIT Students Beyond the Classroom
        </motion.span>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={card}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1eade6]/50 hover:shadow-xl hover:shadow-[#1eade6]/10 sm:rounded-3xl sm:p-6 md:p-8"
              >
                {/* accent bar */}
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-[#1eade6] to-[#cf4446] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="mb-4 inline-flex rounded-xl bg-[#1eade6]/10 p-3 text-[#1eade6] transition-colors group-hover:bg-[#1eade6] group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#1b2c48] sm:text-xl">
                  {f.title}
                </h3>
                <p className="pt-3 text-sm leading-relaxed text-slate-600 sm:pt-4">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
