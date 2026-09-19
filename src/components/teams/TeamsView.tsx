"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { TeamMember } from "@/src/data/about";
import TeamCard from "./TeamCard";

interface CornerAction {
  label: string;
  href: string;
  /** Which side the arrow sits on. Defaults to "right". */
  direction?: "left" | "right";
}

interface TeamsViewProps {
  members: TeamMember[];
  /** Photo folder for members resolved by first name. */
  dir: string;
  /** Small label under the title, e.g. "Tenure 2083 · 2026/27". */
  tenureLabel?: string;
  /** Top-right pill link (e.g. view the previous committee, or go back). */
  cornerAction?: CornerAction;
  /**
   * When true (default) office-bearers and executives are shown as two tiers
   * with an "Executive Members" divider. When false everyone below the vice
   * presidents flows in one continuous grid with no section break.
   */
  showExecutiveDivider?: boolean;
}

const OFFICE_POSTS = [
  "Secretary",
  "Treasurer",
  "Joint Treasurer",
  "Joint Secretary",
];

export default function TeamsView({
  members,
  dir,
  tenureLabel,
  cornerAction,
  showExecutiveDivider = true,
}: TeamsViewProps) {
  const president = members.find((m) => m.post === "President");
  const vicePresidents = members.filter((m) => m.post.includes("Vice President"));
  const officers = members.filter(
    (m) =>
      m.post !== "President" &&
      !m.post.includes("Vice President") &&
      m.post !== "Executive"
  );
  officers.sort(
    (a, b) => OFFICE_POSTS.indexOf(a.post) - OFFICE_POSTS.indexOf(b.post)
  );
  const executives = members.filter((m) => m.post === "Executive");

  const CornerArrow = cornerAction?.direction === "left" ? ArrowLeft : ArrowRight;

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-[#eefaff] text-slate-800 antialiased">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-0 py-16 sm:py-20">
        {/* Header */}
        <div className="relative mb-12">
          {cornerAction && (
            <Link
              href={cornerAction.href}
              className="absolute right-0 top-0 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#1b2c48] shadow-sm transition-colors hover:border-[#1eade6] hover:bg-[#1eade6] hover:text-white"
            >
              {cornerAction.direction === "left" && <CornerArrow size={16} />}
              {cornerAction.label}
              {cornerAction.direction !== "left" && <CornerArrow size={16} />}
            </Link>
          )}

          <div className="text-center max-w-2xl mx-auto pt-14 sm:pt-2">
            {tenureLabel && (
              <span className="inline-block rounded-md bg-[#1eade6]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#1e7c85] mb-3">
                {tenureLabel}
              </span>
            )}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b2c48]">
              Meet Our <span className="text-[#cf4446]">Leadership Team</span>
            </h1>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              Passionate leaders working together to empower CSIT students,
              strengthen collaboration, and build the future of Nepal&apos;s tech
              community.
            </p>
          </div>
        </div>

        {/* President */}
        {president && (
          <div className="w-full max-w-xs mx-auto mb-8 sm:mb-10">
            <TeamCard member={president} dir={dir} featured />
          </div>
        )}

        {/* Vice Presidents */}
        {vicePresidents.length > 0 && (
          <div className="max-w-xl mx-auto mb-8 sm:mb-12 grid grid-cols-2 gap-4 sm:gap-6">
            {vicePresidents.map((vp) => (
              <TeamCard key={vp.id} member={vp} dir={dir} />
            ))}
          </div>
        )}

        {showExecutiveDivider ? (
          <>
            {/* Office bearers */}
            {officers.length > 0 && (
              <div className="max-w-4xl mx-auto mb-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {officers.map((member) => (
                  <TeamCard key={member.id} member={member} dir={dir} />
                ))}
              </div>
            )}

            {/* Executives */}
            {executives.length > 0 && (
              <>
                <div className="flex items-center gap-4 max-w-4xl mx-auto mb-8">
                  <span className="h-px flex-1 bg-slate-200" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Executive Members
                  </span>
                  <span className="h-px flex-1 bg-slate-200" />
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                  {executives.map((member) => (
                    <TeamCard key={member.id} member={member} dir={dir} />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          /* Continuous — no section break between office-bearers and executives */
          (officers.length > 0 || executives.length > 0) && (
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {[...officers, ...executives].map((member) => (
                <TeamCard key={member.id} member={member} dir={dir} />
              ))}
            </div>
          )
        )}
      </section>
    </main>
  );
}
