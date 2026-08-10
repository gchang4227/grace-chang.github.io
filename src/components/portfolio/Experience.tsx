import leatherTexture from "@/assets/leather-texture.jpg";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Career Trajectory
            </h2>
            <h3 className="font-display text-3xl text-balance md:text-4xl">
              The Dell Engineering Rotation Program
            </h3>
          </div>
          <p className="max-w-[35ch] text-sm text-pretty text-foreground/70">
            Four distinct teams across three and a half years, each demanding a complete shift in
            technology stack and problem domain.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Rotation I */}
          <div className="bento-card flex flex-col justify-between p-8 md:col-span-4">
            <div>
              <div className="mb-4 text-[10px] font-semibold tracking-tighter text-foreground/40 uppercase italic">
                Rotation I: Frontend · Feb 2023 — Jan 2024
              </div>
              <h4 className="mb-2 text-lg font-medium">PowerProtect Data Manager</h4>
              <p className="max-w-[40ch] text-sm leading-relaxed text-foreground/70">
                Built UI features and end-to-end tests for a multicloud data protection platform:
                popup modals, async form validation, RBAC datagrid selection, custom tooltips. Won
                the UI hackathon with PPDM 3D, a unified carousel with an AI chatbot.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="chip">Angular</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Cypress</span>
            </div>
          </div>

          {/* Rotation II */}
          <div className="bento-card flex flex-col justify-between p-8 md:col-span-4">
            <div>
              <div className="mb-4 text-[10px] font-semibold tracking-tighter text-foreground/40 uppercase italic">
                Rotation II: Open Source · Feb 2024 — Jan 2025
              </div>
              <h4 className="mb-2 text-lg font-medium">Omnia Backend</h4>
              <p className="max-w-[40ch] text-sm leading-relaxed text-foreground/70">
                Developed a dual-level validation tool with Python jsonschema and Ansible to catch
                value conflicts and overlapping IP ranges across 15 config files—eliminating
                multi-hour bare-metal install failures.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="chip">Python</span>
              <span className="chip">Ansible</span>
              <span className="chip">Linux</span>
            </div>
          </div>

          {/* Rotation III — tall highlight */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[24px] bg-accent/20 p-8 ring-1 ring-border md:col-span-4 md:row-span-2">
            <div>
              <div className="mb-4 text-[10px] font-semibold tracking-tighter text-foreground/40 uppercase italic">
                Rotation III: Infrastructure · Feb 2025 — Nov 2025
              </div>
              <h4 className="mb-4 text-xl font-medium">AI Storage Control Plane</h4>
              <p className="text-sm leading-relaxed text-pretty text-foreground/80">
                Implemented a Serviceability API surfacing node installation and bundle information,
                validated multi-namespace Lightning coexistence and CRD isolation, and built
                label-driven node add/remove with post-removal cleanup.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start text-xs text-foreground/70">
                  <span className="mt-1.5 mr-2 size-1 shrink-0 rounded-full bg-accent" />
                  Deployed Lightning on Ubuntu with Juju Canonical K8s
                </li>
                <li className="flex items-start text-xs text-foreground/70">
                  <span className="mt-1.5 mr-2 size-1 shrink-0 rounded-full bg-accent" />
                  Built a Python service API for missing startup dependencies
                </li>
                <li className="flex items-start text-xs text-foreground/70">
                  <span className="mt-1.5 mr-2 size-1 shrink-0 rounded-full bg-accent" />
                  Golang control-plane work and extensive integration debugging
                </li>
              </ul>
            </div>
            <img
              src={leatherTexture}
              alt="Woven espresso leather texture representing layered infrastructure"
              loading="lazy"
              width={816}
              height={816}
              className="mt-8 aspect-square w-full rounded-xl object-cover ring-1 ring-border"
            />
          </div>

          {/* Rotation IV */}
          <div className="bento-card p-8 md:col-span-8">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="md:w-1/2">
                <div className="mb-4 text-[10px] font-semibold tracking-tighter text-foreground/40 uppercase italic">
                  Rotation IV: Full-stack &amp; Leadership · Nov 2025 — Aug 2026
                </div>
                <h4 className="mb-4 text-xl font-medium">DPC TCO Tool &amp; Patent Assignment</h4>
                <p className="mb-6 text-sm leading-relaxed text-foreground/70">
                  Built a full-stack Total Cost of Ownership tool with two PdMs: containerized Docker
                  apps, SQLite, Excel quote-parsing pipelines, Okta OIDC SSO, granular RBAC, and TLS
                  1.2/1.3. Engineered a multi-step wizard with a real-time ROI engine, data-provenance
                  tooltips, and a presentation engine generating client-facing sales decks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="chip">React</span>
                  <span className="chip">Python</span>
                  <span className="chip">Docker</span>
                  <span className="chip">SQLite</span>
                  <span className="chip">Okta OIDC</span>
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-xl border border-border bg-background/40 p-4 md:w-1/2">
                <div className="mb-2 text-xs font-medium opacity-50">Key Impact</div>
                <div className="font-display mb-1 text-2xl italic">
                  Mentored four summer interns
                </div>
                <p className="text-[11px] leading-relaxed tracking-widest text-foreground/60 uppercase">
                  Led requirement-gathering with product owners, ran daily standups and 1:1s across
                  four AI/tooling projects
                </p>
                <div className="mt-4 border-t border-border pt-4">
                  <div className="font-display text-xl italic">Devin &amp; Claude AI</div>
                  <p className="text-[11px] tracking-widest text-foreground/60 uppercase">
                    Used as development force multipliers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internship strip */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="bento-card flex items-center justify-between p-6">
            <div>
              <h5 className="text-sm font-semibold text-foreground/40">IBM Internship</h5>
              <p className="text-sm font-medium">C++/Python UDX for Netezza Performance Server</p>
            </div>
            <div className="text-[10px] font-medium whitespace-nowrap text-muted-foreground">
              Summer 2022
            </div>
          </div>
          <div className="bento-card flex items-center justify-between p-6">
            <div>
              <h5 className="text-sm font-semibold text-foreground/40">
                Liberty Mutual Internship
              </h5>
              <p className="text-sm font-medium">AWS Lambda claims-filing data pipeline</p>
            </div>
            <div className="text-[10px] font-medium whitespace-nowrap text-muted-foreground">
              Summer 2021
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
