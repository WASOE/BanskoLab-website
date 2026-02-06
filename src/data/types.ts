import type { ProjectStatus } from "./constants";
import type { PartnerType } from "./constants";
import type { Timeline } from "./timeline";

export type Project = {
  slug: string;
  title: string;
  year: number;
  goal: string;
  timeline: Timeline | string; // Support both structured and string formats (backward compatible)
  locations: string[];
  partners: string[];
  targetGroups: string[];
  activities: string[];
  deliverables: string[];
  outcomes: string[];
  status: ProjectStatus | string; // Allow string for backward compatibility during migration
  riskNotes: string[];
  evidence: string[];
  supportNeeded: string[];
  tags: string[];
  gallery: string[];
  lastUpdated: string;
};

export type Call = {
  slug: string;
  title: string;
  dates: string;
  location: string;
  eligibility: string[];
  deadline: string;
  agenda: string[];
  learningOutcomes: string[];
  coveredCosts: string[];
  practical: string[];
  safety: string[];
  faq: { question: string; answer: string }[];
  applicationLink: string;
  lastUpdated: string;
};

export type Resource = {
  slug: string;
  title: string;
  type: "Toolkit" | "Report" | "Media" | "Policy" | "Template";
  audience: string;
  date: string;
  file: string;
  license: string;
  description: string;
  project?: string;
  year?: number;
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  summary: string;
  content: string[];
  relatedProject?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  highlights: string[];
  links: { label: string; href: string }[];
};

export type Partner = {
  name: string;
  logo: string;
  type: PartnerType | string; // Allow string for backward compatibility during migration
  link: string;
};

export type Policy = {
  slug: string;
  title: string;
  summary: string;
  lastUpdated: string;
  pdf: string;
  content: string[];
};
