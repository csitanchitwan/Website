
export type Events = {
  title: string;
  date: string;
  venue: string;
  gallery?: string[];

  image?: string;
  desc?: string;
};

export const events: Events[] = [
  {
    title: "Cyber Security & Bug Bounty Workshop",
    gallery: [
      "/assets/events/cyber1.png",
      "/assets/events/cyber2.png",
      "/assets/events/cyber3.png",
      "/assets/events/cyber4.png",
      "/assets/events/cyber5.png",
    ],
    desc: "The **Cyber Security & Bug Bounty** Workshop, organized by CSIT Association of Nepal – Chitwan, brought together over 85 enthusiastic students in an intensive, focused learning environment. The session covered essential cybersecurity fundamentals while providing real-world insights into bug bounty programs and ethical hacking practices. Led by **Mr. Ashutosh Devkota**, the workshop emphasized practical knowledge, career pathways in cybersecurity, and the mindset required to begin a journey in bug hunting. More than just a technical session, the event served as a strong starting point for students interested in securing digital systems and exploring opportunities in the global cybersecurity landscape. With high engagement and curiosity throughout the session, this workshop reflects CSITAN-Chitwan’s commitment to empowering students with industry-relevant skills.",
    date: "2082-09-11",
    venue: "Birendra Multiple Campus, Naubiga",
  },
];

export const program = events;