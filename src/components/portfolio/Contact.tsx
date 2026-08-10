const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Resume", href: "#" },
];

export function Contact() {
  return (
    <footer id="contact" className="bg-background px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-12 border-t border-border pt-20 md:flex-row">
        <div>
          <h2 className="font-display mb-6 text-5xl">
            Ready for the
            <br />
            next challenge.
          </h2>
          <p className="max-w-[40ch] text-sm text-muted-foreground">
            Currently seeking mid-to-senior software engineering roles in platform engineering,
            infrastructure, or full-stack product teams.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 md:items-end">
          <a
            href="mailto:hello@example.com"
            className="font-display text-3xl underline decoration-1 decoration-foreground/10 underline-offset-8 transition-colors hover:text-accent md:text-4xl"
          >
            hello@example.com
          </a>
          <div className="flex gap-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-32 max-w-6xl">
        <div className="flex items-center justify-between border-t border-border py-6 text-[10px] font-medium tracking-widest text-foreground/30 uppercase">
          <span>Built with craftsmanship &amp; intent</span>
          <span>Austin, Texas</span>
        </div>
      </div>
    </footer>
  );
}
