import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import { proof } from "@/lib/constants";

export const metadata = {
  title: "About Us | PragyaFlow",
  description:
    "PragyaFlow is a software studio building custom SaaS, apps, finance automation, and business workflow systems.",
};

const focusAreas = [
  "Custom SaaS platforms",
  "Business web applications",
  "Mobile app workflows",
  "Financial reconciliation",
  "Financial reporting automation",
  "Productized AI workflows",
];

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="brand-wash px-4 pb-20 pt-32 sm:px-6 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.92fr_0.8fr] lg:items-center">
          <div>
            <h1 className="text-6xl font-bold leading-[0.94] tracking-tight text-ink sm:text-7xl lg:text-8xl">
              A software studio for practical, high-trust business systems.
            </h1>
          </div>

          <div className="dark-panel min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/[0.10] p-8 text-white shadow-[0_32px_120px_rgba(6,24,23,0.18)]">
            <div>
              <div className="eyebrow text-primary">Studio Belief</div>
              <p className="mt-8 text-3xl font-semibold leading-tight tracking-tight">
                Good software is a clearer way for people, data, decisions,
                approvals, and reports to move through a business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.65fr_1fr]">
          <div>
            <div className="eyebrow text-accent">What We Focus On</div>
            <h2 className="mt-4 text-5xl font-bold leading-[0.98] tracking-tight text-ink sm:text-6xl">
              Real business software, carefully shaped.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              PragyaFlow exists for companies that need software shaped around
              real operations: finance work, customer workflows, internal tools,
              and products that can grow.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area} className="rounded-2xl border border-ink/[0.07] bg-[#f2f6e9] px-5 py-5 text-lg font-semibold text-ink">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 max-w-4xl">
            <div className="eyebrow text-accent">Work Already Done</div>
            <h2 className="mt-4 text-5xl font-bold leading-[0.98] tracking-tight text-ink sm:text-6xl">
              We are strongest where business logic matters.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {proof.map((item) => (
              <article key={item.title} className="surface-panel rounded-[1.75rem] border border-white/[0.74] p-7 shadow-[0_24px_80px_rgba(6,24,23,0.055)]">
                <h3 className="text-3xl font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-5 text-base leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-panel px-4 py-24 text-white sm:px-6 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-center">
          <h2 className="text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            Small team energy. Production-grade responsibility.
          </h2>
          <Link href="/contact" className="btn-primary bg-primary text-ink hover:bg-white">
            Work With Us
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
