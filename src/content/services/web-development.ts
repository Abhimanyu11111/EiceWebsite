import type { ServicePage } from "./types";

// Copy from page 7 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const webDevelopment: ServicePage = {
  slug: "web-development",
  name: "Web Development",
  seo: {
    title: "Enterprise Web Development Services | Portals, APIs",
    description:
      "Enterprise web development services: portals, web apps and APIs connected to your systems. For teams in the US, Europe, the Middle East, Africa and Asia.",
    keywords: [
      "enterprise web development services",
      "custom web application development",
      "enterprise portal development",
      "customer portal development",
      "Next.js development",
      "API development",
    ],
  },
  hero: {
    title: ["Enterprise Web Development Services", "Built Around Your Workflow"],
    description:
      "We build web applications, portals and APIs that connect to the systems where your data actually lives. They're accessible, fast and built for teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "Enterprise web development services, explained",
    paragraphs: [
      "Enterprise web development services cover the browser-facing side of your business: customer portals, internal tools, partner access and the APIs behind them. The work is as much about roles, permissions and integration as it is about screens.",
      "A portal that looks finished but isn't connected to your real systems is only a brochure. Our enterprise web development services design the front end, the API layer and the data model together, build for the user roles you actually have, and keep accessibility and performance in scope from the first sprint. We also write down who can see and do what, so access reviews are quick.",
    ],
  },
  challenges: [
    {
      title: "Customers email you to do things they could do online.",
      text: "Status checks, document requests and account changes land in an inbox, and someone on your team handles each one by hand.",
    },
    {
      title: "Your partners need access, and email attachments are the workaround.",
      text: "Sharing documents and collecting signatures outside the company means chasing people, and nobody can prove who agreed to what.",
    },
    {
      title: "Your internal tools are a patchwork nobody wants to touch.",
      text: "Each one was built for a single purpose, and together they run more of the business than anything customer-facing does.",
    },
  ],
  services: {
    title: "What our enterprise web development services include",
    items: [
      {
        title: "Custom Web Applications",
        text: "Full-stack applications built around your actual workflow, not a page-builder template with your logo on it.",
        tags: ["Full-stack development", "Responsive design", "Scalable architecture"],
      },
      {
        title: "Enterprise Web Portals",
        text: "Role-based portals with different views and permissions per user type, connected to the systems that hold your data.",
        tags: ["Role-based access", "Multi-tenant design", "Backend integration"],
      },
      {
        title: "Client and Partner Self-Service",
        text: "Secure external access so clients, partner firms and vendors can review, sign or submit without a spreadsheet in between.",
        tags: ["External authentication", "Digital signature flows", "Audit history"],
      },
      {
        title: "API and Backend Development",
        text: "The application layer between the front end and your databases, ERPs and document stores, built to be maintained.",
        tags: ["REST and GraphQL", "Database design", "Integrations"],
      },
      {
        title: "Accessible, Fast Front Ends",
        text: "Interfaces built to WCAG 2.1 AA with performance in scope, so pages work for everyone and load without a wait.",
        tags: ["WCAG 2.1 AA", "Performance budgets", "Keyboard and screen reader support"],
      },
      {
        title: "Low-Code Portals",
        text: "Microsoft Power Apps and Power Pages where a rapid, governed portal beats a custom build.",
        tags: ["Power Apps", "Power Pages", "SharePoint"],
      },
    ],
  },
  approach: {
    title: "How we build web applications that last",
    paragraphs: [
      "We design the front end, the API and the data model together. Built in isolation, they drift apart, and the seams show up as bugs and slow releases.",
      "Roles and permissions come first. Who can see and do what is the hardest part to change later, so we settle it before the screens.",
      "Accessibility and speed are part of the definition of done. We check them every sprint, not in an audit at the end.",
      "We use the same approach in our own web platforms. EICE Rise runs hotel and club operations in one system, and iSyncDrive gives teams governed file access.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We learn your workflow, your user types and the systems the application must connect to.",
    },
    {
      title: "Define",
      text: "We scope the roles and permissions, and what's worth a web application versus a simpler fix.",
    },
    {
      title: "Design",
      text: "We design the front end, API layer and data model together.",
    },
    {
      title: "Product Development",
      text: "We build and test with real user roles and real data, not one generic login.",
    },
    {
      title: "Delivery",
      text: "We deploy with monitoring and support scoped to how the application will be used.",
    },
  ],
  industries: [
    {
      title: "Legal and professional services",
      text: "Referring firms and clients review and sign agreements through a secure external portal without becoming internal users.",
    },
    {
      title: "Hospitality",
      text: "Guest booking and account management, plus staff dashboards that sit beside voice and mobile tools instead of duplicating them.",
    },
    {
      title: "Enterprise operations",
      text: "Internal web dashboards that give leadership one view of metrics now scattered across spreadsheets.",
    },
  ],
  regions: {
    title: "Why enterprise web development services matter where you work",
    intro:
      "A website or portal is the first thing a regulator, customer or auditor can test for themselves. Accessibility law, consent rules, hosting options, languages and connection speeds all change by region, and the build needs to account for them. Here's how each region shapes the work.",
    items: [
      {
        name: "United States",
        text: "ADA website lawsuits are brought mostly by private plaintiffs, courts treat WCAG 2.1 AA as the practical benchmark, and Section 508 applies to federal work. For you, that means a portal that has to be demonstrably accessible, not just well meant. We build to WCAG 2.1 AA, test with keyboard and screen readers each sprint and keep the evidence, so an accessibility complaint is something you can answer.",
      },
      {
        name: "Europe",
        text: "The European Accessibility Act has applied since 28 June 2025 to consumer-facing services such as e-commerce, online banking and transport booking, including those sold from outside the EU, and it references EN 301 549. GDPR adds consent and transfer rules. For you, that means an accessibility statement you can stand behind and consent handling that works. We build to WCAG 2.1 AA, document conformance, and design the consent flow with your data protection officer.",
      },
      {
        name: "Middle East",
        text: "Web apps in the Gulf commonly run in Arabic and English, so layouts must mirror correctly, fonts must render both scripts well and forms must handle mixed-direction text. Data rules in Saudi Arabia and the UAE also shape where the application and its data can be hosted. For you, that means designing both languages from the start and choosing a regional cloud. We build and test the bilingual interface and the hosting together.",
      },
      {
        name: "Africa",
        text: "Many users reach the web by phone on modest devices and connections, and each country has its own data protection law. For you, that means pages light enough to load on a slow link and a front end that degrades gracefully. We set a performance budget at the start, test on low-end devices and constrained networks, and map each country's data rules before choosing hosting.",
      },
      {
        name: "Asia",
        text: "Asia mixes scripts, fonts and conventions: Devanagari, Japanese, Korean and others each change layout, typography and form design, and India's data protection rules phase in through 2027. For you, that means localizing the interface properly, not just translating the text, and handling consent per country. We scope the markets first, then build one core application that localizes cleanly.",
      },
    ],
    closing:
      "Every enterprise web development services project we take on starts with where your users are, which rules apply there and how they'll reach the application.",
  },
  delivered: {
    title: "Web platforms built in Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. Wherever you sit among the regions on this page, you get one accountable team, shared documentation and meetings set around your hours. For our enterprise web development services, that includes choosing hosting in the region your data rules point to.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "Front end",
        items: "React · Next.js · TypeScript",
      },
      {
        label: "Back end",
        items: "Node.js · .NET · Python",
      },
      {
        label: "Low-code portals",
        items: "Microsoft Power Apps · Power Pages",
      },
      {
        label: "Data and hosting",
        items: "PostgreSQL · SQL Server · AWS · Azure",
      },
    ],
  },
  cta: {
    title: "Planning enterprise web development services? Let's talk.",
    text: "If you're planning enterprise web development services, we'd like to hear who needs access and to what. Tell us about your users and systems, and we'll tell you honestly what to build and what to keep simple.",
  },
};
