import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <CTA />
    </>
  );
}
