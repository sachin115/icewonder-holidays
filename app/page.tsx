import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { SpinWheel } from "@/components/spin-wheel"
import { FlashDeals } from "@/components/flash-deals"
import { TripPlanner } from "@/components/trip-planner"
import { PopularPackages } from "@/components/popular-packages"
import { WhyChooseUs } from "@/components/why-choose-us"
import { InteractiveMap } from "@/components/interactive-map"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { Testimonials } from "@/components/testimonials"
import { TrustBadges } from "@/components/trust-badges"
import { Footer } from "@/components/footer"
import { StickyActions } from "@/components/sticky-actions"
import { LiveBookings } from "@/components/live-bookings"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <SpinWheel />
        <FlashDeals />
        <TripPlanner />
        <PopularPackages />
        <WhyChooseUs />
        <InteractiveMap />
        <FeaturedDestinations />
        <Testimonials />
        <TrustBadges />
      </main>
      <Footer />
      <StickyActions />
      <LiveBookings />
    </div>
  )
}
