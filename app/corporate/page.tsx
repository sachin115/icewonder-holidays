"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CorporateServices } from "@/components/corporate-services"
import { CorporateBenefits } from "@/components/corporate-benefits"
import { StickyActions } from "@/components/sticky-actions"

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      <Header />
      <main>
        <section className="relative h-[650px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/corporate/business-team-airport.jpg)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/70 to-indigo-800/60" />
          </div>

          {/* Floating Business Icons */}
          <div className="absolute top-20 right-20 text-7xl animate-float-3d">💼</div>
          <div
            className="absolute top-1/3 left-20 text-6xl animate-float-3d"
            style={{ animationDelay: "1s", animationDuration: "8s" }}
          >
            ✈️
          </div>
          <div className="absolute bottom-32 right-1/3 text-5xl animate-bounce-3d" style={{ animationDelay: "2s" }}>
            📊
          </div>
          <div className="absolute top-1/2 right-1/4 text-6xl animate-tilt-shake" style={{ animationDelay: "1.5s" }}>
            🏢
          </div>

          <div className="absolute inset-0 flex flex-col justify-center px-4 container mx-auto">
            <div className="animate-slide-up-3d">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance max-w-3xl drop-shadow-2xl">
                Corporate Travel
                <br />
                <span className="text-cyan-300 animate-depth-zoom inline-block">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed drop-shadow-lg">
                Streamlined travel management for businesses of all sizes. MICE, conferences, and more.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-4xl animate-scale-in-3d">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover-lift-3d border border-white/20">
                <div className="text-4xl font-bold text-cyan-300 mb-2">500+</div>
                <p className="text-white text-lg">Corporate Clients</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover-lift-3d border border-white/20">
                <div className="text-4xl font-bold text-cyan-300 mb-2">24/7</div>
                <p className="text-white text-lg">Support Available</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover-lift-3d border border-white/20">
                <div className="text-4xl font-bold text-cyan-300 mb-2">30%</div>
                <p className="text-white text-lg">Average Savings</p>
              </div>
            </div>
          </div>
        </section>

        <CorporateBenefits />
        <CorporateServices />
      </main>
      <Footer />
      <StickyActions />
    </div>
  )
}
