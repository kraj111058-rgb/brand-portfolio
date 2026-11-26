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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Veloce Digital redesigned our fragmented fintech onboarding into a simple three-step mobile flow. Completion rose by 29 percentage points in the first month without adding support staff.",
    author: "Marcus Vance",
    role: "VP of Product",
    company: "Northstar Financial",
    location: "Austin, USA",
    impact: "91% Onboarding Completion",
  },
  {
    id: "t2",
    quote:
      "Their engineering discipline feels like an in-house Silicon Valley team. We got clean TypeScript codebases, thoughtful component architecture, and zero missed sprint commitments.",
    author: "Dr. Elena Rostova",
    role: "Chief Digital Officer",
    company: "MedCore Health",
    location: "London, UK",
    impact: "42% Faster Triage",
  },
  {
    id: "t3",
    quote:
      "We hired two Flutter engineers and a product designer within four days. Six months later, they own our core customer app—now holding a 4.9-star rating.",
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
      "For fixed-scope MVP builds, we begin technical discovery within 3–5 business days of scope alignment. For dedicated engineers or staff augmentation, we share vetted candidate profiles within 48 hours and onboard them directly into your workflow.",
  },
  {
    id: "faq-2",
    question: "Do we retain 100% ownership of the source code and IP?",
    answer:
      "Yes, always. Every engagement begins with a mutual NDA and a clear agreement assigning 100% intellectual property, source code, design files, and cloud configurations directly to your organization.",
  },
  {
    id: "faq-3",
    question: "How do you manage time zones and daily communication?",
    answer:
      "Our engineering hubs align with US morning hours and full UK and European business hours, providing 4–6 hours of daily overlap. Every squad runs daily async updates in Slack, weekly live sprint demos, and shared Linear or Jira boards.",
  },
  {
    id: "faq-4",
    question:
      "Can you modernize an existing product instead of rebuilding from scratch?",
    answer:
      "Yes. Roughly half of our engagements involve auditing and upgrading existing React, PHP, or mobile codebases—improving performance, migrating to modern TypeScript design systems, and resolving backend bottlenecks without halting releases.",
  },
  {
    id: "faq-5",
    question: "What kind of support do you provide after launch?",
    answer:
      "Every build includes a 30-day post-launch warranty covering bug fixes and performance optimization. Afterward, you can continue with a flexible support retainer or transition smoothly with complete documentation and handover.",
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
