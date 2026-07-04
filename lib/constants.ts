export const siteConfig = {
  name: "PragyaFlow",
  tagline: "Custom software for serious business workflows.",
  description:
    "PragyaFlow builds SaaS platforms, web apps, mobile apps, reconciliation automation, and reporting systems for growing teams.",
  url: "https://pragyaflow.com",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Why PragyaFlow", href: "/why-pragyaflow" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export const contactInfo = {
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "admin@pragyaflow.com",
  emailHref: "mailto:admin@pragyaflow.com",
  linkedin: "https://www.linkedin.com/company/pargyaflow/",
  facebook: "https://www.facebook.com/pragyaflow",
};

export const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "SaaS Platforms", href: "/services" },
      { label: "Web Applications", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "Finance Automation", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why PragyaFlow", href: "/why-pragyaflow" },
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const capabilities = [
  {
    title: "SaaS Platforms",
    kicker: "Products",
    description: "Client portals, admin consoles, roles, billing, subscriptions, and workflow modules for customer-specific businesses.",
  },
  {
    title: "Web Applications",
    kicker: "Operations",
    description: "Fast, polished web apps for internal teams, customers, approvals, dashboards, and operational workflows.",
  },
  {
    title: "Mobile Apps",
    kicker: "Field teams",
    description: "Android and iOS-ready experiences for field operations, customers, approvals, service requests, and data capture.",
  },
  {
    title: "Finance Automation",
    kicker: "Reconciliation",
    description: "Bank, ledger, gateway, and transaction matching with exception queues, reports, and audit-ready outputs.",
  },
];

export const serviceOfferings = [
  {
    title: "Custom SaaS Development",
    eyebrow: "Product build",
    description:
      "From scope to launch: portals, admin panels, subscriptions, permissions, workflows, and customer-facing product surfaces.",
  },
  {
    title: "Web App Development",
    eyebrow: "Business tools",
    description:
      "Modern web applications for operations, sales, finance, support, approvals, reporting, and team productivity.",
  },
  {
    title: "Mobile App Development",
    eyebrow: "Field + customer",
    description:
      "Mobile-first experiences for customer requests, internal approvals, field activity, notifications, and service workflows.",
  },
  {
    title: "Financial Reconciliation",
    eyebrow: "Automation",
    description:
      "Matching engines for bank, ledger, gateway, and transaction data with clear exception handling and review flows.",
  },
  {
    title: "Financial Report Automation",
    eyebrow: "Reporting",
    description:
      "Recurring reports, exports, dashboards, summaries, and structured finance packs generated from reliable data flows.",
  },
  {
    title: "Workflow Automation",
    eyebrow: "Efficiency",
    description:
      "Replace repeated manual steps with clean process logic, notifications, approvals, and operational software modules.",
  },
];

export const whyPoints = [
  {
    title: "Business-first architecture",
    description: "We map the actual workflow before designing the software, so the product fits the company instead of forcing a template.",
  },
  {
    title: "Clean product experience",
    description: "Interfaces stay simple, readable, and useful for the people who operate them every day.",
  },
  {
    title: "Automation with control",
    description: "Finance and workflow automation includes review states, exceptions, logs, and human handoff where needed.",
  },
  {
    title: "Built to evolve",
    description: "We design systems that can become products, add modules, support more users, and grow after launch.",
  },
];

export const processSteps = [
  "Discover the workflow and business rules",
  "Design the product structure and user journeys",
  "Build the application, automation, and data flows",
  "Launch, measure, and improve with real users",
];

export const systems = [
  "Requirement mapping",
  "Workflow architecture",
  "Product interface",
  "Data automation",
  "Launch and iteration",
];

export const products = [
  {
    name: "VaaniCare",
    label: "AI Front Desk",
    status: "Private beta",
    description:
      "A multilingual voice receptionist for dental clinics that answers clinic-approved questions, captures appointment intent, and routes urgent patient cases to staff.",
    image: "/images/vaanicare-ai-receptionist.png",
    demoUrl: process.env.NEXT_PUBLIC_VAANICARE_DEMO_URL || "/contact",
    repositoryUrl: "https://github.com/OmDeshmukh04/VaaniCare",
    tags: ["Voice AI", "Healthcare", "Booking", "Human handoff"],
    metrics: [
      { value: "3", label: "Languages" },
      { value: "24/7", label: "Front desk" },
      { value: "Safe", label: "Clinic-approved answers" },
    ],
    workflow: [
      "Patient asks in English, Hindi, or Marathi",
      "AI qualifies treatment intent and urgency",
      "Clinic receives a clean booking or handoff request",
    ],
  },
];

export const proof = [
  {
    title: "Financial reconciliation automation",
    description: "Matching logic, exception queues, clean exports, and audit-ready outputs.",
  },
  {
    title: "Financial report automation",
    description: "Recurring summaries, dashboards, and structured report packs for finance teams.",
  },
  {
    title: "Custom SaaS and apps",
    description: "Business-specific portals, mobile flows, and operational modules built around real users.",
  },
];

export const stats = [
  { value: "SaaS", label: "Custom platforms" },
  { value: "Apps", label: "Web and mobile" },
  { value: "Recon", label: "Financial matching" },
  { value: "Reports", label: "Automated outputs" },
];

export const services = [
  {
    title: "Scope",
    description: "Map the requirement, users, workflow, data, and launch plan.",
    icon: "onboarding",
  },
  {
    title: "Build",
    description: "Design and develop the SaaS, app, automation, or reporting system.",
    icon: "custom",
  },
  {
    title: "Launch",
    description: "Prepare the system for users, feedback, iteration, and product growth.",
    icon: "support",
  },
  {
    title: "Automate",
    description: "Turn repeated finance and operations work into reliable software flows.",
    icon: "training",
  },
];
