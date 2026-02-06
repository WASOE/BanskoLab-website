import type { Policy } from "./types";

export const policies: Policy[] = [
  {
    slug: "safeguarding",
    title: "Safeguarding and Code of Conduct",
    summary:
      "Safeguarding procedures, supervision rules, and incident escalation for youth activities.",
    lastUpdated: "2025-01-10",
    pdf: "/documents/code-of-conduct-and-safety-plan-v1.2.pdf",
    content: [
      "We maintain safeguarding procedures and clear supervision rules.",
      "Every project has a responsible person and a risk plan.",
      "Incidents are logged and escalated within agreed timelines.",
    ],
  },
  {
    slug: "inclusion-accessibility",
    title: "Inclusion and Accessibility",
    summary:
      "Ensures equal access and tailored support for participants with fewer opportunities.",
    lastUpdated: "2024-12-15",
    pdf: "/documents/inclusion-accessibility.pdf",
    content: [
      "Inclusive recruitment and outreach processes.",
      "Reasonable adjustments agreed before activities.",
      "Feedback channels monitored throughout delivery.",
    ],
  },
  {
    slug: "code-of-conduct",
    title: "Code of Conduct",
    summary: "Shared expectations for respectful and safe participation.",
    lastUpdated: "2025-01-10",
    pdf: "/documents/code-of-conduct-and-safety-plan-v1.2.pdf",
    content: [
      "Respect for people, place, and local communities.",
      "Clear escalation steps for breaches.",
      "Commitment to anti-harassment practices.",
    ],
  },
  {
    slug: "privacy",
    title: "Privacy",
    summary: "Data processing principles and participant rights.",
    lastUpdated: "2025-01-10",
    pdf: "/documents/privacy-policy-v1.2.pdf",
    content: [
      "We collect personal data only when needed for delivery and reporting.",
      "Participant information is published only with consent.",
      "Data handling follows GDPR principles and partner requirements.",
    ],
  },
  {
    slug: "cookies",
    title: "Cookies Policy",
    summary: "Use of cookies and analytics with opt-in consent.",
    lastUpdated: "2025-01-10",
    pdf: "/documents/cookies-policy-v1.2.pdf",
    content: [
      "Essential cookies only by default.",
      "Analytics enabled with explicit consent.",
    ],
  },
  {
    slug: "complaints",
    title: "Complaints Procedure",
    summary: "Step-by-step approach for submitting concerns.",
    lastUpdated: "2024-11-05",
    pdf: "/documents/complaints-procedure.pdf",
    content: [
      "Complaints acknowledged within 5 working days.",
      "Escalation path to the board if unresolved.",
    ],
  },
];
