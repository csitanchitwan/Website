import ContactPage from "@/src/components/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "CSITAN Chitwan",
};

export default function About() {
  return <ContactPage />;
}