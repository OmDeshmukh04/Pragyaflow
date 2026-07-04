import { capabilities } from "@/lib/constants";

function TileVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="mt-8 grid grid-cols-2 gap-3">
        {["Portal", "Admin", "Billing", "Workflow"].map((label) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/[0.08] p-3">
            <div className="h-1.5 w-10 rounded-full bg-primary" />
            <div className="mt-6 text-sm font-normal text-white">{label}</div>
          </div>
        ))}
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="mt-8 flex justify-center">
        <div className="w-[152px] rounded-[28px] border border-white/[0.18] bg-ink p-2 shadow-2xl">
          <div className="rounded-[22px] bg-[#f7f4ec] p-3 text-ink">
            {["Approve", "Capture", "Sync"].map((label) => (
              <div key={label} className="mb-2 rounded-lg bg-white p-3 text-sm font-normal shadow-sm">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="mt-8 space-y-3">
        {["Bank", "Gateway", "Ledger"].map((label) => (
          <div key={label} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            <div className="rounded-lg bg-white/[0.08] px-3 py-2 text-sm text-white/[0.84]">{label}</div>
            <div className="h-px w-8 bg-primary" />
            <div className="rounded-lg border border-primary/[0.30] bg-primary/[0.15] px-3 py-2 text-sm font-normal text-primary">
              Matched
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-8 grid h-36 grid-cols-6 items-end gap-2">
      {[42, 70, 55, 88, 76, 96].map((height, bar) => (
        <div
          key={bar}
          className="rounded-t-lg bg-[linear-gradient(180deg,#c7ff4f,#00a99d)]"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

export default function SolutionsSection() {
  return (
    <section id="capabilities" className="bg-bg py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-10 2xl:px-16">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="eyebrow text-accent">Capabilities</div>
            <h2 className="mt-3 max-w-3xl text-4xl font-medium leading-[1.04] text-ink sm:text-5xl lg:text-6xl">
              Building blocks for modern business systems.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted">
            The offer is broad, but the interface stays simple: systems,
            workflows, finance automation, and apps.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <article
              key={item.title}
              className={`dark-panel min-h-[420px] overflow-hidden rounded-lg border border-ink/10 p-5 text-white ${
                index === 0 || index === 3 ? "lg:mt-10" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">{item.kicker}</span>
                <span className="text-sm font-medium text-white/[0.40]">0{index + 1}</span>
              </div>
              <TileVisual index={index} />
              <div className="mt-10">
                <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/[0.68]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

