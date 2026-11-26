export interface WhyChooseUsFeature {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  /** Up to three concise highlights shown as a visual row */
  pillars: { icon: string; label: string }[];
  surface?: "light" | "navy";
}

export const WHY_CHOOSE_US_FEATURES: WhyChooseUsFeature[] = [
  {
    id: "strategic-thinking",
    number: "01",
    eyebrow: "Business-First Engineering",
    title: "Strategic Thinking",
    description:
      "We analyse business goals, market dynamics, and operational workflows before committing a single line of code — ensuring every technical decision produces real commercial value.",
    pillars: [
      { icon: "goal", label: "Goal Alignment" },
      { icon: "blueprint", label: "Domain Blueprint" },
      { icon: "roi", label: "Measurable Outcomes" },
    ],
    surface: "light",
  },
  {
    id: "expert-team",
    number: "02",
    eyebrow: "Senior Technical Talent",
    title: "Expert Engineering Team",
    description:
      "Work directly with senior engineers and product designers who bring deep, battle-tested experience across SaaS, FinTech, and AI-driven platforms.",
    pillars: [
      { icon: "code", label: "Full-Stack Engineers" },
      { icon: "design", label: "Product Designers" },
      { icon: "review", label: "Peer-Reviewed Code" },
    ],
    surface: "light",
  },
  {
    id: "scalable-architecture",
    number: "03",
    eyebrow: "Future-Ready Systems",
    title: "Scalable Architecture",
    description:
      "We engineer modular, decoupled systems designed to grow alongside your business — from early MVP to high-traffic production without expensive re-platforming.",
    pillars: [
      { icon: "cloud", label: "Cloud-Native" },
      { icon: "micro", label: "Microservices" },
      { icon: "resilient", label: "Fault-Tolerant" },
    ],
    surface: "navy",
  },
  {
    id: "transparent-communication",
    number: "04",
    eyebrow: "Radical Transparency",
    title: "Transparent Communication",
    description:
      "Direct daily access to the engineers building your product — via dedicated channels, live sprint boards, and regular interactive demos throughout delivery.",
    pillars: [
      { icon: "chat", label: "Direct Channels" },
      { icon: "demo", label: "Sprint Demos" },
      { icon: "board", label: "Live Roadmap" },
    ],
    surface: "light",
  },
  {
    id: "reliable-delivery",
    number: "05",
    eyebrow: "Predictable Velocity",
    title: "Reliable Delivery",
    description:
      "Structured Agile cadences, automated CI/CD pipelines, and transparent milestone commitments keep your product on track from first commit to production launch.",
    pillars: [
      { icon: "sprint", label: "Sprint Cadence" },
      { icon: "ci", label: "CI/CD Pipelines" },
      { icon: "milestone", label: "Clear Milestones" },
    ],
    surface: "light",
  },
  {
    id: "long-term-partnership",
    number: "06",
    eyebrow: "Continuous Value",
    title: "Long-Term Partnership",
    description:
      "Product launch is Day One. We support your growth beyond release with proactive monitoring, iterative feature work, and ongoing performance improvements.",
    pillars: [
      { icon: "monitor", label: "Uptime Monitoring" },
      { icon: "iterate", label: "Feature Iterations" },
      { icon: "support", label: "Dedicated Support" },
    ],
    surface: "light",
  },
];
