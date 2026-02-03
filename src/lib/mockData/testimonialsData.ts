// lib/mockData/testimonialsData.ts (updated without img property)
export type Testimonial = {
  id: number;
  text: string;
  author: string;
  role: string;
  company?: string;
};

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "Kingsley brings a rare mix of creativity, technical skill, and strategic thinking. He consistently delivers results and elevates every project he touches.",
    author: "Sarah Mitchell",
    role: "CEO",
    company: "TechVision Global",
  },
  {
    id: 2,
    text: "Working with Kingsley was seamless. From concept to execution, the quality and professionalism were outstanding.",
    author: "David Chen",
    role: "Marketing Director",
    company: "Innovate Digital",
  },
  {
    id: 3,
    text: "His ability to blend strategic marketing with technical execution is exceptional. Kingsley transformed our digital presence completely.",
    author: "Amara Johnson",
    role: "Founder",
    company: "Creative Ventures",
  },
];
