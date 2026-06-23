import PragyaFlowLogo from "@/components/brand/PragyaFlowLogo";
import { contactInfo, footerGroups, siteConfig } from "@/lib/constants";

const socialLinks = [
  {
    label: "LinkedIn",
    href: contactInfo.linkedin,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: contactInfo.facebook,
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.10] bg-[#f7f4ec]">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.75fr_0.75fr_0.95fr]">
          <div>
            <PragyaFlowLogo tone="dark" />
            <p className="mt-5 max-w-md text-sm leading-7 text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/[0.12] text-deep transition hover:border-accent hover:bg-white hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium text-ink">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted transition hover:text-accent">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-medium text-ink">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-muted">
              <a href={contactInfo.phoneHref} className="block transition hover:text-accent">
                {contactInfo.phone}
              </a>
              <a href={contactInfo.emailHref} className="block transition hover:text-accent">
                {contactInfo.email}
              </a>
              <a href="#contact" className="mt-5 inline-flex rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-[#f7f4ec] transition hover:bg-deep">
                Start a Project
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-ink/[0.10] pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>{new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span>Custom SaaS, apps, reconciliation, and report automation.</span>
        </div>
      </div>
    </footer>
  );
}
