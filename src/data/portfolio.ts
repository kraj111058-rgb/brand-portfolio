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

export const PORTFOLIO_CATEGORIES: Array<"All" | CaseStudy["category"]> = [
  "All",
  "Web & SaaS",
  "Mobile Apps",
  "AI & FinTech",
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
      "Cross-border multi-currency mobile wallet and instant treasury dashboard engineered for high-volume consumer and SMB payments.",
    challenge:
      "Legacy banking screens caused a 38% onboarding drop-off and slow identity verification across 14 supported currencies.",
    solution:
      "Redesigned the three-step biometric onboarding flow in Flutter with real-time exchange rate locking, instant ledger updates, and automated compliance checks.",
    outcomes: [
      "4.9-star rating across 18,000+ iOS and Android reviews",
      "Onboarding completion increased from 62% to 91%",
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
      "Unified clinician workspace and telehealth scheduling portal connecting 140+ outpatient clinics with real-time health record syncing.",
    challenge:
      "Clinicians had to switch between four disconnected tools during appointments, delaying chart updates and creating scheduling bottlenecks.",
    solution:
      "Built a unified React and TypeScript workspace featuring keyboard-first navigation, encrypted HD video consultations, and HL7/FHIR data synchronization.",
    outcomes: [
      "42% faster patient intake and clinical triage",
      "99.98% uptime across 140+ connected clinics",
      "Zero critical security issues in independent third-party audits",
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
    metricLabel: "Increase in mobile booking conversion",
    summary:
      "AI-assisted itinerary builder and offline-ready travel companion app combining dynamic pricing, local passes, and instant rebooking.",
    challenge:
      "Travelers frequently abandoned multi-leg bookings due to cluttered search filters and slow checkout speeds on mobile networks.",
    solution:
      "Built a React Native mobile experience backed by edge-cached search, interactive itinerary cards, Apple and Google Pay checkout, and offline ticket access.",
    outcomes: [
      "165% increase in completed mobile reservations",
      "Sub-300ms search filtering across 40,000+ listings",
      "Featured in regional App Store travel collections",
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
    metricLabel: "Tier-1 support inquiries resolved automatically",
    summary:
      "Customer operations copilot grounded in live product documentation, billing telemetry, and safe human approval workflows.",
    challenge:
      "Support engineers were spending 60% of their sprint capacity answering repetitive API troubleshooting and billing questions.",
    solution:
      "Engineered a hybrid retrieval pipeline combining semantic documentation search and live database checks with source citations and seamless Slack escalation.",
    outcomes: [
      "68% deflection of Tier-1 support tickets within 30 days",
      "Median first-response time dropped from 4 hours to 11 seconds",
      "Full audit trail with policy-verified responses",
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
      "Headless B2B commerce storefront with tiered contract pricing, bulk SKU ordering grids, and real-time warehouse inventory sync.",
    challenge:
      "Wholesale buyers relied on emailed spreadsheets because the legacy portal took over 15 minutes to process multi-warehouse bulk orders.",
    solution:
      "Delivered a keyboard-driven bulk ordering interface, real-time ERP webhook sync, and role-based approval workflows in React and Node.js.",
    outcomes: [
      "3.1x faster repeat purchasing for wholesale accounts",
      "$48M+ in annualized GMV migrated without downtime",
      "98/100 performance score across catalog pages",
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
      "Streaming risk-scoring engine and compliance command center monitoring cross-account transfers and API anomalies in real time.",
    challenge:
      "Overnight batch fraud reports flagged suspicious payouts hours too late, increasing manual review overhead and chargeback risk.",
    solution:
      "Built an event-driven Kafka and ML scoring pipeline paired with a high-contrast operator dashboard for instant rule updates.",
    outcomes: [
      "Sub-45ms transaction risk scoring at peak traffic",
      "74% reduction in false-positive manual reviews",
      "SOC 2 Type II compliant audit exports built in",
    ],
    stack: ["TypeScript", "Python", "Kafka", "ClickHouse", "AWS"],
    duration: "15 Weeks",
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
];
