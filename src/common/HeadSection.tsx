import Link from "next/link";
import Image from "next/image";
import { MdExplore } from "react-icons/md";

interface HeroSectionProps {
  title: string;
  highlight: string;
  description: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

const HeadSection = ({
  title,
  highlight,
  description,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
}: HeroSectionProps) => {
  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-br from-[#cf4446] via-[#1eade6] to-[#cf4446] rounded-2xl shadow-2xl p-6 sm:p-10 md:p-12 text-white relative overflow-hidden">
            <div className="text-center flex flex-col items-center">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight font-sora">
                {title}{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-white/80 to-white">
                  {highlight}
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl leading-relaxed font-poppins px-1">
                {description}
              </p>

              <div className="mt-6 flex flex-cols sm:flex-row items-center justify-center gap-3 w-full">
                {primaryBtnText && primaryBtnLink && (
                  <Link
                    href={primaryBtnLink}
                    className="group inline-flex items-center gap-2 bg-white text-[#1eade6] px-5 py-3 rounded-lg font-semibold shadow-lg transform transition-all duration-200 ease-out motion-safe:transform-gpu hover:scale-105 hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-[#1b2c48]/50 hover:to-[#1eade6] hover:text-white focus:outline-none fill-[#1eade6] hover:fill-white font-poppins cursor-pointer"
                  >
                    {primaryBtnText}
                    <span className="hidden sm:flex items-center">
                      <Image
                        src="/icons/rightarrow.svg"
                        width={18}
                        height={18}
                        alt="Right arrow icon"
                        className="head-section-arrow group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                )}

                {secondaryBtnText && secondaryBtnLink && (
                  <Link
                    href={secondaryBtnLink}
                    aria-label="Explore our services"
                    className="group inline-flex items-center justify-center gap-2 border border-white/30 text-white px-5 py-3 rounded-lg bg-transparent transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-0.5 hover:bg-linear-to-r hover:from-[#1eade6] hover:to-[#1b2c48]/50 hover:text-white shadow-sm hover:shadow-lg focus:outline-none"
                  >
                    <MdExplore className="hidden sm:block w-4 h-4 flex-none transition-transform duration-200 group-hover:rotate-12" />
                    <span className="font-semibold font-poppins">
                      {secondaryBtnText}
                    </span>
                  </Link>
                )}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;