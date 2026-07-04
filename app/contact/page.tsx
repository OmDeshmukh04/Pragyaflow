import PageLayout from "@/components/layout/PageLayout";
import ContactSection from "@/components/sections/ContactSection";
import { contactInfo } from "@/lib/constants";

export const metadata = {
  title: "Contact | PragyaFlow",
  description:
    "Contact PragyaFlow to discuss a custom SaaS platform, mobile app, financial automation, or workflow software project.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="brand-wash px-4 pb-10 pt-32 sm:px-6 lg:px-10 lg:pt-40">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="eyebrow text-accent">Contact</div>
          <h1 className="mt-5 text-6xl font-bold leading-[0.94] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            Tell us what needs to work better.
          </h1>
        </div>
      </section>
      <ContactSection />
      <section className="bg-bg px-4 pb-24 sm:px-6 lg:px-10 lg:pb-32">
        <div className="mx-auto grid max-w-[1500px] gap-4 lg:grid-cols-2">
          <a href={contactInfo.emailHref} className="surface-panel rounded-[1.75rem] border border-white/[0.74] p-8 shadow-[0_24px_80px_rgba(6,24,23,0.055)] transition hover:-translate-y-1">
            <div className="eyebrow text-accent">Email</div>
            <div className="mt-6 break-words text-2xl font-bold tracking-tight text-ink [overflow-wrap:anywhere] sm:text-3xl">
              {contactInfo.email}
            </div>
          </a>
          <a href={contactInfo.phoneHref} className="surface-panel rounded-[1.75rem] border border-white/[0.74] p-8 shadow-[0_24px_80px_rgba(6,24,23,0.055)] transition hover:-translate-y-1">
            <div className="eyebrow text-accent">Phone</div>
            <div className="mt-6 break-words text-2xl font-bold tracking-tight text-ink [overflow-wrap:anywhere] sm:text-3xl">
              {contactInfo.phone}
            </div>
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
