import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Logo } from "@/components/Logo";
import { footerTech, navLinks, site } from "@/data/site";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#07070c] text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
            Building products that solve real-world problems with clean code and thoughtful design.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Link href={site.socials[0].href} aria-label="GitHub" className="text-zinc-400 hover:text-white">
              <FaGithub className="h-4 w-4" />
            </Link>
            <Link href={site.socials[1].href} aria-label="LinkedIn" className="text-zinc-400 hover:text-white">
              <FaLinkedin className="h-4 w-4" />
            </Link>
            <Link href={site.socials[2].href} aria-label="X" className="text-zinc-400 hover:text-white">
              <XIcon className="h-4 w-4" />
            </Link>
            <Link href={site.socials[3].href} aria-label="Email" className="text-zinc-400 hover:text-white">
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Technologies</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerTech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Let&apos;s Connect</h3>
          <p className="mt-4 text-sm leading-6 text-zinc-400">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
          <Link href={`mailto:${site.email}`} className="mt-3 inline-block text-sm font-medium text-primary">
            {site.email}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Sanjay Angira. All rights reserved.</p>
          <p className="hidden sm:block">Thank you for visiting!</p>
          <p>Designed & Built with ❤️ using Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
