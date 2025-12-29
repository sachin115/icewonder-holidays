"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BusSearch } from "@/components/bus-search"
import { PopularRoutes } from "@/components/popular-routes"
import { BusOperators } from "@/components/bus-operators"
import { BusFacilities } from "@/components/bus-facilities"
import { StickyActions } from "@/components/sticky-actions"

export default function BusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-white">
      <Header />

      <section className="relative min-h-[700px] pb-20 overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-teal-500">
        {/* Animated Road */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gray-800/40" />
        <div className="absolute bottom-24 left-0 w-full h-1 border-t-4 border-dashed border-yellow-400 animate-[road-lines_3s_linear_infinite]" />
        <div
          className="absolute bottom-20 left-0 w-full h-1 border-t-4 border-dashed border-yellow-400 animate-[road-lines_3s_linear_infinite]"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Moving Bus with Depth */}
        <div className="absolute bottom-32 left-0 animate-[bus-drive_15s_linear_infinite] preserve-3d perspective-1000">
          <div className="text-9xl transform hover-tilt-3d drop-shadow-2xl animate-bounce-slow">🚌</div>
        </div>

        {/* Route Markers with Animation */}
        <div className="absolute bottom-56 left-20 flex flex-col items-center animate-pulse-3d">
          <div className="w-6 h-6 bg-green-400 rounded-full ring-4 ring-white shadow-2xl" />
          <span className="text-white font-bold mt-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">Delhi</span>
        </div>
        <div
          className="absolute bottom-56 right-20 flex flex-col items-center animate-pulse-3d"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-6 h-6 bg-red-500 rounded-full ring-4 ring-white shadow-2xl" />
          <span className="text-white font-bold mt-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">Mumbai</span>
        </div>

        {/* Clouds and Environment */}
        <div className="absolute top-10 left-20 w-40 h-24 bg-white/20 rounded-full blur-2xl animate-float-3d" />
        <div
          className="absolute top-32 right-32 w-48 h-28 bg-white/15 rounded-full blur-2xl animate-float-3d"
          style={{ animationDelay: "2s" }}
        />

        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center pt-32">
          <div className="animate-slide-up-3d">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-balance drop-shadow-2xl">
              Travel In Comfort
              <br />
              <span className="text-yellow-300 animate-depth-zoom inline-block">Budget-Friendly Buses</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl leading-relaxed drop-shadow-lg">
              Book AC, Non-AC, Sleeper & Luxury coaches. Safe, comfortable travel across India.
            </p>
          </div>

          <div className="animate-scale-in-3d">
            <BusSearch />
          </div>
        </div>

        <style jsx>{`
          @keyframes road-lines {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 60px 0;
            }
          }
          @keyframes bus-drive {
            0% {
              transform: translateX(-150px) scale(0.8);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateX(calc(100vw + 150px)) scale(1.2);
              opacity: 0;
            }
          }
        `}</style>
      </section>

      <main className="py-16">
        <PopularRoutes />
        <BusOperators />
        <BusFacilities />
      </main>

      <Footer />
      <StickyActions />
    </div>
  )
}
