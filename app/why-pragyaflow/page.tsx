import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { whyPoints } from "@/lib/constants";

export const metadata = {
  title: "Why PragyaFlow | PragyaFlow",
  description:
    "Why companies choose PragyaFlow for custom SaaS, business applications, finance automation, and workflow software.",
};

export default function WhyPragyaFlowPage() {
  return (
    <PageLayout>
      <section className="dark-panel px-4 pb-24 pt-32 text-white sm:px-6 lg:px-10 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="max-w-6xl">
            <h1 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              We build around the business, not around a template.
            </h1>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-[0.62fr_1fr] lg:items-end">
            <p className="text-lg leading-8 text-white/[0.64]">
              Most software projects fail because the workflow is unclear before
              development starts. PragyaFlow begins with business logic, user
              roles, data movement, and launch reality.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Clarity", "Control", "Growth"].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/[0.10] bg-white/[0.06] p-6 text-2xl font-semibold tracking-tight">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.58fr_1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="eyebrow text-accent">Our Difference</div>
            <h2 className="mt-4 text-5xl font-bold leading-[0.98] tracking-tight text-ink sm:text-6xl">
              Practical decisions before polished screens.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Design matters, but software becomes valuable when permissions,
              exceptions, exports, approvals, and daily operating details are
              handled carefully.
            </p>
          </div>

          <div className="space-y-4">
            {whyPoints.map((point, index) => (
              <article key={point.title} className="surface-panel rounded-[1.75rem] border border-white/[0.74] p-7 shadow-[0_24px_80px_rgba(6,24,23,0.055)]">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="text-5xl font-bold tracking-tight text-accent">0{index + 1}</div>
                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight text-ink">{point.title}</h2>
                    <p className="mt-4 text-base leading-7 text-muted">{point.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              ["For founders", "A team that can turn a requirement into a product structure."],
              ["For finance teams", "Automation that keeps exceptions, approvals, and reports visible."],
              ["For operators", "Interfaces built for repeated daily use, not just a presentation."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-[1.75rem] bg-[#f2f6e9] p-8">
                <h3 className="text-3xl font-semibold tracking-tight text-ink">{title}</h3>
                <p className="mt-5 text-base leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-panel px-4 py-24 text-white sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <h2 className="text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            The goal is software your team can actually operate.
          </h2>
          <div>
            <p className="text-lg leading-8 text-white/[0.64]">
              We care about the details that make business software last:
              permissions, exception states, exports, handoffs, approvals, and
              the daily user experience.
            </p>
            <Link href="/contact" className="btn-primary mt-8 bg-primary text-ink hover:bg-white">
              Talk to Us
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
