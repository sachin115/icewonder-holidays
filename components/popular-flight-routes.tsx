"use client"

import { Card } from "@/components/ui/card"
import { Plane, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const routes = [
  { from: "Delhi", to: "Mumbai", price: "₹3,499", duration: "2h 15m", image: "🌆" },
  { from: "Mumbai", to: "Goa", price: "₹2,899", duration: "1h 30m", image: "🏖️" },
  { from: "Bangalore", to: "Delhi", price: "₹4,299", duration: "2h 45m", image: "🏛️" },
  { from: "Delhi", to: "Dubai", price: "₹12,999", duration: "3h 30m", image: "🏙️" },
  { from: "Mumbai", to: "Singapore", price: "₹18,500", duration: "5h 45m", image: "🌃" },
  { from: "Delhi", to: "London", price: "₹35,999", duration: "9h 15m", image: "🏰" },
]

export function PopularFlightRoutes() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12 animate-slide-up">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
          <TrendingUp className="w-4 h-4" />
          <span className="font-bold">Trending Now</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Flight Routes</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Most searched and booked flight destinations with amazing prices
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route, index) => (
          <Card
            key={index}
            className="group overflow-hidden hover-lift-3d cursor-pointer"
            style={{
              animation: `slide-up-3d 0.6s ease-out ${index * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="text-8xl transform group-hover:scale-110 transition-transform">{route.image}</div>

              {/* Animated Plane */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Plane className="w-6 h-6 text-white animate-bounce-slow" />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">{route.from}</span>
                  <Plane className="w-5 h-5 text-primary" />
                  <span className="text-xl font-bold">{route.to}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="text-3xl font-bold text-primary">{route.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="text-lg font-semibold">{route.duration}</p>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                Book Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
