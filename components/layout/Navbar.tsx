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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/[0.82] backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <button
          onClick={() => {
            setMobileOpen(false);
            if (lenis) lenis.scrollTo(0, { duration: 1.1 });
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 text-left"
          aria-label="Go to homepage"
        >
          <PragyaFlowLogo tone="light" />
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-normal text-white/[0.70] transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleNavClick("#contact")}
          className="hidden rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-primary-dark lg:inline-flex"
        >
          Start a Project
        </button>

        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.15] text-white lg:hidden"
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

      <div className={`grid border-t border-white/10 bg-ink/[0.96] transition-[grid-template-rows] duration-300 lg:hidden ${mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full rounded-lg px-3 py-3 text-left text-base font-normal text-white/[0.78] hover:bg-white/[0.08] hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-3 block w-full rounded-lg bg-primary px-3 py-3 text-left text-base font-medium text-ink"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

