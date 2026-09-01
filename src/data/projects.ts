export type ProjectCategory =
  | "Web Applications"
  | "Mobile Apps"
  | "SaaS"
  | "Other";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: string;
  tech: string[];
  features: string[];
  date: string;
  dateValue: number;
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product variants, secure checkout, and real-time inventory.",
    longDescription:
      "A complete e-commerce platform built for growing brands. It handles catalogs, variants, payments, and order tracking with a clean admin experience.",
    category: "Web Applications",
    categoryLabel: "Full-Stack Web Application",
    image: "/projects/ecommerce.png",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Product & variant management",
      "Secure checkout and payments",
      "Order tracking dashboard",
      "Responsive storefront",
    ],
    date: "May 2024",
    dateValue: 202405,
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    description:
      "An analytics dashboard with live metrics, reports, and role-based access for operations teams.",
    longDescription:
      "A modern admin dashboard that turns product data into clear insights, with charts, filters, and team permissions.",
    category: "SaaS",
    categoryLabel: "SaaS Dashboard",
    image: "/projects/dashboard.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
    features: [
      "Real-time KPI cards",
      "Custom report builder",
      "Role-based access control",
      "Dark-ready interface",
    ],
    date: "March 2024",
    dateValue: 202403,
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    slug: "mobile-application",
    title: "Mobile Application",
    description:
      "A cross-platform mobile app for daily habits, activity tracking, and personal progress.",
    longDescription:
      "A React Native app focused on a smooth mobile experience, offline-friendly data, and a calm, usable interface.",
    category: "Mobile Apps",
    categoryLabel: "Mobile Application",
    image: "/projects/mobile.png",
    tech: ["React Native", "Expo", "TypeScript", "Node.js"],
    features: [
      "Cross-platform iOS & Android",
      "Habit and activity tracking",
      "Push notifications",
      "Offline-first storage",
    ],
    date: "January 2024",
    dateValue: 202401,
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    slug: "analytics-saas",
    title: "Analytics SaaS",
    description:
      "A product analytics platform with funnels, cohorts, and shareable insight dashboards.",
    longDescription:
      "A SaaS analytics product that helps teams understand user behavior and share reports without extra tooling.",
    category: "SaaS",
    categoryLabel: "SaaS Product",
    image: "/projects/saas.png",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Funnel and cohort analysis",
      "Shareable live dashboards",
      "Team workspaces",
      "CSV and API exports",
    ],
    date: "November 2023",
    dateValue: 202311,
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const projectFilters = [
  "All Projects",
  "Web Applications",
  "Mobile Apps",
  "SaaS",
  "Other",
] as const;
