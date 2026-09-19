"use client";

import { team2083 } from "@/src/data/about";
import TeamsView from "./TeamsView";

export default function TeamsPage() {
  return (
    <TeamsView
      members={team2083}
      dir="/assets/team2083"
      tenureLabel="Tenure 2083 · 2026/27"
      cornerAction={{ label: "View Team 2082", href: "/teams/2082", direction: "right" }}
    />
  );
}
