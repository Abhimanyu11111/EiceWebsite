import type { ServicePage } from "./types";

// Copy from page 9 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const uiUx: ServicePage = {
  slug: "ui-ux",
  name: "UI/UX Consulting",
  seo: {
    title: "UI/UX Consulting Services | UX Audits and Research",
    description:
      "UI/UX consulting services: research, UX audits and prototypes that fix real usability problems. For teams in the US, Europe, Middle East, Africa and Asia.",
    keywords: [
      "UI/UX consulting services",
      "UX audit services",
      "UX research",
      "enterprise UX design",
      "information architecture",
      "usability testing",
    ],
  },
  hero: {
    title: ["UI/UX Consulting Services", "That Fix Real Usability Problems"],
    description:
      "We run research, audits and design work that find out why people struggle with your product, and fix it before development time is spent. We serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "UI/UX consulting services, explained",
    paragraphs: [
      "UI/UX consulting services cover the thinking before and around design: researching how people actually use your product, auditing what's confusing, organizing content and navigation, and validating the structure with prototypes before production code is written. It's about usability more than visual polish.",
      'Recurring support questions like "where do I find this?" usually point to structure, not documentation. Our UI/UX consulting services start with evidence from real users, rank the problems by impact and hand your team recommendations they can act on, instead of a subjective opinion on style. Findings arrive prioritized, so the first sprint after the audit has a clear target.',
    ],
  },
  challenges: [
    {
      title: 'Support keeps hearing "where do I find this?"',
      text: "The answer is in the product, but people can't find it, and documentation won't fix a structure problem.",
    },
    {
      title: "You're about to bolt another feature onto a crowded product.",
      text: "Years of additions have left no coherent structure, and each new feature makes it worse.",
    },
    {
      title: "Designers and developers are working from opinions.",
      text: "Everyone has a view on what users want, and nobody has watched a user try.",
    },
  ],
  services: {
    title: "What our UI/UX consulting services include",
    items: [
      {
        title: "UX Strategy",
        text: "A roadmap grounded in your business goals and user needs, not a generic design system applied to everything.",
        tags: ["UX roadmap", "Business alignment", "Priorities"],
      },
      {
        title: "User Research",
        text: "Interviews, surveys, usability testing and analytics that replace assumptions with evidence of how people behave.",
        tags: ["Interviews", "Usability testing", "Behavior analytics"],
      },
      {
        title: "Information Architecture",
        text: "Content and navigation organized so people find what they need without hunting, the structure that decides how intuitive a product feels.",
        tags: ["Navigation", "Content structure", "User flows"],
      },
      {
        title: "Wireframing and Prototyping",
        text: "Interactive prototypes that test a design's structure and behavior before any production code is written.",
        tags: ["Wireframes", "Interactive prototypes", "Early validation"],
      },
      {
        title: "UX Audits",
        text: "An independent review of your current product with specific usability problems and prioritized recommendations.",
        tags: ["Heuristic evaluation", "Usability audit", "Prioritized fixes"],
      },
      {
        title: "Continuous Improvement",
        text: "Ongoing refinement as users and expectations change, because needs differ two years after launch.",
        tags: ["Iterative design", "Post-launch review", "Design system upkeep"],
      },
    ],
  },
  approach: {
    title: "How we run a UX engagement",
    paragraphs: [
      "We watch people use the product before we judge it. Observation and usability tests come before any redesign.",
      "We rank problems by impact. A long list is useless, so findings come prioritized, with the reason each one matters.",
      "We leave your team able to carry on. The handoff includes a design system and documentation, not just screens.",
      "Our own products reflect the same thinking. AskEICE answers over WhatsApp with no new app, login or learning curve, and EICE SmartFit runs in the browser with nothing to install.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We research how people use, or struggle with, your product today.",
    },
    {
      title: "Define",
      text: "We scope the usability problems worth solving, ranked by real impact.",
    },
    {
      title: "Design",
      text: "We build the information architecture and wireframes, validated with prototypes.",
    },
    {
      title: "Product Development",
      text: "We refine designs against usability testing, not one internal review.",
    },
    {
      title: "Delivery",
      text: "We hand off with a design system and documentation your team can maintain.",
    },
  ],
  industries: [
    {
      title: "Product teams",
      text: "Launching a feature or product and needing the structure validated before development time is spent on the wrong flow.",
    },
    {
      title: "Support and customer success",
      text: "Repeated tickets about finding things are usually an information-architecture problem, and an audit finds the actual cause.",
    },
    {
      title: "Legacy modernization teams",
      text: "Enterprise products with years of added features benefit from an audit before another one is bolted on.",
    },
  ],
  regions: {
    title: "Why UI/UX consulting services matter where you work",
    intro:
      "Good design is local. What counts as clear, accessible and trustworthy changes with the law, the language and the device in your user's hand, and a design tested in one country can fail in another. Here's how each region shapes the work.",
    items: [
      {
        name: "United States",
        text: "ADA accessibility claims in the US are measured mostly against WCAG 2.1 AA, and enterprise buyers increasingly ask for accessibility conformance reports in procurement. For you, that means accessibility is a design requirement with evidence behind it. We include an accessibility review in every audit, test flows with assistive technology and give you findings your team can fix and your buyers can read.",
      },
      {
        name: "Europe",
        text: "The European Accessibility Act has applied since 28 June 2025 to consumer-facing services, and it expects an accessibility statement against EN 301 549. With 24 official languages, copy length and layout also vary widely. For you, that means usability and accessibility reviewed together. Our audits check conformance against WCAG 2.1 AA, flag layouts that break in longer languages and help you draft the evidence your statement needs.",
      },
      {
        name: "Middle East",
        text: "Many products in the Gulf serve Arabic and English readers, so interfaces must mirror correctly, icons and progress indicators must follow reading direction, and typography must suit both scripts. For you, that means design that works in both directions, not a mirrored afterthought. We review and prototype both versions and test with real readers of each language.",
      },
      {
        name: "Africa",
        text: "Users are mobile-first, often on modest devices and slow connections, and a product may need to serve several languages. For you, that means design decisions that favor small screens, light pages and plain language. We test prototypes with real users on real devices, because assumptions made in an office rarely survive a weak connection.",
      },
      {
        name: "Asia",
        text: "Conventions differ widely: name and address formats, input methods, scripts from Devanagari to Japanese to Korean, and the chat and app habits people already know. For you, that means localizing the experience, not just the words. We run research in each market you serve and design from what we find, rather than from one country's conventions.",
      },
    ],
    closing:
      "Every UI/UX consulting services engagement starts by finding out who your users are in each region and what they already expect.",
  },
  delivered: {
    title: "Design work from Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. In every region on this page you work with one accountable team and shared documentation. For our UI/UX consulting services, that includes running research sessions at times your users and stakeholders can attend.",
  },
  technology: {
    title: "Tools we use",
    rows: [
      {
        label: "Design and prototyping",
        items: "Figma · Adobe XD",
      },
      {
        label: "User research",
        items: "UserTesting · Hotjar",
      },
      {
        label: "Design systems",
        items: "Storybook",
      },
      {
        label: "Analytics",
        items: "Google Analytics · Mixpanel",
      },
    ],
  },
  cta: {
    title: "Planning UI/UX consulting services? Let's talk.",
    text: "If you're planning UI/UX consulting services, we'd like to hear where people get stuck in your product. Tell us what support keeps hearing, and we'll tell you honestly whether it's a design problem.",
  },
};
