"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";
import PragyaFlowLogo from "@/components/brand/PragyaFlowLogo";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenis = useLenis();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (lenis) {
      lenis.scrollTo(href, { offset: -84, duration: 1.1 });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/[0.10] bg-[#f7f4ec]/[0.94] shadow-[0_12px_34px_rgba(7,19,31,0.07)] backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1680px] items-center justify-between px-4 sm:px-6 lg:px-10 2xl:px-16">
        <button
          onClick={() => {
            setMobileOpen(false);
            if (lenis) lenis.scrollTo(0, { duration: 1.1 });
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 text-left"
          aria-label="Go to homepage"
        >
          <PragyaFlowLogo height={40} priority />
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="group relative cursor-pointer rounded-lg px-3 py-2 text-[15px] font-semibold text-ink/[0.88] transition-all duration-300 hover:bg-white/[0.58] hover:text-ink hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.74),0_8px_22px_rgba(7,19,31,0.07)]"
            >
              <span className="relative z-10">{link.label}</span>
              <span
                aria-hidden
                className="absolute inset-x-3 bottom-1 h-px origin-center scale-x-0 rounded-full bg-ink/[0.42] transition-transform duration-300 group-hover:scale-x-100"
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => handleNavClick("#contact")}
          className="hidden rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-[#f7f4ec] shadow-[0_10px_24px_rgba(7,19,31,0.16)] transition hover:bg-deep lg:inline-flex"
        >
          Start a Project
        </button>

        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/[0.14] text-ink lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-1 h-0.5 w-5 bg-current transition ${
                mobileOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 h-0.5 w-5 bg-current transition ${
                mobileOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div className={`grid border-t border-ink/[0.10] bg-[#f7f4ec]/[0.98] shadow-[0_18px_34px_rgba(7,19,31,0.08)] transition-[grid-template-rows] duration-300 lg:hidden ${mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full rounded-lg px-3 py-3 text-left text-base font-semibold text-ink/[0.86] hover:bg-ink/[0.06] hover:text-ink"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-3 block w-full rounded-lg bg-ink px-3 py-3 text-left text-base font-medium text-[#f7f4ec]"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
