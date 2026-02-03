// lib/mockData/experienceData.ts
export type Experience = {
  id: number;
  company: string;
  roles: {
    title: string;
    period: string;
    duration: string;
  }[];
  location: string;
  description?: string;
};

export const experienceData: Experience[] = [
  {
    id: 1,
    company: "Blue Sands STEM Labs",
    roles: [
      {
        title: "Co-Founder/Chief Technology & Growth Marketing Officer",
        period: "October 2022 - Present",
        duration: "2+ years",
      },
      {
        title: "Growth Marketer",
        period: "January 2020 - September 2022",
        duration: "2 years 9 months",
      },
    ],
    location: "Lagos State, Nigeria",
    description:
      "Growth-focused digital strategies covering SEO, paid advertising, content, analytics, and conversion optimization.",
  },
  {
    id: 2,
    company: "Altica Partners",
    roles: [
      {
        title: "Marketing Assistant",
        period: "April 2024 - Present",
        duration: "9+ months",
      },
      {
        title: "Head of Product Development & Marketing",
        period: "November 2021 - April 2022",
        duration: "6 months",
      },
    ],
    location: "London, England, United Kingdom",
  },
  {
    id: 3,
    company: "Woodhall Capital Limited",
    roles: [
      {
        title: "Senior Content Manager",
        period: "May 2023 - September 2023",
        duration: "5 months",
      },
      {
        title: "Digital & Web Content Officer",
        period: "January 2023 - April 2023",
        duration: "4 months",
      },
    ],
    location: "London, England, United Kingdom",
  },
  {
    id: 4,
    company: "BetaPlus International Synergy Limited",
    roles: [
      {
        title: "Digital Marketing Manager",
        period: "January 2022 - December 2024",
        duration: "3 years",
      },
    ],
    location: "Lagos State, Nigeria",
  },
  {
    id: 5,
    company: "Lillyworth Homes",
    roles: [
      {
        title: "Digital Marketing | Social Media Manager | SEO Specialist",
        period: "December 2021 - December 2022",
        duration: "1 year 1 month",
      },
    ],
    location: "London, England, United Kingdom",
  },
  {
    id: 6,
    company: "Blackstone Legal Advisory",
    roles: [
      {
        title: "Search Engine Optimization Specialist",
        period: "January 2022 - December 2022",
        duration: "1 year",
      },
    ],
    location: "Lagos State, Nigeria",
  },
  {
    id: 7,
    company: "Datacraft Consulting",
    roles: [
      {
        title: "Brand Consultant",
        period: "January 2022 - December 2022",
        duration: "1 year",
      },
    ],
    location: "Lagos State, Nigeria",
  },
  {
    id: 8,
    company: "GTCO Calscan Nig. Ltd.",
    roles: [
      {
        title: "Project Manager",
        period: "January 2015 - December 2019",
        duration: "5 years",
      },
    ],
    location: "Nigeria",
  },
  {
    id: 9,
    company: "Chief Media Communications",
    roles: [
      {
        title: "Chief Media Communications Officer",
        period: "March 2013 - August 2014",
        duration: "1 year 6 months",
      },
    ],
    location: "Calabar, CRS, Nigeria",
  },
];
