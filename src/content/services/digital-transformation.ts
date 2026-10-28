import type { ServicePage } from "./types";

// Copy from page 15 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const digitalTransformation: ServicePage = {
  slug: "digital-transformation",
  name: "Digital Transformation",
  seo: {
    title: "Digital Transformation Services | Modernization",
    description:
      "Digital transformation services: legacy modernization, process automation and reporting. For teams in the US, Europe, the Middle East, Africa and Asia.",
    keywords: [
      "digital transformation services",
      "legacy system modernization",
      "business process automation",
      "application modernization",
      "Power Platform development",
    ],
  },
  hero: {
    title: ["Digital Transformation Services", "That Retire the Spreadsheet"],
    description:
      "We modernize legacy systems and automate the manual, email-driven processes around them, then measure whether the change is working. We serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "Digital transformation services, explained",
    paragraphs: [
      "Digital transformation services mean replacing the fragile parts of how a business runs: legacy systems nobody can safely change, approvals routed by email, data retyped between tools. The work covers modernization, process automation, reporting and the change management that gets people to use the new way.",
      "Technology is usually the easier half. Our digital transformation services pair the build with a plan for adoption, put reporting on the new process so leaders can see whether it works, and choose automation where it removes real work, not where it only looks modern. We measure the result against the cost the old process had.",
    ],
  },
  challenges: [
    {
      title: "Approvals still travel by email.",
      text: "Requests wait in inboxes, nobody knows where a document is, and chasing signatures is somebody's real job.",
    },
    {
      title: "A system everyone depends on can't be safely changed.",
      text: "It does one important thing, nobody fully understands it, and every change feels like a risk.",
    },
    {
      title: "Leaders can't see whether the new process works.",
      text: "The tool went live, but there's no reporting, so success is a feeling instead of a number.",
    },
  ],
  services: {
    title: "What our digital transformation services include",
    items: [
      {
        title: "Legacy System Modernization",
        text: "Moving off technology that can't be changed safely or can't connect to the rest of the business.",
        tags: ["Legacy migration", "Modernization", "Integration architecture"],
      },
      {
        title: "Business Process Automation",
        text: "Replacing multi-step manual work, such as email approvals, retyped data and chased signatures, with a process that enforces itself.",
        tags: ["Workflow automation", "Signature routing", "Process redesign"],
      },
      {
        title: "Data-Driven Operations",
        text: "Reporting on the new process, so leaders see whether it's working instead of assuming it is.",
        tags: ["Operational reporting", "Process analytics", "Decision support"],
      },
      {
        title: "Change Management and Adoption",
        text: "Planning for the harder half: getting people to use the new process instead of quietly reverting to the old spreadsheet.",
        tags: ["Adoption planning", "Training", "Rollout"],
      },
      {
        title: "Integration Architecture",
        text: "Connecting new and old systems so data moves once, instead of being retyped at every handoff.",
        tags: ["APIs", "System integration", "Data flow design"],
      },
      {
        title: "Power Platform Solutions",
        text: "Microsoft Power Apps, Power Automate and Power Pages where a governed, rapid build beats custom code.",
        tags: ["Power Apps", "Power Automate", "Power Pages"],
      },
    ],
  },
  approach: {
    title: "How we modernize without breaking the business",
    paragraphs: [
      "We start with the process, not the platform. The right technology becomes obvious once the process is clear.",
      "We automate the whole flow, not one step. A connected system covering intake, assignment, deadlines and reporting beats four separate fixes that don't talk to each other.",
      "We plan for adoption from the start. People drift back to spreadsheets unless the new way is easier and somebody owns it.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We map the current process, its systems and what it costs in time and errors.",
    },
    {
      title: "Define",
      text: "We agree what the new process must do and how success will be measured.",
    },
    {
      title: "Design",
      text: "We design the workflow, the integrations and the reporting together.",
    },
    {
      title: "Product Development",
      text: "We build it on one process first and prove it before widening.",
    },
    {
      title: "Delivery",
      text: "We roll out with training and adoption support, and report on whether it's working.",
    },
  ],
  industries: [
    {
      title: "Legal operations",
      text: "Intake, matter management and agreement signing moved from inboxes to auditable workflows.",
    },
    {
      title: "Finance and approvals",
      text: "Purchase, expense and contract approvals that run on a defined route with a record of every decision.",
    },
    {
      title: "Engineering and energy",
      text: "Desktop engineering tools modernized onto cloud platforms that teams share.",
    },
  ],
  regions: {
    title: "Why digital transformation services matter where you work",
    intro:
      "Every region is pushing organizations to modernize, but the pressure comes from different places: audits in one, national programs in another, shrinking workforces in a third. The project that fits one can miss in the next. Here's how each region shapes the work.",
    items: [
      {
        name: "United States",
        text: "Critical US systems still run on decades-old technology, which government auditors have flagged repeatedly, and customers and regulators expect to see who approved what. For you, that means modernization that leaves a record. We replace email approvals with workflows that log every step, so the audit trail is a by-product of the process, not a separate task.",
      },
      {
        name: "Europe",
        text: "DORA and NIS2 make operational resilience a legal duty for many European organizations, and GDPR governs the personal data that moves through every workflow. For you, that means transformation projects with resilience and data handling designed in. We build recovery paths and access controls into new workflows and document them for your compliance team.",
      },
      {
        name: "Middle East",
        text: "Saudi Arabia's Vision 2030 and the UAE's digital government programs push public and private organizations to digitize, and data localization rules shape which platforms they can use. For you, that means projects that keep pace with national programs without breaking data rules. We design for regional hosting and for Arabic and English users from the start.",
      },
      {
        name: "Africa",
        text: "The African Union's Digital Transformation Strategy for 2020 to 2030 sets the continental direction, and many organizations move straight to cloud and mobile systems, while each country keeps its own data protection law. For you, that means modernizing in steps that fit your connectivity and skills. We begin with the process that costs the most and map each country's data rules first.",
      },
      {
        name: "Asia",
        text: "Japan's industry ministry has warned for years about the cost of aging core systems, India's Digital India program and Singapore's Smart Nation reward modernization, and shrinking workforces in Japan and Korea make automation urgent. For you, that means prioritizing the systems where manual work is most expensive. We rank processes by cost and risk and modernize in that order.",
      },
    ],
    closing:
      "Every digital transformation services project starts with one process and one number: what it costs you today.",
  },
  delivered: {
    title: "Transformation led from Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. Teams in every region on this page get one accountable team and shared documentation. For our digital transformation services, that includes rolling out in waves timed to your business calendar.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "Workflow and automation",
        items: "Microsoft Power Platform: Power Automate · Power Apps · Power Pages",
      },
      {
        label: "Application layer",
        items: "React · Node.js · .NET",
      },
      {
        label: "Data and reporting",
        items: "Power BI · Azure Synapse",
      },
      {
        label: "Cloud and integration",
        items: "Azure · AWS",
      },
    ],
  },
  cta: {
    title: "Planning digital transformation services? Let's talk.",
    text: "If you're planning digital transformation services, we'd like to hear which process you'd retire first. Tell us what your team still does by hand, and we'll tell you honestly what to fix first.",
  },
};
