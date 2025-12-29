"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Flame, Users } from "lucide-react"

export function FlashDeals() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const deals = [
    {
      title: "Maldives Paradise",
      originalPrice: "$2,999",
      salePrice: "$1,499",
      discount: "50% OFF",
      seatsLeft: 3,
      image: "/maldives-beach-resort.png",
    },
    {
      title: "Swiss Alps Adventure",
      originalPrice: "$3,499",
      salePrice: "$2,099",
      discount: "40% OFF",
      seatsLeft: 5,
      image: "/swiss-alps-mountains-snow.png",
    },
    {
      title: "Bali Cultural Tour",
      originalPrice: "$1,599",
      salePrice: "$999",
      discount: "37% OFF",
      seatsLeft: 2,
      image: "/bali-temple-culture.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flame className="h-8 w-8 text-orange-500 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Flash <span className="text-orange-500">Deals</span>
            </h2>
            <Flame className="h-8 w-8 text-orange-500 animate-bounce" />
          </div>
          <p className="text-lg text-muted-foreground mb-6">Limited time offers - Book now before they're gone!</p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <Clock className="h-6 w-6 text-orange-500" />
            <div className="flex gap-3">
              <div className="flex flex-col items-center bg-background/80 backdrop-blur px-4 py-2 rounded-lg border-2 border-orange-500 animate-pulse-slow">
                <span className="text-3xl font-bold text-orange-500">{String(timeLeft.hours).padStart(2, "0")}</span>
                <span className="text-xs text-muted-foreground">Hours</span>
              </div>
              <div
                className="flex flex-col items-center bg-background/80 backdrop-blur px-4 py-2 rounded-lg border-2 border-orange-500 animate-pulse-slow"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="text-3xl font-bold text-orange-500">{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span className="text-xs text-muted-foreground">Minutes</span>
              </div>
              <div
                className="flex flex-col items-center bg-background/80 backdrop-blur px-4 py-2 rounded-lg border-2 border-orange-500 animate-pulse-slow"
                style={{ animationDelay: "0.6s" }}
              >
                <span className="text-3xl font-bold text-orange-500">{String(timeLeft.seconds).padStart(2, "0")}</span>
                <span className="text-xs text-muted-foreground">Seconds</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {deals.map((deal, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={deal.image || "/placeholder.svg"}
                  alt={deal.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <Badge className="absolute top-3 right-3 bg-orange-500 text-white text-lg px-3 py-1 animate-bounce">
                  {deal.discount}
                </Badge>
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  <Users className="h-4 w-4" />
                  Only {deal.seatsLeft} seats left!
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{deal.title}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-orange-500">{deal.salePrice}</span>
                  <span className="text-lg text-muted-foreground line-through">{deal.originalPrice}</span>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg font-semibold group-hover:scale-105 transition-transform">
                  Grab This Deal
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
