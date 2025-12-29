"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HolidaySearch } from "@/components/holiday-search"
import { HolidayGallery } from "@/components/holiday-gallery"
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

      <section className="relative min-h-screen overflow-hidden py-24 pb-32">
        <div
          ref={videoRef}
          className="absolute inset-0 -z-10 transition-transform duration-100"
          style={{
            backgroundImage: "url(/holidays/caribbean-beach-turquoise.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/70 via-pink-700/50 to-orange-500/30" />
        </div>

        {/* 3D Floating Holiday Icons with Variety */}
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
        <div className="absolute top-1/2 right-1/3 text-6xl animate-tilt-shake" style={{ animationDelay: "1.5s" }}>
          🎒
        </div>
        <div
          className="absolute bottom-40 left-1/4 text-4xl animate-float-3d"
          style={{ animationDelay: "3s", animationDuration: "10s" }}
        >
          🗺️
        </div>

        {/* Sun rays effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="animate-slide-up-3d mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-balance drop-shadow-2xl">
              Your Dream
              <br />
              <span className="text-amber-300 animate-depth-zoom inline-block">Holiday Awaits</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl leading-relaxed drop-shadow-lg">
              Curated holiday packages for every traveler. From tropical beaches to snowy mountains.
            </p>
          </div>

          <div className="animate-scale-in-3d max-w-5xl mx-auto w-full">
            <HolidaySearch />
          </div>
        </div>
      </section>

      <main className="py-16">
        <HolidayGallery />
        <HolidayThemes />
        <TrendingDestinations />
        <HolidayTestimonials />
      </main>

      <Footer />
      <StickyActions />
    </div>
  )
}
