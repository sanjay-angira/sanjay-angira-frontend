import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const items = [
  { name: "GitHub", href: site.socials[0].href, icon: FaGithub },
  { name: "LinkedIn", href: site.socials[1].href, icon: FaLinkedin },
  { name: "X", href: site.socials[2].href, icon: XIcon },
  { name: "Email", href: site.socials[3].href, icon: Mail },
];

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {items.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={name}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary dark:border-white/15 dark:text-zinc-300 dark:hover:border-primary",
            iconClassName,
          )}
        >
          <Icon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}
