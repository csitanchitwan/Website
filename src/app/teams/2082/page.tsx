import TeamsView from "@/src/components/teams/TeamsView";
import { team2082 } from "@/src/data/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team 2082",
  description: "The CSITAN Chitwan executive committee for the 2082 (2025/26) tenure.",
};

export default function Team2082Page() {
  return (
    <TeamsView
      members={team2082}
      dir="/assets/team2082"
      tenureLabel="Tenure 2082 · 2025/26 · Past Committee"
      cornerAction={{ label: "Current Team", href: "/teams", direction: "left" }}
      showExecutiveDivider={false}
    />
  );
}
