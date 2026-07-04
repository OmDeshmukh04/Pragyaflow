import Image from "next/image";
import { products } from "@/lib/constants";

export default function ProductShowcase() {
  const product = products[0];
  const hasLiveDemo = product.demoUrl.startsWith("http");

  return (
    <section id="products" className="bg-ink py-16 text-[#f7f4ec] sm:py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1680px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-10 2xl:px-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="eyebrow text-primary">Products</div>
          <h2 className="mt-3 text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl">
            Productized systems built from real operating needs.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/[0.68]">
            Alongside custom software work, we build focused products that solve
            repeatable business workflows with polished interfaces and practical
            automation.
          </p>
          <a href="#contact" className="btn-primary mt-8">
            Discuss a Pilot
            <span aria-hidden>-&gt;</span>
          </a>
        </div>

        <article className="relative overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.06] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.32)] backdrop-blur sm:p-6">
          <div className="absolute inset-0 tech-grid opacity-[0.20]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(199,255,79,0.18),transparent_32%),radial-gradient(circle_at_18%_72%,rgba(0,169,157,0.22),transparent_34%)]" />

          <div className="relative grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="overflow-hidden rounded-lg border border-white/[0.14] bg-ink">
              <div className="flex items-center justify-between border-b border-white/[0.10] px-4 py-3">
                <span className="rounded-lg border border-primary/[0.35] bg-primary/[0.12] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {product.status}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/[0.52]">
                  {product.label}
                </span>
              </div>
              <div className="relative aspect-[4/5]">
                <Image
                  src={product.image}
                  alt="VaaniCare AI receptionist product preview"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,31,0)_58%,rgba(7,19,31,0.82)_100%)]" />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/[0.16] bg-ink/[0.76] p-4 backdrop-blur">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Live concierge</div>
                  <div className="mt-2 text-xl font-medium text-white">{product.name}</div>
                  <div className="mt-1 text-sm text-white/[0.64]">AI receptionist for dental clinics</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-lg border border-white/[0.10] bg-ink/[0.74] p-5">
              <div>
                <div className="eyebrow text-primary">{product.label}</div>
                <h3 className="mt-3 text-4xl font-medium leading-[1.05] text-white sm:text-5xl">
                  {product.name}
                </h3>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.68]">
                  {product.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="rounded-lg border border-white/[0.12] bg-white/[0.08] px-3 py-2 text-sm text-white/[0.78]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={product.demoUrl}
                    className="btn-primary"
                    target={hasLiveDemo ? "_blank" : undefined}
                    rel={hasLiveDemo ? "noreferrer" : undefined}
                  >
                    {hasLiveDemo ? "Open Live Demo" : "Request Demo Access"}
                    <span aria-hidden>-&gt;</span>
                  </a>
                  <a
                    href={product.repositoryUrl}
                    className="btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Build
                  </a>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {product.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-primary/[0.22] bg-primary/[0.08] p-4">
                      <div className="text-2xl font-medium text-primary">{metric.value}</div>
                      <div className="mt-1 text-sm leading-5 text-white/[0.62]">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-lg border border-white/[0.10] bg-white/[0.05] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/[0.50]">Workflow</div>
                <div className="mt-4 space-y-3">
                  {product.workflow.map((step, index) => (
                    <div key={step} className="grid grid-cols-[34px_1fr] items-start gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-ink">
                        {index + 1}
                      </span>
                      <span className="pt-1 text-sm leading-6 text-white/[0.72]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
