"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, MapPin } from "lucide-react"

export function RecentlyViewed() {
  const [recentTours, setRecentTours] = useState<any[]>([])

  useEffect(() => {
    // Simulate recently viewed tours (in real app, this would come from localStorage or cookies)
    const tours = [
      {
        id: 1,
        name: "Romantic Bali Getaway",
        location: "Bali, Indonesia",
        price: "$1,299",
        rating: 4.8,
        image: "/bali-beach.png",
      },
      {
        id: 2,
        name: "Dubai Luxury Experience",
        location: "Dubai, UAE",
        price: "$1,899",
        rating: 4.9,
        image: "/dubai-burj-khalifa.png",
      },
      {
        id: 3,
        name: "Paris Romance Tour",
        location: "Paris, France",
        price: "$2,499",
        rating: 4.7,
        image: "/eiffel-tower.png",
      },
    ]
    setRecentTours(tours)
  }, [])

  if (recentTours.length === 0) return null

  return (
    <div className="mb-12 animate-slide-up">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Recently Viewed Tours</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentTours.map((tour, index) => (
          <Card
            key={tour.id}
            className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={tour.image || "/placeholder.svg"}
                alt={tour.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <Badge className="absolute top-3 right-3 bg-background/80 text-foreground backdrop-blur">
                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                {tour.rating}
              </Badge>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{tour.name}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{tour.price}</span>
                <Button size="sm" className="group-hover:scale-110 transition-transform">
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
