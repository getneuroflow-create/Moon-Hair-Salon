import { About } from "@/components/home/About";
import { BookingSection } from "@/components/home/BookingSection";
import { FaqSection } from "@/components/home/FaqSection";
import { Hero } from "@/components/home/Hero";
import { InquiryForm } from "@/components/home/InquiryForm";
import { ReviewCta } from "@/components/home/ReviewCta";
import { ReviewsSlider } from "@/components/home/ReviewsSlider";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
      <WhyChooseUs />
      <BookingSection />
      <ReviewsSlider />
      <ReviewCta />
      <InquiryForm />
      <FaqSection />
    </>
  );
}
