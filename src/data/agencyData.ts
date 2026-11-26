export interface NavMenuItemData {
  title: string;
  description: string;
  href: string;
  icon: "code" | "smartphone" | "palette" | "bot" | "users" | "rocket" | "layers" | "briefcase";
  tag?: string;
}

export interface NavMenuGroup {
  heading: string;
  items: NavMenuItemData[];
  spotlightTitle: string;
  spotlightDescription: string;
  spotlightBadge: string;
  spotlightCtaLabel: string;
  spotlightTopic: string;
  footerLabel: string;
  footerHref: string;
}

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

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "Web & SaaS" | "Mobile Apps" | "AI & FinTech";
  industry: string;
  metricValue: string;
  metricLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  stack: string[];
  duration: string;
  accentGradient: string;
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

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  impact: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BRAND_INFO = {
  name: "Veloce Digital",
  shortMark: "VD",
  email: "hello@velocedigital.io",
  phone: "+1 (415) 890-4320",
  rating: "4.9 / 5.0",
  reviewSource: "Clutch · 95+ Verified Reviews",
  offices: [
    { city: "Surat", region: "Engineering HQ · Gujarat, IN" },
    { city: "Austin", region: "Product & Strategy · TX, USA" },
    { city: "London", region: "Enterprise Delivery · UK" },
  ],
};

export const HERO_METRICS = [
  { value: "1,250+", label: "Digital Products Shipped" },
  { value: "85+", label: "Engineers & Designers" },
  { value: "94%", label: "Client Retention Rate" },
  { value: "12+ Yrs", label: "Production Engineering" },
];

export const CLIENT_LOGOS = [
  "Northstar Pay",
  "Kinetix Cloud",
  "MedCore Health",
  "Orbit Logistics",
  "FinLedger",
  "Aura Commerce",
];

export const SERVICES_MENU: NavMenuGroup = {
  heading: "Core Engineering Services",
  items: [
    {
      title: "Web & SaaS Engineering",
      description: "Scalable React, TypeScript & cloud-native platforms.",
      href: "#services",
      icon: "code",
      tag: "Core",
    },
    {
      title: "Mobile App Development",
      description: "High-framerate iOS, Android, Flutter & React Native.",
      href: "#services",
      icon: "smartphone",
      tag: "Popular",
    },
    {
      title: "Product UI/UX & Systems",
      description: "Research-led UX, Figma tokens & interactive prototypes.",
      href: "#services",
      icon: "palette",
    },
    {
      title: "AI Agents & Automation",
      description: "Grounded LLM workflows, RAG search & copilots.",
      href: "#services",
      icon: "bot",
      tag: "New",
    },
  ],
  spotlightBadge: "Free Discovery",
  spotlightTitle: "Architecture & Cost Blueprint",
  spotlightDescription:
    "Share your idea and get a realistic timeline, stack recommendation, and sprint roadmap in 24h.",
  spotlightCtaLabel: "Start a Project",
  spotlightTopic: "Web & SaaS Product",
  footerLabel: "Explore all 6 capabilities",
  footerHref: "#services",
};

export const SOLUTIONS_MENU: NavMenuGroup = {
  heading: "Delivery & Hiring Models",
  items: [
    {
      title: "Dedicated Product Squads",
      description: "Cross-functional PM, UI/UX & full-stack teams ready fast.",
      href: "#engagement",
      icon: "layers",
      tag: "Scale",
    },
    {
      title: "Hire Dedicated Engineers",
      description: "Vetted React, Flutter, Node, Python & AI specialists.",
      href: "#engagement",
      icon: "users",
    },
    {
      title: "Fixed-Scope MVP Launch",
      description: "From validated concept to live launch in 6–10 weeks.",
      href: "#process",
      icon: "rocket",
    },
    {
      title: "Featured Case Studies",
      description: "Inspect architecture choices and verified client ROI.",
      href: "#work",
      icon: "briefcase",
    },
  ],
  spotlightBadge: "48h Matching",
  spotlightTitle: "Need Engineers This Week?",
  spotlightDescription:
    "Onboard senior full-stack, mobile, or QA specialists directly into your Slack & GitHub sprints.",
  spotlightCtaLabel: "Hire Developers",
  spotlightTopic: "Hire Dedicated Engineers",
  footerLabel: "Compare hiring models",
  footerHref: "#engagement",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web-saas",
    title: "Web & SaaS Product Engineering",
    tagline: "Multi-tenant architectures built for speed & conversion",
    description:
      "From high-converting marketing platforms to complex enterprise SaaS dashboards, we engineer modular frontends and resilient APIs designed for zero-downtime scale.",
    deliverables: [
      "Custom SaaS Portals",
      "Headless Commerce",
      "API & Microservices",
    ],
    stack: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
    inquiryTopic: "Web & SaaS Product",
    featured: true,
    accent: "indigo",
  },
  {
    id: "mobile-apps",
    title: "Native & Cross-Platform Mobile Apps",
    tagline: "60fps mobile experiences across iOS & Android",
    description:
      "Consumer apps, on-demand marketplaces, and FinTech wallets crafted with crisp native feel, offline sync, biometric security, and smooth release pipelines.",
    deliverables: [
      "Flutter & React Native",
      "Swift & Kotlin Native",
      "App Store Optimization",
    ],
    stack: ["Flutter", "React Native", "Swift", "Kotlin"],
    inquiryTopic: "Mobile App (iOS / Android / Flutter)",
    featured: true,
    accent: "teal",
  },
  {
    id: "ui-ux",
    title: "Product UI/UX & Design Systems",
    tagline: "Interfaces people understand in seconds",
    description:
      "User flows, interactive prototypes, and tokenized component libraries that keep product teams aligned and boost conversion.",
    deliverables: [
      "UX Audits & Flows",
      "Tokenized Design Systems",
      "Interactive Prototypes",
    ],
    stack: ["Figma", "Design Systems", "Tailwind CSS", "WCAG AA"],
    inquiryTopic: "Product UI/UX & Design System",
    accent: "violet",
  },
  {
    id: "ai-automation",
    title: "AI Agents & Data Pipelines",
    tagline: "Practical AI integrated into real workflows",
    description:
      "Production LLM assistants, document intelligence, semantic search, and predictive analytics with full observability and guardrails.",
    deliverables: [
      "Custom AI Copilots",
      "RAG Knowledge Search",
      "Workflow Automation",
    ],
    stack: ["Python", "OpenAI / Gemini", "pgvector", "LangGraph"],
    inquiryTopic: "AI Agents & Automation",
    accent: "amber",
  },
  {
    id: "cloud-erp",
    title: "Enterprise ERP, FinTech & Cloud",
    tagline: "Compliance-ready infrastructure & legacy modernization",
    description:
      "Modernize monolithic systems into observable cloud platforms with automated CI/CD, role-based access, and SOC2/HIPAA-aligned controls.",
    deliverables: [
      "ERP & CRM Platforms",
      "AWS / GCP DevOps",
      "Payment Integrations",
    ],
    stack: ["AWS", "Docker", "Kubernetes", "Terraform"],
    inquiryTopic: "Web & SaaS Product",
    accent: "sky",
  },
  {
    id: "dedicated-qa",
    title: "QA Automation & Dedicated Squads",
    tagline: "Ship faster without sacrificing stability",
    description:
      "Embedded QA automation engineers and full-stack developers who integrate directly into your Slack, Jira, and GitHub sprints.",
    deliverables: [
      "E2E & Load Testing",
      "48h Engineer Onboarding",
      "Flexible Monthly Scaling",
    ],
    stack: ["Playwright", "Vitest", "CI/CD", "Sentry"],
    inquiryTopic: "Hire Dedicated Engineers",
    accent: "rose",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "finpulse-pay",
    title: "FinPulse Pay",
    client: "Northstar Financial",
    category: "Mobile Apps",
    industry: "FinTech & Wallets",
    metricValue: "2.4M+",
    metricLabel: "Monthly transactions processed",
    summary:
      "Cross-border multi-currency mobile wallet and instant treasury dashboard engineered for high-velocity consumer and SMB payments.",
    challenge:
      "Legacy banking screens caused a 38% onboarding drop-off and slow KYC verification across 14 supported currencies.",
    solution:
      "Redesigned the 3-step biometric KYC flow in Flutter with real-time FX rate locking, optimistic ledger updates, and automated compliance checks.",
    outcomes: [
      "4.9★ rating across 18,000+ iOS & Android reviews",
      "Onboarding completion jumped from 62% to 91%",
      "99.99% payment webhook reliability in production",
    ],
    stack: ["Flutter", "Node.js", "PostgreSQL", "Stripe Connect", "AWS"],
    duration: "14 Weeks",
    accentGradient: "from-indigo-500/20 via-blue-500/10 to-cyan-500/20",
  },
  {
    id: "medsync-care",
    title: "MedSync Care Portal",
    client: "MedCore Health Systems",
    category: "Web & SaaS",
    industry: "Healthcare SaaS",
    metricValue: "-42%",
    metricLabel: "Average patient triage wait time",
    summary:
      "Unified clinician workstation and telehealth scheduling portal connecting 140+ outpatient clinics with real-time EHR syncing.",
    challenge:
      "Clinicians switched between four disconnected tools during consultations, delaying chart updates and creating scheduling bottlenecks.",
    solution:
      "Built a unified React + TypeScript workspace with keyboard-first navigation, encrypted HD video rooms, and HL7/FHIR sync pipelines.",
    outcomes: [
      "42% faster patient intake and clinical triage",
      "99.98% uptime across 140+ connected clinics",
      "Zero critical security findings on third-party audit",
    ],
    stack: ["React", "TypeScript", "Python", "FHIR API", "Docker"],
    duration: "18 Weeks",
    accentGradient: "from-teal-500/20 via-emerald-500/10 to-sky-500/20",
  },
  {
    id: "voyage-os",
    title: "VoyageOS Planner",
    client: "Voyage Global",
    category: "Mobile Apps",
    industry: "Travel & Hospitality",
    metricValue: "+165%",
    metricLabel: "Lift in mobile booking conversion",
    summary:
      "AI-assisted itinerary builder and offline-ready travel companion app combining dynamic pricing, local passes, and instant rebooking.",
    challenge:
      "Travelers abandoned multi-leg bookings due to fragmented search filters and slow checkout load times on mobile networks.",
    solution:
      "Engineered a React Native + edge-cached search engine with instant itinerary cards, Apple/Google Pay, and offline ticket vaults.",
    outcomes: [
      "165% increase in completed mobile reservations",
      "Sub-300ms search filtering across 40,000+ listings",
      "Featured in regional App Store travel picks",
    ],
    stack: ["React Native", "Next.js", "GraphQL", "Redis", "GCP"],
    duration: "12 Weeks",
    accentGradient: "from-amber-500/20 via-orange-500/10 to-rose-500/20",
  },
  {
    id: "scaleops-ai",
    title: "ScaleOps Copilot",
    client: "Kinetix Cloud",
    category: "AI & FinTech",
    industry: "Enterprise AI SaaS",
    metricValue: "68%",
    metricLabel: "Automated Tier-1 ticket resolution",
    summary:
      "Autonomous customer operations copilot grounded in live product docs, billing telemetry, and safe human-in-the-loop approvals.",
    challenge:
      "Support engineering spent 60% of sprint capacity answering repetitive API debugging and billing entitlement questions.",
    solution:
      "Architected a hybrid vector + structured SQL RAG pipeline with citation grounding, confidence scoring, and Slack escalation workflows.",
    outcomes: [
      "68% deflection of Tier-1 support tickets within 30 days",
      "Median first-response time reduced from 4h to 11s",
      "Full audit trail with zero hallucinated policy responses",
    ],
    stack: ["Python", "React", "pgvector", "Gemini API", "LangGraph"],
    duration: "10 Weeks",
    accentGradient: "from-violet-500/20 via-purple-500/10 to-indigo-500/20",
  },
  {
    id: "cartflow-commerce",
    title: "CartFlow B2B",
    client: "Aura Wholesale",
    category: "Web & SaaS",
    industry: "B2B E-Commerce",
    metricValue: "3.1x",
    metricLabel: "Faster wholesale reorder speed",
    summary:
      "Headless B2B commerce storefront with tiered contract pricing, bulk SKU matrix ordering, and real-time warehouse inventory sync.",
    challenge:
      "Wholesale buyers relied on emailed spreadsheets because the legacy store took 15+ minutes for multi-warehouse bulk orders.",
    solution:
      "Delivered a keyboard-driven bulk order grid, instant ERP webhook sync, and role-based approval workflows in React and Node.js.",
    outcomes: [
      "3.1x faster repeat purchase cycle for B2B buyers",
      "$48M+ annualized GMV migrated seamlessly",
      "98 Lighthouse performance score on catalog pages",
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "Shopify Plus", "Redis"],
    duration: "16 Weeks",
    accentGradient: "from-sky-500/20 via-indigo-500/10 to-violet-500/20",
  },
  {
    id: "vaultguard-ledger",
    title: "VaultGuard Telemetry",
    client: "FinLedger Corp",
    category: "AI & FinTech",
    industry: "Risk & Compliance",
    metricValue: "<45ms",
    metricLabel: "Real-time anomaly detection latency",
    summary:
      "Streaming risk-scoring engine and executive compliance command center monitoring cross-account transfers and API anomalies.",
    challenge:
      "Batch overnight fraud reports caught suspicious payouts hours too late, creating manual chargeback exposure.",
    solution:
      "Built an event-driven Kafka + ML scoring pipeline paired with a high-contrast operator dashboard for one-click rule tuning.",
    outcomes: [
      "Sub-45ms transaction risk scoring at peak traffic",
      "74% reduction in false-positive manual reviews",
      "SOC2 Type II compliant audit export built-in",
    ],
    stack: ["TypeScript", "Python", "Kafka", "ClickHouse", "AWS"],
    duration: "15 Weeks",
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend & UI",
    description:
      "Accessible, ultra-fast interfaces powered by modern component primitives.",
    items: [
      {
        name: "React",
        role: "UI Architecture",
        note: "Concurrent rendering, Server Actions & modular SPAs",
      },
      {
        name: "TypeScript",
        role: "Type Safety",
        note: "Strict end-to-end contracts from API to UI",
      },
      {
        name: "Next.js",
        role: "Full-Stack Web",
        note: "SSR, edge caching & SEO-optimized platforms",
      },
      {
        name: "Design Systems",
        role: "UI Engineering",
        note: "Accessible component libraries with bespoke brand tokens",
      },
      {
        name: "Vite",
        role: "Build Tooling",
        note: "Instant HMR and lean production bundles",
      },
      {
        name: "GraphQL / tRPC",
        role: "Data Layer",
        note: "Predictable client caching and schema validation",
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Engineering",
    description:
      "Native performance and shared-code velocity for iOS and Android.",
    items: [
      {
        name: "Flutter",
        role: "Cross-Platform",
        note: "Pixel-perfect custom UI at 60–120fps",
      },
      {
        name: "React Native",
        role: "JS Native Apps",
        note: "Shared TypeScript business logic across web & mobile",
      },
      {
        name: "Swift & SwiftUI",
        role: "Native iOS",
        note: "Apple Pay, HealthKit, CoreML & App Clips",
      },
      {
        name: "Kotlin & Compose",
        role: "Native Android",
        note: "Hardware integrations, background sync & Play Billing",
      },
      {
        name: "SQLite / Realm",
        role: "Offline-First",
        note: "Reliable local persistence for field & travel apps",
      },
      {
        name: "Fastlane & Bitrise",
        role: "Release Ops",
        note: "Automated TestFlight, Play Console & OTA updates",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend & Cloud",
    description:
      "Resilient APIs, event streams, and zero-downtime cloud infrastructure.",
    items: [
      {
        name: "Node.js & NestJS",
        role: "API Services",
        note: "High-concurrency microservices and WebSockets",
      },
      {
        name: "Python & FastAPI",
        role: "Data & APIs",
        note: "Async backends, integrations & ML serving",
      },
      {
        name: "Laravel / Go",
        role: "Core Systems",
        note: "Rapid SaaS delivery & ultra-low-latency workers",
      },
      {
        name: "PostgreSQL & Redis",
        role: "Data Stores",
        note: "ACID transactions, indexing & distributed caching",
      },
      {
        name: "AWS & GCP",
        role: "Cloud Infra",
        note: "ECS, EKS, Lambda, CloudFront & multi-region HA",
      },
      {
        name: "Docker & Terraform",
        role: "DevOps / IaC",
        note: "Reproducible environments & automated rollbacks",
      },
    ],
  },
  {
    id: "ai",
    label: "AI & Automation",
    description:
      "Grounded generative AI, semantic retrieval, and intelligent workflows.",
    items: [
      {
        name: "Gemini & OpenAI",
        role: "Foundation Models",
        note: "Structured tool calling, multimodal & streaming UX",
      },
      {
        name: "LangGraph",
        role: "Agent Workflows",
        note: "Stateful multi-step agents with human checkpoints",
      },
      {
        name: "pgvector & Pinecone",
        role: "Vector Search",
        note: "Hybrid semantic + metadata retrieval pipelines",
      },
      {
        name: "Eval & Guardrails",
        role: "Reliability",
        note: "Automated prompt regressions, PII masking & tracing",
      },
      {
        name: "n8n & Webhooks",
        role: "Ops Automation",
        note: "CRM, billing, and ERP event orchestration",
      },
      {
        name: "ClickHouse",
        role: "Telemetry",
        note: "Real-time product & AI cost analytics",
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
      "A complete cross-functional team (Tech Lead, Full-Stack/Mobile Engineers, UI/UX Designer, QA) shipping weekly milestones.",
    bestFor: "Scaling SaaS products & continuous roadmap velocity",
    highlights: [
      "Onboard within 5 business days",
      "Full IP ownership & transparent sprint velocity",
      "Direct Slack, Linear/Jira & GitHub collaboration",
    ],
    ctaLabel: "Configure a Squad",
    inquiryTopic: "Web & SaaS Product",
  },
  {
    id: "mvp",
    badge: "6–10 Weeks",
    title: "Fixed-Scope MVP Launch",
    description:
      "Predictable budget and timeline to validate, design, build, and launch your v1 product to first paying customers.",
    bestFor: "Funded startups & new enterprise digital ventures",
    highlights: [
      "Architecture blueprint + clickable Figma before build",
      "Milestone-based delivery & weekly live staging demos",
      "Production cloud setup & 30-day launch warranty",
    ],
    ctaLabel: "Estimate Your MVP",
    inquiryTopic: "Web & SaaS Product",
  },
  {
    id: "hire",
    badge: "48h Matching",
    title: "Hire Dedicated Engineers",
    description:
      "Augment your internal engineering org with vetted senior React, Flutter, Node.js, Python, AI, or QA specialists.",
    bestFor: "CTOs & engineering managers closing skill gaps fast",
    highlights: [
      "Top 3% vetted engineers with 4+ years experience",
      "US, EU & APAC overlapping working hours",
      "Zero lock-in with simple monthly scaling",
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
      "We align on business goals, user journeys, core risks, and non-functional requirements before writing a single line of code.",
    artifact: "Product Spec & Cost Roadmap",
  },
  {
    step: "02",
    title: "UX Systems & Architecture",
    duration: "Weeks 2–3",
    description:
      "Design high-fidelity interactive prototypes alongside database schemas, API contracts, and cloud security topology.",
    artifact: "Figma System & Cloud Blueprint",
  },
  {
    step: "03",
    title: "Agile Engineering Sprints",
    duration: "2-Week Cycles",
    description:
      "Clean, tested pull requests with automated Playwright/unit coverage and live staging demos at the end of every sprint.",
    artifact: "Production-Ready Staging Builds",
  },
  {
    step: "04",
    title: "Launch, Telemetry & Scale",
    duration: "Ongoing",
    description:
      "Zero-downtime deployment, performance profiling, observability alerts, and continuous feature iteration based on real usage.",
    artifact: "SLA Monitoring & Growth Support",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Veloce Digital rebuilt our fragmented FinTech onboarding into a 3-step mobile flow. Completion rose by 29 points in the first month without adding support headcount.",
    author: "Marcus Vance",
    role: "VP of Product",
    company: "Northstar Financial",
    location: "Austin, USA",
    impact: "91% Onboarding Completion",
  },
  {
    id: "t2",
    quote:
      "Their engineering rigor feels like an in-house Silicon Valley team. Clean TypeScript codebases, thoughtful component architecture, and zero missed sprint commitments.",
    author: "Dr. Elena Rostova",
    role: "Chief Digital Officer",
    company: "MedCore Health",
    location: "London, UK",
    impact: "42% Faster Triage",
  },
  {
    id: "t3",
    quote:
      "We hired two Flutter engineers and a product designer within four days. Six months later, they own our core customer app with a 4.9★ rating.",
    author: "Aarav Patel",
    role: "Founder & CEO",
    company: "Voyage Global",
    location: "Toronto, Canada",
    impact: "+165% Mobile Conversion",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How quickly can we kick off a new project or hire developers?",
    answer:
      "For fixed-scope MVP builds, we begin Technical Discovery within 3–5 business days of scope alignment. For Dedicated Engineers or Staff Augmentation, we share vetted candidate profiles within 48 hours and onboard directly into your workflow.",
  },
  {
    id: "faq-2",
    question: "Do we retain 100% ownership of the source code and IP?",
    answer:
      "Yes, always. Every engagement starts with a mutual NDA and a contract assigning 100% intellectual property, source code, Figma design files, and cloud infrastructure configurations directly to your organization.",
  },
  {
    id: "faq-3",
    question: "How do you handle timezone overlap and communication?",
    answer:
      "Our engineering hubs align with US Eastern/Central mornings and full UK/EU business hours (4–6 hours daily overlap). Every squad runs daily async standups in Slack, weekly live sprint demos, and shared Linear/Jira boards.",
  },
  {
    id: "faq-4",
    question: "Can you modernize an existing product instead of building from scratch?",
    answer:
      "Yes. Roughly half of our engagements involve auditing and upgrading legacy React, PHP, or mobile codebases—improving Core Web Vitals, migrating to modern TypeScript design systems, and eliminating API bottlenecks without halting releases.",
  },
  {
    id: "faq-5",
    question: "What happens after our product launches?",
    answer:
      "Every build includes a 30-day post-launch warranty covering bug fixes and performance tuning. Afterward, you can retain a flexible support SLA or scale down smoothly with full documentation and handover.",
  },
];

export const INQUIRY_SERVICE_OPTIONS = [
  "Web & SaaS Product",
  "Mobile App (iOS / Android / Flutter)",
  "Product UI/UX & Design System",
  "AI Agents & Automation",
  "Hire Dedicated Engineers",
  "Legacy Modernization / Audit",
];

export const INQUIRY_BUDGET_OPTIONS = [
  "$15k – $30k (MVP / Sprint)",
  "$30k – $75k (Full Product)",
  "$75k – $150k+ (Enterprise / Multi-Platform)",
  "Monthly Dedicated Team ($4k+/mo)",
];
