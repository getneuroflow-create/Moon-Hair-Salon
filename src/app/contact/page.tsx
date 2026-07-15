import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Contact Us",
  "Contact Moon Hair Studio at 257 Central Ave, Metuchen, NJ. Call +1 732 442 0082 to book your appointment.",
  "/contact",
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-deep">
      <ContactPageContent />
    </div>
  );
}
