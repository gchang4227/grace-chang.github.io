export function Hero() {
  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-[30ch] lg:max-w-[40ch]">
          <h1 className="font-display mb-8 text-5xl leading-none text-balance md:text-7xl">
            Building resilient systems through{" "}
            <span className="text-accent italic">technical adaptability</span>.
          </h1>
        </div>
        <div className="max-w-[56ch] md:max-w-[48ch]">
          <p className="mb-10 text-lg text-pretty text-foreground/80 md:text-xl">
            Software Engineer at Dell Technologies, specialized in the full lifecycle of data
            infrastructure—from Kubernetes storage control planes to modern cloud interfaces.
          </p>
          <a
            href="#experience"
            className="inline-flex items-center rounded-full bg-primary py-2 pr-4 pl-2 text-sm font-medium text-primary-foreground ring-1 ring-primary transition-transform hover:-translate-y-0.5"
          >
            <span className="mr-2 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent">
              <svg
                className="size-4 text-accent-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </span>
            View technical case studies
          </a>
        </div>
      </div>
    </section>
  );
}
