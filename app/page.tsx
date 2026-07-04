import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import {
  capabilities,
  contactInfo,
  processSteps,
  products,
  proof,
  serviceOfferings,
  siteConfig,
  whyPoints,
} from "@/lib/constants";

const featuredProduct = products[0];
const homeMetrics = [
  { value: "01", label: "Workflow first" },
  { value: "02", label: "Clean product design" },
  { value: "03", label: "Automation with review" },
];

export default function Home() {
  return (
    <PageLayout>
      <section className="brand-wash relative min-h-screen overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-10 lg:pt-36">
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-[1500px] flex-col justify-center">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div className="max-w-6xl">
              <div className="inline-flex rounded-full border border-ink/[0.10] bg-surface/[0.72] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-deep backdrop-blur">
                {siteConfig.tagline}
              </div>
              <h1 className="mt-8 text-5xl font-bold leading-[0.96] tracking-tight text-ink sm:text-6xl lg:text-7xl xl:text-[82px]">
                Software built around the way your business actually works.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
                PragyaFlow designs and develops custom SaaS platforms, web apps,
                mobile apps, reconciliation automation, and financial reporting
                systems for teams that need reliable software, not another template.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Start a Project
                  <span aria-hidden>→</span>
                </Link>
                <Link href="/services" className="btn-secondary">
                  View Services
                </Link>
              </div>
            </div>

            <div className="dark-panel rounded-[2rem] border border-white/[0.10] p-6 text-white shadow-[0_32px_120px_rgba(6,24,23,0.24)] sm:p-8">
              <div className="flex items-center justify-between gap-6 border-b border-white/[0.12] pb-6">
                <div>
                  <div className="eyebrow text-primary">Operating Model</div>
                  <p className="mt-3 text-2xl font-semibold leading-7 tracking-tight">
                    Scope, design, build, automate, launch.
                  </p>
                </div>
                <div className="rounded-full border border-primary/[0.28] bg-primary/[0.10] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  Flow
                </div>
              </div>
              <div className="divide-y divide-white/[0.10]">
                {homeMetrics.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-6 py-6">
                    <span className="text-sm font-semibold text-primary">{item.value}</span>
                    <span className="text-right text-lg font-semibold text-white">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="pt-4 text-sm leading-6 text-white/[0.56]">
                Built for founders, finance teams, and operators who need software
                that follows their real process.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-4">
            {capabilities.map((item) => (
              <Link
                href="/services"
                key={item.title}
                className="surface-panel rounded-[1.75rem] border border-white/[0.72] p-6 shadow-[0_24px_80px_rgba(6,24,23,0.055)] backdrop-blur transition hover:-translate-y-1 hover:border-primary/[0.45]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{item.kicker}</div>
                <h2 className="mt-10 text-2xl font-semibold tracking-tight text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.72fr_1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="eyebrow text-accent">What We Build</div>
            <h2 className="mt-4 text-5xl font-bold leading-[0.98] tracking-tight text-ink sm:text-6xl">
              Custom software for products, finance, and operating teams.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              PragyaFlow builds client-specific software, from customer-facing
              SaaS to internal automation and reporting, so every project starts
              with the business workflow.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {serviceOfferings.map((service, index) => (
              <article
                key={service.title}
                className="rounded-[1.75rem] border border-ink/[0.07] bg-[#f2f6e9] p-7 shadow-[0_24px_80px_rgba(6,24,23,0.045)]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {service.eyebrow}
                </div>
                <h3 className="mt-8 text-3xl font-semibold tracking-tight text-ink">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-panel px-4 py-24 text-white sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="eyebrow text-primary">Product Lab</div>
            <h2 className="mt-4 text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
              We also build our own products, then bring that product discipline
              to client work.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.64]">
              {featuredProduct.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {featuredProduct.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={featuredProduct.demoUrl} className="btn-primary mt-10 bg-primary text-ink hover:bg-white">
              Discuss Product Build
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/[0.10] bg-white/[0.06] shadow-[0_32px_120px_rgba(0,0,0,0.28)]">
            <div className="relative aspect-[1.18/1] w-full bg-[#f5f7ef]">
              <Image
                src={featuredProduct.image}
                alt={`${featuredProduct.name} product preview`}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="grid gap-px bg-white/[0.10] sm:grid-cols-3">
              {featuredProduct.metrics.map((metric) => (
                <div key={metric.label} className="bg-[#174b44] p-6">
                  <div className="text-3xl font-bold tracking-tight text-primary">{metric.value}</div>
                  <div className="mt-2 text-sm text-white/[0.62]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="eyebrow text-accent">Completed Work</div>
              <h2 className="mt-4 text-5xl font-bold leading-[0.98] tracking-tight text-ink sm:text-6xl">
                Proven in the workflows where mistakes are expensive.
              </h2>
            </div>
            <p className="text-lg leading-8 text-muted">
              Finance, reconciliation, reports, and business operations need
              clean states, reliable outputs, and software that people can trust.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {proof.map((item, index) => (
              <article key={item.title} className="surface-panel rounded-[1.75rem] border border-white/[0.78] p-7 shadow-[0_24px_80px_rgba(6,24,23,0.055)]">
                <div className="text-sm font-semibold text-accent">0{index + 1}</div>
                <h3 className="mt-12 text-3xl font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sage-wash px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <div>
            <div className="eyebrow text-accent">How We Work</div>
            <h2 className="mt-4 text-5xl font-bold leading-[0.98] tracking-tight text-ink sm:text-6xl">
              From unclear requirement to working system.
            </h2>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <article key={step} className="grid gap-5 rounded-[1.75rem] border border-white/[0.74] bg-surface p-6 shadow-[0_24px_80px_rgba(6,24,23,0.045)] sm:grid-cols-[5rem_1fr] sm:items-center">
                <div className="text-4xl font-bold tracking-tight text-accent">0{index + 1}</div>
                <p className="text-2xl font-semibold leading-8 tracking-tight text-ink">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <div className="eyebrow text-accent">Why PragyaFlow</div>
              <h2 className="mt-4 text-5xl font-bold leading-[0.98] tracking-tight text-ink sm:text-6xl">
                Built for clarity, control, and long-term product growth.
              </h2>
            </div>
            <p className="text-lg leading-8 text-muted">
              We combine product design, software engineering, and business
              workflow thinking so your system is useful from day one and flexible
              after launch.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {whyPoints.map((point) => (
              <article key={point.title} className="rounded-[1.75rem] border border-ink/[0.07] bg-[#f2f6e9] p-6">
                <h3 className="text-xl font-semibold text-ink">{point.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-panel px-4 py-24 text-white sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-center">
          <h2 className="text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl">
            Have a workflow that needs to become software?
          </h2>
          <div>
            <p className="text-lg leading-8 text-white/[0.64]">
              Send the requirement, current process, or product idea. We will
              help shape the first clear build direction.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/contact" className="btn-primary bg-primary text-ink hover:bg-white">
                Contact PragyaFlow
                <span aria-hidden>→</span>
              </Link>
              <a href={contactInfo.phoneHref} className="btn-secondary border-white/[0.18] bg-white/[0.06] text-white hover:bg-white hover:text-ink">
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
