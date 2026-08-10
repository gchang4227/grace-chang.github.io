import portrait from "@/assets/portrait.jpg";

const toolkit = [
  "Python & Go",
  "TypeScript & React",
  "Kubernetes & Docker",
  "Ansible & SQL",
];

export function About() {
  return (
    <section id="about" className="border-y border-border bg-card/30 px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 md:flex-row">
        <div className="md:w-1/3">
          <img
            src={portrait}
            alt="Portrait of the engineer working at a desk in warm natural light"
            loading="lazy"
            width={800}
            height={1008}
            className="aspect-4/5 w-full rounded-xl object-cover ring-1 ring-border"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="font-display mb-8 text-4xl">Adaptable by design.</h2>
          <div className="max-w-[48ch] space-y-6">
            <p className="leading-relaxed text-pretty text-foreground/80">
              I thrive in technical ambiguity. Three and a half years in the Dell Engineering
              Rotation Program taught me that the strongest engineers aren&apos;t masters of a single
              language—they&apos;re architects who can absorb a new domain quickly and ship. I went
              from Angular UI components to Ansible validation tooling to Golang control planes to
              full-stack React and AI-assisted delivery.
            </p>
            <p className="leading-relaxed text-pretty text-foreground/80">
              Beyond the terminal, I build processes and people. I mentored four summer interns
              across four projects, ran requirement-gathering sessions directly with product owners,
              and turned raw stakeholder pain points into working prototypes.
            </p>
            <div className="pt-4">
              <h4 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Current Toolkit
              </h4>
              <div className="flex flex-wrap gap-4">
                {toolkit.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-accent" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
