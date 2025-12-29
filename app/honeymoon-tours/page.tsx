"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HoneymoonPackages } from "@/components/honeymoon-packages"
import { HoneymoonFeatures } from "@/components/honeymoon-features"
import { StickyActions } from "@/components/sticky-actions"

export default function HoneymoonToursPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      <Header />
      <main>
        <section className="relative h-[700px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/honeymoon/romantic-maldives-sunset.jpg)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-pink-600/40 to-transparent" />
          </div>

          {/* Floating Romantic Elements */}
          <div className="absolute top-20 right-20 text-7xl animate-float-3d">💕</div>
          <div
            className="absolute top-1/3 left-20 text-6xl animate-float-3d"
            style={{ animationDelay: "1s", animationDuration: "9s" }}
          >
            💑
          </div>
          <div className="absolute bottom-32 right-1/3 text-5xl animate-bounce-3d" style={{ animationDelay: "2s" }}>
            🌹
          </div>
          <div className="absolute top-1/2 right-1/4 text-6xl animate-pulse-3d" style={{ animationDelay: "1.5s" }}>
            ❤️
          </div>
          <div
            className="absolute bottom-40 left-1/4 text-4xl animate-float-3d"
            style={{ animationDelay: "3s", animationDuration: "8s" }}
          >
            🥂
          </div>

          {/* Sparkle effects */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl animate-pulse-slow" />
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <div className="animate-slide-up-3d">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance drop-shadow-2xl">
                Unforgettable
                <br />
                <span className="text-pink-300 animate-depth-zoom inline-block">Honeymoon Experiences</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed drop-shadow-lg">
                Start your journey together with romantic destinations and luxury accommodations
              </p>
            </div>
          </div>
        </section>

        <HoneymoonFeatures />
        <HoneymoonPackages />
      </main>
      <Footer />
      <StickyActions />
    </div>
  )
}
