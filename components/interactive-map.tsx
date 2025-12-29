"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function InteractiveMap() {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null)

  const destinations = [
    {
      id: 1,
      name: "Bali",
      country: "Indonesia",
      price: "$1,299",
      position: { top: "45%", left: "70%" },
      image: "/bali-beach.png",
    },
    {
      id: 2,
      name: "Paris",
      country: "France",
      price: "$2,499",
      position: { top: "25%", left: "48%" },
      image: "/eiffel-tower.png",
    },
    {
      id: 3,
      name: "Dubai",
      country: "UAE",
      price: "$1,899",
      position: { top: "35%", left: "58%" },
      image: "/dubai-burj-khalifa.png",
    },
    {
      id: 4,
      name: "Maldives",
      country: "Asia",
      price: "$2,199",
      position: { top: "50%", left: "65%" },
      image: "/maldives-water-villa.jpg",
    },
    {
      id: 5,
      name: "New York",
      country: "USA",
      price: "$2,899",
      position: { top: "30%", left: "25%" },
      image: "/new-york-skyline.png",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="text-primary">Popular Destinations</span>
          </h2>
          <p className="text-lg text-muted-foreground">Click on any destination to see package details</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* World Map Background */}
          <div className="relative w-full aspect-[2/1] bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden shadow-2xl">
            <img src="/world-map-continents.jpg" alt="World Map" className="w-full h-full object-cover opacity-40" />

            {/* Destination Pins */}
            {destinations.map((dest) => (
              <button
                key={dest.id}
                className="absolute group"
                style={dest.position}
                onClick={() => setSelectedDestination(dest.id)}
                onMouseEnter={() => setSelectedDestination(dest.id)}
              >
                <div className="relative">
                  <MapPin className="h-8 w-8 text-red-500 animate-bounce-slow hover:scale-125 transition-transform drop-shadow-lg" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background border border-border rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                      <p className="font-semibold text-sm">{dest.name}</p>
                      <p className="text-xs text-primary">{dest.price}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Destination Details */}
          {selectedDestination && (
            <Card className="mt-8 p-6 animate-slide-up">
              {destinations
                .filter((d) => d.id === selectedDestination)
                .map((dest) => (
                  <div key={dest.id} className="flex flex-col md:flex-row gap-6 items-center">
                    <img
                      src={dest.image || "/placeholder.svg"}
                      alt={dest.name}
                      className="w-full md:w-64 h-48 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2">{dest.name}</h3>
                      <p className="text-muted-foreground mb-4">{dest.country}</p>
                      <p className="text-4xl font-bold text-primary mb-4">{dest.price}</p>
                      <Button size="lg" className="w-full md:w-auto">
                        View Packages
                      </Button>
                    </div>
                  </div>
                ))}
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
