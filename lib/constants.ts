export const siteConfig = {
  name: "PragyaFlow",
  tagline: "Business-critical software systems.",
  description:
    "Custom SaaS platforms, web apps, mobile apps, reconciliation automation, and reporting systems built around real business workflows.",
  url: "https://pragyaflow.com",
};

export const navLinks = [
  { label: "Solutions", href: "#capabilities" },
  { label: "Products", href: "#products" },
  { label: "Delivered Work", href: "#proof" },
  { label: "Contact", href: "#contact" },
];

export const contactInfo = {
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@pragyaflow.com",
  emailHref: "mailto:hello@pragyaflow.com",
  linkedin: "https://www.linkedin.com/company/pragyaflow",
  facebook: "https://www.facebook.com/pragyaflow",
};

export const footerGroups = [
  {
    title: "Solutions",
    links: [
      { label: "SaaS Platforms", href: "#capabilities" },
      { label: "Mobile Apps", href: "#capabilities" },
      { label: "Reconciliation", href: "#capabilities" },
      { label: "Report Automation", href: "#capabilities" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Products", href: "#products" },
      { label: "Delivered Work", href: "#proof" },
      { label: "Start a Project", href: "#contact" },
    ],
  },
];

export const capabilities = [
  {
    title: "SaaS Platforms",
    kicker: "Product systems",
    description: "Client portals, admin consoles, roles, subscriptions, and workflow modules.",
  },
  {
    title: "Mobile Apps",
    kicker: "Field and customer apps",
    description: "Android and iOS-ready experiences for approvals, requests, and operational work.",
  },
  {
    title: "Reconciliation",
    kicker: "Finance automation",
    description: "Bank, ledger, gateway, and transaction matching with exception review.",
  },
  {
    title: "Reports",
    kicker: "Scheduled intelligence",
    description: "Dashboards, exports, and recurring financial reporting pipelines.",
  },
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
      "A multilingual voice receptionist for dental clinics that answers clinic-approved questions, captures appointment intent, and routes urgent cases to staff.",
    image: "/images/vaanicare-ai-receptionist.png",
    demoUrl: process.env.NEXT_PUBLIC_VAANICARE_DEMO_URL || "#contact",
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
    description: "Matching logic, review queues, clean exports, and audit-ready outputs.",
  },
  {
    title: "Financial report automation",
    description: "Recurring finance summaries, dashboards, and structured report packs.",
  },
  {
    title: "Custom SaaS and apps",
    description: "Business-specific portals, mobile flows, and operational software modules.",
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
