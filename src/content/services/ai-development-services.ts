import type { ServicePage } from "./types";

// Copy follows the "AI Development Services" design PDF (which matches page 1 of
// the Services Content Pack, with the designer's small edits).
export const aiDevelopmentServices: ServicePage = {
  slug: "ai-development-services",
  name: "AI Development Services",
  seo: {
    title: "AI Development Services | GenAI, Agents & RAG",
    description:
      "AI development services from EICE: generative AI, agents, RAG, chatbots and voice AI for teams in the US, Europe, the Middle East, Africa and Asia.",
    keywords: [
      "AI development services",
      "generative AI development",
      "AI agent development",
      "RAG development",
      "AI chatbot development",
      "voice agent development",
      "custom AI development",
    ],
  },
  hero: {
    title: ["AI Development Services", "Built for Production, Not Prototypes"],
    description:
      "We build generative AI, custom agents, retrieval-based software, chatbots and voice agents. It runs on your data and plugs into your tools, for enterprise teams in the US, Europe, the Middle East, Africa and Asia.",
    image: {
      src: "/assets/images/services/ai-development-hero.webp",
      alt: "Laptop dashboard showing company data flowing through an AI agent to a business outcome",
    },
  },
  overview: {
    title: "AI development services, explained",
    paragraphs: [
      "AI development services mean taking an AI idea and turning it into software people use every day. That covers picking the right approach, building around your data, wiring it into your systems and supporting it after launch. At EICE the work runs from LLM applications and agents to voice and custom ML.",
      "Plenty of teams have seen a good AI demo. Far fewer have shipped one, and the gap shows up in unglamorous places: messy data, disconnected systems, security reviews, answers nobody can verify. Our AI development services are built around those problems. We start from your data and your workflows, and when your data can't leave your environment, we can deploy privately.",
    ],
  },
  challenges: [
    {
      icon: "arrowUpRight",
      title: "Your pilot worked, but nothing is in production.",
      text: "Everyone loved the demo. Then data, integrations and security review caught up with it, and the project stalled.",
    },
    {
      icon: "rows",
      title: "Your company knows more than anyone can find.",
      text: "Policies, contracts and manuals live on shared drives and old wikis. People ask a colleague because search gives them nothing.",
    },
    {
      icon: "columns",
      title: "Your decisions run on last month’s spreadsheet.",
      text: "Forecasts and routine approvals depend on numbers and manual steps that are out of date by the time anyone acts.",
    },
  ],
  services: {
    title: "What our AI development services include",
    items: [
      {
        icon: "sparkle",
        title: "Generative AI",
        text: "Apps that create text, images and insights using leading LLMs like GPT, Claude, Gemini and Llama, with fine-tuning and private deployment options.",
        tags: ["LLMs", "Fine-tuning", "Private deployment"],
      },
      {
        icon: "target",
        title: "Custom AI Agents",
        text: "Autonomous agents that reason, plan and take action across your tools and workflows, built on LangGraph, CrewAI and the Model Context Protocol.",
        tags: ["LangGraph", "CrewAI", "Model Context Protocol"],
      },
      {
        icon: "waves",
        title: "RAG-Based Software",
        text: "LLMs connected to your company knowledge through vector databases and advanced retrieval, for accurate, source-grounded answers from your documents.",
        tags: ["Vector databases", "Retrieval"],
      },
      {
        icon: "squareDot",
        title: "Interactive Chatbots",
        text: "Conversational assistants that understand context, remember past interactions and resolve queries in real time across web and enterprise platforms.",
        tags: ["Web", "Enterprise platforms", "Real time"],
      },
      {
        icon: "halfCircle",
        title: "Interactive Voice Agents",
        text: "Voice agents that listen, understand and respond naturally in real time, powered by Whisper, ElevenLabs and realtime speech AI.",
        tags: ["Whisper", "ElevenLabs", "Realtime speech"],
      },
      {
        icon: "gear",
        title: "Tailored AI Solutions",
        text: "Custom ML and AI systems around your data and goals, from PyTorch model development to deployment on Azure, AWS or on-premise.",
        tags: ["PyTorch", "Azure", "AWS", "On-premise"],
      },
    ],
  },
  approach: {
    title: "How we get AI into production",
    paragraphs: [
      "Our AI development services start by checking whether AI is the right tool. Every proposed model gets compared against a simple rule or heuristic, and if AI doesn't clearly win, we say so.",
      "For anything that answers questions, we use retrieval. The system pulls from your own documents, shows what it used, and gets tested against real questions before launch.",
      "We build our own products the same way. AskEICE lets people ask questions of their company documents and get an answer with the exact source document and page, over WhatsApp or a web portal, inside the customer's own infrastructure. EICE AIM is an agent that handles outreach and lead follow-up around the clock. EICE Voice lets restaurant and hotel staff place and track orders by voice.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We look at your data, your systems and the decision you're trying to improve, and we ask whether AI is even the right answer.",
    },
    {
      title: "Define",
      text: "We agree what we're building, and what \"good enough to launch\" means, before anyone writes code.",
    },
    { title: "Design", text: "We plan the data flow, the model or agent approach and how it plugs into your systems." },
    {
      title: "Product Development",
      text: "We build and test on your real data, against a baseline and a real set of questions.",
    },
    { title: "Delivery", text: "We deploy to the environment you choose and support the system after go-live." },
  ],
  industries: [
    {
      title: "Logistics",
      text: "Demand forecasting, dispatch planning and agents for routine operations, so ordering and routing run on live data.",
    },
    {
      title: "Hospitality",
      text: "Voice agents that understand how guests and staff actually talk, connected to the point of sale.",
    },
    {
      title: "Oil and gas",
      text: "Monitoring around data-heavy engineering and financial models, so odd numbers get flagged early.",
    },
    {
      title: "Enterprise IT and legal",
      text: "Assistants that answer from the actual policies, contracts and internal documents.",
    },
  ],
  regions: {
    title: "Why AI development services matter where you work",
    intro:
      "AI development services aren't one product sold the same way everywhere. What a buyer needs first depends on the rules they work under, the languages and channels their customers use, and the industries driving AI spend in their region. Here's what that means in each one, and what we build for it.",
    items: [
      {
        name: "United States",
        text: "There is no single federal AI law. Buyers answer to a patchwork of state rules, such as Colorado's AI Act, and to procurement teams that increasingly ask for alignment with the voluntary NIST AI Risk Management Framework. For you, that means an AI project has to survive a risk review, not just a demo. We build for that review from the first design: answers that cite their sources, a person approving the decisions that matter, and documentation your risk and legal teams can read. That way the project doesn't need rebuilding once they get involved.",
      },
      {
        name: "Europe",
        text: "The EU AI Act is phasing in through 2027 and 2028, and GDPR already governs personal data, including when it leaves the EU. With 24 official languages in play, European teams need AI that works in the languages they run on and keeps data where they decide. For you, that means private deployment on your own cloud or servers, answers that cite the exact source, and a person in the review loop. We test on your own documents in each language you use, which also gives your data protection officer something concrete to review.",
      },
      {
        name: "Middle East",
        text: "The UAE and Saudi Arabia treat AI as a national priority, with the UAE's National AI Strategy 2031 and Saudi Arabia's SDAIA-led data and AI strategy. Energy, banking, telecom and government lead the spending, and personal data laws in both countries limit sending data abroad. For you, that means private deployment inside your own environment, and testing on your Arabic and English material before launch, with a straight answer on where a language needs more work. We've built engineering software for oil and gas operators for years, so the industry isn't new to us.",
      },
      {
        name: "Africa",
        text: "The African Union adopted a continental AI strategy in 2024, yet Nigeria, South Africa and Kenya each have their own data protection law and there is no single rulebook. Banks, telecoms, retailers and mining and energy companies lead adoption, and customers mostly reach them by phone, often in languages AI handles less well than English. For you, that means mapping the data rules for each country first, then building for the channel your customers use, such as AskEICE answering over WhatsApp. For voice in local languages, we test on your real recordings and tell you plainly where a language isn't ready.",
      },
      {
        name: "Asia",
        text: "There is no single rulebook here either. South Korea's AI Basic Act came into force in January 2026, Japan takes a lighter, innovation-first line, Singapore has a governance framework for agentic AI, and India's data protection rules phase in through 2027. Chat channels differ too: WhatsApp in India, LINE in Japan and Thailand, KakaoTalk in Korea. Shrinking workforces in Japan and Korea make routine automation a priority. For you, that means one approach adapted country by country: we scope the language and channel first, document how each agent behaves, and keep a person in the loop.",
      },
    ],
    closing:
      "For all our AI development services we start the same way: map the rules, languages and channels that apply to you, then choose the deployment and controls to match.",
  },
  delivered: {
    title: "Houston and Noida, working as one team",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. We work with teams in every region on this page through one accountable team, shared documentation and working sessions set around your time zone. For our AI development services, that includes deploying inside your own environment when your data governance requires it.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      { label: "Models", items: "GPT · Claude · Gemini · Llama" },
      { label: "Agents", items: "LangGraph · CrewAI · Model Context Protocol" },
      { label: "Retrieval and voice", items: "Vector databases · Whisper · ElevenLabs · Realtime speech AI" },
      { label: "Build and deploy", items: "PyTorch · Azure · AWS · On-premise infrastructure." },
    ],
  },
  cta: {
    title: "Planning AI development services? Let's talk.",
    text: "If you're planning AI development services, we'd like to hear about it. Tell us the decision you want to improve, and we'll tell you honestly if AI is the way to get there.",
  },
};
