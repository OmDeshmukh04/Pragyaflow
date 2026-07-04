import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";

export const metadata = {
  title: "Careers | PragyaFlow",
  description:
    "Careers at PragyaFlow. We are building a small, high-quality software studio for SaaS, apps, and automation.",
};

const roles = [
  "Frontend engineer",
  "Full-stack engineer",
  "UI/UX designer",
  "Product-minded automation builder",
];

export default function CareersPage() {
  return (
    <PageLayout>
      <section className="brand-wash relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="relative mx-auto max-w-[1500px]">
          <div className="max-w-6xl">
            <div className="eyebrow text-accent">Careers</div>
            <h1 className="mt-5 text-6xl font-bold leading-[0.94] tracking-tight text-ink sm:text-7xl lg:text-8xl">
              We are building a small team for serious software work.
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-bg px-4 pb-24 sm:px-6 lg:px-10 lg:pb-36">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div className="dark-panel rounded-[2rem] border border-white/[0.10] p-8 text-white shadow-[0_32px_120px_rgba(6,24,23,0.18)] sm:p-10">
            <div className="eyebrow text-primary">Current status</div>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Selective collaborators, not mass hiring.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/[0.64]">
              We are open to people who care about clean interfaces, practical
              software, business workflows, and reliable execution.
            </p>
            <Link href="/contact" className="btn-primary mt-8 bg-primary text-ink hover:bg-white">
              Introduce Yourself
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div>
            <div className="mb-6 grid gap-3 sm:grid-cols-3">
              {["Remote-friendly", "High ownership", "Product-minded"].map((item) => (
                <div key={item} className="surface-panel rounded-2xl border border-white/[0.74] px-5 py-5 text-base font-semibold text-ink shadow-[0_20px_70px_rgba(6,24,23,0.045)]">
                  {item}
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
            {roles.map((role) => (
              <div key={role} className="rounded-2xl border border-ink/[0.07] bg-[#f2f6e9] px-5 py-5 text-lg font-semibold text-ink">
                {role}
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
