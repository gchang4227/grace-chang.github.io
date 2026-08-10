import leatherTexture from "@/assets/leather-texture.jpg";

export function Projects() {
  return (
    <section id="work" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              The Work
            </h2>
            <h3 className="font-display max-w-[26ch] text-3xl text-balance md:text-4xl">
              Grouped by what the work actually was.
            </h3>
          </div>
          <p className="max-w-[32ch] text-sm text-pretty text-foreground/70">
            Frontend, backend, infrastructure, and full-stack — the same engineer, four different
            problem domains.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Full-stack — feature card */}
          <div className="bento-card flex flex-col justify-between p-8 md:col-span-8">
            <div>
              <div className="mb-4 text-[10px] font-semibold tracking-tighter text-foreground/40 uppercase italic">
                Full-stack &amp; Leadership
              </div>
              <h4 className="font-display mb-3 text-2xl">DPC TCO Tool &amp; Patent Assignment</h4>
              <p className="max-w-[52ch] text-sm leading-relaxed text-pretty text-foreground/70">
                Shipped a containerized Total Cost of Ownership platform with two PdMs — multi-step
                wizard, real-time ROI engine, Okta SSO, RBAC — then prototyped a patent-assignment
                MVP as sole stakeholder while mentoring four interns.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="chip">React</span>
              <span className="chip">Python</span>
              <span className="chip">Docker</span>
              <span className="chip">SQLite</span>
              <span className="chip">Okta OIDC</span>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[24px] bg-accent/20 p-8 ring-1 ring-border md:col-span-4">
            <div>
              <div className="mb-4 text-[10px] font-semibold tracking-tighter text-foreground/40 uppercase italic">
                Infrastructure
              </div>
              <h4 className="font-display mb-3 text-2xl">AI Storage Control Plane</h4>
              <p className="text-sm leading-relaxed text-pretty text-foreground/80">
                Serviceability API for node and bundle state, label-driven node add/remove, and
                Kubernetes CRD isolation on Canonical K8s.
              </p>
            </div>
            <img
              src={leatherTexture}
              alt="Woven espresso leather texture representing layered infrastructure"
              loading="lazy"
              width={816}
              height={816}
              className="mt-8 aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-border"
            />
          </div>

          {/* Backend */}
          <div className="bento-card flex flex-col justify-between p-8 md:col-span-6">
            <div>
              <div className="mb-4 text-[10px] font-semibold tracking-tighter text-foreground/40 uppercase italic">
                Backend &amp; Open Source
              </div>
              <h4 className="font-display mb-3 text-2xl">Omnia Config Validation</h4>
              <p className="max-w-[46ch] text-sm leading-relaxed text-pretty text-foreground/70">
                Dual-level jsonschema and Ansible validation across 15 config files, catching IP
                overlaps before they became multi-hour bare-metal install failures.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="chip">Python</span>
              <span className="chip">Ansible</span>
              <span className="chip">Linux</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="bento-card flex flex-col justify-between p-8 md:col-span-6">
            <div>
              <div className="mb-4 text-[10px] font-semibold tracking-tighter text-foreground/40 uppercase italic">
                Frontend
              </div>
              <h4 className="font-display mb-3 text-2xl">PowerProtect Data Manager</h4>
              <p className="max-w-[46ch] text-sm leading-relaxed text-pretty text-foreground/70">
                UI features and end-to-end tests for a multicloud data protection platform. Won the
                internal UI hackathon with PPDM 3D — a unified instance carousel with an AI chatbot.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="chip">Angular</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Cypress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
