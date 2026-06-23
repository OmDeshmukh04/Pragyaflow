import Image from "next/image";
import { proof } from "@/lib/constants";

function ProofGraphic({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="relative h-56 overflow-hidden rounded-lg">
        <Image
          src="/images/nexpay-analytics-system.png"
          alt="Abstract finance automation analytics visual"
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="grid h-40 grid-cols-7 items-end gap-2">
        {[34, 48, 62, 54, 82, 76, 92].map((height, bar) => (
          <div key={bar} className="rounded-t-lg bg-ink" style={{ height: `${height}%` }} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {["Portal", "Admin", "Mobile", "API"].map((label) => (
        <div key={label} className="rounded-lg border border-ink/[0.10] bg-white p-4">
          <div className="h-1.5 w-10 rounded-full bg-accent" />
          <div className="mt-8 font-medium text-ink">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section id="proof" className="bg-[#f7f4ec] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <div className="eyebrow text-accent">Delivered Work</div>
            <h2 className="mt-3 text-4xl font-medium leading-[1.04] text-ink sm:text-5xl lg:text-6xl">
              Built around the work already completed.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted lg:justify-self-end">
            We combine finance automation experience with custom product
            engineering to deliver systems that are practical, scalable, and
            ready for real operational use.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {proof.map((item, index) => (
            <article key={item.title} className="rounded-lg border border-ink/[0.10] bg-white p-5 shadow-[0_24px_70px_rgba(7,19,31,0.08)]">
              <div className={`min-h-48 rounded-lg bg-[#eef1e4] ${index === 0 ? "p-0" : "p-5"}`}>
                <ProofGraphic index={index} />
              </div>
              <h3 className="mt-6 text-2xl font-medium text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

