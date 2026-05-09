import { SectionHeader } from "./SectionHeader";

type Item = {
  when: string;
  title: string;
  org: string;
  bullets: string[];
  tag: string;
  link?: { label: string; href: string };
};

const items: Item[] = [
  {
    when: "2025",
    title: "WBC Classification — Hybrid ML Research",
    org: "Classification of White Blood Cells using Feature Extraction & Cell Segmentation",
    tag: "Research · Medical AI",
    bullets: [
      "Engineered a hybrid pipeline fusing VGG16 deep features (PCA-reduced to 128-D) with handcrafted morphology, color and GLCM texture descriptors",
      "Designed a robust segmentation stage in LAB/HSV space — CLAHE contrast enhancement, Otsu thresholding and morphological refinement to isolate the WBC nucleus",
      "Tackled medical-data class imbalance via SMOTE and trained a LightGBM gradient-boosting classifier delivering precise, interpretable WBC categorization",
      "Shipped a reproducible workflow: data loading, parallel feature extraction, classification report and persisted artefacts (VGG16, LightGBM, PCA, label encoder)",
    ],
    link: { label: "View Publication", href: "https://ieeexplore.ieee.org/" },
  },
  {
    when: "2024",
    title: "Technical Lead — Hack-A-Ruckus",
    org: "Amrita Vishwa Vidyapeetham, Chennai",
    tag: "Leadership · Web",
    bullets: [
      "Led technical coordination for a college hackathon hosting 100+ participants",
      "Designed and shipped a responsive event website deployed on Vercel",
      "Owned registrations, schedule and on-day operational tooling end-to-end",
    ],
    link: { label: "Visit Event Site", href: "https://hack-a-ruckus.vercel.app/" },
  },
  {
    when: "2024",
    title: "Published Researcher — IC-SIT 2024",
    org: "International Conference on Intelligent Computing & Sustainable Innovation in Technology",
    tag: "Research · Publication",
    bullets: [
      "Co-authored: 'Enhancement of various images using coefficients of Analytic Functions with Python'",
      "Explored mathematical image enhancement techniques rooted in complex analysis",
      "Implemented and benchmarked methods on diverse image categories",
    ],
    link: { label: "View Publication", href: "https://ieeexplore.ieee.org/" },
  },
  {
    when: "2023 — 2027",
    title: "B.Tech, Computer Science with Artificial Intelligence",
    org: "Amrita Vishwa Vidyapeetham, Chennai · CGPA 8.47/10",
    tag: "Education",
    bullets: [
      "Coursework in Machine Learning, DSA, OOP, DBMS and Statistics",
      "Active project work spanning AI, data science and full-stack development",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Experience"
          title="Research, work & academic milestones."
          description="A timeline of where I've contributed and what I've shipped."
        />

        <ol className="relative space-y-10 border-l border-border pl-8">
          {items.map((it) => (
            <li key={it.title} className="relative">
              <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center">
                <span className="absolute h-4 w-4 rounded-full bg-primary/30" />
                <span className="relative h-2 w-2 rounded-full bg-primary shadow-glow" />
              </span>

              <div className="border-gradient relative rounded-xl bg-card/40 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {it.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{it.when}</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{it.org}</div>
                <span className="mt-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-primary">
                  {it.tag}
                </span>

                <ul className="mt-4 space-y-2">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>

                {it.link && (
                  <a
                    href={it.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-foreground"
                  >
                    {it.link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
