"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Check,
  ExternalLink,
  LayoutGrid,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectFilters, projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

const icons = {
  "Web Applications": ShoppingCart,
  "Mobile Apps": Smartphone,
  SaaS: BarChart3,
  Other: LayoutGrid,
};

export function ProjectList() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All Projects");
  const [sort, setSort] = useState<"latest" | "oldest">("latest");

  const visible = useMemo(() => {
    const filtered =
      filter === "All Projects"
        ? projects
        : projects.filter((project) => project.category === filter);
    return [...filtered].sort((a, b) =>
      sort === "latest" ? b.dateValue - a.dateValue : a.dateValue - b.dateValue,
    );
  }, [filter, sort]);

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  filter === item
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary dark:border-white/10 dark:bg-[#12121a] dark:text-zinc-300",
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="text-sm text-slate-500 dark:text-zinc-400">
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as "latest" | "oldest")}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none dark:border-white/10 dark:bg-[#12121a] dark:text-zinc-200"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </label>
        </div>

        <div className="mt-8 space-y-6">
          {visible.map((project) => {
            const Icon = icons[project.category as ProjectCategory];
            return (
              <article
                key={project.slug}
                className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#12121a] lg:grid-cols-[1.05fr_1.2fr]"
              >
                <div className="relative min-h-56 bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {project.title}
                          </h3>
                          <p className="text-xs font-medium text-primary">
                            {project.categoryLabel}
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 dark:text-zinc-400">
                        {project.longDescription}
                      </p>
                    </div>
                    <div className="hidden shrink-0 flex-col gap-2 sm:flex">
                      <Link
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-primary hover:text-primary dark:border-white/10 dark:text-zinc-200"
                      >
                        Live Demo
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href={project.repoUrl}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-primary hover:text-primary dark:border-white/10 dark:text-zinc-200"
                      >
                        View Code
                        <FaGithub className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-zinc-300"
                      >
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-2 sm:hidden">
                      <Link href={project.liveUrl} className="text-xs font-semibold text-primary">
                        Live Demo
                      </Link>
                      <Link href={project.repoUrl} className="text-xs font-semibold text-primary">
                        View Code
                      </Link>
                    </div>
                    <p className="ml-auto text-xs text-slate-400">{project.date}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
