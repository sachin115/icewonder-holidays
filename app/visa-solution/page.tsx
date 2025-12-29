"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VisaServices } from "@/components/visa-services"
import { VisaProcess } from "@/components/visa-process"
import { InteractiveVisaMap } from "@/components/interactive-visa-map"
import { VisaCalculator } from "@/components/visa-calculator"
import { VisaDocuments } from "@/components/visa-documents"
import { StickyActions } from "@/components/sticky-actions"

export default function VisaSolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-white">
      <Header />

      <section className="relative h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/visa/passport-stamps-collection.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-700/80 to-pink-600/70" />
        </div>

        {/* Animated Flying Passports & Documents */}
        <div className="absolute top-20 left-10 text-7xl animate-float-3d animate-flip-3d">🛂</div>
        <div
          className="absolute top-1/3 right-20 text-8xl animate-float-3d"
          style={{ animationDelay: "1s", animationDuration: "8s" }}
        >
          📘
        </div>
        <div className="absolute bottom-32 left-1/4 text-6xl animate-bounce-3d" style={{ animationDelay: "2s" }}>
          ✈️
        </div>
        <div className="absolute top-1/2 left-1/3 text-5xl animate-tilt-shake" style={{ animationDelay: "1.5s" }}>
          ✓
        </div>
        <div className="absolute bottom-40 right-1/4 text-6xl animate-rotate-y" style={{ animationDelay: "0.5s" }}>
          🌍
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <div className="animate-slide-up-3d">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-balance drop-shadow-2xl">
              Visa Solutions
              <br />
              <span className="text-yellow-300 animate-pulse-3d inline-block">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl leading-relaxed drop-shadow-lg">
              Expert visa assistance. Fast processing, 98% success rate, hassle-free experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-scale-in-3d">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover-lift-3d border border-white/20">
              <div className="text-5xl mb-4 animate-bounce-slow">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-2">Fast Processing</h3>
              <p className="text-white/90 text-lg">Visa in 24-48 hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover-lift-3d border border-white/20">
              <div className="text-5xl mb-4 animate-bounce-slow" style={{ animationDelay: "0.2s" }}>
                🎯
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">98% Success</h3>
              <p className="text-white/90 text-lg">Industry-leading approval</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover-lift-3d border border-white/20">
              <div className="text-5xl mb-4 animate-bounce-slow" style={{ animationDelay: "0.4s" }}>
                🛡️
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">100% Secure</h3>
              <p className="text-white/90 text-lg">Protected documents</p>
            </div>
          </div>
        </div>
      </section>

      <main className="py-16">
        <InteractiveVisaMap />
        <VisaServices />
        <VisaCalculator />
        <VisaProcess />
        <VisaDocuments />
      </main>

      <Footer />
      <StickyActions />
    </div>
  )
}
