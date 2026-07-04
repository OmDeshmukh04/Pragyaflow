import { capabilities, siteConfig } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-ink text-[#f7f4ec] sm:min-h-[820px] lg:h-[94svh] lg:max-h-[1080px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/nexpay-hero-systems.png')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,19,31,0.98)_0%,rgba(7,19,31,0.86)_34%,rgba(7,19,31,0.45)_72%,rgba(7,19,31,0.72)_100%)]" />
      <div className="absolute inset-0 tech-grid opacity-[0.55]" />

      <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1680px] flex-col justify-center px-4 pb-8 pt-28 sm:min-h-[820px] sm:px-6 md:px-10 lg:h-full lg:min-h-0 lg:px-16 2xl:px-20">
        <div className="max-w-5xl">
          <div className="eyebrow mb-5 text-primary">{siteConfig.tagline}</div>
          <h1 className="max-w-5xl text-5xl font-medium leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl xl:text-[88px] 2xl:text-[92px]">
            Software systems for business-critical workflows.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.72] sm:text-xl">
            Custom SaaS, mobile apps, reconciliation automation, and reporting
            platforms built around how your company actually works.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Start a Project
              <span aria-hidden>-&gt;</span>
            </a>
            <a href="#products" className="btn-secondary">
              View Products
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-3 border-t border-white/[0.14] pt-5 sm:grid-cols-2 lg:grid-cols-4 xl:mt-14">
          {capabilities.map((item) => (
            <a
              key={item.title}
              href="#capabilities"
              className="group rounded-lg border border-white/[0.12] bg-white/[0.06] p-4 backdrop-blur-md transition hover:border-primary/[0.70] hover:bg-white/[0.1]"
            >
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-primary/[0.85]">
                {item.kicker}
              </div>
              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-lg font-normal text-white">{item.title}</span>
                <span className="text-primary transition group-hover:translate-x-1">-&gt;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

