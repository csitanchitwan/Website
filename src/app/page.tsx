import type { Metadata } from "next";
import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";
import Programs from "../components/home/Programs";
import About from "../components/home/About";

export const metaData: Metadata = {
  title: "Home",
  description:
    "CSITAN Chitwan",
};

export default function page() {
  return (
    <main className=" text-white pt-10">
     <HeroSection />
     <About />
     <FeatureSection />
     <Programs />
    </main>
  );
}