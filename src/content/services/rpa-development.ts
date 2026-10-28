import type { ServicePage } from "./types";

// Copy from page 16 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const rpaDevelopment: ServicePage = {
  slug: "rpa-development",
  name: "RPA Development",
  seo: {
    title: "RPA Development Services | Power Automate Bots",
    description:
      "RPA development services for systems with no API, with error handling and monitoring built in. For teams in the US, Europe, Middle East, Africa and Asia.",
    keywords: [
      "RPA development services",
      "robotic process automation",
      "Power Automate development",
      "unattended automation",
      "process automation",
      "intelligent intake",
    ],
  },
  hero: {
    title: ["RPA Development Services", "Built for Production, Not Demos"],
    description:
      "We build bots that automate work inside systems with no API, with error handling and monitoring built for real operations. We serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "RPA development services, explained",
    paragraphs: [
      "RPA development services mean building software bots that do repetitive work on screen the way a person would: opening applications, reading data and updating records. They're the right tool when a system has no clean API, and the wrong one when it does.",
      "A bot that works in a demo and breaks on the first unusual record is worse than no bot. Our RPA development services build for production: the same bot across development, test and live environments, error handling that flags a problem instead of failing silently, and triggers that process only what needs attention. If a clean integration exists, we'll recommend it instead.",
    ],
  },
  challenges: [
    {
      title: "People copy data between systems all day.",
      text: "Records get retyped from one screen into another, and the errors show up at the end of the month.",
    },
    {
      title: "The system you need to automate has no API.",
      text: "It's old, closed or both, and the only way in is the same screen your staff use.",
    },
    {
      title: "Your last bot broke and nobody noticed.",
      text: "It stopped on an unusual record, ran no more, and the backlog grew silently.",
    },
  ],
  services: {
    title: "What our RPA development services include",
    items: [
      {
        title: "UI-Level Process Automation",
        text: "Bots that work through an application's interface, opening sessions, reading data and updating records where no API exists.",
        tags: ["Browser and desktop automation", "Interface-level integration", "Legacy systems"],
      },
      {
        title: "Database-Driven Triggers",
        text: "Automation that checks a database for new or pending records and processes only what needs attention.",
        tags: ["SQL-driven triggers", "Incremental processing", "Queue-based runs"],
      },
      {
        title: "Scheduled and Unattended Operation",
        text: "Bots that run on a schedule without a person starting them, attended or unattended as the process needs.",
        tags: ["Scheduled runs", "Unattended mode", "Cloud and desktop"],
      },
      {
        title: "Multi-Environment Configuration",
        text: "The same bot deployed correctly across development, test and production, instead of three hand-edited copies.",
        tags: ["Dev, test and production", "Configuration control", "Release discipline"],
      },
      {
        title: "Error Handling and Alerting",
        text: "Failures logged, flagged and sent to a person, so a stuck bot is noticed in minutes, not weeks.",
        tags: ["Logging", "Email alerts", "Error-state flagging"],
      },
      {
        title: "Intelligent Intake",
        text: "Emails and attachments parsed into structured records, so requests enter the process without retyping.",
        tags: ["Outlook integration", "AI Builder", "Structured records"],
      },
    ],
  },
  approach: {
    title: "How we build bots that last",
    paragraphs: [
      "We check for an API first. A clean integration beats a screen bot every time, and we'll tell you when you don't need one.",
      "Bots process only what changed. A queue or a database trigger decides what runs, so nothing is reprocessed and nothing is missed.",
      "Failures are loud. A bot that stops should tell a person within minutes, with enough detail to fix it.",
      "If you want the bot to decide, not just execute, our AI agent development services can add judgment on top.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We watch the process as people do it and note every system and exception.",
    },
    {
      title: "Define",
      text: "We decide what the bot handles, what it passes to a person and whether an API would be better.",
    },
    {
      title: "Design",
      text: "We design the triggers, the error paths and the environments.",
    },
    {
      title: "Product Development",
      text: "We build and test on real records, including the unusual ones.",
    },
    {
      title: "Delivery",
      text: "We deploy with logging and alerts, and tune from the first weeks of live runs.",
    },
  ],
  industries: [
    {
      title: "Legal operations",
      text: "Intake, assignment, deadline tracking and signature routing automated end to end.",
    },
    {
      title: "Finance and back office",
      text: "Reconciliation, data entry and report preparation across systems that don't integrate.",
    },
    {
      title: "IT operations",
      text: "Routine access requests, account set-up and ticket updates handled without a person.",
    },
  ],
  regions: {
    title: "Why RPA development services matter where you work",
    intro:
      "Automation touches the records regulators care about most. The rules on personal data, audit trails and automated decisions differ by region, and so does the labor market that makes automation worth doing. Here's how each region shapes the work.",
    items: [
      {
        name: "United States",
        text: "US teams under cost pressure automate back-office work first, and auditors expect to see who or what changed a record. For you, that means bots with a trail. We write every action a bot takes to a log tied to a run, and handle credentials through your approved secrets store, so an auditor can follow a transaction from start to finish.",
      },
      {
        name: "Europe",
        text: "GDPR applies to every record a bot touches, and it restricts decisions made solely by automated means about individuals. DORA also covers the technology used by financial firms. For you, that means bots that stay within the data they need and hand decisions that affect people to a person. We scope each bot's access narrowly and build the approval step in.",
      },
      {
        name: "Middle East",
        text: "Government and banking digitization programs in the Gulf create heavy back-office volume, and data rules keep much of it in-country. Documents often arrive in Arabic and English. For you, that means bots that run inside your environment and cope with bilingual documents. We test intake on real mixed-language documents and tell you where extraction needs more work.",
      },
      {
        name: "Africa",
        text: "Banks, telecoms and other large employers lead AI and automation adoption across Africa, and each country has its own data protection law. For you, that means starting with one high-volume process and a clear owner, within each country's data rules. We map the rules first and keep the first project small enough to prove.",
      },
      {
        name: "Asia",
        text: "Shrinking workforces in Japan and South Korea make routine automation a priority, India's large services sector runs high-volume back-office work, and India's data protection rules phase in through 2027. For you, that means bots that remove repetitive work and respect consent and retention rules. We scope each process's data first and build retention and access limits into the bot.",
      },
    ],
    closing:
      "For every RPA development services engagement we ask which task a person does most often, and whether a clean integration would do it better.",
  },
  delivered: {
    title: "Automation built in Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. In every region on this page, one accountable team and shared documentation come standard. For our RPA development services, that includes watching the first live runs with you in your working hours.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "Automation platform",
        items: "Microsoft Power Automate (Desktop and Cloud)",
      },
      {
        label: "Triggers and data",
        items: "SQL Server · Stored procedures",
      },
      {
        label: "Environments",
        items: "Development, test and production configuration",
      },
      {
        label: "Monitoring",
        items: "Logging · Email alerting · Error-state flagging",
      },
    ],
  },
  cta: {
    title: "Planning RPA development services? Let's talk.",
    text: "If you're planning RPA development services, we'd like to hear which task your team repeats most. Tell us what they do on screen all day, and we'll tell you honestly whether a bot is the right fix.",
  },
};
