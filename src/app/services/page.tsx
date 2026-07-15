import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/services/ServicesPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Services",
  "Explore balayage, coloring, blowdry, keratin, extensions, manicure, and more at Moon Hair Studio in Metuchen, NJ.",
  "/services",
);

export default function ServicesPage() {
  return (
    <div className="gradient-atmosphere min-h-screen">
      <ServicesPageContent />
    </div>
  );
}
