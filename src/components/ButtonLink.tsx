import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  icon?: React.ReactNode;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  icon = <ArrowRight className="h-4 w-4" />,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-indigo-600",
    outline:
      "border border-slate-200 bg-white text-slate-800 hover:border-primary hover:text-primary dark:border-white/15 dark:bg-transparent dark:text-white dark:hover:border-primary",
    ghost:
      "border border-primary/40 bg-transparent text-primary hover:bg-primary hover:text-white",
  }[variant];

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition",
        styles,
        className,
      )}
    >
      {children}
      {icon}
    </Link>
  );
}
