import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <span className="relative flex h-11 w-[88px] shrink-0 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/logo.svg"
          alt="Sanjay Angira"
          className={cn(
            "h-10 w-auto max-w-none object-contain",
            inverted ? "hidden" : "dark:hidden",
          )}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/logo-white.svg"
          alt="Sanjay Angira"
          className={cn(
            "h-10 w-auto max-w-none object-contain",
            inverted ? "block" : "hidden dark:block",
          )}
        />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block text-sm font-semibold",
            inverted ? "text-white" : "text-slate-900 dark:text-white",
          )}
        >
          Sanjay Angira
        </span>
        <span className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Full-Stack Developer
        </span>
      </span>
    </Link>
  );
}
