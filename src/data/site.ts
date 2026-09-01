export const site = {
  name: "Sanjay Angira",
  initials: "SA",
  role: "Full-Stack Developer",
  tagline: "Building products that solve real-world problems",
  email: "hello@sanjayangira.dev",
  phone: "+91 98765 43210",
  phoneHours: "Mon–Fri, 10 AM - 7 PM IST",
  location: "India",
  availability: "Open for new projects",
  experience: "3+ Years",
  projectsCount: "20+",
  githubCommits: "500+",
  socials: [
    { name: "GitHub", href: "https://github.com", handle: "github.com/sanjayangira" },
    { name: "LinkedIn", href: "https://linkedin.com", handle: "linkedin.com/in/sanjayangira" },
    { name: "X", href: "https://x.com", handle: "x.com/sanjayangira" },
    { name: "Email", href: "mailto:hello@sanjayangira.dev", handle: "hello@sanjayangira.dev" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerTech = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
] as const;
