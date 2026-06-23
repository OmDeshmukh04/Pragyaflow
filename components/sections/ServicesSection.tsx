import { services } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="mb-10 max-w-3xl">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Services
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-ink sm:text-4xl md:text-5xl">
            From unclear idea to launch-ready software.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            We can enter at discovery, product design, full-stack development,
            mobile delivery, or finance automation implementation.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-lg border border-ink/[0.08] bg-[#f7f8f4] p-5">
              <span className="text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-xl font-semibold tracking-normal text-ink">{service.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

