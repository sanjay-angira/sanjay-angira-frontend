export type Skill = {
  name: string;
  icon: string;
  color: string;
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};

export const homeTechStack: Skill[] = [
  { name: "Next.js", icon: "nextjs", color: "#000000" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Node.js", icon: "nodejs", color: "#339933" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
  { name: "PostgreSQL", icon: "postgres", color: "#4169E1" },
];

export const skillGrid: Skill[] = [
  { name: "Next.js", icon: "nextjs", color: "#000000" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "Node.js", icon: "nodejs", color: "#339933" },
  { name: "Nest.js", icon: "nestjs", color: "#E0234E" },
  { name: "PostgreSQL", icon: "postgres", color: "#4169E1" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "Redis", icon: "redis", color: "#DC382D" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
  { name: "Git & GitHub", icon: "github", color: "#181717" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "AWS", icon: "aws", color: "#FF9900" },
  { name: "Razorpay", icon: "razorpay", color: "#0C2451" },
  { name: "Shiprocket", icon: "shiprocket", color: "#7C3AED" },
  { name: "Expo", icon: "expo", color: "#000020" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js", icon: "nextjs", color: "#000000" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs", color: "#339933" },
      { name: "NestJS", icon: "nestjs", color: "#E0234E" },
      { name: "Express.js", icon: "express", color: "#000000" },
      { name: "REST APIs", icon: "api", color: "#6366F1" },
    ],
  },
  {
    title: "Database & Cloud",
    items: [
      { name: "PostgreSQL", icon: "postgres", color: "#4169E1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "Redis", icon: "redis", color: "#DC382D" },
      { name: "AWS", icon: "aws", color: "#FF9900" },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Git & GitHub", icon: "github", color: "#181717" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Razorpay", icon: "razorpay", color: "#0C2451" },
      { name: "Vercel", icon: "vercel", color: "#000000" },
    ],
  },
];

export const tools = [
  { name: "VS Code", icon: "vscode", color: "#007ACC" },
  { name: "Postman", icon: "postman", color: "#FF6C37" },
  { name: "Figma", icon: "figma", color: "#F24E1E" },
  { name: "Notion", icon: "notion", color: "#000000" },
  { name: "Slack", icon: "slack", color: "#4A154B" },
  { name: "Jira", icon: "jira", color: "#0052CC" },
];

export const interests = [
  {
    title: "Product Building",
    description: "Turning ideas into usable products with clear UX and solid engineering.",
    icon: "rocket",
  },
  {
    title: "AI & Automation",
    description: "Using AI to speed up workflows and build smarter product experiences.",
    icon: "bot",
  },
  {
    title: "Open Source",
    description: "Learning in public, contributing, and building tools others can reuse.",
    icon: "code",
  },
  {
    title: "Sharing Knowledge",
    description: "Writing, mentoring, and breaking down complex topics into simple steps.",
    icon: "users",
  },
];
