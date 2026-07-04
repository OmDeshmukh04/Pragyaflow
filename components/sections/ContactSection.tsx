const projectTypes = ["SaaS", "Web App", "Mobile App", "Reconciliation", "Reports", "Automation"];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-ink px-4 py-16 text-[#f7f4ec] sm:px-6 sm:py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1680px] overflow-hidden rounded-lg border border-white/[0.12] lg:grid-cols-[1fr_0.82fr]">
        <div className="relative min-h-[420px] p-6 sm:p-10 lg:p-14">
          <div className="absolute inset-0 tech-grid opacity-[0.2]" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div className="eyebrow text-primary">Start</div>
              <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl">
                Let us map your next system.
              </h2>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <span key={type} className="rounded-lg border border-white/[0.14] bg-white/[0.06] px-3 py-2 text-sm font-medium text-white/[0.78]">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#f7f4ec] p-6 text-ink sm:p-8 lg:p-10">
          <div className="grid gap-4">
            <label>
              <span className="mb-2 block text-sm font-medium text-deep">Work email</span>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-ink/[0.14] bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
              />
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-deep">Project focus</span>
              <select className="w-full rounded-lg border border-ink/[0.14] bg-white px-4 py-3 text-sm outline-none transition focus:border-accent">
                <option>Custom SaaS platform</option>
                <option>Web or mobile app</option>
                <option>Financial reconciliation automation</option>
                <option>Financial report automation</option>
                <option>Workflow automation</option>
              </select>
            </label>
            <label>
              <span className="mb-2 block text-sm font-medium text-deep">What needs to work better?</span>
              <textarea
                placeholder="Briefly describe the workflow, product, report, or automation."
                className="min-h-32 w-full resize-y rounded-lg border border-ink/[0.14] bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
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

