import type { ServicePage } from "./types";

// Copy from page 10 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const softwareTesting: ServicePage = {
  slug: "software-testing",
  name: "Software Testing",
  seo: {
    title: "Software Testing Services | QA, Automation, Security",
    description:
      "Software testing services: functional, performance, security and accessibility testing with automation. For the US, Europe, Middle East, Africa and Asia.",
    keywords: [
      "software testing services",
      "QA testing services",
      "test automation services",
      "performance testing",
      "security testing",
      "accessibility testing",
    ],
  },
  hero: {
    title: ["Software Testing Services", "That Catch What Breaks Under Real Use"],
    description:
      "We test functionality, performance, security and accessibility against real conditions, with automation for the routine and people for the unexpected. We serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "Software testing services, explained",
    paragraphs: [
      'Software testing services cover everything between "it works on my machine" and a release you can stand behind: checking the software does what it should, holds up under load, resists attack and works for the people and devices that will use it. We combine manual exploration with automated suites that run on every change.',
      "Releases rarely fail on the scenario the developer tested. Our software testing services concentrate on what real users do, build automation for the repeatable checks so regressions surface within minutes, and keep people on the exploratory work that automation can't do. Each defect arrives with steps to reproduce it, so developers can fix it the same day.",
    ],
  },
  challenges: [
    {
      title: "Every release brings a regression nobody caught.",
      text: "A fix in one place breaks something somewhere else, and users find it first.",
    },
    {
      title: "Load day was the first load test.",
      text: "The system performed fine with ten users and fell over with a thousand, in front of customers.",
    },
    {
      title: "Your security review happens after the build.",
      text: "Findings land late, when changing the design is expensive and the launch date is fixed.",
    },
  ],
  services: {
    title: "What our software testing services include",
    items: [
      {
        title: "Functional Testing",
        text: "Checking the software does what it should across real user behavior, not only the scenarios a developer thought of.",
        tags: ["Requirements-based testing", "Edge cases", "Manual and scripted"],
      },
      {
        title: "Performance Testing",
        text: "Testing behavior under real load, concurrent users and sustained traffic, before your users find the breaking point.",
        tags: ["Load testing", "Stress testing", "Scalability"],
      },
      {
        title: "Security Testing",
        text: "Finding weaknesses attackers actually look for before they become incidents, rather than ticking a generic checklist.",
        tags: ["Vulnerability scanning", "Penetration testing", "Secure code review"],
      },
      {
        title: "Test Automation",
        text: "Automated suites that catch regressions fast and run on every change, freeing people for exploratory work.",
        tags: ["Regression suites", "CI/CD integration", "Cross-browser runs"],
      },
      {
        title: "API and Integration Testing",
        text: "Checking the interfaces between systems, where many production failures start.",
        tags: ["API testing", "Contract checks", "Integration flows"],
      },
      {
        title: "Compatibility and Accessibility",
        text: "Verifying behavior across real browsers, devices and assistive technologies.",
        tags: ["Browsers and devices", "Screen readers", "WCAG 2.1 AA"],
      },
    ],
  },
  approach: {
    title: "How we test",
    paragraphs: [
      "We test what people really do. Scenarios come from real usage and past defects, not only from the requirements document.",
      "Automation covers the repeatable, people cover the unexpected. Regression runs on every change, and testers spend their time exploring where bugs hide.",
      "Every finding is actionable. Each defect arrives with reproduction steps, evidence and a priority, so developers fix it without a meeting.",
      "We apply the same standards to our own software. EICE Ops tracks every ticket with a full audit trail, and InfraSight watches infrastructure for anomalies, so reliability matters to us twice over.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We learn the product, its users and where it has failed before.",
    },
    {
      title: "Define",
      text: "We scope the test types and priorities that match the risk.",
    },
    {
      title: "Design",
      text: "We design the test plan, the automation framework and the device and environment matrix.",
    },
    {
      title: "Product Development",
      text: "We build and run the tests alongside development, starting with the riskiest areas.",
    },
    {
      title: "Delivery",
      text: "We hand over results, defect reports and a maintained automation suite.",
    },
  ],
  industries: [
    {
      title: "Enterprise software releases",
      text: "Regression and integration testing on every change, so a deployment day isn't a gamble.",
    },
    {
      title: "Engineering and simulation software",
      text: "Accuracy matters as much as stability when users make physical decisions from the output.",
    },
    {
      title: "Web and mobile apps before launch",
      text: "Performance, security and accessibility checks on the devices and networks real users have.",
    },
  ],
  regions: {
    title: "Why software testing services matter where you work",
    intro:
      "Testing is where regional rules become concrete. Accessibility law, cybersecurity obligations and the devices in people's hands differ by region, and a test plan has to reflect them. Here's what that means in each one.",
    items: [
      {
        name: "United States",
        text: "Accessibility lawsuits under the ADA target websites and apps, and enterprise buyers send security questionnaires before they sign. For you, that means evidence that the product was tested for accessibility and security, not just functionality. We include accessibility checks in the test plan, run them against WCAG 2.1 AA, and give you a record your sales and security teams can share.",
      },
      {
        name: "Europe",
        text: "Three European rules turn testing into a legal matter. The European Accessibility Act has applied since 28 June 2025. The Cyber Resilience Act requires vulnerability reporting from 11 September 2026 and security by design for products with digital elements from December 2027. DORA requires resilience testing for financial entities and reaches their technology suppliers. For you, that means test evidence on accessibility, vulnerabilities and resilience. We structure testing to produce it.",
      },
      {
        name: "Middle East",
        text: "Software in the Gulf commonly runs in Arabic and English, so layouts, text input and mixed-direction content must be tested in both. Hosting in a regional cloud also changes performance and latency. For you, that means testing bilingual flows and performance from inside the region. We test both layouts on real devices and run load tests against the environment you'll actually deploy to.",
      },
      {
        name: "Africa",
        text: "Many users are on modest devices and variable connections, and a product that tests well on a developer's laptop can struggle in the field. For you, that means testing on low-end devices and constrained networks, not only on fast office connections. We build device and network conditions into the test plan, including slow links and dropped connections.",
      },
      {
        name: "Asia",
        text: "Asia brings the widest range of devices, browsers and scripts, and rules such as India's phased data protection requirements affect consent flows. For you, that means testing across the devices your market actually uses and verifying consent behavior per country. We build a device matrix from your user data and test consent flows against each country's rules.",
      },
    ],
    closing:
      "Every software testing services engagement we run starts by asking which rules, devices and conditions apply where your users are.",
  },
  delivered: {
    title: "Testing from Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. In each region on this page you get one accountable team and shared documentation. For our software testing services, that includes testing runs scheduled so results are waiting when your team starts the day.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "Automation",
        items: "Selenium · Playwright",
      },
      {
        label: "Performance",
        items: "JMeter · LoadRunner",
      },
      {
        label: "API testing",
        items: "Postman · REST Assured",
      },
      {
        label: "CI/CD integration",
        items: "GitHub Actions · Jenkins",
      },
    ],
  },
  cta: {
    title: "Planning software testing services? Let's talk.",
    text: "If you're planning software testing services, we'd like to hear what breaks after release today. Tell us what your users find first, and we'll tell you honestly where testing would help most.",
  },
};
