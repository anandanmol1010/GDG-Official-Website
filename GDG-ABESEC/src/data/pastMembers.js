/* ============================================================
   PAST MEMBERS / ALUMNI DATA
   Organized by batch year for the Legacy page.
   To add a new batch, simply add a new object to the array.
============================================================ */

const pastMembers = [
  {
    year: "2023–24",
    theme: "#4285F4", // Google Blue
    members: [
      {
        name: "Anmol Anand",
        role: "Organiser",
        contribution: "Led the club's founding vision, established core team structure and community outreach programs.",
        img: "/TeamPageImages/Arya Schwetank.jpg",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
        badge: "Founder",
      },
      {
        name: "Rahul Sharma",
        role: "Technical Lead",
        contribution: "Built the club's first website and led multiple hackathon teams to victory.",
        img: "/TeamPageImages/Keshav Khippal.jpg",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
        badge: "Tech Pioneer",
      },
      {
        name: "Priya Singh",
        role: "Design Lead",
        contribution: "Created the club's visual identity and brand guidelines that are still in use today.",
        img: "/TeamPageImages/Riya Jaiswal.jpg",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
        badge: "Brand Architect",
      },
      {
        name: "Arjun Mehta",
        role: "Events Lead",
        contribution: "Organized the first-ever Hackheaven hackathon with 200+ participants.",
        img: "/TeamPageImages/Prakhar Tiwari.jpg",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
      },
      {
        name: "Sneha Gupta",
        role: "Promotions Lead",
        contribution: "Grew the club's social media following from 0 to 1,000+ in the first semester.",
        img: "/TeamPageImages/Anshika Srivastav.jpg",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
      },
      {
        name: "Vikram Patel",
        role: "Acting General",
        contribution: "Coordinated cross-team operations and mentored junior members.",
        img: "/TeamPageImages/Deepanshu Kaushik.jpg",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
      },
    ],
  },
  {
    year: "2022–23",
    theme: "#34A853", // Google Green
    members: [
      {
        name: "Kavya Reddy",
        role: "Organiser",
        contribution: "Transformed the club into a recognized Google Developer Group on Campus.",
        img: "/TeamPageImages/Riya Jaiswal.jpg",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
        badge: "Visionary",
      },
      {
        name: "Aman Verma",
        role: "Technical Lead",
        contribution: "Introduced cloud computing workshops and Firebase study jams.",
        img: "/TeamPageImages/Keshav Khippal.jpg",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
        badge: "Cloud Champion",
      },
      {
        name: "Nisha Agarwal",
        role: "Events Lead",
        contribution: "Launched Tech Winter Break — the club's flagship annual event.",
        img: "/TeamPageImages/Anshika Srivastav.jpg",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
      },
      {
        name: "Rohan Das",
        role: "Acting General",
        contribution: "Streamlined internal processes and built the first member onboarding system.",
        img: "/TeamPageImages/Prakhar Tiwari.jpg",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
      },
      {
        name: "Tanvi Joshi",
        role: "Design Lead",
        contribution: "Designed event collaterals and social media templates used across 10+ events.",
        img: "/TeamPageImages/Ayushi Singh.jpg",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
      },
    ],
  },
];

/* ============================================================
   LEGACY STATS — Aggregated impact numbers
============================================================ */
export const legacyStats = [
  { label: "Alumni Members", value: "50+", icon: "users" },
  { label: "Years of Legacy", value: "3+", icon: "calendar" },
  { label: "Events Organized", value: "30+", icon: "zap" },
  { label: "Projects Delivered", value: "20+", icon: "code" },
  { label: "Leadership Generations", value: "4", icon: "award" },
];

/* ============================================================
   CLUB MILESTONES — For the journey timeline
============================================================ */
export const clubMilestones = [
  {
    year: "2022",
    title: "The Beginning",
    description: "A small group of passionate developers came together to build a community around Google technologies at ABES EC.",
    color: "#4285F4",
  },
  {
    year: "2023",
    title: "Official Recognition",
    description: "Became an officially recognized Google Developer Group on Campus, opening doors to global resources and mentorship.",
    color: "#EA4335",
  },
  {
    year: "2024",
    title: "Community Growth",
    description: "Crossed 1,000+ community members, hosted Hackheaven 2.0, and launched the Tech Winter Break series.",
    color: "#FBBC05",
  },
  {
    year: "2025",
    title: "New Horizons",
    description: "Expanded into AI/ML, Cloud, and Flutter domains. Launched MTG 2.0 and strengthened industry partnerships.",
    color: "#34A853",
  },
];

export default pastMembers;
