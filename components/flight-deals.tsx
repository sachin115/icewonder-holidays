"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const deals = [
  {
    airline: "Air India",
    route: "Delhi → New York",
    price: "₹45,999",
    originalPrice: "₹65,999",
    discount: "30% OFF",
    class: "Business Class",
    timeLeft: "2h 30m",
  },
  {
    airline: "Emirates",
    route: "Mumbai → Dubai",
    price: "₹9,999",
    originalPrice: "₹15,999",
    discount: "38% OFF",
    class: "Economy",
    timeLeft: "5h 15m",
  },
  {
    airline: "Singapore Airlines",
    route: "Bangalore → Singapore",
    price: "₹14,999",
    originalPrice: "₹22,999",
    discount: "35% OFF",
    class: "Premium Economy",
    timeLeft: "1h 45m",
  },
]

export function FlightDeals() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12 animate-slide-up">
        <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4 animate-pulse">
          <Zap className="w-4 h-4" />
          <span className="font-bold">Limited Time</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Flash Flight Deals</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Grab these incredible offers before they expire
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden hover-lift-3d"
            style={{
              animation: `scale-in-3d 0.8s ease-out ${index * 0.2}s forwards`,
              opacity: 0,
            }}
          >
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-lg font-bold animate-pulse">
              {deal.discount}
            </div>

            <div className="p-6 pt-12">
              <div className="text-center mb-4">
                <p className="text-2xl font-bold mb-2">{deal.airline}</p>
                <p className="text-lg text-muted-foreground">{deal.route}</p>
              </div>

              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground line-through">{deal.originalPrice}</p>
                <p className="text-4xl font-bold text-primary mb-2">{deal.price}</p>
                <Badge variant="secondary">{deal.class}</Badge>
              </div>

              <div className="flex items-center justify-center gap-2 mb-4 text-orange-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-semibold">Expires in {deal.timeLeft}</span>
              </div>

              <Button className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 transform hover:scale-105 transition-all">
                Grab This Deal
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
