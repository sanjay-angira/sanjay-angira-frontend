import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ExternalLink,
  Headset,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const highlights = [
  { title: "Quick Response", text: "I reply within 24 hours.", icon: Clock },
  { title: "Reliable & Professional", text: "Quality work guaranteed.", icon: ShieldCheck },
  { title: "Long-term Support", text: "I'm here even after delivery.", icon: Headset },
];

const contactDetails = [
  { title: "Email", value: site.email, extra: "", icon: Mail, href: `mailto:${site.email}` },
  { title: "Phone", value: site.phone, extra: site.phoneHours, icon: Phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { title: "Location", value: site.location, extra: "Available for remote work", icon: MapPin },
  { title: "Availability", value: site.availability, extra: "", icon: Sparkles },
];

const connectLinks = [
  { name: "GitHub", handle: site.socials[0].handle, href: site.socials[0].href, icon: FaGithub },
  { name: "LinkedIn", handle: site.socials[1].handle, href: site.socials[1].href, icon: FaLinkedin },
  { name: "X", handle: site.socials[2].handle, href: site.socials[2].href, icon: XIcon },
  { name: "Email", handle: site.email, href: `mailto:${site.email}`, icon: Mail },
];

export default function ContactPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contact Me
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Let&apos;s build something{" "}
              <span className="font-script text-5xl font-normal text-primary sm:text-6xl">
                amazing
              </span>{" "}
              together!
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-zinc-400">
              Have a project in mind, a question, or just want to say hello? I&apos;d
              love to hear from you and talk about what we can build next.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map(({ title, text, icon: Icon }) => (
                <div key={title} className="rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{title}</p>
                  <p className="mt-1 text-xs text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-primary/25 blur-3xl" />
            <Image
              src="/images/portrait-laptop.png"
              alt="Sanjay at his desk"
              width={720}
              height={540}
              className="relative z-10 h-80 w-full rounded-[2rem] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#12121a]">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Get in Touch</h2>
              <div className="mt-5 space-y-4">
                {contactDetails.map(({ title, value, extra, icon: Icon, href }) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs text-slate-500">{title}</p>
                      {href ? (
                        <Link href={href} className="text-sm font-semibold text-slate-900 dark:text-white">
                          {value}
                        </Link>
                      ) : (
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
                      )}
                      {extra && <p className="text-xs text-slate-400">{extra}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#12121a]">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Connect with me</h2>
              <div className="mt-4 space-y-3">
                {connectLinks.map(({ name, handle, href, icon: Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    className="flex items-center justify-between rounded-xl border border-slate-100 px-3 py-3 hover:border-primary/40 dark:border-white/10"
                  >
                    <span className="flex items-center gap-3 text-sm">
                      <Icon className="h-4 w-4 text-primary" />
                      <span>
                        <span className="block font-medium text-slate-800 dark:text-white">{name}</span>
                        <span className="text-xs text-slate-500">{handle}</span>
                      </span>
                    </span>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-primary/10 p-6 text-sm leading-7 text-slate-700 dark:bg-primary/15 dark:text-zinc-200">
              “Great things happen when we work together. Let&apos;s create something impactful!”
            </div>
          </div>

          <div>
            <ContactForm />
            <FAQ />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-[#0b0b14] px-6 py-8 text-white sm:flex-row sm:px-10">
          <div className="flex items-center gap-5">
            <Image src="/images/rocket.png" alt="" width={96} height={96} className="h-20 w-20 object-contain" />
            <div>
              <h2 className="text-xl font-bold">Ready to start your project?</h2>
              <p className="mt-1 text-sm text-zinc-400">
                I&apos;m excited to hear about your idea and help you bring it to life.
              </p>
            </div>
          </div>
          <Link
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white"
          >
            Let&apos;s Connect →
          </Link>
        </div>
      </section>
    </>
  );
}
