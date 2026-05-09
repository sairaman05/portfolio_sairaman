import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

type Project = {
  title: string;
  domain: "AI" | "Computer Vision" | "Streaming";
  tagline: string;
  problem: string;
  approach: string;
  impact: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Real-Time Traffic Optimization",
    domain: "Computer Vision",
    tagline: "Adaptive signal control driven by per-lane vehicle density.",
    problem:
      "Static traffic lights can't react to congestion, wasting hours of commuter time and fuel during peak load.",
    approach:
      "Built a vision pipeline using OpenCV with lane-specific ROI sensors that count vehicles in real time. A scheduler estimates per-lane density and dynamically reweights signal timings to prioritize high-density lanes.",
    impact: [
      "Reduced average wait time in simulation",
      "Per-lane congestion scoring at frame rate",
      "Modular: drop-in for any RTSP camera feed",
    ],
    stack: ["Python", "OpenCV", "NumPy", "Computer Vision", "Image Processing"],
  },
  {
    title: "Datacure — AutoML Platform",
    domain: "AI",
    tagline: "End-to-end dataset curation and AutoML in a single Streamlit app.",
    problem:
      "ML experimentation gets bottlenecked by repetitive cleaning, feature engineering and model-selection grunt work.",
    approach:
      "Designed an end-to-end analytics + AutoML platform with automated cleaning, feature engineering, and model search. Real-time evaluation dashboards surface metrics so users iterate on the data — not the boilerplate.",
    impact: [
      "Cuts prototype-to-baseline-model time dramatically",
      "Built-in EDA, leakage checks, and model leaderboards",
      "Zero-code path for non-ML stakeholders",
    ],
    stack: ["Python", "Streamlit", "scikit-learn", "Pandas", "NumPy", "AutoML", "EDA"],
  },
  {
    title: "IoT Anomaly Detection (Kafka + HMM)",
    domain: "Streaming",
    tagline: "Sub-100ms anomaly detection on industrial sensor streams.",
    problem:
      "Industrial sensor streams need anomalies caught in milliseconds — not in the next batch job.",
    approach:
      "Built a streaming pipeline on Apache Kafka feeding a Hidden Markov Model with Viterbi inference. The model labels state sequences over rolling windows of multivariate sensor data and emits anomaly events downstream.",
    impact: [
      "95.7% F1-score on benchmark sensor data",
      "Sub-100ms end-to-end inference latency",
      "Stateful detection without heavy DL footprint",
    ],
    stack: [
      "Python",
      "Apache Kafka",
      "Hidden Markov Models",
      "Viterbi Algorithm",
      "Time-Series Analysis",
      "NumPy",
    ],
  },
  {
    title: "EduRAG — Education-Focused RAG System",
    domain: "AI",
    tagline:
      "Modular research-grade RAG with hallucination detection, MMR diversification and citation grounding.",
    problem:
      "Vanilla RAG systems often hallucinate, return redundant passages, and give answers without traceable sources — a real problem in educational Q&A where factual correctness matters.",
    approach:
      "Designed a 5-stage modular pipeline (Dense Retrieval → MMR → LLM Generation → Hallucination Detection → Citation) where each stage can be independently toggled for ablation studies. Hallucination detection uses an NLI cross-encoder to verify each extracted claim against retrieved evidence; unsupported sentences are filtered out. The pipeline auto-detects teammate modules via dynamic imports, and a Streamlit UI supports single-query, side-by-side comparison and full ablation runs.",
    impact: [
      "Component-wise ablation: every module can be toggled ON/OFF for clean comparisons",
      "NLI-based claim verification with configurable support threshold",
      "End-to-end evaluation: F1, EM, ROUGE-L, Precision@k, Recall@k, MRR, nDCG",
      "Streamlit dashboard with 4 modes and CSV/JSON export for analysis",
    ],
    stack: [
      "Python",
      "RAG",
      "Sentence-Transformers",
      "NLI Cross-Encoder",
      "LLMs",
      "Ollama",
      "Streamlit",
      "Hugging Face",
    ],
  },
];

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  const visible = projects;

  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projects"
          title="Welcome to my project space."
          description="A handful of things I've built while exploring AI, data and software. Click any card to dig deeper into the problem, approach and impact."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <ProjectCard key={p.title} project={p} onOpen={() => setOpen(p)} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card/30 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            These are just a few highlights — head over to my GitHub to explore
            more experiments, smaller utilities and works in progress.
          </p>
          <a
            href="https://github.com/sairaman05"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary/70 hover:bg-primary/20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
            View more on GitHub
            <span>→</span>
          </a>
        </div>
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />

      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
          {project.domain}
        </span>
        <span className="text-xs text-muted-foreground transition group-hover:text-foreground">
          View Details →
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
    >
      <div
        className="border-gradient relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-card p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
          {project.domain}
        </div>
        <h3 className="mt-2 font-display text-2xl font-bold">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>

        <Block label="Problem" body={project.problem} />
        <Block label="Approach" body={project.approach} />

        <div className="mt-6">
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary">Impact</div>
          <ul className="mt-2 space-y-1.5">
            {project.impact.map((i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary">Stack</div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border bg-background/50 px-2 py-1 text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="mt-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{label}</div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
