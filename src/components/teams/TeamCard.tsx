"use client";
import { TeamMember } from "@/src/data/about";
import TeamAvatar from "./TeamAvatar";
import { motion } from "framer-motion";

interface TeamCardProps {
  member: TeamMember;
  /** Folder photos are resolved from when the member has no explicit image. */
  dir?: string;
  /** Slightly larger avatar for the featured (President) card. */
  featured?: boolean;
}

export default function TeamCard({ member, dir, featured = false }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
      className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1eade6]/60 hover:shadow-xl hover:shadow-[#1eade6]/10 sm:p-6"
    >
      {/* accent bar on hover */}
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-[#1eade6] to-[#cf4446] transition-transform duration-300 group-hover:scale-x-100" />
      <div
        className={`relative mb-3 overflow-hidden rounded-full ring-2 ring-[#1eade6]/40 ring-offset-2 ring-offset-white transition-transform duration-300 group-hover:scale-105 ${
          featured ? "h-28 w-28 sm:h-32 sm:w-32" : "h-20 w-20 sm:h-28 sm:w-28"
        }`}
      >
        <TeamAvatar name={member.name} image={member.image} dir={dir} />
      </div>
      <h3 className="text-sm font-semibold leading-tight text-[#1b2c48] sm:text-lg">
        {member.name}
      </h3>
      <p className="mt-1 text-xs font-medium text-[#1eade6] sm:text-sm">
        {member.post}
      </p>
    </motion.div>
  );
}
