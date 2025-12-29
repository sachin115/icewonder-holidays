"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bus, Clock, Star } from "lucide-react"

const routes = [
  {
    from: "Delhi",
    to: "Jaipur",
    duration: "5h 30m",
    price: "₹499",
    originalPrice: "₹799",
    rating: 4.5,
    buses: 45,
    type: "AC Sleeper",
  },
  {
    from: "Mumbai",
    to: "Pune",
    duration: "3h 45m",
    price: "₹399",
    originalPrice: "₹599",
    rating: 4.6,
    buses: 62,
    type: "AC Semi-Sleeper",
  },
  {
    from: "Bangalore",
    to: "Mysore",
    duration: "3h 15m",
    price: "₹349",
    originalPrice: "₹549",
    rating: 4.4,
    buses: 38,
    type: "Volvo AC",
  },
  {
    from: "Hyderabad",
    to: "Vijayawada",
    duration: "4h 20m",
    price: "₹449",
    originalPrice: "₹699",
    rating: 4.5,
    buses: 41,
    type: "AC Sleeper",
  },
  {
    from: "Chennai",
    to: "Pondicherry",
    duration: "2h 45m",
    price: "₹299",
    originalPrice: "₹499",
    rating: 4.3,
    buses: 29,
    type: "AC Seater",
  },
  {
    from: "Ahmedabad",
    to: "Udaipur",
    duration: "4h 50m",
    price: "₹549",
    originalPrice: "₹849",
    rating: 4.7,
    buses: 33,
    type: "Luxury Coach",
  },
]

export function PopularRoutes() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12 animate-slide-up">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full mb-4">
          <Bus className="w-4 h-4" />
          <span className="font-bold">Top Routes</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Bus Routes</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Most traveled routes with the best deals and comfortable buses
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
            <div className="relative p-6 bg-gradient-to-br from-green-500 to-emerald-400">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                SAVE 35%
              </div>

              {/* Route Animation */}
              <div className="flex items-center justify-between mb-4 relative">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <span className="text-2xl">🏙️</span>
                  </div>
                  <p className="text-white font-bold text-lg">{route.from}</p>
                </div>

                <div className="flex-1 relative mx-4">
                  <div className="h-1 bg-white/40 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-[bus-route_3s_ease-in-out_infinite]">
                    <Bus className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <p className="text-white font-bold text-lg">{route.to}</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-white/90">
                <Clock className="w-4 h-4" />
                <span>{route.duration}</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{route.type}</Badge>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{route.rating}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{route.buses} buses available</p>

              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground line-through">{route.originalPrice}</p>
                  <p className="text-3xl font-bold text-primary">{route.price}</p>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600">
                View Buses
              </Button>
            </div>

            <style jsx>{`
              @keyframes bus-route {
                0%,
                100% {
                  transform: translateX(-20px);
                }
                50% {
                  transform: translateX(20px);
                }
              }
            `}</style>
          </Card>
        ))}
      </div>
    </section>
  )
}
