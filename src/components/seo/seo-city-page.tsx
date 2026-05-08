import { AboutSection } from "@/components/landing/about-section";
import { BookingFormSection } from "@/components/landing/booking-form-section";
import { ContactsSection } from "@/components/landing/contacts-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { Header } from "@/components/landing/header";
import { PricingSection } from "@/components/landing/pricing-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ReasonsSection } from "@/components/landing/reasons-section";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { ServicesSection } from "@/components/landing/services-section";
import { StickyBookingButton } from "@/components/landing/sticky-booking-button";
import { CityHeroSection } from "@/components/seo/city-hero-section";
import type { CityData } from "@/data/cities";

interface SeoCityPageProps {
    city: CityData;
}

export function SeoCityPage({ city }: SeoCityPageProps) {
    return (
        <div className="min-h-screen bg-[#f7faf5]">
            <Header />
            <main className="pb-28">
                <CityHeroSection city={city} />
                <AboutSection />
                <ServicesSection />
                <ReasonsSection />
                <FinalCtaSection />
                <PricingSection />
                <ProcessSection />
                <BookingFormSection />
                <ReviewsSection />
                <ContactsSection />
            </main>
            <StickyBookingButton />
        </div>
    );
}
