import AboutPage from "@/src/components/about/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About CSITAN Chitwan",
};

export default function About() {
  return <AboutPage />;
}