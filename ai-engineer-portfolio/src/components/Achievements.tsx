import { SectionHeader } from "./SectionHeader";

const certs = [
  {
    title: "Google Advanced Data Analytics",
    org: "Google · Coursera",
    body: "Hands-on program in statistics, EDA, and ML. Built Python-based analysis workflows and predictive modeling pipelines.",
    href: "https://www.coursera.org/professional-certificates/google-advanced-data-analytics",
  },
  {
    title: "Machine Learning & Data Science A-Z",
    org: "Udemy",
    body: "Practical work with NumPy, Pandas and Matplotlib; built supervised and unsupervised ML models end-to-end.",
    href: "https://www.udemy.com/",
  },
  {
    title: "DBMS (RDBMS) & Microsoft Fabric SQL",
    org: "Infosys Springboard",
    body: "Relational schema design, normalization, and advanced SQL query optimization for analytical workloads.",
    href: "https://infyspringboard.onwingspan.com/",
  },
];


export function Achievements() {
  return (
    <section id="achievements" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Achievements"
          title="Certifications & milestones."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {certs.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-border bg-card/40 p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-purple"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {c.title}
              </h3>
              <div className="mt-1 text-xs text-primary">{c.org}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition hover:text-foreground"
              >
                View Certificate
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
