"use client";

const focusAreas = [
  "Custom SaaS",
  "Web apps",
  "Mobile apps",
  "Financial reconciliation",
  "Report automation",
];

export default function LiveTicker() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex max-w-[92vw] flex-wrap items-center justify-center gap-2">
        {focusAreas.map((area) => (
          <span
            key={area}
            className="rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-[11px] font-medium text-deep shadow-sm backdrop-blur"
          >
            {area}
          </span>
        ))}
      </div>
      <div className="w-40 sm:w-56 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
        <span>Built to requirement, ready to productize</span>
      </div>
    </div>
  );
}
