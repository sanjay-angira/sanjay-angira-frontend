import Image from "next/image";
import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { TechIcon } from "@/components/TechIcon";
import { aboutHighlights } from "@/data/experience";
import { skillGrid } from "@/data/skills";

export function Skills() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            Technologies I work with
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {skillGrid.map((skill) => (
              <div
                key={skill.name}
                className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-sm dark:border-white/10 dark:bg-[#12121a]"
              >
                <TechIcon name={skill.icon} color={skill.color} size={26} />
                <p className="mt-2 text-[11px] font-medium text-slate-600 dark:text-zinc-300">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About Me
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            Passionate about building and learning
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-zinc-400">
            I enjoy taking ideas from a sketch to a shipped product. That means
            frontend, backend, databases, and the details that make software
            feel reliable.
          </p>
          <ul className="mt-6 space-y-3">
            {aboutHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <ButtonLink href="/about" className="mt-7">
            More about me
          </ButtonLink>
          <div className="relative mt-8 overflow-hidden rounded-3xl bg-slate-50 dark:bg-white/5">
            <Image
              src="/images/cartoon-dev.png"
              alt="Developer illustration"
              width={720}
              height={420}
              className="h-56 w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
