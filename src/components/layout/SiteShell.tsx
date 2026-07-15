"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import {
  EditorialPreloader,
  type LoaderVariant,
} from "@/components/preloader/EditorialPreloader";
import { LanguageProvider } from "@/context/LanguageContext";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [playId, setPlayId] = useState(1);
  const [variant, setVariant] = useState<LoaderVariant>("initial");
  const [loading, setLoading] = useState(true);
  const [booted, setBooted] = useState(false);
  const prevPath = useRef<string | null>(null);

  const onLoaderReveal = useCallback(() => {
    setLoading(false);
    setBooted(true);
  }, []);

  const onLoaderFinished = useCallback(() => {
    setPlayId(0);
  }, []);

  useEffect(() => {
    if (!booted) {
      prevPath.current = pathname;
      return;
    }
    if (prevPath.current === pathname) return;

    prevPath.current = pathname;
    window.scrollTo(0, 0);
    setVariant("nav");
    setLoading(true);
    setPlayId((id) => (id <= 0 ? 1 : id + 1));
  }, [pathname, booted]);

  useEffect(() => {
    if (!loading) return;
    const id = window.setTimeout(() => {
      setLoading(false);
      setBooted(true);
      setPlayId(0);
    }, 6000);
    return () => window.clearTimeout(id);
  }, [loading, playId]);

  return (
    <LanguageProvider>
      <EditorialPreloader
        playId={playId}
        variant={variant}
        showBrand={variant === "initial"}
        onReveal={onLoaderReveal}
        onFinished={onLoaderFinished}
      />
      {/* Header stays clickable; only page content locks during the loader */}
      <Header />
      <div
        className="min-h-screen"
        style={{ pointerEvents: loading ? "none" : undefined }}
        aria-busy={loading}
      >
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
