"use client"

import { useState } from "react"

const destinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    image: "/eiffel-tower-paris.png",
  },
  {
    id: 2,
    name: "Tokyo",
    country: "Japan",
    image: "/tokyo-skyline.png",
  },
  {
    id: 3,
    name: "Santorini",
    country: "Greece",
    image: "/santorini-white-buildings.jpg",
  },
  {
    id: 4,
    name: "New York",
    country: "USA",
    image: "/nyc-skyline.png",
  },
  {
    id: 5,
    name: "Iceland",
    country: "Nordic",
    image: "/iceland-northern-lights.png",
  },
  {
    id: 6,
    name: "Bali",
    country: "Indonesia",
    image: "/bali-rice-terraces.png",
  },
]

export function FeaturedDestinations() {
  const [hoveredDest, setHoveredDest] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up-3d">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Featured Destinations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore the world's most captivating locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1500">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer preserve-3d animate-slide-up-3d hover-lift-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredDest(destination.id)}
              onMouseLeave={() => setHoveredDest(null)}
            >
              <img
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform:
                    hoveredDest === destination.id
                      ? "scale(1.3) rotate(3deg) translateZ(30px)"
                      : "scale(1) translateZ(0)",
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500"
                style={{
                  background:
                    hoveredDest === destination.id
                      ? "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)"
                      : "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)",
                }}
              />
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-500 ${
                  hoveredDest === destination.id ? "translate-y-0" : "translate-y-2"
                }`}
              >
                <h3 className="text-2xl font-bold mb-1 animate-wave">{destination.name}</h3>
                <p className="text-white/90">{destination.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
