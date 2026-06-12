"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapConfig";
import TiltCard from "@/components/ui/TiltCard";

// Before/after pairs: bar heights as % of the tallest
const COMPARISONS = [
  { label: "Merchant onboarding", before: "14 days", beforePct: 100, after: "8 min", afterPct: 5 },
  { label: "Month-end close", before: "9 days", beforePct: 78, after: "6 hrs", afterPct: 14 },
  { label: "Dispute response", before: "6 days", beforePct: 60, after: "4 hrs", afterPct: 10 },
];

const GAUGE_R = 80;
const GAUGE_C = 2 * Math.PI * GAUGE_R;
const GAUGE_PCT = 70;

export default function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gaugeRef = useRef<SVGCircleElement>(null);
  const gaugeValueRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      gsap.from(".impact-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(".impact-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      gsap.from(".impact-bar", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1.1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });

      // Donut gauge sweep + count-up
      if (gaugeRef.current) {
        gsap.fromTo(
          gaugeRef.current,
          { strokeDashoffset: GAUGE_C },
          {
            strokeDashoffset: GAUGE_C * (1 - GAUGE_PCT / 100),
            duration: 1.8,
            ease: "power2.inOut",
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
          }
        );
      }
      if (gaugeValueRef.current) {
        const el = gaugeValueRef.current;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: GAUGE_PCT,
          duration: 1.8,
          ease: "power2.inOut",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
          onUpdate: () => {
            el.textContent = `${Math.round(obj.v)}%`;
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="impact-heading text-center mb-10 sm:mb-14">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em]">
            <span className="text-ink">From days</span>{" "}
            <span className="gradient-text">to minutes.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4 sm:gap-6">
          {/* Before/after vertical bars */}
          <TiltCard maxTilt={6} className="impact-card">
            <div className="gradient-border h-full p-5 sm:p-8 md:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 sm:mb-10">
                <span className="text-[15px] font-semibold text-ink">
                  Cycle time, before vs. with NexPay
                </span>
                <div className="hidden sm:flex items-center gap-5 text-xs text-muted">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm bg-ink/20" /> Manual
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm bg-primary" /> NexPay
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10">
                {COMPARISONS.map((c) => (
                  <div key={c.label} className="flex flex-col items-center">
                    <div className="flex items-end gap-2 sm:gap-3 h-[140px] sm:h-[180px] md:h-[220px]">
                      <div className="flex flex-col items-center justify-end h-full">
                        <span className="text-[11px] text-muted mb-2 whitespace-nowrap">
                          {c.before}
                        </span>
                        <div
                          className="impact-bar w-5 sm:w-7 md:w-9 rounded-t-md bg-ink/[0.14]"
                          style={{ height: `${c.beforePct}%` }}
                        />
                      </div>
                      <div className="flex flex-col items-center justify-end h-full">
                        <span className="text-[11px] font-semibold text-accent mb-2 whitespace-nowrap">
                          {c.after}
                        </span>
                        <div
                          className="impact-bar w-5 sm:w-7 md:w-9 rounded-t-md bg-gradient-to-t from-[#0f766e] to-primary"
                          style={{ height: `${c.afterPct}%` }}
                        />
                      </div>
                    </div>
                    <span className="mt-4 text-xs md:text-[13px] text-deep text-center leading-snug">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>

          {/* Donut gauge */}
          <TiltCard maxTilt={6} className="impact-card">
            <div className="gradient-border h-full p-5 sm:p-8 md:p-10 flex flex-col items-center justify-center gap-4 sm:gap-6">
              <div className="relative">
                <svg width="180" height="180" viewBox="0 0 220 220" fill="none" className="sm:w-[220px] sm:h-[220px]">
                  <circle
                    cx="110"
                    cy="110"
                    r={GAUGE_R}
                    stroke="rgba(0,52,52,0.08)"
                    strokeWidth="16"
                  />
                  <circle
                    ref={gaugeRef}
                    cx="110"
                    cy="110"
                    r={GAUGE_R}
                    stroke="url(#impactGaugeGrad)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray={GAUGE_C}
                    strokeDashoffset={GAUGE_C}
                    transform="rotate(-90 110 110)"
                  />
                  <defs>
                    <linearGradient id="impactGaugeGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0f766e" />
                      <stop offset="100%" stopColor="#b5d447" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    ref={gaugeValueRef}
                    className="text-4xl md:text-5xl font-bold gradient-text-primary tabular-nums"
                  >
                    0%
                  </span>
                  <span className="text-[11px] text-muted uppercase tracking-wider mt-1">
                    Lower ops cost
                  </span>
                </div>
              </div>

              <div className="w-full space-y-2.5">
                {[
                  ["Manual touches", "▼ 88%"],
                  ["Ops throughput", "▲ 3.4×"],
                  ["Audit prep time", "▼ 92%"],
                ].map(([label, delta]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-xl bg-white/70 border border-ink/5 px-4 py-2.5"
                  >
                    <span className="text-[13px] text-deep">{label}</span>
                    <span className="text-[13px] font-semibold text-accent tabular-nums">
                      {delta}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
