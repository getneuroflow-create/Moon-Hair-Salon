import type { Metadata } from "next";
import { ReviewsPageContent } from "@/components/reviews/ReviewsPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Reviews",
  "See why clients love Moon Hair Studio in Metuchen. 4.4 stars from 89 Google reviews. Leave a review to support our local salon.",
  "/reviews",
);

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-deep">
      <ReviewsPageContent />
    </div>
  );
}
