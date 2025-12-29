"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HotelSearch } from "@/components/hotel-search"
import { FeaturedHotels } from "@/components/featured-hotels"
import { HotelCategories } from "@/components/hotel-categories"
import { HotelAmenities } from "@/components/hotel-amenities"
import { StickyActions } from "@/components/sticky-actions"
import { useEffect, useRef, useState } from "react"

export default function HotelsPage() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.5}px) scale(${1 + window.scrollY * 0.0002})`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      <Header />

      <section className="relative min-h-[750px] pb-20 overflow-hidden">
        {/* Multi-layer Parallax Background */}
        <div
          ref={parallaxRef}
          className="absolute inset-0 -z-10 will-change-transform"
          style={{
            backgroundImage: "url(/hotels/luxury-resort-infinity-pool.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-amber-900/40" />
        </div>

        {/* 3D Floating Hotel Icons */}
        <div className="absolute top-20 right-20 text-7xl animate-float-3d animate-rotate-y">🏨</div>
        <div className="absolute bottom-40 left-20 text-6xl animate-float-3d" style={{ animationDelay: "1s" }}>
          🛎️
        </div>
        <div className="absolute top-1/2 right-1/4 text-5xl animate-bounce-3d" style={{ animationDelay: "2s" }}>
          ⭐
        </div>
        <div className="absolute top-1/3 left-1/3 text-4xl animate-tilt-shake" style={{ animationDelay: "1.5s" }}>
          🗝️
        </div>

        {/* Luxury Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center pt-32">
          <div className="animate-slide-up-3d">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-balance drop-shadow-2xl">
              Experience Luxury
              <br />
              <span className="text-amber-300 animate-depth-zoom inline-block">World-Class Hotels</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl leading-relaxed drop-shadow-lg">
              From boutique stays to 5-star resorts. Discover your perfect accommodation with exclusive rates.
            </p>
          </div>

          <div className="animate-scale-in-3d">
            <HotelSearch />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <main className="py-16">
        <FeaturedHotels />
        <HotelCategories />
        <HotelAmenities />
      </main>

      <Footer />
      <StickyActions />
    </div>
  )
}
