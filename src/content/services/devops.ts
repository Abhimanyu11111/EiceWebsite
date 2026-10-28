import type { ServicePage } from "./types";

// Copy from page 13 of the Services Content Pack. Hero image and card icons are still to come
// (add hero.image and an icon per card when they arrive).
export const devops: ServicePage = {
  slug: "devops",
  name: "DevOps",
  seo: {
    title: "DevOps Services | CI/CD, IaC, Monitoring",
    description:
      "DevOps services: CI/CD pipelines, infrastructure as code, containers and monitoring. For teams in the US, Europe, the Middle East, Africa and Asia.",
    keywords: [
      "DevOps services",
      "CI/CD pipeline",
      "infrastructure as code",
      "Kubernetes",
      "DevSecOps",
      "monitoring and observability",
    ],
  },
  hero: {
    title: ["DevOps Services", "That Make Releasing Boring"],
    description:
      "We build the pipelines, infrastructure code and monitoring that turn deployment into a routine, repeatable event, so you can release often without breaking things. We serve teams in the US, Europe, the Middle East, Africa and Asia.",
  },
  overview: {
    title: "DevOps services, explained",
    paragraphs: [
      "DevOps services bring development and operations together so software moves from a developer's laptop to production along an automated, observable path. That covers CI/CD pipelines, infrastructure as code, containers, configuration management and monitoring.",
      "Deployment shouldn't depend on the one person who remembers the steps. Our DevOps services turn releases into pipelines, environments into code and surprises into alerts, so quality problems are caught early and a release stops being an event. We start with the path your code takes today and automate it step by step, keeping every stage visible. The aim is a team that can release on a Tuesday afternoon without a rehearsal.",
    ],
  },
  challenges: [
    {
      title: "Only one person knows how to deploy.",
      text: "The steps live in someone's head, and a holiday or a resignation puts the whole release process at risk.",
    },
    {
      title: "Releases are rare because they're risky.",
      text: "Every deployment is big, so every deployment is scary, so you do fewer of them.",
    },
    {
      title: "You learn about outages from your customers.",
      text: "There's no monitoring that tells you something is wrong before somebody calls.",
    },
  ],
  services: {
    title: "What our DevOps services include",
    items: [
      {
        title: "CI/CD Pipelines",
        text: 'Automated pipelines that turn "deploy" from a manual event into a repeatable process, with tests as gates.',
        tags: ["Pipeline automation", "Test gates", "Faster releases"],
      },
      {
        title: "Infrastructure as Code",
        text: "Environments defined in Terraform so they're reproducible and version-controlled, not manual setups only one person can recreate.",
        tags: ["Terraform", "Reproducible environments", "Scalability planning"],
      },
      {
        title: "Configuration Management",
        text: "Consistency across infrastructure and applications with Ansible, Puppet or Chef, so environments don't drift apart.",
        tags: ["Ansible", "Puppet", "Chef"],
      },
      {
        title: "Containers and Kubernetes",
        text: "Docker for portability and Kubernetes for orchestration, so scaling becomes a setting, not a rebuild.",
        tags: ["Docker", "Kubernetes", "Orchestration"],
      },
      {
        title: "Monitoring and Observability",
        text: "Metrics, dashboards and alerts that tell you something is wrong before your customers do.",
        tags: ["Prometheus", "Grafana", "Alerting"],
      },
      {
        title: "Security in the Pipeline",
        text: "Dependency checks, vulnerability scanning and software bills of materials built into the build, so security isn't a late review.",
        tags: ["Dependency scanning", "Vulnerability checks", "SBOMs"],
      },
    ],
  },
  approach: {
    title: "How we build delivery you can trust",
    paragraphs: [
      "We automate the path before we speed it up. A reliable pipeline comes first, because fast releases through an unreliable one just ship problems sooner.",
      "Environments are code. If a server can't be rebuilt from the repository, it's a risk.",
      "Alerts have to be worth waking up for. We tune monitoring so people trust the pages they get.",
      "Our own monitoring product follows this thinking. InfraSight watches servers, networks, apps and cloud from one dashboard, with nothing to install on what you monitor.",
    ],
  },
  steps: [
    {
      title: "Discover",
      text: "We map how software gets from a developer to production today, and where it hurts.",
    },
    {
      title: "Define",
      text: "We agree the release frequency, safety and evidence you want.",
    },
    {
      title: "Design",
      text: "We design the pipeline, the environments and the monitoring together.",
    },
    {
      title: "Product Development",
      text: "We build it on a real service first and prove it before rolling it out.",
    },
    {
      title: "Delivery",
      text: "We hand over runbooks and keep tuning with you.",
    },
  ],
  industries: [
    {
      title: "Product engineering teams",
      text: "Teams shipping weekly or daily who need releases to be dull and safe.",
    },
    {
      title: "Platform and cloud teams",
      text: "Teams running several environments who want them identical, documented and rebuildable.",
    },
    {
      title: "Security and compliance teams",
      text: "Teams who need evidence of how software is built, checked and released, not a promise.",
    },
  ],
  regions: {
    title: "Why DevOps services matter where you work",
    intro:
      "Regulators in several regions now treat how you build and release software as part of your security posture. A pipeline that produces the right evidence turns a compliance request into a download. Here's how each region shapes the work.",
    items: [
      {
        name: "United States",
        text: "Enterprise and public-sector buyers in the US increasingly ask vendors to show how software is built and checked, including how dependencies and vulnerabilities are handled. For you, that means a delivery process you can evidence. We build checks and records into the pipeline itself, so the answer to a buyer's security questionnaire is something the pipeline already produced.",
      },
      {
        name: "Europe",
        text: "The Cyber Resilience Act has required vulnerability and incident reporting since 11 September 2026 and applies fully from December 2027, NIS2 puts supply-chain security on in-scope companies, and DORA covers resilience testing in finance. For you, that means vulnerability handling, software bills of materials and tested recovery. We build dependency tracking and scanning into the pipeline, and set up tested rollback and recovery.",
      },
      {
        name: "Middle East",
        text: "Regulated sectors in the Gulf, including banking, energy and government, expect controlled releases, and data rules often keep workloads in regional clouds that AWS, Azure and Google Cloud now run there. For you, that means pipelines that deploy to in-country regions with approvals and records. We build region-aware pipelines with approval gates and logs for each release.",
      },
      {
        name: "Africa",
        text: "Engineering teams are often lean, and AWS and Azure run regions in South Africa for in-country hosting. For you, that means automation that reduces your dependence on scarce specialists and works across a thin team. We automate the routine releases, document each environment as code, and design the pipeline so one person leaving doesn't stop deployment.",
      },
      {
        name: "Asia",
        text: "Teams in Japan, South Korea, Singapore and India deploy to local cloud regions, often across several countries, and India's data protection rules phase in through 2027. For you, that means one pipeline that deploys consistently to many regions. We build a common pipeline and infrastructure pattern, then parameterize it per country and data rule.",
      },
    ],
    closing:
      "Every DevOps services project starts by asking what evidence your region expects about how software is built and released.",
  },
  delivered: {
    title: "Delivery pipelines from Houston and Noida",
    text: "Our headquarters is in Houston, Texas, and our engineering and delivery center is in Noida, India. Across the regions on this page you get one accountable team, shared documentation and release windows agreed around your hours. For our DevOps services, that means pipelines that keep running overnight so releases are ready when your day starts.",
  },
  technology: {
    title: "Technology we use",
    rows: [
      {
        label: "CI/CD",
        items: "GitHub Actions · Jenkins",
      },
      {
        label: "Infrastructure as code",
        items: "Terraform · Ansible",
      },
      {
        label: "Containers",
        items: "Docker · Kubernetes",
      },
      {
        label: "Monitoring",
        items: "Prometheus · Grafana",
      },
    ],
  },
  cta: {
    title: "Planning DevOps services? Let's talk.",
    text: "If you're planning DevOps services, we'd like to hear what makes your releases stressful. Tell us how software reaches production today, and we'll tell you honestly what to automate first.",
  },
};
