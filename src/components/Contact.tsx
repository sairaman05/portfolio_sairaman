import { SectionHeader } from "./SectionHeader";

const EMAIL = "dsairaman2005@gmail.com";
const PHONE = "+91 97899 10356";
const LOCATION = "Chennai, India";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact Info"
          title="Get in touch."
          description="Open to research collaborations, internships, and engineering roles where ML actually ships."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <ContactRow
            label="Email"
            value={EMAIL}
            href={`mailto:${EMAIL}`}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            }
          />
          <ContactRow
            label="Phone"
            value={PHONE}
            href="tel:+919789910356"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
            }
          />
          <ContactRow
            label="LinkedIn"
            value="linkedin.com/in/sai-raman-d"
            href="https://www.linkedin.com/in/sai-raman-d-0b1917342"
            external
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            }
          />
          <ContactRow
            label="GitHub"
            value="github.com/sairaman05"
            href="https://github.com/sairaman05"
            external
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
              </svg>
            }
          />
          <ContactRow
            label="Location"
            value={LOCATION}
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 1 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            }
          />
        </div>

        <footer className="mt-20 border-t border-border pt-8 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sai Raman · Built with React, TanStack Start &amp; a lot of caffeine.
          </p>
        </footer>
      </div>
    </section>
  );
}

function ContactRow({
  label, value, href, external, icon,
}: { label: string; value: string; href?: string; external?: boolean; icon: React.ReactNode }) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{label}</div>
        <div className="mt-0.5 truncate text-sm text-foreground">{value}</div>
      </div>
      {href && (
        <span className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground">→</span>
      )}
    </>
  );

  if (!href) {
    return (
      <div className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 transition hover:border-primary/40 hover:bg-card hover:shadow-glow"
    >
      {content}
    </a>
  );
}
