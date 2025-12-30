"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HolidaySearch } from "@/components/holiday-search"
import { TourGrid } from "@/components/tour-grid"
import { HolidayThemes } from "@/components/holiday-themes"
import { TrendingDestinations } from "@/components/trending-destinations"
import { HolidayTestimonials } from "@/components/holiday-testimonials"
import { StickyActions } from "@/components/sticky-actions"
import { useEffect, useRef } from "react"

export default function HolidaysPage() {
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrolled = window.scrollY
        videoRef.current.style.transform = `scale(${1 + scrolled * 0.0005})`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      <Header />

      <section className="relative min-h-[700px] pb-20 overflow-hidden bg-gradient-to-br from-rose-700 via-pink-600 to-orange-500">
        {/* Tropical Background Elements */}
        <div className="absolute top-10 left-20 w-40 h-24 bg-white/20 rounded-full blur-2xl animate-float-3d" />
        <div
          className="absolute top-32 right-32 w-48 h-28 bg-white/15 rounded-full blur-2xl animate-float-3d"
          style={{ animationDelay: "2s" }}
        />

        {/* 3D Floating Holiday Icons */}
        <div className="absolute top-20 right-10 text-7xl animate-float-3d animate-rotate-y">🏖️</div>
        <div
          className="absolute top-1/3 left-10 text-6xl animate-float-3d"
          style={{ animationDelay: "1s", animationDuration: "8s" }}
        >
          🏔️
        </div>
        <div className="absolute bottom-32 right-1/4 text-5xl animate-bounce-3d" style={{ animationDelay: "2s" }}>
          🌴
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center pt-32">
          <div className="animate-slide-up-3d">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-balance drop-shadow-2xl">
              Your Dream Holiday
              <br />
              <span className="text-amber-300 animate-depth-zoom inline-block">Starts Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl leading-relaxed drop-shadow-lg">
              Curated holiday packages from tropical beaches to snowy mountains. Plan your perfect getaway.
            </p>
          </div>

          <div className="animate-scale-in-3d">
            <HolidaySearch />
          </div>
        </div>
      </section>

      <main className="py-16">
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full mb-4">
              <span className="font-bold">⭐ Best Sellers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Holiday Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked destinations with exclusive deals and unforgettable experiences
            </p>
          </div>
          <TourGrid />
        </section>
        <HolidayThemes />
        <TrendingDestinations />
        <HolidayTestimonials />
      </main>

      <Footer />
      <StickyActions />
    </div>
  )
}
