import EventPage from "@/src/components/events/EventPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "CSITAN Chitwan",
};

export default function About() {
  return <EventPage />;
}