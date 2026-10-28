import type { ServicePage } from "./types";

// Copy from page 5 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const dataAnalytics: ServicePage = {
  slug: "data-analytics",
  name: "Data Analytics",
  seo: {
    title: "Data Analytics Services | BI, Warehousing, Governance",
    description:
      "Data analytics services that fix the data first: pipelines, warehouses, dashboards and models for teams in the US, Europe, Middle East, Africa and Asia.",
    keywords: [
      "data analytics services",
      "business intelligence services",
      "big data analytics",
      "predictive analytics",
      "data warehousing",
      "data governance",
    ],
  },
  hero: {
    title: ["Data Analytics Services", "That Give Teams Numbers They Trust"],
    description:
      "We build the pipelines, warehouses and dashboards that turn scattered data into decisions people believe. We fix the data first, because no chart repairs numbers nobody trusts. We serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "Data analytics services, explained",
    paragraphs: [
      "Data analytics services cover the work between raw data and a decision: collecting and cleaning it, storing it in one reliable place, deciding who owns it and presenting it so people can act. We build dashboards, big data pipelines, predictive models, customer analytics, warehouses and governance, and we start by asking whether the numbers are right.",
      "A polished dashboard on top of bad data makes things worse, because people stop trusting every report. Our data analytics services begin by auditing your sources and how far anyone believes them today, then build the pipeline and governance before any chart. Models come last, and only where the question needs one.",
    ],
  },
  challenges: [
    {
      title: "Two reports, two different numbers.",
      text: "Finance and operations each pull from their own spreadsheet, and meetings turn into arguments about whose figure is right.",
    },
    {
      title: "Your data sits in systems that don't talk.",
      text: "ERP, CRM, field tools and files each hold a piece, and nobody sees across them.",
    },
    {
      title: "You want predictions, but the history isn't clean.",
      text: "A forecast is only as good as the records behind it, and yours still have gaps.",
    },
  ],
  services: {
    title: "What our data analytics services include",
    items: [
      {
        title: "Business Intelligence",
        text: "Dashboards and reporting people trust and use, built on data that has been checked first.",
        tags: ["Dashboards", "Self-service BI", "Executive reporting"],
      },
      {
        title: "Big Data Analytics",
        text: "Processing at a volume and speed that spreadsheets and standard tools can't manage, for data that has genuinely outgrown them.",
        tags: ["Large-scale processing", "Distributed analytics", "Real-time pipelines"],
      },
      {
        title: "Predictive Analytics",
        text: "Models that forecast what's likely to happen and suggest what to do, used only where the question needs one.",
        tags: ["Forecasting", "Scenario planning", "Recommendations"],
      },
      {
        title: "Customer Analytics",
        text: "Segmentation, churn and lifetime value from data you already collect, turned into retention and targeting decisions.",
        tags: ["Segmentation", "Churn analysis", "Lifetime value"],
      },
      {
        title: "Data Warehousing",
        text: "One reliable source of truth that consolidates scattered systems, the foundation every report and model depends on.",
        tags: ["ETL and ELT", "Consolidation", "Single source of truth"],
      },
      {
        title: "Data Governance",
        text: "Clear ownership, shared definitions and quality rules, so a number means the same thing in every report.",
        tags: ["Ownership", "Definitions", "Quality rules"],
      },
    ],
  },
  approach: {
    title: "How we get data you can rely on",
    paragraphs: [
      "We audit trust before we build. Before any dashboard, we find out where numbers disagree and why.",
      "Pipelines and governance come first. A warehouse and clear definitions make every later report cheaper to build and easier to believe.",
      "Models earn their place. A good dashboard answers most questions, and predictions come once the history is clean enough to act on. When you're ready for them, our AI development services pick up from there.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We audit your data sources and, just as important, how much anyone trusts the numbers today.",
    },
    {
      title: "Define",
      text: "We scope which questions need predictive modeling and which just need a dashboard people believe.",
    },
    {
      title: "Design",
      text: "We design the pipeline and governance before any visualization.",
    },
    {
      title: "Product Development",
      text: "We build and validate against real historical data, not a clean demo set.",
    },
    {
      title: "Delivery",
      text: "We deploy with data-quality monitoring, because a dashboard that's accurate at launch can drift.",
    },
  ],
  industries: [
    {
      title: "Executive and finance teams",
      text: "Reporting that has to hold up at board level, where a wrong number is a credibility problem, not an inconvenience.",
    },
    {
      title: "Marketing and customer teams",
      text: "Segmentation and behavior analysis that turn customer data you already collect into retention and targeting decisions.",
    },
    {
      title: "Operations and energy",
      text: "Predictive maintenance and demand forecasting move decisions from reactive to proactive once the data can be trusted. We've built analytics tools for oil and gas operators.",
    },
  ],
  regions: {
    title: "Why data analytics services matter where you work",
    intro:
      "Where your data sits is as important as what it says. Privacy law, hosting options and the languages your reports run in all change by region, and a warehouse built for one place can be wrong for another. Here's how each region shapes the work.",
    items: [
      {
        name: "United States",
        text: "US teams answer to a patchwork of state privacy laws, and AI governance reviews increasingly ask where data came from. For you, that means analytics you can trace: clear definitions, known sources and access controls your privacy team can read. We build the governance layer alongside the warehouse, so a question about a number has an answer.",
      },
      {
        name: "Europe",
        text: "GDPR governs personal data in analytics, including when it leaves the EU, and the EU Data Act, in effect since September 2025, adds rules on access to data from connected products. AWS has opened an EU Sovereign Cloud for workloads that must stay separate. For you, that means deciding where data lives before you build. We design the warehouse in the region you choose and keep track of where each figure came from.",
      },
      {
        name: "Middle East",
        text: "Energy, banking, telecom and government lead AI and analytics spending in the Gulf, and personal data laws in the UAE and Saudi Arabia limit sending data abroad. AWS, Azure and Google Cloud now run regions in the Gulf. For you, that means keeping the warehouse in-country and reporting in Arabic and English. We design for local regions and test dashboards in both languages.",
      },
      {
        name: "Africa",
        text: "Nigeria, South Africa and Kenya each have their own data protection law, AWS and Azure run regions in South Africa, and banks, telecoms and mining and energy companies lead adoption. Much of the usage data comes from phones. For you, that means scoping each country's data rules first, hosting where the law and latency suit, and designing dashboards that load on modest connections.",
      },
      {
        name: "Asia",
        text: "India's data protection rules phase in through 2027, South Korea's privacy rules often push consumer data toward local hosting, and Japan, Korea and Singapore all have local cloud regions. For you, that means country-by-country hosting and consent handling. We design one analytics model and deploy it in the region each dataset has to stay in.",
      },
    ],
    closing:
      "Whatever the region, our data analytics services begin by finding out which numbers people trust today and where the data has to live, then build from there.",
  },
  delivered: {
    title: "Analytics delivered from Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. For every region on this page, one accountable team owns the work, documentation is shared and reviews fit your calendar. For our data analytics services, that includes building the warehouse in the region where your data has to stay.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "BI and visualization",
        items: "Power BI · Tableau",
      },
      {
        label: "Data warehousing",
        items: "Azure Synapse · Snowflake",
      },
      {
        label: "Data engineering",
        items: "Azure Data Factory · Python",
      },
      {
        label: "Big data",
        items: "Databricks",
      },
    ],
  },
  cta: {
    title: "Planning data analytics services? Let's talk.",
    text: "If you're planning data analytics services, we'd like to hear which decision you want better numbers for. Tell us where your data lives today, and we'll tell you honestly what it would take to trust it.",
  },
};
