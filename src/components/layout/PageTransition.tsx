"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Loader owns page-change transitions, so we avoid a second fade here
 * (that was causing lag after the editorial loader).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="min-h-[50vh]">
      {children}
    </div>
  );
}
