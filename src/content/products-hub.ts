/**
 * Content for the products hub page (/products), taken from "Product hubpage Final.pdf".
 * Product links point at the product pages that will be built next.
 */

export type HubProduct = {
  name: string;
  description: string;
  href: string;
  image: string;
  /** CSS object-position, so each crop matches the design. */
  imagePosition?: string;
};

const img = (file: string) => `/assets/images/products-hub/${file}`;

export const hospitalityProducts: HubProduct[] = [
  {
    name: "EICE Rise",
    description:
      "Hotel management software and ERP for hotels, resorts and clubs: front desk, rooms, dining, billing and back office in one platform.",
    href: "/products/eicerise",
    image: img("eice-rise.webp"),
    imagePosition: "50% 28%",
  },
];

export const logisticsProducts: HubProduct[] = [
  {
    name: "Easylogy",
    description: "Live fleet tracking from a web dashboard, with a driver app for trip updates, alerts and route planning...",
    href: "/products/easylogy",
    image: img("easylogy.webp"),
    imagePosition: "50% 69%",
  },
  {
    name: "EICE SmartFit",
    description:
      "Container load planning in the browser: upload your cargo list and get a loading plan with weight balance in seconds.",
    href: "/products/smartfit",
    image: img("smartfit.webp"),
    imagePosition: "50% 50%",
  },
];

export const enterpriseProducts: HubProduct[] = [
  {
    name: "iSyncDrive",
    description: "File storage, sync and sharing with role-based access and audit reporting, deployed...",
    href: "/products/isync-drive",
    image: img("isyncdrive.webp"),
    imagePosition: "100% 45%",
  },
  {
    name: "iSyncLite",
    description: "Automated, encrypted backup with versioning and fast recovery, built for growing teams...",
    href: "/products/isynclite",
    image: img("isynclite.webp"),
    imagePosition: "50% 44%",
  },
  {
    name: "Verilock",
    description: "Multi-factor authentication for your applications, with push approval, geo-fencing ...",
    href: "/products/verilock",
    image: img("verilock.webp"),
  },
  {
    name: "InfraSight",
    description: "Monitoring for servers, networks, apps, cloud and IoT devices from one dashboard, with ...",
    href: "/products/infrasight",
    image: img("infrasight.webp"),
    imagePosition: "72% 50%",
  },
  {
    name: "EICE Ops",
    description: "A help desk and IT service management tool with live SLA tracking, escalation ...",
    href: "/products/eice-ops",
    image: img("eice-ops.webp"),
  },
];

export const aiProducts: HubProduct[] = [
  {
    name: "AskEICE",
    description: "Ask a question and get an answer from your own documents, with the source cited, over WhatsApp ...",
    href: "/products/ask-eice",
    image: img("askeice.webp"),
    imagePosition: "100% 19%",
  },
  {
    name: "EICEAIM",
    description: "An agent that handles outreach, lead qualification and follow-ups around the clock, using AI personas you configure.",
    href: "/products/eice-aim",
    image: img("eiceaim.webp"),
    imagePosition: "50% 24%",
  },
  {
    name: "EICE Voice",
    description:
      "Hospitality staff place, manage and track orders by voice, using language understanding trained on hospitality vocabulary.",
    href: "/products/eice-voice",
    image: img("eice-voice.webp"),
    imagePosition: "50% 45%",
  },
  {
    name: "EICE Catalyst",
    description: "A platform for teams that want AI across engineering, from faster delivery and modernization to governance and measuring ...",
    href: "/products/eice-catalyst",
    image: img("eice-catalyst.webp"),
  },
];

// TODO (content team): the design shows the questions only. Confirm or replace these answers.
export const productFaqs = [
  {
    question: "What enterprise software products does EICE offer?",
    answer:
      "Twelve products in four groups: hospitality (EICE Rise), logistics (Easylogy and EICE SmartFit), enterprise IT and security (iSyncDrive, iSyncLite, Verilock, InfraSight and EICE Ops), and AI and automation (AskEICE, EICEAIM, EICE Voice and EICE Catalyst).",
  },
  {
    question: "Which product should we start with?",
    answer:
      "Start with the product that maps to your industry or to the problem you want to fix first. Hotels and clubs usually start with EICE Rise, logistics teams with Easylogy or EICE SmartFit, and IT teams with the enterprise range. If you're not sure, tell us what you're trying to fix and we'll point you to the right one.",
  },
  {
    question: "Can the products work together?",
    answer:
      "Yes. Each product works on its own, so you can adopt one without the rest, and they can be connected when you need them to. Our engineering services cover the integration work.",
  },
  {
    question: "Do your products run on our own infrastructure?",
    answer:
      "Several of our products can be deployed on your own infrastructure as well as in the cloud. Tell us about your environment and we'll confirm the options for the product you're looking at.",
  },
  {
    question: "How are enterprise software products priced?",
    answer:
      "Pricing depends on the product, the number of users or devices and how it's deployed. Share your requirements and we'll send a quote.",
  },
  {
    question: "Can you customize a product or build around it?",
    answer:
      "Yes. The products come from the same engineering team that delivers our enterprise projects, so we can customize them, integrate them with your systems or build around them.",
  },
  {
    question: "What's the difference between your products and your services?",
    answer:
      "Products are ready-made software you can adopt as they are. Services are custom engineering work: integration, modernization, AI development and anything built around your own workflow and data.",
  },
  {
    question: "Which regions and industries do you serve?",
    answer:
      "We serve clients across North America, Asia, the Middle East and Europe, in industries including oil and gas, hospitality, logistics, legal and the wider enterprise.",
  },
];
