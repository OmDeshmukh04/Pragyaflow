const projectTypes = ["SaaS", "Web App", "Mobile App", "Reconciliation", "Reports", "Automation"];

const intakeSteps = [
  "Map the operating workflow",
  "Design the product surface",
  "Build the automation layer",
  "Launch with iteration plan",
];

export default function ContactSection() {
  return (
    <section className="bg-bg px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1500px] gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="dark-panel rounded-[1.75rem] border border-white/[0.10] p-7 text-white shadow-[0_28px_90px_rgba(6,24,23,0.18)] sm:p-10 lg:p-12">
          <div className="eyebrow text-primary">Build Review</div>
          <h2 className="mt-5 text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl">
            A clear path from idea to useful software.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.62]">
            Share the workflow you want to improve. We will help shape it into
            a practical scope for a SaaS product, app, finance process, report,
            or automation system.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {intakeSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/[0.10] bg-white/[0.06] p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  0{index + 1}
                </div>
                <div className="mt-4 text-base font-semibold text-white">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel flex flex-col rounded-[1.75rem] border border-white/[0.74] p-7 text-ink shadow-[0_24px_80px_rgba(6,24,23,0.055)] sm:p-10">
          <div className="mb-6 flex flex-wrap gap-2">
            {projectTypes.map((type) => (
              <span key={type} className="rounded-full border border-ink/[0.10] bg-[#edf4df] px-3 py-2 text-sm font-semibold text-ink">
                {type}
              </span>
            ))}
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <label>
              <span className="mb-2 block text-sm font-semibold text-deep">Work email</span>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-2xl border border-ink/[0.12] bg-[#f8f8f1] px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-surface"
              />
            </label>
            <label>
              <span className="mb-2 block text-sm font-semibold text-deep">Project focus</span>
              <select className="w-full rounded-2xl border border-ink/[0.12] bg-[#f8f8f1] px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-surface">
                <option>Custom SaaS platform</option>
                <option>Web or mobile app</option>
                <option>Financial reconciliation automation</option>
                <option>Financial report automation</option>
                <option>Workflow automation</option>
              </select>
            </label>
            <label className="flex flex-1 flex-col">
              <span className="mb-2 block text-sm font-semibold text-deep">What should the system improve?</span>
              <textarea
                placeholder="Describe the workflow, users, data, reports, or automation outcome."
                className="min-h-36 w-full flex-1 resize-y rounded-2xl border border-ink/[0.12] bg-[#f8f8f1] px-4 py-3 text-sm outline-none transition focus:border-accent focus:bg-surface"
              />
            </label>
            <button type="button" className="btn-primary w-full">
              Send Project Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
