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
    label: "Frontend",
    description:
      "Accessible, responsive user interfaces engineered with strict type safety and reusable component systems.",
    items: [
      {
        name: "React",
        role: "UI Architecture",
        note: "Modular component architecture for responsive web applications.",
      },
      {
        name: "TypeScript",
        role: "Type Safety",
        note: "End-to-end static typing across frontend interfaces and API contracts.",
      },
      {
        name: "Next.js",
        role: "Full-Stack Web",
        note: "Server-side rendering, edge caching, and SEO-ready storefronts.",
      },
      {
        name: "Tailwind CSS",
        role: "Design Styling",
        note: "Token-driven utility styling built for speed and visual consistency.",
      },
      {
        name: "Vite",
        role: "Build Tooling",
        note: "Rapid local development and lean, optimized production bundles.",
      },
      {
        name: "Figma",
        role: "Design Systems",
        note: "Interactive prototypes and tokenized component handoff workflows.",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description:
      "Resilient APIs, event-driven pipelines, and modular domain services built for high concurrency.",
    items: [
      {
        name: "Node.js",
        role: "API Services",
        note: "High-concurrency APIs, microservices, and real-time webhook engines.",
      },
      {
        name: "Python",
        role: "Data & ML APIs",
        note: "Asynchronous backend services, data integrations, and AI endpoints.",
      },
      {
        name: "Go",
        role: "Core Workers",
        note: "Low-latency services and lightweight background processing workers.",
      },
      {
        name: "Laravel",
        role: "Web Systems",
        note: "Structured MVC platforms for rapid enterprise portal delivery.",
      },
      {
        name: "GraphQL",
        role: "Schema APIs",
        note: "Predictable client caching and strongly typed schema validation.",
      },
      {
        name: "Kafka",
        role: "Event Streaming",
        note: "Real-time telemetry ingestion and fault-tolerant async messaging.",
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    description:
      "Native performance and fluid cross-platform engineering for iOS and Android devices.",
    items: [
      {
        name: "Flutter",
        role: "Cross-Platform",
        note: "Smooth 60–120fps native-compiled UI from a unified codebase.",
      },
      {
        name: "React Native",
        role: "Cross-Platform JS",
        note: "Shared TypeScript business logic across mobile and web products.",
      },
      {
        name: "Swift",
        role: "Native iOS",
        note: "Native iOS interfaces with biometric auth and platform integrations.",
      },
      {
        name: "Kotlin",
        role: "Native Android",
        note: "Modern Android UI, background sync, and hardware capabilities.",
      },
      {
        name: "Fastlane",
        role: "Release Ops",
        note: "Automated signing, test verification, and store submission pipelines.",
      },
      {
        name: "Bitrise",
        role: "Mobile CI/CD",
        note: "Continuous mobile build testing and distribution workflows.",
      },
    ],
  },
  {
    id: "database",
    label: "Database",
    description:
      "Reliable transactional persistence, distributed caching, semantic vector indexing, and analytics.",
    items: [
      {
        name: "PostgreSQL",
        role: "Relational Data",
        note: "ACID-compliant transactional storage and structured relational schemas.",
      },
      {
        name: "Redis",
        role: "Distributed Cache",
        note: "Sub-millisecond session storage, rate limiting, and query caching.",
      },
      {
        name: "pgvector",
        role: "Vector Embeddings",
        note: "Hybrid relational and semantic similarity search inside Postgres.",
      },
      {
        name: "Pinecone",
        role: "Vector Indexing",
        note: "Low-latency high-dimensional retrieval for knowledge bases.",
      },
      {
        name: "ClickHouse",
        role: "Telemetry Analytics",
        note: "High-speed columnar storage for real-time product analytics.",
      },
      {
        name: "SQLite",
        role: "Offline Storage",
        note: "Reliable local-first storage for mobile and edge environments.",
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    description:
      "Multi-region cloud infrastructure, reproducible containers, automated QA, and live observability.",
    items: [
      {
        name: "AWS",
        role: "Cloud Platform",
        note: "Multi-region hosting, managed databases, and serverless compute.",
      },
      {
        name: "GCP",
        role: "Cloud Compute",
        note: "Scalable container hosting, cloud networking, and managed AI services.",
      },
      {
        name: "Docker",
        role: "Containers",
        note: "Reproducible application environments across development and release.",
      },
      {
        name: "Kubernetes",
        role: "Orchestration",
        note: "Automated scaling, self-healing workloads, and zero-downtime rollouts.",
      },
      {
        name: "Terraform",
        role: "Infra as Code",
        note: "Version-controlled cloud provisioning and repeatable deployments.",
      },
      {
        name: "Sentry",
        role: "Observability",
        note: "Live performance tracing and production error monitoring.",
      },
    ],
  },
  {
    id: "ai",
    label: "AI & Automation",
    description:
      "Practical generative AI copilots, semantic retrieval pipelines, and auditable workflow automation.",
    items: [
      {
        name: "Gemini API",
        role: "Foundation Models",
        note: "Multimodal reasoning, structured tool calling, and streaming responses.",
      },
      {
        name: "OpenAI",
        role: "Language Models",
        note: "Production text synthesis, function calling, and assistant workflows.",
      },
      {
        name: "LangGraph",
        role: "Agent Workflows",
        note: "Stateful multi-step agent orchestration with human approval gates.",
      },
      {
        name: "pgvector",
        role: "Retrieval Storage",
        note: "Grounded semantic and metadata search inside PostgreSQL.",
      },
      {
        name: "Pinecone",
        role: "Semantic Index",
        note: "Vector indexing pipelines for instant knowledge retrieval.",
      },
      {
        name: "n8n",
        role: "Workflow Ops",
        note: "Automated CRM, billing, and internal operational integrations.",
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
    duration: "Strategy",
    description:
      "Understand business requirements, define project scope, identify challenges, and establish a technical roadmap.",
    artifact: "Product Spec & Technical Roadmap",
  },
  {
    step: "02",
    title: "UX Design & Architecture",
    duration: "Blueprint",
    description:
      "Create user-focused experiences, design system foundations, and scalable technical architecture.",
    artifact: "Design System & Architecture Plan",
  },
  {
    step: "03",
    title: "Agile Engineering Sprints",
    duration: "Execution",
    description:
      "Build through structured development cycles, code reviews, continuous testing, and regular progress updates.",
    artifact: "Reviewed Builds & Staging Updates",
  },
  {
    step: "04",
    title: "Launch, Monitoring & Scale",
    duration: "Evolution",
    description:
      "Deploy the product, monitor performance, resolve issues, and support future improvements.",
    artifact: "Production Release & Ongoing Support",
  },
];
