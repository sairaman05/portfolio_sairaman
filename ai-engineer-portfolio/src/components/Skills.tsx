import { SectionHeader } from "./SectionHeader";

type SkillGroup = {
  title: string;
  icon: React.ReactNode;
  accent: "primary" | "accent";
  items: string[];
};

const groups: SkillGroup[] = [
  {
    title: "Programming Languages",
    accent: "primary",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ["Python", "Java"],
  },
  {
    title: "AI / ML",
    accent: "accent",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    ),
    items: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Natural Language Processing",
      "Image Processing (OpenCV)",
    ],
  },
  {
    title: "Data Science",
    accent: "primary",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 4 4 5-6" />
      </svg>
    ),
    items: [
      "Data Analysis",
      "Hypothesis Testing",
      "Statistics",
      "Regression Modelling",
      "Time-Series Analysis",
      "Exploratory Data Analysis",
    ],
  },
  {
    title: "Software Development",
    accent: "accent",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Backend Development (FastAPI)",
      "API Design & Integration",
      "Database Management",
      "Debugging",
      "Competitive Programming",
    ],
  },
  {
    title: "Frameworks & Libraries",
    accent: "primary",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    items: [
      "FastAPI",
      "Streamlit",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "PyTorch",
      "Hugging Face",
      "OpenCV",
    ],
  },
  {
    title: "Databases & Storage",
    accent: "accent",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
    items: ["MySQL", "MongoDB", "Supabase", "Firebase", "Hadoop", "Spark", "Kafka"],
  },
  {
    title: "Tools & Platforms",
    accent: "primary",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    items: ["Git", "GitHub", "Docker", "Jenkins", "Tableau", "Linux", "AWS"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills"
          title="My technical arsenal."
          description="A curated stack of languages, frameworks and platforms I wield across research and production-grade work."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="border-gradient group relative overflow-hidden rounded-2xl bg-card/70 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div
                className={`absolute -right-16 -top-16 h-32 w-32 rounded-full blur-2xl transition-opacity ${
                  g.accent === "primary" ? "bg-primary/15" : "bg-accent/15"
                } opacity-60 group-hover:opacity-100`}
              />

              <div className="relative mb-5 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                    g.accent === "primary"
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-accent/40 bg-accent/10 text-accent"
                  }`}
                >
                  {g.icon}
                </span>
                <div className="font-display text-base font-semibold text-foreground">
                  {g.title}
                </div>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs text-foreground/90 transition hover:border-primary/50 hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
