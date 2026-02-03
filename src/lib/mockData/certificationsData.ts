// lib/mockData/certificationsData.ts
export type Certification = {
  id: number;
  title: string;
  issuer: string;
  icon: string;
  category: 'marketing' | 'analytics' | 'design' | 'academic';
};

export const certificationsData: Certification[] = [
  {
    id: 1,
    title: "Digital Marketing and E-commerce",
    issuer: "Google",
    icon: "bi-google",
    category: "marketing"
  },
  {
    id: 2,
    title: "Meta Social Media Marketing",
    issuer: "Meta",
    icon: "bi-meta",
    category: "marketing"
  },
  {
    id: 3,
    title: "Digital Marketing Nanodegree",
    issuer: "Udacity",
    icon: "bi-mortarboard",
    category: "marketing"
  },
  {
    id: 4,
    title: "Inbound Marketing Certification",
    issuer: "HubSpot",
    icon: "bi-bullseye",
    category: "marketing"
  },
  {
    id: 5,
    title: "Google Ads Certification",
    issuer: "Google",
    icon: "bi-megaphone",
    category: "marketing"
  },
  {
    id: 6,
    title: "Google Ads Search Certification",
    issuer: "Google",
    icon: "bi-search",
    category: "marketing"
  },
  {
    id: 7,
    title: "Analytics Individual Qualification (GAIQ)",
    issuer: "Google",
    icon: "bi-graph-up",
    category: "analytics"
  },
  {
    id: 8,
    title: "SEO Fundamentals",
    issuer: "Google",
    icon: "bi-bar-chart",
    category: "analytics"
  },
  {
    id: 9,
    title: "Optimizing a Website for Google",
    issuer: "Google",
    icon: "bi-gear",
    category: "analytics"
  },
  {
    id: 10,
    title: "Marketing Specialist",
    issuer: "Adobe",
    icon: "bi-palette",
    category: "design"
  },
  {
    id: 11,
    title: "Social Media Marketing Certificate",
    issuer: "Professional",
    icon: "bi-share",
    category: "marketing"
  },
  {
    id: 12,
    title: "Public Relations and Communications Associate",
    issuer: "Microsoft",
    icon: "bi-megaphone-fill",
    category: "marketing"
  },
  {
    id: 13,
    title: "Green Digital Skills Certificate",
    issuer: "Professional",
    icon: "bi-leaf",
    category: "marketing"
  }
];

export type Education = {
  id: number;
  degree: string;
  institution: string;
  year?: string;
  icon: string;
};

export const educationData: Education[] = [
  {
    id: 1,
    degree: "B.Sc. Computer Science",
    institution: "University of Calabar",
    icon: "bi-mortarboard-fill"
  },
  {
    id: 2,
    degree: "Diploma in Project Management",
    institution: "International Business Management Institute",
    year: "2023",
    icon: "bi-briefcase-fill"
  }
];