import { MotionConfig } from "framer-motion";
import { Outlet } from "react-router-dom";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { InquiryDialog } from "@/components/shared/InquiryDialog";
import { AppShellProvider } from "@/context/AppShellContext";

const Layout = () => {
  return (
    <MotionConfig reducedMotion="user">
      <AppShellProvider>
        <div className="flex min-h-svh flex-col bg-background text-foreground">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <InquiryDialog />
        </div>
      </AppShellProvider>
    </MotionConfig>
  );
};

export default Layout;
