"use client";
import { TeamMember } from "@/src/data/about";
import Image from "next/image";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md flex flex-col items-center text-center hover:shadow-xl transition-transform hover:-translate-y-1 border border-[#1eade6]">
      <div className="w-20 h-20 sm:w-30 sm:h-30 relative rounded-full overflow-hidden mb-3 border-2 border-green-400">
        <Image src={member.image} alt={member.name} fill sizes="120px" className="object-cover" />
      </div>
      <h3 className="text-sm sm:text-lg font-semibold text-[#cf4446]">{member.name}</h3>
      <p className="text-xs sm:text-base text-[#1eade6] mt-1">{member.post}</p>
    </div>
  );
}
