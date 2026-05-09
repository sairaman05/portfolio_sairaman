import { useEffect, useState } from "react";

const roles = [
  "AI Enthusiast",
  "Data Science Practitioner",
  "Software Craftsman",
  "Perpetual Learner",
];

function useTypewriter(words: string[], speed = 80, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(roles);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-4 pt-24"
    >
      <div className="mx-auto max-w-4xl text-center">

        <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl animate-fade-up">
          <span className="text-foreground">Sai </span>
          <span className="text-gradient">Raman</span>
        </h1>

        <div
          className="mt-5 font-mono text-lg sm:text-xl text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-primary">&gt;</span>{" "}
          <span className="text-foreground">{typed}</span>
          <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 bg-primary animate-blink" />
        </div>

        <p
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Driven by an unwavering curiosity for{" "}
          <span className="text-foreground">artificial intelligence, data science and software craftsmanship</span>.
          I thrive on transforming abstract ideas into elegant, end-to-end systems —
          one thoughtful commit at a time.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group relative rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            View Projects
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
          <a
            href="/Sai_Raman_Resume.pdf"
            download
            className="rounded-xl border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:bg-card"
          >
            Download Resume
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-xl border border-border bg-transparent px-6 py-3 text-sm font-semibold text-muted-foreground transition hover:text-foreground hover:border-accent/60"
          >
            Contact Me
          </button>
        </div>

        <div
          className="mt-16 flex items-center justify-center gap-8 text-xs uppercase tracking-widest text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Stat label="CGPA" value="8.47" />
          <span className="h-8 w-px bg-border" />
          <Stat label="F1-Score" value="95.7%" />
          <span className="h-8 w-px bg-border" />
          <Stat label="Latency" value="<100ms" />
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </button>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-xl font-bold text-gradient">{value}</span>
      <span className="mt-1 text-[10px]">{label}</span>
    </div>
  );
}
