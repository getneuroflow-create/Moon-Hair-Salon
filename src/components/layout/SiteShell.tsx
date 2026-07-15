"use client";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScissorsPreloader } from "@/components/preloader/ScissorsPreloader";
import { LanguageProvider } from "@/context/LanguageContext";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const onComplete = useCallback(() => setReady(true), []);

  return (
    <LanguageProvider>
      <ScissorsPreloader onComplete={onComplete} />
      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Header />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </motion.div>
    </LanguageProvider>
  );
}
