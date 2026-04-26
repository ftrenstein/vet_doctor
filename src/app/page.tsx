import { AboutSection } from "@/components/landing/about-section";
import { ContactsSection } from "@/components/landing/contacts-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { ServicesSection } from "@/components/landing/services-section";
import { StickyBookingButton } from "@/components/landing/sticky-booking-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7faf5]">
      <Header />
      <main className="pb-28">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FinalCtaSection />
        <PricingSection />
        <ProcessSection />
        <ReviewsSection />
        <ContactsSection />
      </main>
      <StickyBookingButton />
    </div>
  );
}
