// Portfolio data - used for both home page and portfolio page
export type Events = {
  title: string;
  date: string;
  venue: string;
  gallery?: string[];
  // Fields for home page compatibility
  image?: string;
  desc?: string;
};

export const events: Events[] = [
  {
    title: "Cyber Security & Bug Bounty Workshop",
    gallery: [
      "/events/cyber1.png",
      "/events/cyber2.png",
      "/events/cyber3.png",
      "/events/cyber4.png",
      "/events/cyber5.png",
    ],
    desc: "The **Cyber Security & Bug Bounty** Workshop, organized by CSIT Association of Nepal – Chitwan, brought together over 85 enthusiastic students in an intensive, focused learning environment. The session covered essential cybersecurity fundamentals while providing real-world insights into bug bounty programs and ethical hacking practices. Led by **Mr. Ashutosh Devkota**, the workshop emphasized practical knowledge, career pathways in cybersecurity, and the mindset required to begin a journey in bug hunting. More than just a technical session, the event served as a strong starting point for students interested in securing digital systems and exploring opportunities in the global cybersecurity landscape. With high engagement and curiosity throughout the session, this workshop reflects CSITAN-Chitwan’s commitment to empowering students with industry-relevant skills.",
    date: "2082-09-11",
    venue: "Birendra Multiple Campus, Naubiga",
  },
];

// Export as projects for backward compatibility with home page
export const program = events;