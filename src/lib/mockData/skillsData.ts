// lib/mockData/skillsData.ts (Updated - Skills only, no tools)
export type Skill = {
  name: string;
  category: string;
  proficiency: number; // 0-100
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    skills: [
      { name: "SEO", category: "digital-marketing", proficiency: 92 },
      { name: "SEM", category: "digital-marketing", proficiency: 88 },
      { name: "CRO", category: "digital-marketing", proficiency: 85 },
      {
        name: "Email Marketing",
        category: "digital-marketing",
        proficiency: 90,
      },
      {
        name: "Content Marketing",
        category: "digital-marketing",
        proficiency: 95,
      },
      { name: "Google Ads", category: "digital-marketing", proficiency: 90 },
      {
        name: "Campaign Management",
        category: "digital-marketing",
        proficiency: 92,
      },
      { name: "A/B Testing", category: "digital-marketing", proficiency: 88 },
      {
        name: "Google Analytics",
        category: "digital-marketing",
        proficiency: 93,
      },
      {
        name: "Marketing Automation",
        category: "digital-marketing",
        proficiency: 87,
      },
    ],
  },
  {
    id: "web-platforms",
    title: "Web, Product & Platforms",
    skills: [
      { name: "HTML", category: "web-platforms", proficiency: 95 },
      { name: "CSS", category: "web-platforms", proficiency: 95 },
      { name: "JavaScript", category: "web-platforms", proficiency: 88 },
      { name: "WordPress", category: "web-platforms", proficiency: 93 },
      { name: "Webflow", category: "web-platforms", proficiency: 90 },
      { name: "Wix", category: "web-platforms", proficiency: 92 },
      { name: "CMS Management", category: "web-platforms", proficiency: 90 },
    ],
  },
  {
    id: "design-creative",
    title: "Design, Creative & Media",
    skills: [
      { name: "UI/UX Design", category: "design-creative", proficiency: 90 },
      { name: "Logo Design", category: "design-creative", proficiency: 88 },
      { name: "Branding", category: "design-creative", proficiency: 92 },
      { name: "Layout Design", category: "design-creative", proficiency: 90 },
      { name: "Video Editing", category: "design-creative", proficiency: 85 },
      { name: "Motion Graphics", category: "design-creative", proficiency: 83 },
    ],
  },
  {
    id: "strategy-operations",
    title: "Strategy, Communication & Operations",
    skills: [
      {
        name: "Project Management",
        category: "strategy-operations",
        proficiency: 93,
      },
      {
        name: "Strategic Planning",
        category: "strategy-operations",
        proficiency: 90,
      },
      {
        name: "Marketing Planning",
        category: "strategy-operations",
        proficiency: 92,
      },
      {
        name: "Stakeholder Analysis",
        category: "strategy-operations",
        proficiency: 88,
      },
      {
        name: "Community Management",
        category: "strategy-operations",
        proficiency: 87,
      },
      {
        name: "Market Research",
        category: "strategy-operations",
        proficiency: 85,
      },
    ],
  },
  {
    id: "content-pr",
    title: "Content, PR & Storytelling",
    skills: [
      { name: "Storytelling", category: "content-pr", proficiency: 95 },
      { name: "Public Relations", category: "content-pr", proficiency: 88 },
      { name: "Media Relations", category: "content-pr", proficiency: 85 },
      {
        name: "Social Media Strategy",
        category: "content-pr",
        proficiency: 93,
      },
      { name: "Report Writing", category: "content-pr", proficiency: 90 },
      { name: "Copywriting", category: "content-pr", proficiency: 92 },
    ],
  },
];
