import type { Metadata } from "next";
import { TeamPageContent } from "@/components/team/TeamPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Our Team",
  "Meet the friendly team at Moon Hair Studio in Metuchen, NJ. welcoming stylists focused on beautiful, polished results.",
  "/team",
);

export default function TeamPage() {
  return (
    <div className="gradient-atmosphere min-h-screen">
      <TeamPageContent />
    </div>
  );
}
