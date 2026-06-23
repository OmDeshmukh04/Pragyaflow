const principles = [
  {
    title: "Requirement-first",
    text: "We start with the business process, users, data, and decision points before choosing screens or features.",
  },
  {
    title: "Product-minded",
    text: "Even custom work is structured so repeated patterns can become reusable SaaS modules later.",
  },
  {
    title: "Finance-aware",
    text: "Reconciliation, reporting, audit history, and clean exports are treated as core workflows, not afterthoughts.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#f7f8f4] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 sm:px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
        <div>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-accent">
            About
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-ink sm:text-4xl md:text-5xl">
            A software partner for custom SaaS, apps, and finance automation.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-8 text-muted sm:text-lg">
            NexPay is positioned for businesses that need software shaped around
            their own requirements: custom SaaS platforms, web apps, mobile
            apps, internal tools, financial reconciliation automation, and
            financial report automation.
          </p>
          <p className="text-base leading-8 text-muted sm:text-lg">
            The site now makes room for both sides of the business: services
            you can sell immediately, and product pages you can link later as
            repeated client needs become packaged SaaS offerings.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="rounded-lg border border-ink/[0.08] bg-white p-4">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

