import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PopularSearches } from "@/components/popular-searches"
import { RecentlyViewed } from "@/components/recently-viewed"
import { TourFilters } from "@/components/tour-filters"
import { TourGrid } from "@/components/tour-grid"
import { RecommendedForYou } from "@/components/recommended-for-you"

export default function ToursPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] bg-gradient-to-r from-primary to-accent">
          <div className="absolute inset-0 bg-[url('/travel-map-pattern.jpg')] opacity-10" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance animate-slide-up-3d">
              Explore Our Tour Packages
            </h1>
            <p
              className="text-lg text-primary-foreground/90 max-w-2xl text-pretty animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Discover amazing destinations and create unforgettable memories with our curated travel experiences
            </p>
          </div>
        </section>

        {/* Filters and Tours */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <PopularSearches />

            <RecentlyViewed />

            <TourFilters />
            <TourGrid />

            <div className="mt-16">
              <RecommendedForYou />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
