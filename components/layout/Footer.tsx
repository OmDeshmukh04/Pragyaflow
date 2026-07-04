import Link from "next/link";
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
    <footer className="border-t border-ink/[0.08] bg-surface">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.75fr_0.75fr_0.85fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <PragyaFlowLogo height={40} />
            <p className="mt-6 max-w-sm text-base leading-7 text-muted">
              {siteConfig.description}
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm font-medium text-muted transition hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Contact</h3>
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <div className="text-muted">Email</div>
                <a href={contactInfo.emailHref} className="mt-1 block break-words font-semibold text-ink transition hover:text-accent">
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <div className="text-muted">Phone</div>
                <a href={contactInfo.phoneHref} className="mt-1 block font-semibold text-ink transition hover:text-accent">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-ink/[0.10] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="inline-flex items-center gap-2 rounded-full border border-ink/[0.10] bg-[#f5f7ef] px-3.5 py-2 text-sm font-semibold text-deep transition hover:border-accent/[0.35] hover:bg-[#eaf2de] hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
