import { systems } from "@/lib/constants";

export default function ProductShowcase() {
  return (
    <section id="systems" className="bg-ink py-16 text-[#f7f4ec] sm:py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="eyebrow text-primary">Systems</div>
          <h2 className="mt-3 text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl">
            From requirement to operating software.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/[0.68]">
            We turn customer-specific operations into structured software:
            interfaces, data flows, automation rules, and launchable products.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.06] p-4 sm:p-6">
          <div className="absolute inset-0 tech-grid opacity-[0.22]" />
          <div className="relative grid gap-4">
            {systems.map((step, index) => (
              <div
                key={step}
                className="grid gap-4 rounded-lg border border-white/[0.10] bg-ink/[0.72] p-4 backdrop-blur sm:grid-cols-[72px_1fr_auto] sm:items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-lg font-medium text-ink">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-white">{step}</h3>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.10]">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#00a99d,#c7ff4f)]"
                      style={{ width: `${52 + index * 10}%` }}
                    />
                  </div>
                </div>
                <div className="rounded-lg border border-primary/[0.25] bg-primary/[0.10] px-4 py-2 text-sm font-medium text-primary">
                  {index < 4 ? "Build" : "Launch"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

