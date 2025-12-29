"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Star } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Bali Paradise",
    location: "Bali, Indonesia",
    price: "₹45,000",
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    image: "/bali-beach-resort.png",
    description: "Experience the magic of Bali with pristine beaches and cultural wonders",
  },
  {
    id: 2,
    name: "Swiss Alps Adventure",
    location: "Switzerland",
    price: "₹1,25,000",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    image: "/swiss-alps-mountains.png",
    description: "Explore stunning mountain landscapes and charming alpine villages",
  },
  {
    id: 3,
    name: "Dubai Luxury Escape",
    location: "Dubai, UAE",
    price: "₹65,000",
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    image: "/dubai-skyline-burj-khalifa.png",
    description: "Indulge in luxury with world-class shopping and entertainment",
  },
  {
    id: 4,
    name: "Maldives Honeymoon",
    location: "Maldives",
    price: "₹95,000",
    duration: "6 Days / 5 Nights",
    rating: 5.0,
    image: "/maldives-overwater-bungalow.png",
    description: "Romantic getaway with crystal clear waters and luxury resorts",
  },
]

export function PopularPackages() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up-3d">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Popular Tour Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our most loved destinations and create unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover-lift-3d preserve-3d animate-slide-up-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredCard === pkg.id ? "scale-125 rotate-2" : "scale-100"
                  }`}
                  style={{
                    transform:
                      hoveredCard === pkg.id ? "scale(1.25) rotateZ(2deg) translateZ(20px)" : "scale(1) translateZ(0)",
                  }}
                />
                <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold animate-bounce-3d">
                  {pkg.price}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-1 text-secondary mb-2">
                  <Star className="h-4 w-4 fill-current animate-pulse-3d" />
                  <span className="text-sm font-semibold">{pkg.rating}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{pkg.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Clock className="h-4 w-4" />
                  <span>{pkg.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">{pkg.description}</p>
                <Button className="w-full hover-lift-3d">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
