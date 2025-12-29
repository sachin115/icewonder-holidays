"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlightSearch } from "@/components/flight-search"
import { PopularFlightRoutes } from "@/components/popular-flight-routes"
import { FlightDeals } from "@/components/flight-deals"
import { WhyBookFlights } from "@/components/why-book-flights"
import { Airlines } from "@/components/airlines"
import { StickyActions } from "@/components/sticky-actions"
import { useEffect, useState } from "react"
import { Plane, MapPin, Clock, Sparkles } from "lucide-react"

export default function FlightsPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white overflow-hidden">
      <Header />

      <section className="relative min-h-[900px] pb-20 overflow-hidden">
        {/* Animated Sky Background with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
          style={{
            backgroundImage: "url(/flights/sky-clouds-sunset.jpg)",
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0003})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-sky-600/70 to-cyan-400/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent animate-pulse-slow" />
        </div>

        {/* Floating 3D Clouds with Different Depths */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-24 bg-white/40 rounded-full blur-2xl animate-float-3d" />
          <div
            className="absolute top-32 right-16 w-48 h-28 bg-white/30 rounded-full blur-3xl animate-float-3d"
            style={{ animationDelay: "1.5s", animationDuration: "8s" }}
          />
          <div
            className="absolute top-60 left-1/4 w-36 h-20 bg-white/35 rounded-full blur-2xl animate-float-3d"
            style={{ animationDelay: "3s", animationDuration: "10s" }}
          />
          <div
            className="absolute bottom-40 right-1/3 w-44 h-26 bg-white/25 rounded-full blur-2xl animate-float-3d"
            style={{ animationDelay: "2s", animationDuration: "12s" }}
          />
        </div>

        {/* Multiple 3D Flying Planes with Trail Effects */}
        <div className="absolute inset-0 perspective-1500 preserve-3d">
          {/* Main Plane with Contrail */}
          <div className="absolute top-1/4 -left-32 animate-[fly-across_18s_ease-in-out_infinite]">
            <div className="relative">
              <div className="absolute -right-8 top-1/2 w-32 h-1 bg-gradient-to-r from-white/60 to-transparent blur-sm" />
              <div className="text-9xl transform hover-tilt-3d opacity-90 drop-shadow-2xl">✈️</div>
            </div>
          </div>

          {/* Secondary Plane */}
          <div
            className="absolute top-1/3 -left-32 animate-[fly-across_22s_ease-in-out_infinite]"
            style={{ animationDelay: "4s" }}
          >
            <div className="relative">
              <div className="absolute -right-6 top-1/2 w-24 h-0.5 bg-gradient-to-r from-white/40 to-transparent blur-sm" />
              <div className="text-7xl transform hover-tilt-3d opacity-70 drop-shadow-xl">🛫</div>
            </div>
          </div>

          {/* Small Background Plane */}
          <div
            className="absolute top-1/2 -left-32 animate-[fly-across_28s_ease-in-out_infinite]"
            style={{ animationDelay: "8s" }}
          >
            <div className="text-5xl transform hover-tilt-3d opacity-50">✈️</div>
          </div>
        </div>

        {/* Animated Flight Path Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0,200 Q 400,150 800,200 T 1600,200"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-[dash-flow_8s_linear_infinite]"
            strokeDasharray="10,5"
          />
          <path
            d="M 0,300 Q 400,350 800,300 T 1600,300"
            stroke="url(#pathGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-[dash-flow_10s_linear_infinite]"
            strokeDasharray="10,5"
            style={{ animationDelay: "2s" }}
          />
        </svg>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center pt-32">
          <div className="animate-slide-up-3d space-y-6">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400/90 text-blue-900 px-6 py-2 rounded-full font-bold animate-bounce-3d backdrop-blur-sm shadow-2xl">
              <Sparkles className="w-5 h-5" />
              <span>Flash Sale: Up to 40% Off!</span>
            </div>

            <h1 className="text-7xl md:text-8xl font-black text-white mb-6 text-balance leading-tight">
              <span className="inline-block animate-slide-in-left-3d">Fly</span>{" "}
              <span className="inline-block animate-slide-in-right-3d" style={{ animationDelay: "0.2s" }}>
                Anywhere
              </span>
              <br />
              <span className="text-yellow-300 animate-pulse-3d inline-block drop-shadow-[0_0_30px_rgba(255,255,0,0.5)]">
                Sky's The Limit
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-white/95 mb-8 max-w-3xl leading-relaxed font-medium animate-fade-in backdrop-blur-sm">
              Compare 500+ airlines worldwide. Book domestic & international flights at unbeatable prices with instant
              confirmation.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl animate-scale-in-3d hover-lift-3d">
                <MapPin className="w-6 h-6 text-yellow-300" />
                <div>
                  <div className="text-2xl font-bold text-white">2000+</div>
                  <div className="text-sm text-white/80">Destinations</div>
                </div>
              </div>
              <div
                className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl animate-scale-in-3d hover-lift-3d"
                style={{ animationDelay: "0.2s" }}
              >
                <Plane className="w-6 h-6 text-yellow-300" />
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/80">Airlines</div>
                </div>
              </div>
              <div
                className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl animate-scale-in-3d hover-lift-3d"
                style={{ animationDelay: "0.4s" }}
              >
                <Clock className="w-6 h-6 text-yellow-300" />
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Box with Enhanced 3D Effect */}
          <div className="animate-scale-in-3d hover-lift-3d" style={{ animationDelay: "0.6s" }}>
            <FlightSearch />
          </div>
        </div>

        {/* Bottom Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20 space-y-20">
        <PopularFlightRoutes />
        <FlightDeals />
        <WhyBookFlights />
        <Airlines />
      </main>

      <Footer />
      <StickyActions />

      <style jsx>{`
        @keyframes fly-across {
          0% {
            transform: translateX(0) translateY(0) rotateZ(-15deg) scale(0.4);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          50% {
            transform: translateX(50vw) translateY(-100px) rotateZ(5deg) scale(1.1);
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 200px)) translateY(-180px) rotateZ(20deg) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes dash-flow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 200;
          }
        }
      `}</style>
    </div>
  )
}
