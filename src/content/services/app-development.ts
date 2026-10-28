import type { ServicePage } from "./types";

// Copy from page 6 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const appDevelopment: ServicePage = {
  slug: "app-development",
  name: "App Development",
  seo: {
    title: "Custom App Development Services | Web, Mobile, SaaS",
    description:
      "Custom app development services for web, mobile and SaaS, built around your workflow. For teams in the US, Europe, the Middle East, Africa and Asia.",
    keywords: [
      "custom app development services",
      "custom software development",
      "SaaS development",
      "enterprise application development",
      "web and mobile app development",
    ],
  },
  hero: {
    title: ["Custom App Development Services", "for Web, Mobile and SaaS"],
    description:
      "We design and build custom web, mobile and SaaS applications around how your business actually works, with one engineering team and one standard. We serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "Custom app development services, explained",
    paragraphs: [
      "Custom app development services mean building software around your workflow instead of bending your workflow around a template. That covers working out whether you need a web app, a mobile app, a SaaS product or a mix, designing the architecture, building it, and supporting it once real people use it.",
      "Most failed apps weren't badly coded. They solved the wrong problem, or used the wrong platform. Our custom app development services start with the workflow and the users, choose the simplest platform that fits, and design tenancy and billing first when it's a SaaS product, so the foundation holds when you grow.",
    ],
  },
  challenges: [
    {
      title: "Your team works around software that doesn't fit.",
      text: "Spreadsheets, email approvals and copy-paste bridge the gaps between tools that were never built for your process.",
    },
    {
      title: "You have a product idea and no engineering team.",
      text: "You need someone to decide what to build first, build it properly and stay for the second version.",
    },
    {
      title: "Your product works for one customer and strains at ten.",
      text: "Data isolation, billing and admin tools were bolted on late, and every new customer exposes another gap.",
    },
  ],
  services: {
    title: "What our custom app development services include",
    items: [
      {
        title: "Custom Web Applications",
        text: "Full-stack applications built around your actual workflow, from internal tools to customer-facing platforms.",
        tags: ["Full-stack development", "Responsive design", "API integration"],
      },
      {
        title: "Mobile Applications",
        text: "Native and cross-platform apps for people who work away from a desk, with offline handling built in.",
        tags: ["iOS and Android", "Cross-platform", "Offline-first"],
      },
      {
        title: "SaaS Platforms",
        text: "Multi-tenant products with isolated customer data, subscription billing and the admin tools you'll need at scale.",
        tags: ["Multi-tenancy", "Subscription billing", "Row-level security"],
      },
      {
        title: "Enterprise Workflow Apps",
        text: "Approval flows, portals and operations tools that replace email chains and spreadsheets.",
        tags: ["Approvals", "Role-based access", "Reporting"],
      },
      {
        title: "API and Integration",
        text: "The layer that connects your app to ERPs, databases and third-party services, built to be maintained.",
        tags: ["REST and GraphQL", "Third-party integration", "Data model design"],
      },
      {
        title: "Support and Evolution",
        text: "Monitoring, fixes and new features after launch, scoped to how the product is actually used.",
        tags: ["Monitoring", "Maintenance", "Iteration"],
      },
    ],
  },
  approach: {
    title: "How we build software that fits",
    paragraphs: [
      "We start with the workflow, not the technology. Who uses the app, from where and doing what decides whether it's a web app, a mobile app, a SaaS product or a mix.",
      "SaaS gets its foundations first. Tenancy, billing and data isolation are designed before the first screen, because they're expensive to retrofit.",
      "We test against real usage, not a single demo account. Real roles, real data volumes and real connection conditions find the problems early.",
      "We ship our own software the same way. EICE SmartFit plans container loads in the browser, and EICE Ops runs a help desk with live SLA tracking.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We learn the workflow and whether this is a web, mobile or SaaS problem, or a mix.",
    },
    {
      title: "Define",
      text: "We scope the platform and architecture that fits, not a default technology choice.",
    },
    {
      title: "Design",
      text: "We design the system, including tenancy and billing for a SaaS build, before UI work starts.",
    },
    {
      title: "Product Development",
      text: "We build and validate against real usage patterns.",
    },
    {
      title: "Delivery",
      text: "We deploy with monitoring and a support plan scoped to how the product will be used.",
    },
  ],
  industries: [
    {
      title: "Engineering and energy software",
      text: "Quote and sizing tools, simulation front ends and cloud-based design platforms for equipment makers and operators.",
    },
    {
      title: "Legal and professional services",
      text: "Secure portals where outside firms and clients act on documents without becoming internal users.",
    },
    {
      title: "Hospitality and logistics",
      text: "Booking, dispatch and field apps that sit beside the platforms already running operations.",
    },
  ],
  regions: {
    title: "Why custom app development services matter where you work",
    intro:
      "An app that launches well in one country can fail an audit, a procurement review or a user test in another. Accessibility rules, security expectations, languages and devices all change by region, so the build has to start from where your users are. Here's what that looks like in each one.",
    items: [
      {
        name: "United States",
        text: "US buyers face accessibility claims under the ADA, which courts and plaintiffs measure against WCAG 2.1 AA, plus state privacy laws and customers who ask for security evidence before they sign. For you, that means an app built accessible and private from the start. We design to WCAG 2.1 AA, keep customer data isolated and document how the app handles it, so the first enterprise security review doesn't stall a deal.",
      },
      {
        name: "Europe",
        text: "Since 28 June 2025 the European Accessibility Act has applied to consumer-facing apps and services sold in the EU, including by companies outside it, and it points to EN 301 549, which builds on WCAG 2.1 AA. The Cyber Resilience Act adds security duties for products with digital elements. For you, that means accessibility and security are launch requirements, not polish. We build to WCAG 2.1 AA and document the app's security and how vulnerabilities get handled.",
      },
      {
        name: "Middle East",
        text: "Apps in the Gulf often run in Arabic and English, which means right-to-left layouts, mixed-direction text and testing both. Data localization rules in Saudi Arabia and the UAE also decide where the backend can run. For you, that means a bilingual design from the first wireframe and hosting in a regional cloud. We build and test both layouts and pick a region that meets your data rules.",
      },
      {
        name: "Africa",
        text: "Users in Africa are mobile-first, often on modest devices and variable connections, and each country has its own data protection law. For you, that means an app that stays usable on a slow link, light enough for modest phones and hosted where the law and latency suit. We design for sync and weak signal from the start and map each country's rules before we choose hosting.",
      },
      {
        name: "Asia",
        text: "Asia isn't one market. Chat and payment habits differ by country, scripts range from Devanagari to Japanese to Korean, and India's data protection rules phase in through 2027. For you, that means localizing beyond translation: text input, layouts, channels and consent. We scope the countries first, then build one core product that localizes cleanly.",
      },
    ],
    closing:
      "For every custom app development services engagement we start by asking who will use the app, where, and under which rules.",
  },
  delivered: {
    title: "Software built in Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. Clients in each region on this page get one accountable team, shared documentation and working sessions that fit their time zone. For our custom app development services, that includes hosting in the region your users and your data rules call for.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "Web and SaaS",
        items: "React · Next.js · Node.js · .NET",
      },
      {
        label: "Data",
        items: "PostgreSQL · Row-level security · Redis",
      },
      {
        label: "Billing",
        items: "Stripe · Chargebee integration",
      },
      {
        label: "Hosting and scale",
        items: "AWS · Azure · Kubernetes",
      },
    ],
  },
  cta: {
    title: "Planning custom app development services? Let's talk.",
    text: "If you're planning custom app development services, we'd like to hear what your team is working around today. Tell us who needs the app, and we'll tell you honestly what to build first.",
  },
};
