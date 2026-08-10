import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

const title = "Software Engineer Portfolio | Full-Stack & Infrastructure";
const description =
  "Software engineer with 3.5 years across four Dell rotations — Angular UI, Ansible tooling, Kubernetes control planes, and full-stack React. Plus IBM and Liberty Mutual internships.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <About />
      </main>
      <Contact />
    </div>
  );
}
