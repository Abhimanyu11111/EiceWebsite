import type { ServicePage } from "./types";

// Copy from page 17 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const gis: ServicePage = {
  slug: "gis",
  name: "GIS Solutions",
  seo: {
    title: "GIS Development Services | Web GIS, Spatial Data",
    description:
      "GIS development services: spatial databases, web maps and analysis tools for operations. For teams in the US, Europe, the Middle East, Africa and Asia.",
    keywords: [
      "GIS development services",
      "web GIS development",
      "geospatial solutions",
      "GIS database",
      "remote sensing analysis",
      "spatial analysis",
    ],
  },
  hero: {
    title: ["GIS Development Services", "That Put Your Data on the Map"],
    description:
      "We build spatial databases, web maps and analysis tools that answer real operational questions, open to your whole team. We serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "GIS development services, explained",
    paragraphs: [
      "GIS development services cover putting location at the center of your data: designing spatial databases, building web maps and dashboards, running spatial analysis and extracting insight from imagery. The goal is answers, such as which assets are exposed or where coverage is thin, not another static map layer.",
      "Many GIS projects end up as a map one person can open. Our GIS development services build for the whole team: browser-based maps, access by role and a database designed for the questions your operations actually ask, connected to the systems that already hold your data. Sensitive layers stay behind permissions, so sharing a map never means sharing everything.",
    ],
  },
  challenges: [
    {
      title: "Your maps live on one person's desktop.",
      text: "Only one license opens the data, so everyone else asks that person for a screenshot.",
    },
    {
      title: "Your location data and operational data never meet.",
      text: "Asset or customer locations sit in one system and the records about them in another, so nobody can correlate them.",
    },
    {
      title: "You can't tell what changed on the ground.",
      text: "Imagery arrives, but no one has time to compare it against last season, so changes get noticed late.",
    },
  ],
  services: {
    title: "What our GIS development services include",
    items: [
      {
        title: "Spatial Analysis and Mapping",
        text: "Analysis that answers a real question, such as proximity, coverage, routing or risk exposure, not a static layer in a folder.",
        tags: ["Spatial analysis", "Route optimization", "Coverage modeling"],
      },
      {
        title: "GIS Database Management",
        text: "Spatial databases designed for the queries your operations ask, integrated with the systems that hold your other data.",
        tags: ["Spatial database design", "Data integration", "Query optimization"],
      },
      {
        title: "Web GIS Development",
        text: "Browser-based mapping so the whole team can reach spatial data, not just the owner of one desktop license.",
        tags: ["Web mapping", "Multi-user access", "Mobile-friendly maps"],
      },
      {
        title: "Remote Sensing and Imagery",
        text: "Insight from satellite and aerial imagery, such as land use, change detection and environmental monitoring, at a scale manual review can't match.",
        tags: ["Satellite imagery", "Change detection", "Environmental monitoring"],
      },
      {
        title: "Geospatial Business Intelligence",
        text: "Spatial data combined with business metrics, so location becomes part of the dashboard, not a separate world.",
        tags: ["Spatial dashboards", "Business metrics", "Reporting"],
      },
      {
        title: "Integration with Operations",
        text: "Connecting maps to the systems that hold records, so a click on an asset shows its history.",
        tags: ["System integration", "Asset records", "Role-based access"],
      },
    ],
  },
  approach: {
    title: "How we build GIS people actually use",
    paragraphs: [
      'We start with the question the map must answer. If it\'s "which wells are underperforming" or "where is coverage thin", the data and design follow from that.',
      "We design for many users. Browser access, role-based permissions and a single source of truth mean the map is a team tool, not a personal one.",
      "We put location next to your other data. A spatial layer that links to your records is worth far more than one that stands alone.",
      "For teams that want the analysis automated, our data analytics services can add dashboards and forecasts on top.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We learn the questions the map must answer, and the data you already hold.",
    },
    {
      title: "Define",
      text: "We scope the layers, users and rules, including what may be collected and shared.",
    },
    {
      title: "Design",
      text: "We design the spatial database, the web map and the permissions together.",
    },
    {
      title: "Product Development",
      text: "We build and test with real data volumes and real user roles.",
    },
    {
      title: "Delivery",
      text: "We deploy with documentation, training and a plan for keeping the data current.",
    },
  ],
  industries: [
    {
      title: "Energy exploration and production",
      text: "Wells, seismic surveys, production records and field maps on one spatial platform.",
    },
    {
      title: "Logistics and field operations",
      text: "Routing, coverage and service-area analysis tied to live operational data.",
    },
    {
      title: "Environmental monitoring",
      text: "Satellite imagery and change detection to track land use, vegetation and site conditions over time.",
    },
  ],
  regions: {
    title: "Why GIS development services matter where you work",
    intro:
      "Location data is regulated in ways other data isn't: who may collect it, who may publish it and who may own the detailed versions all vary by country. A GIS platform has to be built around those rules. Here's how each region shapes the work.",
    items: [
      {
        name: "United States",
        text: "The Geospatial Data Act of 2018 created a federal framework for coordinating national geospatial data, and utilities, energy companies and local governments publish large datasets that analysts combine with their own. For you, that means public data worth using and your own data worth governing. We build spatial databases that blend both and control who sees which layer.",
      },
      {
        name: "Europe",
        text: "The EU's INSPIRE Directive set up a shared spatial data infrastructure across member states, and GDPR applies where location data can identify people. For you, that means standards-based public data on tap and care with personal location data. We design to open standards so layers interoperate, and treat location data tied to individuals as personal data.",
      },
      {
        name: "Middle East",
        text: "Energy, utilities and urban development programs in the Gulf all depend on location data, and rules on who may collect and publish detailed mapping often sit with national authorities. For you, that means working from approved sources and hosting in-country where required. We use licensed data, keep spatial databases in your environment when needed and have built a GIS platform for exploration and production data.",
      },
      {
        name: "Africa",
        text: "Land administration, utilities, mining and agriculture all depend on spatial data across Africa, and each country has its own data protection law and its own approach to mapping. For you, that means checking both before collecting or publishing. We map the rules country by country, design lightweight web maps that work on modest connections and keep sensitive layers access-controlled.",
      },
      {
        name: "Asia",
        text: "India's 2021 geospatial guidelines liberalized mapping, keep a negative list of sensitive attributes and limit which entities may own fine-resolution data, and India's data protection rules also phase in through 2027. For you, that means knowing who may collect, hold and publish what in each country. We check the rules per country and design layers so sensitive attributes stay out of public maps.",
      },
    ],
    closing:
      "Every GIS development services project starts with who may collect, hold and publish which location data where you operate.",
  },
  delivered: {
    title: "Spatial work from Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. In each region on this page you get one accountable team and shared documentation, and we schedule sessions around your hours. For our GIS development services, that includes keeping spatial data in the region your rules require.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "GIS platforms",
        items: "ArcGIS · QGIS",
      },
      {
        label: "Web mapping",
        items: "Mapbox · Leaflet",
      },
      {
        label: "Spatial database",
        items: "PostGIS",
      },
      {
        label: "Remote sensing",
        items: "Google Earth Engine",
      },
    ],
  },
  cta: {
    title: "Planning GIS development services? Let's talk.",
    text: "If you're planning GIS development services, we'd like to hear which question you want the map to answer. Tell us what data you hold and who needs it, and we'll tell you honestly what to build first.",
  },
};
