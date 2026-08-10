const timeline = [
  {
    period: "Nov 2025 — Aug 2026",
    role: "Rotation IV · Full-stack & Leadership",
    product: "DPC TCO Tool & Patent Assignment",
    org: "Dell Technologies",
  },
  {
    period: "Feb 2025 — Nov 2025",
    role: "Rotation III · Infrastructure",
    product: "AI Storage Control Plane",
    org: "Dell Technologies",
  },
  {
    period: "Feb 2024 — Jan 2025",
    role: "Rotation II · Open Source",
    product: "Omnia Backend",
    org: "Dell Technologies",
  },
  {
    period: "Feb 2023 — Jan 2024",
    role: "Rotation I · Frontend",
    product: "PowerProtect Data Manager",
    org: "Dell Technologies",
  },
  {
    period: "Summer 2022",
    role: "Software Engineer Intern",
    product: "Netezza Performance Server UDX",
    org: "IBM",
  },
  {
    period: "Summer 2021",
    role: "Software Engineer Intern",
    product: "Claims-filing data pipeline",
    org: "Liberty Mutual",
  },
];

export function Experience() {
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
          {timeline.map((item) => (
            <li key={item.period} className="relative pb-8 pl-8 last:pb-0">
              <span className="absolute top-2 -left-[4.5px] size-2 rounded-full bg-accent" />
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                <div>
                  <div className="text-[10px] font-semibold tracking-tighter text-foreground/40 uppercase italic">
                    {item.role}
                  </div>
                  <div className="font-display text-xl md:text-2xl">{item.product}</div>
                  <div className="text-xs text-foreground/60">{item.org}</div>
                </div>
                <div className="text-xs whitespace-nowrap text-muted-foreground md:text-right">
                  {item.period}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
