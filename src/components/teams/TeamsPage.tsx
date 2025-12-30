"use client";

import { team } from "@/src/data/about";
import TeamCard from "./TeamCard";

export default function TeamsPage() {
  const president = team.find((m) => m.post === "President");
  const vicePresidents = team.filter((m) => m.post.includes("Vice President"));
  const others = team.filter(
    (m) => m.post !== "President" && !m.post.includes("Vice President")
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased">

      <section id="teams" className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-0 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b2c48]">Meet Our <span className="text-[#cf4446]">Leadership Teams</span></h1>
          <p className="text-[#1e7c85] mt-2 text-sm sm:text-base">Passionate leaders working together to empower CSIT students, <br />strengthen collaboration, and build the future <br />of Nepal’s tech community.</p>
        </div>

        {/* President */}
        {president && (
          <div className="max-w-68 mx-auto mb-8">
            <TeamCard member={president} />
          </div>
        )}

        {/* Vice Presidents */}
        {vicePresidents.length > 0 && (
          <div className="sm:max-w-6xl md:max-w-xl mx-auto mb-12 grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
            {vicePresidents.map((vp) => (
              <TeamCard key={vp.id} member={vp} />
            ))}
          </div>
        )}

        {/* Other members 3 per row */}
        {others.length > 0 && (
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {others.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
