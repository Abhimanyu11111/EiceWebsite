import type { ServicePage } from "./types";

// Copy from page 8 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const mobileDevelopment: ServicePage = {
  slug: "mobile-development",
  name: "Mobile Development",
  seo: {
    title: "Mobile App Development Services | iOS, Android",
    description:
      "Mobile app development services for native and cross-platform apps with offline-first design. For teams in the US, Europe, Middle East, Africa and Asia.",
    keywords: [
      "mobile app development services",
      "iOS and Android app development",
      "cross-platform app development",
      "React Native and Flutter",
      "enterprise mobile apps",
      "offline-first apps",
    ],
  },
  hero: {
    title: ["Mobile App Development Services", "for Real-World Conditions"],
    description:
      "We build native and cross-platform apps for people who work away from a desk, with offline handling designed in from the start. We serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "Mobile app development services, explained",
    paragraphs: [
      "Mobile app development services cover the full life of an app for people who aren't at a desk: deciding between native and cross-platform, designing for weak signal and small screens, building the app and its backend, and releasing and updating it through the app stores.",
      "An app that works in the office on good Wi-Fi tells you very little. Our mobile app development services design the offline behavior and sync strategy before the first screen, test on real devices and real networks, and choose native or cross-platform from the requirement instead of from habit. Updates and store releases are planned from the start, so a fix doesn't wait on a rebuild.",
    ],
  },
  challenges: [
    {
      title: "Your field staff still use paper, calls and photos.",
      text: "Technicians, drivers and warehouse teams log work after the fact, and the office learns about problems a day late.",
    },
    {
      title: "Your last app froze when the signal dropped.",
      text: "It worked in the demo and failed in a basement, a vehicle or a rural site, so people went back to the old way.",
    },
    {
      title: "You can't decide between native and cross-platform.",
      text: "Every agency recommends what it already builds, and nobody has asked what your users need.",
    },
  ],
  services: {
    title: "What our mobile app development services include",
    items: [
      {
        title: "Native iOS and Android",
        text: "Platform-specific builds with each platform's own tools, when you need deep device integration or top performance.",
        tags: ["Swift", "Kotlin", "Device integration"],
      },
      {
        title: "Cross-Platform Apps",
        text: "One codebase for both platforms, when speed to market and shared maintenance matter more than the last bit of performance.",
        tags: ["React Native", "Flutter", "Shared codebase"],
      },
      {
        title: "Field-Service Apps",
        text: "Apps for technicians, drivers and warehouse staff, with offline data handling so work continues when the connection doesn't.",
        tags: ["Offline-first", "Background sync", "Barcode and camera"],
      },
      {
        title: "Backend and Integration",
        text: "The API and data layer connecting the app to the systems it reads from and writes to.",
        tags: ["REST and GraphQL", "Real-time sync", "Authentication"],
      },
      {
        title: "Notifications and Sync",
        text: "Push alerts and background synchronization that keep devices and your systems consistent.",
        tags: ["Push notifications", "Conflict handling", "Real-time updates"],
      },
      {
        title: "Store Release and Updates",
        text: "App Store and Play Store submission, enterprise distribution and update cycles planned in from the start.",
        tags: ["Store submission", "Enterprise rollout", "Release planning"],
      },
    ],
  },
  approach: {
    title: "How we build apps that survive the field",
    paragraphs: [
      "We design for the worst connection first. Offline behavior and sync rules are decided before the interface, because they shape everything else.",
      "We choose native or cross-platform from the requirement. Deep device features point to native, speed and shared maintenance point to cross-platform, and many products blend the two.",
      "We test where the app will actually be used. Real devices, real networks and real interruptions find problems a simulator never will.",
      "Our own products are built for phones too. Easylogy pairs a web dashboard with a driver app, and Verilock delivers multi-factor authentication from a single mobile app.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We learn how your users really work, including signal, devices and interruptions.",
    },
    {
      title: "Define",
      text: "We choose native, cross-platform or a blend, based on the requirement.",
    },
    {
      title: "Design",
      text: "We design the offline behavior and sync strategy before the interface.",
    },
    {
      title: "Product Development",
      text: "We build and test against real conditions, not an office simulator.",
    },
    {
      title: "Delivery",
      text: "We release through the app stores or enterprise distribution, with updates planned in.",
    },
  ],
  industries: [
    {
      title: "Logistics",
      text: "Driver updates and delivery confirmation are mobile experiences first, the same idea behind the driver app in Easylogy.",
    },
    {
      title: "Hospitality",
      text: "Staff apps for housekeeping status, check-in confirmation and task assignment, extending a platform like EICE Rise to people who aren't at a front desk.",
    },
    {
      title: "Field service and operations",
      text: "Inspection, maintenance and inventory apps that work as reliably on a phone as the desktop version does at a desk.",
    },
  ],
  regions: {
    title: "Why mobile app development services matter where you work",
    intro:
      "The phone in your user's hand changes by region: the operating system, the connection, the language and the rules about what the app may collect. A single build rarely suits all of them. Here's how each region shapes the work.",
    items: [
      {
        name: "United States",
        text: "US users expect polished, accessible apps, ADA claims reach mobile experiences, and enterprise buyers send security questionnaires before an app goes on managed devices. For you, that means accessibility and security evidence on day one. We build to WCAG guidance for mobile, support screen readers and dynamic text, and document how the app stores and protects data so device-management reviews move quickly.",
      },
      {
        name: "Europe",
        text: "The European Accessibility Act has applied since 28 June 2025, and EN 301 549 has specific requirements for native mobile apps, including gesture alternatives and orientation support. The Cyber Resilience Act adds security duties for products with digital elements. For you, that means accessibility and security are launch gates. We design gestures, orientation and screen-reader support in from the first prototype and document the app's security approach.",
      },
      {
        name: "Middle East",
        text: "Mobile use is heavy across the Gulf, and apps usually serve Arabic and English, which means right-to-left layouts and mixed-direction text. Data rules in the UAE and Saudi Arabia also decide where the backend runs. For you, that means a bilingual design from the first wireframe and hosting in a regional cloud. We build and test both layouts on real devices and pick a region that meets your data rules.",
      },
      {
        name: "Africa",
        text: "Africa is mobile-first, with many users on modest devices and variable connections, and each country has its own data protection law. For you, that means an app that works offline, stays small and syncs when the signal returns. We design the offline and sync behavior first, test on low-end devices and weak networks, and map each country's data rules before choosing hosting.",
      },
      {
        name: "Asia",
        text: "Asia has no single mobile habit: messaging, payment and app conventions differ by country, scripts range from Devanagari to Japanese to Korean, and India's data protection rules phase in through 2027. For you, that means localizing the app properly, including input methods, layouts and consent. We scope the countries first, then build one core app that adapts to each.",
      },
    ],
    closing:
      "Every mobile app development services engagement starts with the same question: where will this app be used, on what devices and under which rules?",
  },
  delivered: {
    title: "Mobile apps built in Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. Teams across the regions on this page work with one accountable team, shared documentation and sessions set around local working hours. For our mobile app development services, that includes testing on the devices and networks your users actually have.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "Native iOS",
        items: "Swift · SwiftUI",
      },
      {
        label: "Native Android",
        items: "Kotlin · Jetpack Compose",
      },
      {
        label: "Cross-platform",
        items: "React Native · Flutter",
      },
      {
        label: "Backend and sync",
        items: "Node.js · Firebase · REST and GraphQL APIs",
      },
    ],
  },
  cta: {
    title: "Planning mobile app development services? Let's talk.",
    text: "If you're planning mobile app development services, we'd like to hear where your people work and what goes wrong today. Tell us about your users and devices, and we'll tell you honestly what to build.",
  },
};
