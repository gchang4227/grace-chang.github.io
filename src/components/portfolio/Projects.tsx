const projects = [
  {
    eyebrow: "Internal Tooling",
    title: "DPC Total Cost of Ownership Tool",
    body: "A full-stack TCO engine with a multi-step input wizard, real-time ROI calculation, data-provenance tooltips, and a presentation engine that generates client-facing sales decks.",
    stack: ["React", "Python", "Docker", "SQLite"],
  },
  {
    eyebrow: "MVP · Sole Stakeholder",
    title: "Patent Assignment Tool",
    body: "Elicited raw pain points and rapidly shipped functional front-end prototypes with mock data, architecting the end-to-end system while directing two interns on backend integrations for reviewer assignments and theme summaries.",
    stack: ["React", "Python", "Mock APIs"],
  },
  {
    eyebrow: "Open Source · Omnia",
    title: "Dual-Level Config Validation",
    body: "Python jsonschema plus Ansible checks that instantly catch value conflicts and overlapping IP ranges across 15 critical configuration files, eliminating multi-hour bare-metal install failures.",
    stack: ["Python", "Ansible", "Linux"],
  },
  {
    eyebrow: "Hackathon Winner",
    title: "PPDM 3D",
    body: "A unified UI carousel letting developers maintain and search across multiple PowerProtect Data Manager instances, with an AI chatbot layered on top. Built with three teammates.",
    stack: ["Angular", "TypeScript", "AI Chat"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Selected Work
          </h2>
          <h3 className="font-display max-w-[28ch] text-3xl text-balance md:text-4xl">
            Things I designed, shipped, and maintained.
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bento-card flex flex-col justify-between p-8 transition-transform hover:-translate-y-1"
            >
              <div>
                <div className="mb-4 text-[10px] font-semibold tracking-tighter text-foreground/40 uppercase italic">
                  {project.eyebrow}
                </div>
                <h4 className="font-display mb-3 text-2xl">{project.title}</h4>
                <p className="max-w-[46ch] text-sm leading-relaxed text-pretty text-foreground/70">
                  {project.body}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
