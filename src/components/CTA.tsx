import Link from "next/link";
import { Rocket } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { cn } from "@/lib/utils";

type CTAProps = {
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
  className?: string;
};

export function CTA({
  title = "Let's build something amazing together",
  subtitle = "I'm always open to discussing new opportunities and exciting projects.",
  variant = "light",
  className,
}: CTAProps) {
  const isDark = variant === "dark";

  return (
    <section className={cn("px-4 pb-16 sm:px-6 lg:px-8", className)}>
      <div
        className={cn(
          "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl px-6 py-8 sm:flex-row sm:items-center sm:px-10",
          isDark
            ? "bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-primary text-white"
            : "bg-primary/8 dark:bg-primary/15",
        )}
      >
        <div className="flex items-start gap-4 sm:items-center">
          <span
            className={cn(
              "flex h-14 w-14 shrink-0 items-center justify-center rounded-full",
              isDark ? "bg-white/15 text-white" : "bg-primary/15 text-primary",
            )}
          >
            <Rocket className="h-6 w-6" />
          </span>
          <div>
            <h2
              className={cn(
                "text-xl font-bold sm:text-2xl",
                isDark ? "text-white" : "text-slate-900 dark:text-white",
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "mt-1 max-w-xl text-sm",
                isDark ? "text-indigo-100" : "text-slate-600 dark:text-zinc-400",
              )}
            >
              {subtitle}
            </p>
          </div>
        </div>
        <ButtonLink href="/contact" className="shrink-0">
          Get In Touch
        </ButtonLink>
      </div>
    </section>
  );
}
