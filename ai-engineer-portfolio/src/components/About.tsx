import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";
import portrait from "@/assets/about-portrait.png";

export function About() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  const facts: { k: string; v: string }[] = [
    { k: "Based in", v: "Chennai, India" },
    { k: "Studying", v: "B.Tech CSE — AI" },
    { k: "CGPA", v: "8.47 / 10" },
    { k: "Focus", v: "AI · Data · Software" },
  ];

  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="About" title="A little bit about me." />

        <div
          ref={ref}
          className={`grid gap-12 transition-all duration-700 lg:grid-cols-[1.4fr_1fr] lg:items-center ${
            shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Copy */}
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a Computer Science & AI undergraduate at{" "}
              <span className="text-foreground">Amrita Vishwa Vidyapeetham, Chennai</span>,
              endlessly fascinated by the intersection of{" "}
              <span className="text-foreground">artificial intelligence, data science and software craftsmanship</span>.
              I turn restless curiosity into working prototypes — and learn the
              most by shipping things end-to-end.
            </p>
            <p>
              I gravitate toward problems that live between{" "}
              <span className="text-foreground">data and product</span> — where a
              well-tuned model, a clean pipeline or a thoughtfully designed
              interface can make something measurably better. I care deeply about
              clarity, rigorous evaluation, and writing code that future me (and
              everyone else) can actually maintain.
            </p>
            <p>
              Outside coursework, you'll find me building side projects, reading
              research papers, and exploring new tools across the AI and developer
              ecosystem — always chasing the next idea worth prototyping.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="rounded-xl border border-border bg-card/40 p-3 backdrop-blur"
                >
                  <dt className="text-[10px] uppercase tracking-widest text-muted-foreground/80">
                    {f.k}
                  </dt>
                  <dd className="mt-1 font-display text-sm font-semibold text-foreground">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="border-gradient relative overflow-hidden rounded-2xl bg-card/40 p-1 shadow-glow">
              <img
                src={portrait}
                alt="Stylized portrait of Sai Raman with a neural-network overlay"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
            {/* floating badges */}
            <div className="absolute -left-4 top-6 hidden rounded-xl border border-border bg-background/80 px-3 py-2 text-xs backdrop-blur sm:block">
              <span className="font-mono text-primary">{"{ }"}</span>{" "}
              <span className="text-foreground">curiosity = ∞</span>
            </div>
            <div className="absolute -right-4 bottom-8 hidden rounded-xl border border-border bg-background/80 px-3 py-2 text-xs backdrop-blur sm:block">
              <span className="font-mono text-accent">⚡</span>{" "}
              <span className="text-foreground">ship → learn → repeat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
