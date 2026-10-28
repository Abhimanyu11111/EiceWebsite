import type { ServicePage } from "./types";

// Copy from page 11 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const appConsulting: ServicePage = {
  slug: "app-consulting",
  name: "App Consulting",
  seo: {
    title: "Software Consulting Services | Build vs Buy Advice",
    description:
      "Software consulting services: architecture review, build-or-buy analysis and legacy assessment. For teams in the US, Europe, Middle East, Africa and Asia.",
    keywords: [
      "software consulting services",
      "software architecture consulting",
      "technology consulting",
      "legacy application assessment",
      "build vs buy analysis",
      "IT consulting services",
    ],
  },
  hero: {
    title: ["Software Consulting Services", "Before You Commit to a Build"],
    description:
      "We review your architecture, weigh build against buy and assess your legacy applications before you spend on a build. We serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "Software consulting services, explained",
    paragraphs: [
      "Software consulting services give you an independent view before money is committed. Is the architecture sound? Should you build or buy? Which of your existing applications are safe to leave alone, and which are quietly becoming a risk? It's advice you can act on, written so a board can read it.",
      "Most expensive software mistakes are decided in the first month. Our software consulting services review the architecture and the options, put numbers on total cost of ownership and give you a sequenced roadmap, so you start building, buying or modernizing with the order of work already argued out. The result is a decision your board can read in one sitting.",
    ],
  },
  challenges: [
    {
      title: "You're about to sign a large build contract.",
      text: "The proposal looks reasonable, but nobody independent has checked the architecture or the alternatives.",
    },
    {
      title: "You inherited applications nobody fully understands.",
      text: "They run the business, the people who built them have gone, and every change feels risky.",
    },
    {
      title: "Every vendor tells you to buy their platform.",
      text: "You need someone to compare the options on cost and fit, not on who's selling.",
    },
  ],
  services: {
    title: "What our software consulting services include",
    items: [
      {
        title: "Technology Strategy and Roadmapping",
        text: "A roadmap tied to real business priorities, sequencing which application investments matter now and which can wait.",
        tags: ["Technology roadmap", "Investment priorities", "Business alignment"],
      },
      {
        title: "Architecture and Engineering Advisory",
        text: "An independent review of your current or proposed architecture, showing where it will support growth and where it's a constraint.",
        tags: ["Architecture review", "Scalability", "Engineering practice"],
      },
      {
        title: "Legacy Application Assessment",
        text: "An evaluation of your application portfolio: what's safe to leave, what's a modernization priority and what's quietly becoming a risk.",
        tags: ["Portfolio review", "Modernization priorities", "Risk assessment"],
      },
      {
        title: "Build or Buy Analysis",
        text: "A side-by-side comparison of custom development and off-the-shelf platforms on cost, fit and long-term ownership.",
        tags: ["Vendor evaluation", "Custom versus platform", "Total cost of ownership"],
      },
      {
        title: "Total Cost Modeling",
        text: "Multi-year cost models so a decision rests on lifetime cost, not on the first invoice.",
        tags: ["TCO models", "Licensing", "Run costs"],
      },
      {
        title: "Decision Records",
        text: "Architecture decision records and a written roadmap, so the reasoning survives after the engagement.",
        tags: ["Decision records", "Roadmap", "Documentation"],
      },
    ],
  },
  approach: {
    title: "How we advise",
    paragraphs: [
      "We tell you when the answer is not to build. Our advice includes buying an off-the-shelf platform whenever that's the better fit.",
      "We put numbers on it. Total cost of ownership over several years usually changes the answer.",
      "We write decisions down. Architecture decision records and a roadmap mean the reasoning stays with your team.",
      "If the answer is to build, we can do that too, and our custom app development team picks up from the roadmap.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We review your applications, architecture and the business goals behind them.",
    },
    {
      title: "Define",
      text: "We agree the decisions that need making and the criteria for making them.",
    },
    {
      title: "Design",
      text: "We model the options, including cost, risk and migration effort.",
    },
    {
      title: "Product Development",
      text: "We test the recommendation against a real slice of your estate before you commit.",
    },
    {
      title: "Delivery",
      text: "We hand over the roadmap, the cost model and the decision records, and stay available to answer questions.",
    },
  ],
  industries: [
    {
      title: "Before a large build",
      text: "An independent check of the architecture and the alternatives while changing course is still cheap.",
    },
    {
      title: "Before a modernization program",
      text: "An assessment of which applications to modernize first, which to retire and which to leave alone.",
    },
    {
      title: "When you inherit systems",
      text: "After a merger, a leadership change or a team departure, a clear picture of what you actually run.",
    },
  ],
  regions: {
    title: "Why software consulting services matter where you work",
    intro:
      "The build-or-buy answer depends on the rules, the cloud options and the vendors available where you operate. Regulation now reaches into your supplier choices, and national programs shape what's sensible. Here's how each region changes the advice.",
    items: [
      {
        name: "United States",
        text: "Legacy systems are a known problem in the US: the government's own auditors have flagged decades-old systems for years, and large enterprises carry the same risk quietly. For you, that means a decision about what to modernize and in what order, made before a failure makes it for you. We assess the portfolio, rank applications by risk and cost, and give you a sequence your finance team can fund.",
      },
      {
        name: "Europe",
        text: "DORA requires financial entities to manage ICT third-party risk, including exit strategies, and the EU Data Act gives customers rights when switching cloud providers. For you, that means vendor choices that include a way out. We evaluate platforms on lock-in and exit cost as well as on features and price, and document the exit path alongside the recommendation.",
      },
      {
        name: "Middle East",
        text: "National transformation programs in the UAE and Saudi Arabia push digital projects, and data rules often decide whether a platform can be used at all. For you, that means build-or-buy choices that take hosting and data residency into account from the start. We check each option against where the data must live and the regional cloud options before comparing price.",
      },
      {
        name: "Africa",
        text: "The African Union's Digital Transformation Strategy for 2020 to 2030 sets the direction, and many organizations are adopting cloud-based and mobile-first systems instead of upgrading old ones. For you, that means choosing platforms that fit your connectivity, your skills and each country's data rules. We weigh the options against those constraints and map the data rules country by country.",
      },
      {
        name: "Asia",
        text: "Japan's industry ministry has warned for years about the risks of aging core systems, India's Digital India program and Singapore's Smart Nation push both reward modern platforms, and India's data protection rules phase in through 2027. For you, that means a modernization order that reflects both risk and regulation. We rank applications by both and show which move first.",
      },
    ],
    closing:
      "For all our software consulting services we start by asking which systems carry the most risk where you operate, and what it would cost to leave them alone.",
  },
  delivered: {
    title: "Advice from Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. Clients in every region on this page work with one accountable team and shared documentation, with workshops set around local hours. For our software consulting services, that means advisors who can hand the roadmap to the engineers who'd build it.",
  },
  technology: {
    title: "How we evaluate",
    rows: [
      {
        label: "Architecture review",
        items: "Cloud-native, microservices and monolith evaluation frameworks",
      },
      {
        label: "Cost analysis",
        items: "Total cost of ownership modeling",
      },
      {
        label: "Platform evaluation",
        items: "Vendor and off-the-shelf platform assessment",
      },
      {
        label: "Documentation",
        items: "Architecture decision records · Technology roadmaps",
      },
    ],
  },
  cta: {
    title: "Planning software consulting services? Let's talk.",
    text: "If you're planning software consulting services, we'd like to hear what decision is on the table. Tell us what you're thinking of building, buying or retiring, and we'll tell you honestly what we'd check first.",
  },
};
