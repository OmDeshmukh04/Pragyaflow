import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { processSteps, serviceOfferings } from "@/lib/constants";

export const metadata = {
  title: "Services | PragyaFlow",
  description:
    "Custom SaaS, web app, mobile app, reconciliation, financial reporting, and workflow automation services from PragyaFlow.",
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="brand-wash relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1fr_0.64fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl text-6xl font-bold leading-[0.94] tracking-tight text-ink sm:text-7xl lg:text-8xl">
              Build the exact software your business needs next.
            </h1>
          </div>

          <div className="surface-panel rounded-[2rem] border border-white/[0.76] p-7 shadow-[0_28px_100px_rgba(6,24,23,0.07)] sm:p-8">
            <p className="text-lg leading-8 text-muted">
              We help companies scope, design, build, and launch software systems
              that replace repeated manual work with clean digital workflows.
            </p>
            <div className="mt-8 grid gap-3">
              {["SaaS products", "Web and mobile apps", "Finance automation"].map((item) => (
                <div key={item} className="border-t border-ink/[0.10] pt-4 text-xl font-semibold tracking-tight text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 max-w-3xl">
            <div className="eyebrow text-accent">Service Lanes</div>
            <h2 className="mt-4 text-5xl font-bold leading-[0.98] tracking-tight text-ink sm:text-6xl">
              Pick a lane, or combine them into one product.
            </h2>
          </div>

          <div className="grid auto-rows-fr gap-4 lg:grid-cols-3">
            {serviceOfferings.map((service, index) => (
              <article
                key={service.title}
                className={`rounded-[1.75rem] border border-ink/[0.08] p-7 shadow-[0_24px_80px_rgba(6,24,23,0.055)] ${
                  index === 0
                    ? "dark-panel border-white/[0.10] text-white lg:col-span-2"
                    : index === 3
                      ? "bg-[#eaf2de] text-ink"
                      : "bg-[#f2f6e9] text-ink"
                }`}
              >
                <div className={`text-xs font-semibold uppercase tracking-[0.16em] ${index === 0 ? "text-primary" : "text-accent"}`}>
                  {service.eyebrow}
                </div>
                <h2 className={`mt-10 text-3xl font-semibold tracking-tight ${index === 0 ? "text-white" : "text-ink"}`}>
                  {service.title}
                </h2>
                <p className={`mt-4 text-base leading-7 ${index === 0 ? "text-white/[0.62]" : "text-muted"}`}>
                  {service.description}
                </p>
              </article>
            ))}
            <Link
              href="/contact"
              className="flex flex-col justify-between gap-8 rounded-[1.75rem] border border-dashed border-ink/[0.18] p-7 transition hover:border-accent/[0.45] hover:bg-[#f2f6e9] lg:col-span-2"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Something Else
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-ink">
                  Not sure which lane fits?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                  Describe the workflow and we will scope the right combination together. →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="dark-panel px-4 py-24 text-white sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.65fr_1fr] lg:items-start">
          <div>
            <div className="eyebrow text-primary">How We Work</div>
            <h2 className="mt-4 text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
              A simple build process for complex requirements.
            </h2>
            <Link href="/contact" className="btn-primary mt-10 bg-primary text-ink hover:bg-white">
              Scope a Project
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <article key={step} className="grid gap-5 border-t border-white/[0.14] py-7 sm:grid-cols-[4rem_1fr]">
                <div className="text-sm font-semibold text-primary">0{index + 1}</div>
                <p className="text-2xl font-semibold leading-8 text-white">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sage-wash px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-center">
          <div>
            <div className="eyebrow text-accent">Best Fit</div>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Use PragyaFlow when the software needs to match your business,
              not a generic template.
            </h2>
          </div>
          <Link href="/contact" className="btn-primary justify-center">
            Start Conversation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
