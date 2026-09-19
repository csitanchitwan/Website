// Team data for the About page and the Teams page.
//
// `team` is what the whole site renders by default — it points at the CURRENT
// committee. When the tenure changes, repoint `team` at the new list and keep
// the previous one exported (it stays reachable through the "Team 20XX" button
// on the Teams page and its /teams/<year> route).

export interface TeamMember {
  id: string;
  name: string;
  post: string;
  // Optional explicit image path. When omitted, the avatar resolves the photo
  // automatically from the member's FIRST NAME inside the team folder, trying
  // common extensions (.jpg/.png/.jpeg/.webp). Drop "<FirstName>.jpg" into the
  // folder and it appears with no code change. Only set this when the file name
  // does not match the first name.
  image?: string;
}

/* -------------------------------------------------------------------------
   TENURE 2083 (2026/27) — the current committee.
   Photos live in /public/assets/team2083, named by first name.
   Order defines the on-page hierarchy: President, then Vice Presidents
   (Amisha left, Prashant right), then office-bearers, then executives.
   The Immediate Past President is intentionally NOT listed here.
   ------------------------------------------------------------------------- */
export const team2083: TeamMember[] = [
  { id: "1", name: "Sapana Paudel", post: "President" },

  { id: "2", name: "Amisha Adhikari", post: "Vice President" },
  { id: "3", name: "Prashant Subedi", post: "Vice President" },

  { id: "4", name: "Smriti Chhetry", post: "Secretary" },
  { id: "5", name: "Shristi Adhikari", post: "Treasurer" },
  { id: "6", name: "Shishir Bhusal", post: "Joint Treasurer" },
  // File is named Rajib.jpg while the member's name is Rajiv — explicit override.
  { id: "7", name: "Rajiv Sedai", post: "Joint Secretary", image: "/assets/team2083/Rajib.jpg" },

  { id: "8", name: "Aastha Ghimire", post: "Executive" },
  { id: "9", name: "Krishna Tiwari", post: "Executive" },
  { id: "10", name: "Rishika Timalsina", post: "Executive" },
  { id: "11", name: "Samikshya Ghimire", post: "Executive" },
  { id: "12", name: "Biswas Pokhrel", post: "Executive" },
  { id: "13", name: "Santosh Chapagai", post: "Executive" },
  { id: "14", name: "Sandesh Ghimire", post: "Executive" },
  { id: "15", name: "Saroj Kandel", post: "Executive" },
];

/* -------------------------------------------------------------------------
   TENURE 2082 (2025/26) — preserved for the record.
   Photos live in /public/assets/team2082 with explicit paths (file names do
   not always match first names, so each image is given directly).
   ------------------------------------------------------------------------- */
export const team2082: TeamMember[] = [
  { id: "1", name: "Shriram Lamichhane", post: "President", image: "/assets/team2082/Shrii.png" },

  { id: "2", name: "Pramod Sharma", post: "Vice President", image: "/assets/team2082/Pramod.jpg" },
  { id: "3", name: "Amisha Adhikari", post: "Vice President", image: "/assets/team2082/Amisha.png" },

  { id: "4", name: "Shristi Adhikari", post: "Secretary", image: "/assets/team2082/Shristi.png" },
  { id: "5", name: "Bibek Parajuli", post: "Joint Secretary", image: "/assets/team2082/Bibek.png" },

  { id: "6", name: "Bahas Raj Rijal", post: "Treasurer", image: "/assets/team2082/Bahas.png" },
  { id: "7", name: "Sunil Subedi", post: "Joint Treasurer", image: "/assets/team2082/Sunil.jpg" },

  { id: "8", name: "Prashant Subedi", post: "Executive", image: "/assets/team2082/Prashant.jpg" },
  { id: "9", name: "Shishir Bhusal", post: "Executive", image: "/assets/team2082/Shishir.png" },
  { id: "10", name: "Sapana Paudel", post: "Executive", image: "/assets/team2082/Sapana.jpg" },
  { id: "11", name: "Smriti Chhetry", post: "Executive", image: "/assets/team2082/Smriti.jpg" },
  { id: "12", name: "Prabin Acharya", post: "Executive", image: "/assets/team2082/Prabin.png" },
  { id: "13", name: "Aashutosh Devkota", post: "Executive", image: "/assets/team2082/Aashutosh.jpg" },
  { id: "14", name: "Dikshit Aryal", post: "Executive", image: "/assets/team2082/Dikshit.jpg" },
  { id: "15", name: "Rajib Sedai", post: "Executive", image: "/assets/team2082/Rajib.jpg" },
];

// The current committee rendered site-wide.
export const team = team2083;
