import type { ServicePage } from "./types";

// Copy from page 14 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const iot: ServicePage = {
  slug: "iot",
  name: "IoT Solutions",
  seo: {
    title: "IoT Development Services | SCADA, Sensors, Platforms",
    description:
      "IoT development services that connect sensors and SCADA systems to alerts and decisions. For teams in the US, Europe, the Middle East, Africa and Asia.",
    keywords: [
      "IoT development services",
      "industrial IoT solutions",
      "IoT platform development",
      "SCADA integration",
      "predictive maintenance",
      "remote monitoring",
    ],
  },
  hero: {
    title: ["IoT Development Services", "From Sensor to Decision"],
    description:
      "We connect sensors, equipment and existing SCADA systems to platforms that turn their data into alerts and decisions. We serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "IoT development services, explained",
    paragraphs: [
      "IoT development services cover the chain from a sensor to a decision: connecting devices and equipment you already have, moving their data reliably, storing and analyzing it, and turning it into alerts, dashboards and automatic responses people can trust.",
      "Most IoT projects fail between the sensor and the screen, in the unglamorous layers: connectivity that drops, data that arrives late and alarms that nobody believes. Our IoT development services start with the field conditions, build the pipeline to survive them and tune alarms so operators act on them instead of silencing them. Everything we build can read from the control systems you already run.",
    ],
  },
  challenges: [
    {
      title: "You have equipment data nobody sees.",
      text: "Machines and sensors already produce readings, but they sit in a historian or a control system and never reach the people who could act.",
    },
    {
      title: "Your sensors work in the lab and drop out in the field.",
      text: "The prototype assumed good Wi-Fi, and the real site has patchy links and noisy conditions.",
    },
    {
      title: "Alarms ring all day and operators ignore them.",
      text: "Too many low-value alerts bury the one that matters, so the system gets muted.",
    },
  ],
  services: {
    title: "What our IoT development services include",
    items: [
      {
        title: "Device and Connectivity Integration",
        text: "Connecting sensors and equipment, including hardware you already own, over the connectivity your site really has.",
        tags: ["Sensor integration", "MQTT", "Edge connectivity"],
      },
      {
        title: "Industrial IoT Platforms",
        text: "Purpose-built platforms for monitoring equipment health, tracking assets or automating responses to real-time conditions.",
        tags: ["Equipment monitoring", "Asset tracking", "Maintenance triggers"],
      },
      {
        title: "Real-Time Data Pipelines",
        text: "The layer between a sensor and a decision, ingesting, processing and routing data reliably even when links drop.",
        tags: ["Data ingestion", "Stream processing", "Offline buffering"],
      },
      {
        title: "Dashboards and Alerts",
        text: "Device data turned into something a person acts on immediately, or something the system acts on automatically.",
        tags: ["Dashboards", "Alarm management", "Automated alerts"],
      },
      {
        title: "Legacy Equipment Integration",
        text: "Reading data from existing SCADA, DCS and historian systems instead of replacing them.",
        tags: ["SCADA", "DCS", "Historian"],
      },
      {
        title: "Cloud and Analytics",
        text: "Storage, analysis and reporting on the cloud, so device data supports planning as well as alarms.",
        tags: ["Azure IoT Hub", "Analytics", "Power BI"],
      },
    ],
  },
  approach: {
    title: "How we build IoT that survives the field",
    paragraphs: [
      "We design for the worst connection on site. Buffering and resync are in from the start, because a gap in the data is a gap in the decision.",
      "Alarms have to earn trust. We tune thresholds and routing so operators get the alert that matters, not forty that don't.",
      "We connect to what you already run. SCADA, DCS and historians stay in place, and our platform reads from them.",
      "We run the same approach in our own products. InfraSight monitors servers, networks, apps, cloud and IoT devices from one dashboard, with auto-discovery and anomaly detection.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We survey the equipment, the connectivity and the decisions the data should support.",
    },
    {
      title: "Define",
      text: "We scope the devices, data and alarms that matter, and what can wait.",
    },
    {
      title: "Design",
      text: "We design the connectivity, the pipeline and the alarm logic for field conditions.",
    },
    {
      title: "Product Development",
      text: "We build and test on real equipment and real networks, not only a bench.",
    },
    {
      title: "Delivery",
      text: "We deploy with monitoring and tune alarms with operators after go-live.",
    },
  ],
  industries: [
    {
      title: "Oil and gas",
      text: "Real-time well and equipment monitoring from existing control systems, with alarms engineers trust.",
    },
    {
      title: "Logistics",
      text: "Asset and vehicle tracking that feeds dispatch with live position and status.",
    },
    {
      title: "Manufacturing and facilities",
      text: "Equipment-health monitoring that triggers maintenance before a breakdown, not after.",
    },
  ],
  regions: {
    title: "Why IoT development services matter where you work",
    intro:
      "Connected equipment is regulated more tightly each year, and the rules differ by region. The environment differs too, from site connectivity to the industries driving demand. Here's how each region shapes the work.",
    items: [
      {
        name: "United States",
        text: "There's no single US law for industrial IoT security, but the IoT Cybersecurity Improvement Act sets a baseline for devices federal agencies buy, and industrial buyers ask for security evidence before they connect anything to a plant network. For you, that means a design you can document. We build authentication, encrypted transport and device-identity controls in, and write up how the system handles them.",
      },
      {
        name: "Europe",
        text: "The Cyber Resilience Act has required vulnerability and incident reporting since 11 September 2026, including for connected products already in the field, with full requirements from December 2027, and NIS2 covers energy suppliers' operational technology. For you, that means connected products need a vulnerability process. We build update paths and a vulnerability-handling approach into the platform and document it for review.",
      },
      {
        name: "Middle East",
        text: "Energy and smart-city programs drive IoT demand in the Gulf, and data rules in the UAE and Saudi Arabia push telemetry toward in-country hosting. For you, that means platforms that run on a regional cloud or inside your own environment. We design the pipeline for in-country hosting and have built monitoring for oil and gas operations for years.",
      },
      {
        name: "Africa",
        text: "Energy, mining and agriculture are natural IoT users, and connectivity varies from site to site, while each country has its own data protection law. For you, that means gateways and pipelines that keep working offline. We buffer data at the edge, resync when the link returns and map each country's data rules before choosing where telemetry lands.",
      },
      {
        name: "Asia",
        text: "Manufacturing is the centre of Asia's industrial IoT, and with workforces shrinking in Japan and South Korea, remote monitoring and automation are a growing priority. India's data protection rules phase in through 2027. For you, that means monitoring that reduces manual rounds and respects each country's data rules. We scope each site's equipment first, then build one platform that scales across plants.",
      },
    ],
    closing:
      "Every IoT development services project starts with the site: what equipment is there, how it's connected and which rules govern the data.",
  },
  delivered: {
    title: "Connected systems from Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. In each region on this page you work with one accountable team and shared documentation. For our IoT development services, that includes remote commissioning sessions timed to your site's shifts.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "Connectivity and protocols",
        items: "MQTT · Azure IoT Hub",
      },
      {
        label: "Data pipeline",
        items: "Node.js · Python",
      },
      {
        label: "Storage and analytics",
        items: "Azure Synapse · Power BI",
      },
      {
        label: "Cloud platforms",
        items: "Azure · AWS",
      },
    ],
  },
  cta: {
    title: "Planning IoT development services? Let's talk.",
    text: "If you're planning IoT development services, we'd like to hear what equipment you want to see inside. Tell us about your sites and systems, and we'll tell you honestly where the data will be hardest to get.",
  },
};
