import TeamsPage from "@/src/components/teams/TeamsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams",
  description: "Teams of CSITAN Chitwan",
};

export default function About() {
  return <TeamsPage />;
}