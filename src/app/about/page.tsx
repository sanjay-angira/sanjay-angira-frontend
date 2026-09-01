import type { Metadata } from "next";
import Image from "next/image";
import {
  Bot,
  Briefcase,
  Check,
  Clock,
  Code2,
  FolderKanban,
  GitCommitHorizontal,
  GraduationCap,
  Heart,
  MapPin,
  Rocket,
  Target,
  Users,
} from "lucide-react";
import { CTA } from "@/components/CTA";
import { SocialLinks } from "@/components/SocialLinks";
import { TechIcon } from "@/components/TechIcon";
import {
  drivers,
  education,
  experience,
  stats,
} from "@/data/experience";
import { site } from "@/data/site";
import { interests, skillGroups, tools } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
};

const interestIcons = {
  rocket: Rocket,
  bot: Bot,
  code: Code2,
  users: Users,
};

const infoCards = [
  { label: "Location", value: site.location, icon: MapPin },
  { label: "Experience", value: site.experience, icon: Clock },
  { label: "Projects", value: site.projectsCount, icon: FolderKanban },
  { label: "Focus", value: "Product Building", icon: Briefcase },
];

const statIcons = {
  folder: FolderKanban,
  clock: Clock,
  heart: Heart,
  git: GitCommitHorizontal,
};

export default function AboutPage() {
  return (
    <>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Target className="h-4 w-4" />
              About Me
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Hi, I&apos;m <span className="text-primary">Sanjay Angira</span>
            </h1>
            <p className="mt-3 text-lg font-medium text-slate-700 dark:text-zinc-300">
              Full-Stack Developer & Product Builder
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-zinc-400">
              I build scalable web and mobile applications with modern technologies.
              My focus is clean architecture, thoughtful UX, and shipping products
              that solve real problems.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {infoCards.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#12121a]"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <p className="mt-2 text-xs text-slate-500">{label}</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
                </div>
              ))}
            </div>
            <SocialLinks className="mt-6" />
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-6 rounded-full bg-primary/20 blur-3xl" />
            <Image
              src="/images/portrait-hero.png"
              alt="Sanjay Angira"
              width={640}
              height={800}
              className="relative z-10 h-[420px] w-full rounded-[2rem] object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 dark:bg-white/5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">My Journey</h2>
            <div className="relative mt-8 border-l-2 border-primary/20 pl-6">
              {experience.map((item) => (
                <div key={item.period} className="relative mb-8 last:mb-0">
                  <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-primary dark:border-[#0b0b10]" />
                  <p className="text-xs font-semibold text-primary">{item.period}</p>
                  <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-zinc-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/portrait-laptop.png"
            alt="Working at a laptop"
            width={480}
            height={480}
            className="mx-auto h-72 w-72 rounded-3xl object-cover"
          />
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#12121a]">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">What Drives Me</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-zinc-400">
              I care about craft, clarity, and building things people actually want to use.
            </p>
            <ul className="mt-5 space-y-3">
              {drivers.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-300">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Skills & Technologies
            </h2>
            <div className="mt-8 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-semibold text-slate-500">{group.title}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-[#12121a]"
                      >
                        <TechIcon name={item.icon} color={item.color} size={16} />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Interests & Focus
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {interests.map((item) => {
                const Icon = interestIcons[item.icon as keyof typeof interestIcons];
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#12121a]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-3xl bg-gradient-to-r from-[#312e81] via-primary to-indigo-500 px-6 py-10 text-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = statIcons[item.icon as keyof typeof statIcons];
            return (
              <div key={item.label} className="text-center">
                <Icon className="mx-auto h-6 w-6 text-white/80" />
                <p className="mt-3 text-3xl font-extrabold">{item.value}</p>
                <p className="mt-1 text-sm text-indigo-100">{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#12121a]">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Education</h2>
            <div className="mt-5 flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{education.degree}</h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400">{education.school}</p>
                <p className="mt-1 text-xs text-slate-400">{education.period}</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#12121a]">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Tools I Use</h2>
            <div className="mt-5 flex flex-wrap gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2 text-sm">
                  <TechIcon name={tool.icon} color={tool.color} size={20} />
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
