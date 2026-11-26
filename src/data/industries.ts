export interface IndustryItem {
  id:
    | "fintech-banking"
    | "healthcare"
    | "ecommerce-retail"
    | "education-edtech"
    | "logistics-supply-chain"
    | "saas-enterprise";
  number: string;
  title: string;
  description: string;
  focusAreas: string;
}

export const INDUSTRIES_WE_SERVE: IndustryItem[] = [
  {
    id: "fintech-banking",
    number: "01",
    title: "FinTech & Banking",
    description:
      "Digital wallets, payment orchestration layers, treasury dashboards, and reconciliation ledgers designed for high reliability and transparent financial workflows.",
    focusAreas: "Payment Rails · Digital Wallets · Reconciliation Ledgers",
  },
  {
    id: "healthcare",
    number: "02",
    title: "Healthcare",
    description:
      "Patient-centric web and mobile portals, telehealth consultation workflows, clinician scheduling tools, and structured care-coordination platforms.",
    focusAreas: "Telehealth Portals · Triage Workflows · Patient Platforms",
  },
  {
    id: "ecommerce-retail",
    number: "03",
    title: "E-commerce & Retail",
    description:
      "Custom headless storefronts, frictionless multi-step checkout experiences, omnichannel inventory synchronization, and merchant analytics consoles.",
    focusAreas: "Headless Storefronts · Checkout Flows · Inventory Sync",
  },
  {
    id: "education-edtech",
    number: "04",
    title: "Education & EdTech",
    description:
      "Interactive learning management systems, live cohort classrooms, curriculum authoring workspaces, and student progress tracking interfaces.",
    focusAreas: "LMS Platforms · Course Builders · Progress Analytics",
  },
  {
    id: "logistics-supply-chain",
    number: "05",
    title: "Logistics & Supply Chain",
    description:
      "Real-time fleet dispatch consoles, shipment visibility portals, route coordination dashboards, and warehouse operations software.",
    focusAreas: "Dispatch Consoles · Shipment Visibility · Fleet Operations",
  },
  {
    id: "saas-enterprise",
    number: "06",
    title: "SaaS & Enterprise",
    description:
      "Multi-tenant cloud software, role-based administration workspaces, self-serve billing systems, and bespoke internal platforms built to scale.",
    focusAreas: "Multi-Tenant Platforms · Role Access · Internal Tooling",
  },
];
