export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  stack: string[];
  inquiryTopic: string;
  featured?: boolean;
  accent: "indigo" | "teal" | "violet" | "amber" | "sky" | "rose";
}

export interface TechCategory {
  id: string;
  label: string;
  description: string;
  items: { name: string; role: string; note: string }[];
}

export interface EngagementModel {
  id: string;
  badge: string;
  title: string;
  description: string;
  bestFor: string;
  highlights: string[];
  ctaLabel: string;
  inquiryTopic: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  artifact: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "web-saas",
    title: "Web & SaaS Product Engineering",
    tagline: "Multi-tenant architectures built for speed and reliability",
    description:
      "From high-converting web platforms to complex multi-tenant SaaS applications, we build fast, modular frontends and resilient APIs designed to scale effortlessly.",
    deliverables: [
      "Custom SaaS Portals",
      "Headless Commerce",
      "APIs & Microservices",
    ],
    stack: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    inquiryTopic: "Web & SaaS Product",
    featured: true,
    accent: "indigo",
  },
  {
    id: "mobile-apps",
    title: "Native & Cross-Platform Mobile Apps",
    tagline: "Fluid mobile experiences for iOS and Android",
    description:
      "We build consumer apps, marketplaces, and fintech wallets featuring smooth animations, offline support, biometric security, and reliable app store release pipelines.",
    deliverables: [
      "Flutter & React Native",
      "Native Swift & Kotlin",
      "App Store Release Ops",
    ],
    stack: ["Flutter", "React Native", "Swift", "Kotlin"],
    inquiryTopic: "Mobile App (iOS / Android / Flutter)",
    featured: true,
    accent: "teal",
  },
  {
    id: "ui-ux",
    title: "Product UI/UX & Design Systems",
    tagline: "Intuitive interfaces designed for clarity and conversion",
    description:
      "User research, streamlined customer journeys, interactive prototypes, and reusable design systems that keep your product consistent as it grows.",
    deliverables: [
      "UX Audits & User Flows",
      "Reusable Design Systems",
      "Interactive Prototypes",
    ],
    stack: ["Figma", "Design Systems", "Tailwind CSS", "WCAG AA"],
    inquiryTopic: "Product UI/UX & Design System",
    accent: "violet",
  },
  {
    id: "ai-automation",
    title: "AI Agents & Workflow Automation",
    tagline: "Practical AI embedded into everyday operations",
    description:
      "Production AI assistants, intelligent document processing, semantic search, and automated workflows backed by strong security and human oversight.",
    deliverables: [
      "Custom AI Copilots",
      "Intelligent Knowledge Search",
      "Workflow Automation",
    ],
    stack: ["Python", "OpenAI / Gemini", "pgvector", "LangGraph"],
    inquiryTopic: "AI Agents & Automation",
    accent: "amber",
  },
  {
    id: "cloud-erp",
    title: "Enterprise Cloud, ERP & FinTech",
    tagline: "Compliant infrastructure and legacy modernization",
    description:
      "Modernize legacy software into observable cloud platforms featuring automated deployments, role-based access control, and SOC 2 and HIPAA-aligned security.",
    deliverables: [
      "ERP & CRM Platforms",
      "AWS & GCP DevOps",
      "Payment Integrations",
    ],
    stack: ["AWS", "Docker", "Kubernetes", "Terraform"],
    inquiryTopic: "Web & SaaS Product",
    accent: "sky",
  },
  {
    id: "dedicated-qa",
    title: "QA Automation & Dedicated Squads",
    tagline: "Ship faster without compromising product quality",
    description:
      "Dedicated QA automation engineers and full-stack developers who work seamlessly alongside your team in Slack, Jira, and GitHub.",
    deliverables: [
      "End-to-End & Load Testing",
      "48-Hour Onboarding",
      "Flexible Monthly Scaling",
    ],
    stack: ["Playwright", "Vitest", "CI/CD", "Sentry"],
    inquiryTopic: "Hire Dedicated Engineers",
    accent: "rose",
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend & UI",
    description:
      "Accessible, responsive interfaces engineered with modern component architecture.",
    items: [
      {
        name: "React",
        role: "UI Architecture",
        note: "Modular component architecture for fast, responsive interfaces",
      },
      {
        name: "TypeScript",
        role: "Type Safety",
        note: "End-to-end type safety across frontend and backend code",
      },
      {
        name: "Next.js",
        role: "Full-Stack Web",
        note: "Server-side rendering, edge caching, and SEO-ready web apps",
      },
      {
        name: "Design Systems",
        role: "UI Engineering",
        note: "Accessible component libraries tailored to your brand",
      },
      {
        name: "Vite",
        role: "Build Tooling",
        note: "Rapid local development and optimized production bundles",
      },
      {
        name: "GraphQL & tRPC",
        role: "Data Layer",
        note: "Predictable client caching and strict schema validation",
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Engineering",
    description:
      "Native performance and rapid cross-platform delivery for iOS and Android.",
    items: [
      {
        name: "Flutter",
        role: "Cross-Platform",
        note: "Smooth 60–120fps cross-platform UI from a single codebase",
      },
      {
        name: "React Native",
        role: "Cross-Platform JS",
        note: "Shared TypeScript business logic across web and mobile",
      },
      {
        name: "Swift & SwiftUI",
        role: "Native iOS",
        note: "Native iOS capabilities including Apple Pay and HealthKit",
      },
      {
        name: "Kotlin & Compose",
        role: "Native Android",
        note: "Native Android performance, background sync, and hardware access",
      },
      {
        name: "SQLite & Realm",
        role: "Offline Storage",
        note: "Reliable offline-first persistence for field and travel apps",
      },
      {
        name: "Fastlane & Bitrise",
        role: "Release Automation",
        note: "Automated App Store and Play Console deployment pipelines",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend & Cloud",
    description:
      "Resilient APIs, event streams, and high-availability cloud infrastructure.",
    items: [
      {
        name: "Node.js & NestJS",
        role: "API Services",
        note: "High-concurrency APIs, microservices, and real-time events",
      },
      {
        name: "Python & FastAPI",
        role: "Data & APIs",
        note: "Asynchronous services, data integrations, and ML APIs",
      },
      {
        name: "Laravel & Go",
        role: "Core Systems",
        note: "Rapid backend delivery and low-latency background workers",
      },
      {
        name: "PostgreSQL & Redis",
        role: "Data Storage",
        note: "Reliable relational storage, indexing, and distributed caching",
      },
      {
        name: "AWS & GCP",
        role: "Cloud Infrastructure",
        note: "Multi-region high-availability hosting and serverless compute",
      },
      {
        name: "Docker & Terraform",
        role: "DevOps & IaC",
        note: "Reproducible cloud environments and automated rollbacks",
      },
    ],
  },
  {
    id: "ai",
    label: "AI & Automation",
    description:
      "Grounded generative AI, semantic retrieval, and automated business workflows.",
    items: [
      {
        name: "Gemini & OpenAI",
        role: "Foundation Models",
        note: "Structured tool calling, multimodal inputs, and streaming UX",
      },
      {
        name: "LangGraph",
        role: "Agent Workflows",
        note: "Stateful multi-step AI workflows with human approval gates",
      },
      {
        name: "pgvector & Pinecone",
        role: "Vector Search",
        note: "Hybrid semantic and metadata retrieval pipelines",
      },
      {
        name: "Eval & Guardrails",
        role: "Reliability",
        note: "Automated accuracy testing, PII redaction, and tracing",
      },
      {
        name: "n8n & Webhooks",
        role: "Workflow Ops",
        note: "Automated CRM, billing, and ERP workflow orchestration",
      },
      {
        name: "ClickHouse",
        role: "Analytics",
        note: "Real-time product telemetry and AI usage analytics",
      },
    ],
  },
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    id: "squad",
    badge: "Most Popular",
    title: "Dedicated Product Squad",
    description:
      "A complete cross-functional team—Tech Lead, engineers, UI/UX designer, and QA—delivering production milestones every week.",
    bestFor: "Scaling SaaS platforms and ongoing product roadmaps",
    highlights: [
      "Team onboarding within 5 business days",
      "100% IP ownership and transparent sprint tracking",
      "Direct collaboration in Slack, Linear, Jira, and GitHub",
    ],
    ctaLabel: "Build Your Squad",
    inquiryTopic: "Web & SaaS Product",
  },
  {
    id: "mvp",
    badge: "6–10 Weeks",
    title: "Fixed-Scope MVP Launch",
    description:
      "Predictable pricing and timeline to validate, design, build, and launch your first release to real users.",
    bestFor: "Funded startups and new enterprise digital initiatives",
    highlights: [
      "Architecture plan and clickable prototype before development",
      "Milestone-based delivery with weekly staging reviews",
      "Production cloud deployment and 30-day post-launch warranty",
    ],
    ctaLabel: "Estimate Your MVP",
    inquiryTopic: "Web & SaaS Product",
  },
  {
    id: "hire",
    badge: "48-Hour Matching",
    title: "Hire Dedicated Engineers",
    description:
      "Expand your internal engineering team with vetted senior React, Flutter, Node.js, Python, AI, or QA specialists.",
    bestFor: "CTOs and engineering leaders scaling capacity quickly",
    highlights: [
      "Top 3% vetted engineers with 4+ years of experience",
      "Daily overlap with US, European, and APAC working hours",
      "Flexible monthly scaling with no long-term lock-in",
    ],
    ctaLabel: "Request Talent Profiles",
    inquiryTopic: "Hire Dedicated Engineers",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Technical Scope",
    duration: "Week 1",
    description:
      "We align on business objectives, user journeys, technical risks, and core requirements before writing a single line of code.",
    artifact: "Product Spec & Delivery Roadmap",
  },
  {
    step: "02",
    title: "UX Design & Architecture",
    duration: "Weeks 2–3",
    description:
      "We craft interactive Figma prototypes alongside database schemas, API contracts, and cloud security architecture.",
    artifact: "Design System & Cloud Blueprint",
  },
  {
    step: "03",
    title: "Agile Engineering Sprints",
    duration: "2-Week Cycles",
    description:
      "Clean, well-tested pull requests backed by automated test coverage and live staging demos at the end of every sprint.",
    artifact: "Production-Ready Staging Releases",
  },
  {
    step: "04",
    title: "Launch, Monitoring & Scale",
    duration: "Ongoing",
    description:
      "Zero-downtime releases, performance tuning, real-time monitoring, and continuous improvements driven by user data.",
    artifact: "SLA Support & Growth Roadmap",
  },
];
