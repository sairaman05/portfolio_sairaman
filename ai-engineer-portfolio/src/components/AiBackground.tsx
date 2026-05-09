/**
 * Static, professional abstract background.
 * - Soft color blobs (cream + steel-blue + terracotta)
 * - Fine dot grid
 * - Subtle diagonal line mesh
 * No animation, no parallax.
 */
export function AiBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Quiet color blobs */}
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-primary/[0.09] blur-3xl" />
      <div className="absolute top-1/3 -right-48 h-[34rem] w-[34rem] rounded-full bg-accent/[0.08] blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 h-[32rem] w-[32rem] rounded-full bg-primary/[0.06] blur-3xl" />

      {/* Fine dot grid */}
      <div className="dot-grid absolute inset-0" />

      {/* Diagonal line mesh */}
      <div className="diag-mesh absolute inset-0" />

      {/* Fade into background at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />
    </div>
  );
}
