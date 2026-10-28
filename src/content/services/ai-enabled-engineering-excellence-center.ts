import type { ServicePage } from "./types";

// Copy from page 4 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const aiEnabledEngineeringExcellenceCenter: ServicePage = {
  slug: "ai-enabled-engineering-excellence-center",
  name: "AI-Enabled Engineering Excellence Center",
  seo: {
    title: "AI Engineering Center of Excellence | Governance",
    description:
      "An AI engineering center of excellence for enterprise teams: one standard, quality audits, risk gates and AI impact tracking, across five regions.",
    keywords: [
      "AI engineering center of excellence",
      "AI center of excellence",
      "AI CoE",
      "AI governance framework",
      "enterprise AI governance",
      "AI value measurement",
    ],
  },
  hero: {
    title: ["AI Engineering Center of Excellence", "for Enterprise Teams"],
    description:
      "We set up and run the governance that keeps AI-assisted engineering consistent, measured and safe across a whole application portfolio, for teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "An AI engineering center of excellence, explained",
    paragraphs: [
      "An AI engineering center of excellence is the team and the practice that decides how software gets built, checked and released when AI tools are part of the work. It sets one standard, runs the quality audits, gates risky releases and records where AI actually helped. We run one today across 82 applications under a single governance standard.",
      "Most companies adopt AI tools team by team, then find that nobody can say what they're delivering. Our AI engineering center of excellence replaces that with a shared standard, an independent view of quality and a task-level record of AI impact, so leadership sees results instead of anecdotes.",
    ],
  },
  challenges: [
    {
      title: "Every team builds and releases differently.",
      text: "Quality depends on which team happens to own the work, and nobody has a portfolio-wide view.",
    },
    {
      title: "AI tools are everywhere, but nobody can show what they delivered.",
      text: "Licenses are paid for, usage is anecdotal, and the board asks what the spend produced.",
    },
    {
      title: "Risk gets reviewed late, or not at all.",
      text: "Releases reach production before anyone with authority has looked at the risk, and audits turn into a scramble.",
    },
  ],
  services: {
    title: "What our AI engineering center of excellence delivers",
    items: [
      {
        title: "Standardize",
        text: "One consistent standard for how software is designed, built and released, so quality doesn't depend on the team.",
        tags: ["Engineering standards", "Release practice", "Shared definitions"],
      },
      {
        title: "Govern",
        text: "A governance rhythm with a formal risk gate before anything reaches production, so leaders see health without checking every project.",
        tags: ["Risk gate", "Governance cadence", "Leadership reporting"],
      },
      {
        title: "Assure Quality",
        text: "Independent, portfolio-wide quality audits, today covering 82 applications, in place of team self-reporting.",
        tags: ["Quality audits", "Portfolio view", "Independent assessment"],
      },
      {
        title: "Enable Talent",
        text: "A structured onboarding and readiness process for every engineer before they work on production code.",
        tags: ["Onboarding", "Readiness checks", "Skills development"],
      },
      {
        title: "Improve Continuously",
        text: "A standing improvement roadmap with a sandbox for piloting new tools and AI-driven practices safely.",
        tags: ["Improvement roadmap", "Tool sandbox", "AI practice pilots"],
      },
      {
        title: "Measure AI Impact",
        text: "A task-level record of where AI tools were used and what changed, so AI value is measured, not assumed.",
        tags: ["Task-level tracking", "AI value measurement", "Reporting"],
      },
    ],
  },
  approach: {
    title: "How we run it",
    paragraphs: [
      "We begin with an audit, not a policy document. An independent look at the portfolio shows where quality stands today, and that decides where the standard starts.",
      "Governance has to be light enough to use. A risk gate before production and a regular review rhythm give leaders confidence without asking every team to fill in forms.",
      "AI value gets measured at the task level. Recording where AI helped, and where it didn't, is what lets you decide which tools to keep.",
      "The same approach is available as a platform. EICE Catalyst brings AI-enabled engineering, modernization, governance and value measurement together in one place.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We audit the portfolio and the practices behind it, and find out how much anyone trusts the numbers today.",
    },
    {
      title: "Define",
      text: "We agree the standard, the risk gate and what counts as AI impact.",
    },
    {
      title: "Design",
      text: "We design the governance rhythm, the audit method and the AI usage record.",
    },
    {
      title: "Product Development",
      text: "We set it up on a first set of applications and prove it before widening.",
    },
    {
      title: "Delivery",
      text: "We run the center, report to leadership and keep the improvement roadmap moving.",
    },
  ],
  industries: [
    {
      title: "Large enterprise portfolios",
      text: "At 50 or more applications, informal team-by-team practice breaks down. This is the scale we operate at today, with 82 applications under one standard.",
    },
    {
      title: "Fast-growing engineering organizations",
      text: "Fewer applications now, but growing quickly enough that inconsistency is starting to show. The right time to install governance is before it's urgent.",
    },
    {
      title: "Regulated and compliance-heavy teams",
      text: "Where a formal pre-production risk gate and a complete audit trail are what a regulator or auditor will ask to see.",
    },
  ],
  regions: {
    title: "Why an AI engineering center of excellence matters where you work",
    intro:
      "Boards in every region now ask the same question about AI: what did it deliver, and was it safe? The answer a regulator accepts, though, depends on where you operate. Here's how each region shapes what the center has to produce.",
    items: [
      {
        name: "United States",
        text: "There is no single federal AI law, so US teams answer to a patchwork of state rules such as Colorado's AI Act, and increasingly to the voluntary NIST AI Risk Management Framework, which Colorado's law recognizes as a defense. For you, that means being able to show a documented risk process, not just good intentions. The center produces that evidence as part of normal work: a risk gate, a quality record and a log of where AI was used.",
      },
      {
        name: "Europe",
        text: "The EU AI Act is phasing in through 2027 and 2028, with high-risk obligations now due from December 2027, and GDPR already applies. Both reward organizations that can show who decided what, and when. For you, that means governance built before the deadlines arrive. The center's audit trail and task-level AI record give your compliance team documents to review, and ISO/IEC 42001, the international AI management system standard, gives you a recognized framework to align to.",
      },
      {
        name: "Middle East",
        text: "The UAE and Saudi Arabia treat AI as a national priority, and government, energy, banking and telecom lead the spending. Large buyers there want AI that is governed, in-country and measurable. For you, that means a standard you can show an oversight body, with AI tooling and engineering data kept inside your own environment where rules require it. We've built engineering software for oil and gas operators for years, so the energy side of this isn't new to us.",
      },
      {
        name: "Africa",
        text: "The African Union adopted a continental AI strategy in 2024, but each country sets its own data rules, and banks, telecoms and mining and energy companies lead adoption. For you, that means one governance standard that flexes by country instead of a separate effort for each. The center sets the common standard once and records where local data rules change what teams may do.",
      },
      {
        name: "Asia",
        text: "Singapore has published an agentic AI framework, South Korea's AI Basic Act came into force in January 2026, Japan favors an innovation-first approach, and India's data protection rules phase in through 2027. For you, that means a governance approach that can sit under several rulebooks at once. The center documents how AI is used in engineering, so each country's requirement becomes a configuration, not a rewrite.",
      },
    ],
    closing:
      "Every AI engineering center of excellence we run starts from the same question: what evidence will your regulator, board and engineers each need, and how do we produce it as part of the work?",
  },
  delivered: {
    title: "Governing from Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. Teams in every region on this page work with one accountable team, shared documentation and working sessions set around their time zone. For our AI engineering center of excellence work, that means one standard applied across distributed engineering teams, wherever they sit.",
  },
  technology: {
    title: "How we measure and report",
    rows: [
      {
        label: "Quality",
        items: "Portfolio-wide audits · Independent assessment · Quality scorecards",
      },
      {
        label: "Governance",
        items: "Risk gates · Release approval · Audit trail",
      },
      {
        label: "AI impact",
        items: "Task-level usage record · Value measurement · Leadership reporting",
      },
      {
        label: "Platform",
        items: "EICE Catalyst for teams that want it as one integrated platform",
      },
    ],
  },
  cta: {
    title: "Planning an AI engineering center of excellence? Let's talk.",
    text: "If you're planning an AI engineering center of excellence, we'd like to hear how your teams build and release today. Tell us how many applications you run, and we'll tell you honestly where a center would help first.",
  },
};
