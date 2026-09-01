import type { IconType } from "react-icons";
import { FaAws, FaSlack } from "react-icons/fa";
import {
  SiDocker,
  SiExpo,
  SiExpress,
  SiFigma,
  SiGithub,
  SiJira,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPostgresql,
  SiPostman,
  SiRazorpay,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Code2, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, IconType> = {
  nextjs: SiNextdotjs,
  react: SiReact,
  nodejs: SiNodedotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  postgres: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,
  nestjs: SiNestjs,
  express: SiExpress,
  docker: SiDocker,
  aws: FaAws,
  github: SiGithub,
  expo: SiExpo,
  razorpay: SiRazorpay,
  vercel: SiVercel,
  vscode: VscVscode,
  postman: SiPostman,
  figma: SiFigma,
  notion: SiNotion,
  slack: FaSlack,
  jira: SiJira,
};

type TechIconProps = {
  name: string;
  color?: string;
  className?: string;
  size?: number;
};

export function TechIcon({ name, color, className, size = 22 }: TechIconProps) {
  if (name === "shiprocket") {
    return <Truck className={cn("text-primary", className)} size={size} />;
  }

  if (name === "api") {
    return <Code2 className={cn("text-primary", className)} size={size} />;
  }

  const Icon = icons[name];
  if (!Icon) return null;

  return (
    <Icon
      size={size}
      color={color}
      className={cn("shrink-0", className)}
      aria-hidden
    />
  );
}
