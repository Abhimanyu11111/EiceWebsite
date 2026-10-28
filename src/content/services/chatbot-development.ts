import type { ServicePage } from "./types";

// Copy from page 2 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const chatbotDevelopment: ServicePage = {
  slug: "chatbot-development",
  name: "Chatbot Development",
  seo: {
    title: "Chatbot Development Services | WhatsApp, Web, Voice",
    description:
      "Chatbot development services for web, WhatsApp and voice, with human handoff. Built for teams in the US, Europe, the Middle East, Africa and Asia.",
    keywords: [
      "chatbot development services",
      "AI chatbot development",
      "WhatsApp chatbot development",
      "RAG chatbot",
      "voice chatbot",
      "enterprise chatbot development",
    ],
  },
  hero: {
    title: ["Chatbot Development Services", "That Answer, Act and Hand Off"],
    description:
      "We build chatbots that resolve real questions on the channels your customers already use. Each one hands off to a person when it should, for teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "Chatbot development services, explained",
    paragraphs: [
      'Chatbot development services cover everything between "we get the same questions every day" and a bot your customers trust: picking the right type of bot, building it around your content and channels, connecting it to your systems, and planning what happens when it can\'t help. We build rule-based bots, retrieval-based bots grounded in your documents, and voice assistants.',
      "Most teams ask for a chatbot to cut ticket volume. The ones that work start with the questions people really ask, not with a model. Our chatbot development services begin with your support history, pick the simplest bot that covers it, and put a person at the handoff, so a customer is never stuck in a loop.",
    ],
  },
  challenges: [
    {
      title: "Your team answers the same few questions all day.",
      text: "Order status, opening hours, password resets. Nobody enjoys answering them, and customers wait in a queue for answers they could have had in seconds.",
    },
    {
      title: "Your answers live in documents nobody reads.",
      text: "Policies, product sheets and old tickets hold the answer. Customers can't find it, and agents paste it from memory.",
    },
    {
      title: "Your last bot made things worse.",
      text: "It guessed, got things wrong and trapped people in a loop with no way to reach a person. Now the team doesn't trust it.",
    },
  ],
  services: {
    title: "What our chatbot development services include",
    items: [
      {
        title: "Rule-Based Chatbots",
        text: "Fixed-intent bots for high-volume questions like order tracking and bookings. Fast to build, cheap to run and fully predictable.",
        tags: ["Intent mapping", "Decision flows", "Predictable answers"],
      },
      {
        title: "RAG-Based Chatbots",
        text: "Assistants grounded in your policies, product documents and past tickets, with answers that cite the source they came from.",
        tags: ["Retrieval", "Knowledge base grounding", "Source citations"],
      },
      {
        title: "Voice Assistants",
        text: "Speech-to-text, language understanding and dialogue handling in one low-latency pipeline, built for calls and hands-busy work.",
        tags: ["Speech-to-text", "NLU", "Low latency"],
      },
      {
        title: "WhatsApp and Web Channels",
        text: "One conversation design deployed across web chat, the WhatsApp Business API and IVR, without rebuilding the logic for each.",
        tags: ["WhatsApp Business API", "Web SDKs", "IVR"],
      },
      {
        title: "Human Handoff",
        text: "Complex cases pass to a person with the full conversation attached, so customers never have to repeat themselves.",
        tags: ["Escalation rules", "Context handover"],
      },
      {
        title: "Conversation Analytics",
        text: "Automated call summaries and sentiment trends, so supervisors coach from evidence instead of replaying recordings.",
        tags: ["Summaries", "Sentiment trends", "CRM updates"],
      },
    ],
  },
  approach: {
    title: "How we build a chatbot people trust",
    paragraphs: [
      "We start from your real questions. Your ticket history and chat logs decide what the bot covers, and a simple rule-based flow wins whenever it answers the question.",
      "Anything that answers from knowledge uses retrieval. The bot cites its source and gets tested on real questions before launch.",
      "Every bot has a way out. When confidence is low or the customer asks, it hands over to a person with the whole conversation attached.",
      "We run this approach in our own products. AskEICE answers from company documents over WhatsApp or a web portal, citing the exact source. EICE Voice lets restaurant and hotel staff place and track orders by voice.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We map your support volume, question types and channels.",
    },
    {
      title: "Define",
      text: "We choose rule-based, retrieval-based or voice, based on what the questions need.",
    },
    {
      title: "Design",
      text: "We design the conversation flow, the handoff rules and, where needed, the retrieval layer.",
    },
    {
      title: "Product Development",
      text: "We build and test against your real historical questions, not invented ones.",
    },
    {
      title: "Delivery",
      text: "We launch with answer-quality monitoring and a path to a person, then tune from real conversations.",
    },
  ],
  industries: [
    {
      title: "Hospitality",
      text: "Guests ask the same handful of questions dozens of times a day: check-in time, Wi-Fi, restaurant hours. A bot answers instantly, and voice keeps hands free in a kitchen or at the front desk.",
    },
    {
      title: "Logistics",
      text: '"Where is my shipment?" is the most repeated question in the business. A bot connected to tracking data answers it without pulling a dispatcher off the phone.',
    },
    {
      title: "Enterprise IT",
      text: "A password reset or access request needs a system that can verify identity and act, not a person. A bot deflects these before they become tickets.",
    },
  ],
  regions: {
    title: "Why chatbot development services matter where you work",
    intro:
      "Chatbot development services look different depending on where your customers are. The channel they use, the languages they write in and the rules about telling them they're talking to a bot all change by region. Here's what that means in each one, and what we build for it.",
    items: [
      {
        name: "United States",
        text: "Customers in the US reach businesses through web chat, SMS and apps more than through WhatsApp, so the bot has to meet them where the habit is. Several states require bots to identify themselves in some situations, and accessibility lawsuits under the ADA target websites, which includes a chat widget on the page. For you, that means choosing the channel first, disclosing the bot clearly, and building a widget that works with screen readers. We design for all three before launch.",
      },
      {
        name: "Europe",
        text: "Since 2 August 2026, the EU AI Act has required that people are told when they're talking to an AI system, unless it's obvious. GDPR still governs the chat logs, and with 24 official languages in play, one bot rarely fits every market. For you, that means a clear AI disclosure in the first message, private deployment when chat data has to stay in your environment, and testing in each language you serve.",
      },
      {
        name: "Middle East",
        text: "Customers in the Gulf move easily between Arabic and English, and customer support and document search are common first AI projects there. Personal data laws in the UAE and Saudi Arabia limit sending data abroad, so where the bot runs matters. For you, that means testing in both languages on real conversations, deployment inside your own environment when required, and a straight answer on where a language needs more work.",
      },
      {
        name: "Africa",
        text: "Customers mostly reach businesses by phone and messaging apps, often in languages AI handles less well than English, and Nigeria, South Africa and Kenya each have their own data protection law. For you, that means building for WhatsApp first and testing on your real customer messages. For voice, we test on real recordings and tell you plainly where a language isn't ready. We map each country's data rules before we design anything.",
      },
      {
        name: "Asia",
        text: "The right channel changes country by country: WhatsApp in India, LINE in Japan and Thailand, KakaoTalk in Korea. Rules change too, from Korea's AI Basic Act to India's phased data protection rules, and Singapore has a governance framework for agentic AI, which matters once a bot starts taking actions. For you, that means scoping the channel and language first, then adapting one conversation design to each country.",
      },
    ],
    closing:
      "For all our chatbot development services we start the same way: map the channels, languages and rules that apply to you, then pick the type of bot and the deployment to match.",
  },
  delivered: {
    title: "One delivery team across Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. Teams in each region on this page work with one accountable group, shared documentation and sessions scheduled around their day. For our chatbot development services, that includes deploying inside your own environment when chat data can't leave it.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "Rule-based",
        items: "Dialogflow · Rasa · Custom intent engines",
      },
      {
        label: "Retrieval and models",
        items: "Vector databases · GPT · Claude · Gemini · Llama",
      },
      {
        label: "Voice",
        items: "Speech-to-text · Text-to-speech · NLU · Whisper · ElevenLabs",
      },
      {
        label: "Channels",
        items: "WhatsApp Business API · Web SDKs · IVR integration · CRM via REST APIs",
      },
    ],
  },
  cta: {
    title: "Planning chatbot development services? Let's talk.",
    text: "If you're planning chatbot development services, we'd like to hear about the questions you want off your team's plate. Tell us what customers ask most, and we'll tell you honestly whether a bot is the right answer.",
  },
};
