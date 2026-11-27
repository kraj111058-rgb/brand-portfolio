export interface NavMenuItemData {
  title: string;
  description: string;
  href: string;
  icon:
    | "code"
    | "smartphone"
    | "palette"
    | "bot"
    | "users"
    | "rocket"
    | "layers"
    | "briefcase";
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

export interface SocialLink {
  id: "linkedin" | "x" | "instagram" | "facebook" | "youtube";
  label: string;
  href: string;
  hoverColorClass: string;
}

export const BRAND_INFO = {
  name: "Veloce Digital",
  shortMark: "VD",
  email: "hello@velocedigital.io",
  phone: "+1 (415) 890-4320",
  whatsappNumber: "14158904320",
  whatsappMessage: "Hello Veloce Digital, I would like to discuss a project.",
  rating: "4.9 / 5.0",
  reviewSource: "Clutch · 95+ Verified Client Reviews",
  offices: [
    { city: "Surat", region: "Engineering HQ · Gujarat, India" },
    { city: "Austin", region: "Product & Strategy · Texas, USA" },
    { city: "London", region: "Enterprise Delivery · United Kingdom" },
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com",
    hoverColorClass:
      "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white",
  },
  {
    id: "x",
    label: "Twitter / X",
    href: "https://x.com",
    hoverColorClass:
      "hover:bg-foreground hover:border-foreground hover:text-background",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    hoverColorClass:
      "hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    hoverColorClass:
      "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com",
    hoverColorClass:
      "hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white",
  },
];

export const HEADER_ANCHOR_LINKS = [
  { label: "Case Studies", href: "#work" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const MOBILE_NAV_LINKS = [
  { label: "Services & Capabilities", href: "#services" },
  { label: "Featured Case Studies", href: "#work" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Delivery Process", href: "#process" },
  { label: "Testimonials & FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const FOOTER_CAPABILITIES = [
  { label: "Web & SaaS", href: "#services" },
  { label: "Mobile Apps", href: "#services" },
  { label: "Product UI/UX", href: "#services" },
  { label: "AI & Automation", href: "#services" },
  { label: "Cloud & DevOps", href: "#tech-stack" },
];

export const FOOTER_ENGAGEMENT = [
  { label: "Case Studies", href: "#work" },
  { label: "Delivery Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_METRICS = [
  { value: "1,250+", label: "Projects Delivered" },
  { value: "85+", label: "Engineers & Designers" },
  { value: "94%", label: "Client Retention Rate" },
  { value: "12+", label: "Years Industry Experience" },
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
      description: "Scalable React, TypeScript, and cloud-native web platforms.",
      href: "#services",
      icon: "code",
      tag: "Core",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform apps for iOS and Android.",
      href: "#services",
      icon: "smartphone",
      tag: "Popular",
    },
    {
      title: "Product UI/UX & Design Systems",
      description: "Research-backed UX, design systems, and interactive prototypes.",
      href: "#services",
      icon: "palette",
    },
    {
      title: "AI Agents & Automation",
      description: "Custom AI copilots, smart search, and workflow automation.",
      href: "#services",
      icon: "bot",
      tag: "New",
    },
  ],
  spotlightBadge: "Complimentary Discovery",
  spotlightTitle: "Project Roadmap & Estimate",
  spotlightDescription:
    "Share your goals to receive a tailored architecture plan, timeline, and budget estimate within 24 hours.",
  spotlightCtaLabel: "Start a Project",
  spotlightTopic: "Web & SaaS Product",
  footerLabel: "View all services",
  footerHref: "#services",
};

export const SOLUTIONS_MENU: NavMenuGroup = {
  heading: "Delivery & Hiring Models",
  items: [
    {
      title: "Dedicated Product Squads",
      description: "Cross-functional product, design, and engineering teams.",
      href: "#contact",
      icon: "layers",
      tag: "Scale",
    },
    {
      title: "Hire Dedicated Engineers",
      description: "Senior React, Flutter, Node.js, Python, and AI specialists.",
      href: "#contact",
      icon: "users",
    },
    {
      title: "Fixed-Scope MVP Launch",
      description: "Take your product from concept to launch in 6–10 weeks.",
      href: "#process",
      icon: "rocket",
    },
    {
      title: "Featured Case Studies",
      description: "Explore real-world architecture and measurable client ROI.",
      href: "#work",
      icon: "briefcase",
    },
  ],
  spotlightBadge: "48-Hour Matching",
  spotlightTitle: "Need Senior Engineers Fast?",
  spotlightDescription:
    "Integrate vetted full-stack, mobile, or QA specialists directly into your existing workflow.",
  spotlightCtaLabel: "Hire Developers",
  spotlightTopic: "Hire Dedicated Engineers",
  footerLabel: "View delivery process",
  footerHref: "#process",
};
