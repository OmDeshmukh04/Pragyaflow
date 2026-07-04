"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PragyaFlowLogo from "@/components/brand/PragyaFlowLogo";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/[0.08] bg-surface/[0.86] shadow-[0_18px_60px_rgba(6,24,23,0.06)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-[74px] w-full max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-10">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex min-w-0 items-center text-left lg:min-w-[220px]"
          aria-label="Go to homepage"
        >
          <PragyaFlowLogo height={34} priority />
        </Link>

        <div className="hidden flex-1 justify-center lg:flex">
          <div className="flex items-center gap-0.5 rounded-full border border-ink/[0.08] bg-[#f5f7ef]/[0.74] p-1 shadow-inner shadow-white/[0.60]">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-surface text-deep shadow-[0_8px_22px_rgba(6,24,23,0.10)]"
                      : "text-muted hover:bg-surface/[0.72] hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden min-w-[220px] justify-end lg:flex">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-deep px-5 text-sm font-bold text-white shadow-[0_14px_34px_rgba(6,24,23,0.14)] transition hover:-translate-y-0.5 hover:bg-primary hover:text-ink"
          >
            Start a Project
            <span className="ml-2" aria-hidden>→</span>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/[0.10] bg-[#f5f7ef] text-ink shadow-[0_10px_28px_rgba(6,24,23,0.08)] transition hover:bg-surface lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
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

      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={`grid border-t border-ink/[0.08] bg-surface/[0.96] shadow-[0_18px_60px_rgba(6,24,23,0.08)] backdrop-blur-2xl transition-[grid-template-rows] duration-300 lg:hidden ${
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-auto max-w-[1500px] px-4 py-4 sm:px-6">
            <div className="grid gap-2 sm:grid-cols-2">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    tabIndex={mobileOpen ? 0 : -1}
                    className={`rounded-2xl border px-4 py-3 text-base font-semibold transition ${
                      active
                        ? "border-deep bg-deep text-white"
                        : "border-ink/[0.08] bg-[#f5f7ef] text-ink/[0.76] hover:border-accent/[0.24] hover:bg-[#eaf2de] hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              tabIndex={mobileOpen ? 0 : -1}
              className="mt-3 flex min-h-12 items-center justify-center rounded-2xl bg-deep px-4 text-base font-bold text-white transition hover:bg-primary hover:text-ink"
            >
              Start a Project
              <span className="ml-2" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
