import type { Metadata } from "next";
import Image from "next/image";
import { FolderKanban, Heart, Target } from "lucide-react";
import { CTA } from "@/components/CTA";
import { ProjectList } from "@/components/ProjectList";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0b0b14] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              My Work
            </p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
              Projects I&apos;ve Built
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400">
              Here are some of the projects I&apos;ve worked on. Each project taught
              me something new about product, code, and shipping.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FolderKanban className="h-4 w-4 text-primary" />
                5+ Projects
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                3+ Years of Experience
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                100% Passion
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-primary/30 blur-3xl" />
            <Image
              src="/images/portrait-laptop.png"
              alt="Sanjay working on projects"
              width={720}
              height={540}
              className="relative z-10 h-80 w-full rounded-[2rem] object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <ProjectList />
      <CTA
        title="Interested in working together?"
        subtitle="I'm always open to discussing new opportunities and exciting projects."
      />
    </>
  );
}
