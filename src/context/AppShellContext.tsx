import { useEffect, useState, type ReactNode } from "react";

import { AppShellContext, type Theme } from "@/context/useAppShell";

const STORAGE_KEY = "veloce-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function AppShellProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedServiceInterest, setSelectedServiceInterest] = useState(
    "Web & SaaS Product"
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const openInquiryModal = (service?: string) => {
    if (service) {
      setSelectedServiceInterest(service);
    }
    setInquiryOpen(true);
  };

  return (
    <AppShellContext.Provider
      value={{
        theme,
        toggleTheme,
        inquiryOpen,
        setInquiryOpen,
        selectedServiceInterest,
        openInquiryModal,
      }}
    >
      {children}
    </AppShellContext.Provider>
  );
}
