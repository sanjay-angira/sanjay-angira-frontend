import Image from "next/image";
import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { TechIcon } from "@/components/TechIcon";
import { homeTechStack } from "@/data/skills";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.22)_1px,transparent_0)] [background-size:22px_22px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
            Full-Stack Developer
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Building scalable products that solve{" "}
            <span className="text-primary">real-world problems.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-zinc-400">
            I&apos;m a full-stack developer passionate about building modern web and
            mobile applications with clean code, thoughtful UX, and products that
            actually help people.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/projects">View My Work</ButtonLink>
            <ButtonLink href="/contact" variant="outline" icon={<Mail className="h-4 w-4" />}>
              Contact Me
            </ButtonLink>
          </div>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Tech Stack
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-5">
              {homeTechStack.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-300">
                  <TechIcon name={tech.icon} color={tech.color} size={18} />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl dark:bg-primary/30" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl dark:border-white/10 dark:bg-zinc-900">
            <Image
              src="/images/portrait-hero.png"
              alt="Sanjay Angira"
              width={640}
              height={800}
              className="h-[460px] w-full object-cover object-top"
              priority
            />
          </div>

          <div className="absolute -left-4 top-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-zinc-900">
            <span className="text-lg font-bold text-primary">&lt;/&gt;</span>
          </div>

          <div className="absolute -right-2 top-24 w-52 rounded-2xl border border-white/60 bg-white/90 p-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-zinc-900/90">
            <p className="text-xs font-medium text-slate-700 dark:text-zinc-200">
              Building E-commerce Platform
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-zinc-700">
              <div className="h-full w-3/4 rounded-full bg-primary" />
            </div>
            <p className="mt-1 text-right text-[10px] text-slate-500">75%</p>
          </div>

          <div className="absolute -bottom-4 right-4 w-48 rounded-2xl border border-slate-800 bg-slate-900 p-3 font-mono text-[11px] text-emerald-300 shadow-xl">
            <p className="text-slate-400">const App = () =&gt; {"{"}</p>
            <p className="pl-3">return &lt;Dashboard /&gt;</p>
            <p className="text-slate-400">{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
