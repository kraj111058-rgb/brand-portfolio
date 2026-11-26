import { createContext, useContext } from "react";

export type Theme = "light" | "dark";

export interface AppShellContextValue {
  theme: Theme;
  toggleTheme: () => void;
  inquiryOpen: boolean;
  setInquiryOpen: (open: boolean) => void;
  selectedServiceInterest: string;
  openInquiryModal: (service?: string) => void;
}

export const AppShellContext = createContext<AppShellContextValue | null>(null);

export function useAppShell() {
  const ctx = useContext(AppShellContext);
  if (!ctx) {
    throw new Error("useAppShell must be used inside AppShellProvider");
  }
  return ctx;
}
