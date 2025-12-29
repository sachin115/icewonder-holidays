"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Star, MapPin, Calendar, Users } from "lucide-react"

export function RecommendedForYou() {
  const recommendations = [
    {
      id: 1,
      name: "Maldives Paradise",
      location: "Maldives",
      price: "$2,199",
      duration: "7 Days / 6 Nights",
      groupSize: "2-4 People",
      rating: 4.9,
      discount: "20% OFF",
      image: "/maldives-water-villa.jpg",
      tags: ["Beach", "Luxury", "Honeymoon"],
    },
    {
      id: 2,
      name: "Swiss Alps Adventure",
      location: "Switzerland",
      price: "$3,299",
      duration: "10 Days / 9 Nights",
      groupSize: "4-8 People",
      rating: 4.8,
      discount: "15% OFF",
      image: "/swiss-alps-mountains-snow.png",
      tags: ["Mountains", "Adventure", "Nature"],
    },
    {
      id: 3,
      name: "Cultural Japan Tour",
      location: "Tokyo, Kyoto, Osaka",
      price: "$2,899",
      duration: "8 Days / 7 Nights",
      groupSize: "6-12 People",
      rating: 4.7,
      image: "/japan-cherry-blossoms-temples.jpg",
      tags: ["Culture", "Heritage", "Food"],
    },
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="h-7 w-7 text-primary animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Recommended <span className="text-primary">For You</span>
          </h2>
          <Sparkles className="h-7 w-7 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        <p className="text-center text-muted-foreground mb-10 text-lg">
          Based on your preferences and browsing history
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <Card
              key={rec.id}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer perspective-1000 animate-scale-in-3d"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={rec.image || "/placeholder.svg"}
                  alt={rec.name}
                  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                />
                {rec.discount && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white text-base px-3 py-1 animate-bounce">
                    {rec.discount}
                  </Badge>
                )}
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-background/90 backdrop-blur px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold">{rec.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {rec.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{rec.name}</h3>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{rec.location}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{rec.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{rec.groupSize}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-3xl font-bold text-primary">{rec.price}</p>
                  </div>
                  <Button className="group-hover:scale-110 transition-transform">Book Now</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
