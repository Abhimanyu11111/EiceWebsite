import type { ServicePage } from "./types";

// Copy from page 12 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const cloud: ServicePage = {
  slug: "cloud",
  name: "Cloud Services",
  seo: {
    title: "Cloud Migration Services | AWS, Azure, Google Cloud",
    description:
      "Cloud migration services that plan the destination first, then manage cost and security. For teams in the US, Europe, the Middle East, Africa and Asia.",
    keywords: [
      "cloud migration services",
      "AWS migration",
      "Azure migration",
      "cloud cost optimization",
      "managed cloud services",
      "hybrid cloud",
    ],
  },
  hero: {
    title: ["Cloud Migration Services", "That Plan the Destination First"],
    description:
      "We move workloads to AWS, Azure and Google Cloud with an architecture for where they land, then manage and cost-control the environment afterward. We serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "Cloud migration services, explained",
    paragraphs: [
      "Cloud migration services cover moving applications and data to the cloud and running them well once there: assessing what to move, choosing the pattern for each workload, cutting over safely and keeping cost, security and configuration under control afterward.",
      "A lift-and-shift that ignores cloud patterns usually just moves the same inefficiencies somewhere more expensive. Our cloud migration services plan the destination architecture first, build the environment as code so it can be reproduced, and keep watching cost after the move, because the real work starts when the migration ends. Security and compliance settings are part of the build, not a review that follows it.",
    ],
  },
  challenges: [
    {
      title: "Your data center contract is ending and the clock is running.",
      text: "You need to move, but nobody has decided what moves first, or how to cut over without downtime.",
    },
    {
      title: "Your cloud bill keeps rising and nobody can say why.",
      text: "Resources were added for projects that finished, and nobody owns the cost.",
    },
    {
      title: "You're moving to the cloud, but your data has to stay in-country.",
      text: "Regulation limits where data can go, and you need a design that respects it.",
    },
  ],
  services: {
    title: "What our cloud migration services include",
    items: [
      {
        title: "Cloud Migration",
        text: "Moving workloads to AWS, Azure or Google Cloud with a plan for the destination, not just a copy of what existed on-premise.",
        tags: ["Migration strategy", "Multi-cloud and hybrid", "Cutover planning"],
      },
      {
        title: "Infrastructure as Code",
        text: "Environments defined in Terraform, so they're reproducible and version-controlled instead of remembered by one person.",
        tags: ["Terraform", "Reproducible environments", "Configuration control"],
      },
      {
        title: "Security and Compliance",
        text: "Access control, encryption and network segmentation configured as part of the infrastructure, not reviewed after it's live.",
        tags: ["Access control", "Encryption", "Network segmentation"],
      },
      {
        title: "Cost Optimization",
        text: "Ongoing rightsizing and waste removal, because cloud cost drifts upward by default unless someone watches it.",
        tags: ["Rightsizing", "Cost visibility", "Waste removal"],
      },
      {
        title: "Hybrid and Multi-Cloud",
        text: "Designs that span on-premise and more than one provider, where data rules or resilience call for it.",
        tags: ["Hybrid design", "Multi-cloud", "Portability"],
      },
      {
        title: "Microsoft Cloud Solutions",
        text: "SharePoint Online and Power Platform solutions on Microsoft's cloud, from document workflows to operational apps.",
        tags: ["SharePoint Online", "Power Platform", "Microsoft cloud"],
      },
    ],
  },
  approach: {
    title: "How we run a migration",
    paragraphs: [
      "We design the destination before we move anything. Each workload gets the pattern that suits it, whether that's rehost, replatform or refactor.",
      "Everything is code. Terraform defines the environment, so a second region or a rebuilt environment is a run, not a project.",
      "Cost gets watched after go-live. Rightsizing is a routine, not an audit, so the bill follows the use.",
      "The same flexibility shows in our products. iSyncDrive runs in the cloud, on-premise or hybrid, depending on where your data has to stay.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We inventory your workloads, dependencies and data rules.",
    },
    {
      title: "Define",
      text: "We choose the migration pattern for each workload and the region and provider for each dataset.",
    },
    {
      title: "Design",
      text: "We design the landing zone, security controls and cost model as code.",
    },
    {
      title: "Product Development",
      text: "We migrate in waves, starting with lower-risk workloads, and test each cutover.",
    },
    {
      title: "Delivery",
      text: "We hand over a documented environment and keep managing cost and configuration.",
    },
  ],
  industries: [
    {
      title: "Enterprise IT",
      text: "Moving data centers, file servers and line-of-business applications onto a cloud platform that's secure and governed.",
    },
    {
      title: "Engineering software",
      text: "Bringing desktop engineering tools to the cloud, so teams work from one platform.",
    },
    {
      title: "Microsoft-based operations",
      text: "Document and workflow solutions on SharePoint Online and Power Platform.",
    },
  ],
  regions: {
    title: "Why cloud migration services matter where you work",
    intro:
      "Cloud isn't one place. Providers have different regions in different countries, and the law decides which regions your data may use. A migration plan that ignores that can fail an audit after it succeeds technically. Here's how each region shapes the work.",
    items: [
      {
        name: "United States",
        text: "The US has the widest choice of regions and services, which makes cost the main trap: bills drift upward unless someone owns them, and customers' security reviews follow your data into the cloud. For you, that means a cost owner and an environment you can document. We set up cost visibility from day one and keep configuration in code, so a security review can read it.",
      },
      {
        name: "Europe",
        text: "AWS opened its European Sovereign Cloud in Germany in January 2026, the EU Data Act has covered switching between cloud providers since September 2025, and DORA makes financial firms manage cloud suppliers as a third-party risk, including exit plans. For you, that means a region and provider you can leave. We design for portability, document the exit path and place workloads in the EU regions your rules point to.",
      },
      {
        name: "Middle East",
        text: "AWS runs regions in Bahrain and the UAE, Azure in the UAE and Qatar, and Google Cloud in Doha and Dammam, and data localization rules in Saudi Arabia and the UAE make those regions important. For you, that means regulated workloads can stay in-country. We map which data must stay and which can use a regional cloud, then design the landing zone to match.",
      },
      {
        name: "Africa",
        text: "AWS and Azure run full regions in South Africa, Oracle plans regions in Kenya and Morocco, and AWS has a Nairobi region planned for late 2026, while each country keeps its own data protection law. For you, that means hosting where the law, latency and cost agree, and a design that can move as new regions open. We map each country's rules and build workloads to be portable.",
      },
      {
        name: "Asia",
        text: "Japan, South Korea, Singapore and India all have local regions from the major providers, and India's phased data protection rules affect which data may stay or leave. For you, that means a region strategy per country. We design one landing-zone pattern and deploy it to each region, so security and cost controls stay consistent.",
      },
    ],
    closing:
      "Every cloud migration services project starts by working out which data must stay where, then picks the provider and region to match.",
  },
  delivered: {
    title: "Cloud work from Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. In every region on this page you get one accountable team and shared documentation. For our cloud migration services, that includes scheduling cutovers in the quiet hours of the region you serve.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "Cloud platforms",
        items: "AWS · Azure · Google Cloud",
      },
      {
        label: "Infrastructure as code",
        items: "Terraform",
      },
      {
        label: "Microsoft cloud",
        items: "SharePoint Online · Power Platform",
      },
      {
        label: "Monitoring and cost",
        items: "Azure Cost Management · AWS Cost Explorer",
      },
    ],
  },
  cta: {
    title: "Planning cloud migration services? Let's talk.",
    text: "If you're planning cloud migration services, we'd like to hear what's moving and what has to stay put. Tell us about your workloads and your data rules, and we'll tell you honestly where to start.",
  },
};
