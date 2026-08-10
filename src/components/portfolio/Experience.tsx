import { useState } from "react";

const timeline = [
  {
    period: "Nov 2025 — Aug 2026",
    role: "Rotation IV · Full-stack & Leadership",
    product: "DPC TCO Tool & Patent Assignment",
    org: "Dell Technologies",
    summary:
      "Containerized Total Cost of Ownership platform with two PdMs — multi-step wizard, real-time ROI engine, Okta SSO, RBAC — then prototyped a patent-assignment MVP as sole stakeholder while mentoring four interns.",
    stack: ["React", "Python", "Docker", "SQLite", "Okta OIDC"],
  },
  {
    period: "Feb 2025 — Nov 2025",
    role: "Rotation III · Infrastructure",
    product: "AI Storage Control Plane",
    org: "Dell Technologies",
    summary:
      "Serviceability API for node and bundle state, label-driven node add/remove, and Kubernetes CRD isolation on Canonical K8s.",
    stack: ["Go", "Kubernetes", "Canonical K8s", "REST"],
  },
  {
    period: "Feb 2024 — Jan 2025",
    role: "Rotation II · Open Source",
    product: "Omnia Backend",
    org: "Dell Technologies",
    summary:
      "Dual-level jsonschema and Ansible validation across 15 config files, catching IP overlaps before they became multi-hour bare-metal install failures.",
    stack: ["Python", "Ansible", "Linux"],
  },
  {
    period: "Feb 2023 — Jan 2024",
    role: "Rotation I · Frontend",
    product: "PowerProtect Data Manager",
    org: "Dell Technologies",
    summary:
      "UI features and end-to-end tests for a multicloud data protection platform. Won the internal UI hackathon with PPDM 3D — a unified instance carousel with an AI chatbot.",
    stack: ["Angular", "TypeScript", "Cypress"],
  },
  {
    period: "Summer 2022",
    role: "Software Engineer Intern",
    product: "Netezza Performance Server UDX",
    org: "IBM",
    summary:
      "Built user-defined extensions on the Netezza Performance Server, a massively parallel analytics database.",
    stack: ["Java", "SQL", "Netezza"],
  },
  {
    period: "Summer 2021",
    role: "Software Engineer Intern",
    product: "Claims-filing data pipeline",
    org: "Liberty Mutual",
    summary:
      "Data pipeline supporting automated insurance claims filing and ingestion.",
    stack: ["Python", "ETL"],
  },
];

export function Experience() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Career Trajectory
          </h2>
          <h3 className="font-display max-w-[30ch] text-3xl text-balance md:text-4xl">
            Six teams, six stacks, one continuous line.
          </h3>
        </div>

        <ol className="border-l border-border">
          {timeline.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.period} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute top-2 -left-[4.5px] size-2 rounded-full bg-accent" />
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full flex-col gap-1 text-left md:flex-row md:items-baseline md:justify-between md:gap-6"
                >
                  <div>
                    <div className="font-display text-xl md:text-2xl transition-colors group-hover:text-accent">
                      {item.product}
                    </div>
                    <div className="text-xs text-foreground/60">{item.org}</div>
                    <span className="mt-1 inline-block text-[11px] font-medium tracking-wide text-muted-foreground/80 transition-colors group-hover:text-accent">
                      {isOpen ? "Hide details −" : "Learn more +"}
                    </span>
                  </div>
                  <div className="text-xs whitespace-nowrap text-muted-foreground md:text-right">
                    {item.period}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "mt-3 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-xl bg-accent/10 p-4 ring-1 ring-border">
                      <div className="text-[10px] font-semibold tracking-tighter text-foreground/40 uppercase italic">
                        {item.role}
                      </div>
                      <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-pretty text-foreground/75">
                        {item.summary}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.stack.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
