import type { ServicePage } from "./types";

// Copy from page 3 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const aiAgentsAutomation: ServicePage = {
  slug: "ai-agents-automation",
  name: "AI Agents & Automation",
  seo: {
    title: "AI Agent Development Services | Governed Agents",
    description:
      "AI agent development services that act inside your systems, with approval gates. For teams in the US, Europe, the Middle East, Africa and Asia.",
    keywords: [
      "AI agent development services",
      "agentic AI development",
      "AI workflow automation",
      "multi-agent orchestration",
      "MCP integration",
      "human-in-the-loop AI",
    ],
  },
  hero: {
    title: ["AI Agent Development Services", "That Act Inside Your Systems"],
    description:
      "We build agents that reason, plan and complete real tasks across your tools, with people approving the steps that matter. They serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "AI agent development services, explained",
    paragraphs: [
      "AI agent development services mean building software that does more than answer: it decides what to do next, uses your tools, and carries a task from request to result. That takes an orchestration layer, access to your systems, and clear rules about what the agent may do alone and what it must ask about. At EICE we build action agents, knowledge agents and the governance around them.",
      "Plenty of agent demos look impressive and then stall when they meet a real approval chain. Our AI agent development services start with the manual workflow, decide what the agent is trusted to do, and add approval gates from day one, so its scope grows only as trust does. We build on LangGraph, CrewAI and the Model Context Protocol.",
    ],
  },
  challenges: [
    {
      title: "Your team retypes the same data into three systems.",
      text: "Leads, tickets and invoices get re-entered between platforms that don't integrate, and the errors surface at month-end.",
    },
    {
      title: "You tried an AI assistant and it only talked.",
      text: "It answered questions nicely, then left a person to do the actual work.",
    },
    {
      title: "You want automation, but not unsupervised.",
      text: "Nobody wants an agent approving payments alone. You need it to handle the routine and ask about the rest.",
    },
  ],
  services: {
    title: "What our AI agent development services include",
    items: [
      {
        title: "Action Agents",
        text: "Agents that complete tasks inside your systems: triaging and routing tickets, qualifying leads, reconciling records across platforms.",
        tags: ["Task automation", "System integration", "Multi-step workflows"],
      },
      {
        title: "Knowledge Agents",
        text: "Retrieval-backed agents that answer from your internal documents and hand off to an action agent when a request needs more.",
        tags: ["RAG", "Internal search", "Escalation handoff"],
      },
      {
        title: "Multi-Step Orchestration",
        text: "Planning and tool use coordinated across steps, built on LangGraph, CrewAI and custom orchestration.",
        tags: ["LangGraph", "CrewAI", "Custom orchestration"],
      },
      {
        title: "Tool Access via MCP",
        text: "Agents reach your systems through the Model Context Protocol and enterprise APIs, with permissions you define.",
        tags: ["Model Context Protocol", "Enterprise APIs", "Webhooks"],
      },
      {
        title: "Approval Gates",
        text: "You decide what the agent may do alone and what it flags for a person. The gates are in from day one.",
        tags: ["Approval workflows", "Role-based permissions", "Human review"],
      },
      {
        title: "Audit and Rollback",
        text: "Every action is logged, and reversible where possible, so you can see exactly what the agent did and why.",
        tags: ["Action logs", "Rollback support", "Audit trail"],
      },
    ],
  },
  approach: {
    title: "How we keep agents useful and in check",
    paragraphs: [
      "We start with a workflow a person does today. The agent's job comes from that workflow, not from what a model can do in a demo.",
      "Autonomy is earned. A new agent starts with approval on every step, and as the logs show it's right, the approvals relax one step at a time.",
      "Everything is logged. When an agent acts, you can see what it did, what it used and who approved it.",
      "Our own agents work this way. EICE AIM qualifies leads and follows up around the clock with AI personas you configure, and AskEICE answers from your documents and cites the source.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We map the manual workflow and the systems it touches today.",
    },
    {
      title: "Define",
      text: "We decide what the agent may do alone and what it flags for approval.",
    },
    {
      title: "Design",
      text: "We design the knowledge layer, the action layer and the audit trail together.",
    },
    {
      title: "Product Development",
      text: "We build and test on real workflows, with approval gates in the first version.",
    },
    {
      title: "Delivery",
      text: "We launch with monitoring and widen the agent's scope only as the logs earn trust.",
    },
  ],
  industries: [
    {
      title: "Internal operations",
      text: "A triage agent reads an incoming request, classifies it and routes it to the right queue, the sorting a person does before any real work starts.",
    },
    {
      title: "Sales operations",
      text: "A lead agent logs and scores inbound leads the moment they arrive, so reps start selling instead of re-entering fields into a CRM.",
    },
    {
      title: "Finance and reconciliation",
      text: "An agent compares records across systems that don't integrate and flags mismatches for a person, replacing the month-end spreadsheet cross-check.",
    },
  ],
  regions: {
    title: "Why AI agent development services matter where you work",
    intro:
      "An agent that works in one country can be a liability in the next. The rules on automated decisions, the data it may touch and the channels people use all change by region, and the build has to follow. Here's how each region shapes the work.",
    items: [
      {
        name: "United States",
        text: "No federal AI law governs agents, so the rules come from state laws such as Colorado's AI Act, sector regulators and your own risk team, which increasingly asks for alignment with the voluntary NIST AI Risk Management Framework. For you, that means an agent has to show what it did and who approved it. We build approval gates and action logs in from the start, so your risk team's review is a read of the logs, not a rebuild.",
      },
      {
        name: "Europe",
        text: "The EU AI Act requires people to be told when they're dealing with an AI system, and agentic systems that talk to customers fall inside that. GDPR also restricts decisions made solely by automated means about individuals. For you, that means a person in the loop wherever a decision affects someone, a clear disclosure when an agent talks to customers, and data kept where you decide. We build the review step and the disclosure in, and offer private deployment on your own cloud or servers.",
      },
      {
        name: "Middle East",
        text: "Government, energy, banking and telecom lead AI spending in the Gulf, and personal data laws in the UAE and Saudi Arabia limit sending data abroad. For you, that means agents that run inside your own environment, with permissions scoped to the systems they touch. We test in Arabic and English on your real material and give you a straight answer on where a language needs more work.",
      },
      {
        name: "Africa",
        text: "Banks, telecoms, retailers and mining and energy companies lead AI adoption in Africa, and each country has its own data protection law, with no single rulebook. For you, that means starting with one workflow where an agent bridges two systems, mapping each country's data rules first, and reaching people on the channel they already use, such as WhatsApp.",
      },
      {
        name: "Asia",
        text: "Singapore published a governance framework for agentic AI in January 2026, South Korea's AI Basic Act came into force the same month, and India's data protection rules phase in through 2027. Japan takes a lighter, innovation-first line. For you, that means agents documented well enough to adapt to whichever rulebook applies. We write down what each agent may do and keep a person in the loop, so one design carries across countries.",
      },
    ],
    closing:
      "Every AI agent development services project starts with the same question: which steps may the agent take alone where you operate, and which need a person?",
  },
  delivered: {
    title: "One accountable team in Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. Across every region listed here, you deal with one accountable team and one set of documentation, and we meet when your people are online. For our AI agent development services, that includes running agents inside your own environment when your data governance requires it.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "Orchestration",
        items: "LangGraph · CrewAI · AutoGen · Custom orchestration",
      },
      {
        label: "Tools and access",
        items: "Model Context Protocol · Enterprise APIs · RPA connectors · Webhooks",
      },
      {
        label: "Knowledge",
        items: "RAG pipelines · Vector databases · Enterprise search",
      },
      {
        label: "Governance",
        items: "Audit logging · Role-based access control · Approval workflows",
      },
    ],
  },
  cta: {
    title: "Planning AI agent development services? Let's talk.",
    text: "If you're planning AI agent development services, we'd like to hear which workflow you want off your team's desks. Tell us what a person does today, and we'll tell you honestly whether an agent should do it.",
  },
};
