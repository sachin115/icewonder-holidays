"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin } from "lucide-react"

const hotels = [
  {
    name: "The Taj Mahal Palace",
    location: "Mumbai, India",
    rating: 5,
    reviews: 2847,
    price: "₹18,500",
    originalPrice: "₹25,000",
    image: "🏰",
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
    deal: "30% OFF",
  },
  {
    name: "Oberoi Udaivilas",
    location: "Udaipur, India",
    rating: 5,
    reviews: 1923,
    price: "₹35,000",
    originalPrice: "₹45,000",
    image: "🕌",
    amenities: ["Lake View", "Butler", "Pool", "Fine Dining"],
    deal: "22% OFF",
  },
  {
    name: "The Leela Palace",
    location: "Bangalore, India",
    rating: 5,
    reviews: 3214,
    price: "₹12,500",
    originalPrice: "₹18,000",
    image: "🏨",
    amenities: ["City View", "Spa", "Gym", "Rooftop Bar"],
    deal: "31% OFF",
  },
  {
    name: "ITC Grand Chola",
    location: "Chennai, India",
    rating: 5,
    reviews: 2156,
    price: "₹14,200",
    originalPrice: "₹20,000",
    image: "🏛️",
    amenities: ["Pool", "Spa", "Multiple Restaurants", "Gym"],
    deal: "29% OFF",
  },
  {
    name: "Rambagh Palace",
    location: "Jaipur, India",
    rating: 5,
    reviews: 1654,
    price: "₹28,000",
    originalPrice: "₹40,000",
    image: "👑",
    amenities: ["Heritage Property", "Garden", "Palace Dining", "Spa"],
    deal: "30% OFF",
  },
  {
    name: "The Oberoi Amarvilas",
    location: "Agra, India",
    rating: 5,
    reviews: 1887,
    price: "₹42,000",
    originalPrice: "₹55,000",
    image: "🕋",
    amenities: ["Taj Mahal View", "Butler", "Pool", "Fine Dining"],
    deal: "24% OFF",
  },
]

export function FeaturedHotels() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12 animate-slide-up">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full mb-4">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-bold">Handpicked</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Luxury Hotels</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience world-class hospitality at India's finest hotels
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel, index) => (
          <Card
            key={index}
            className="group overflow-hidden hover-lift-3d cursor-pointer"
            style={{
              animation: `slide-up-3d 0.6s ease-out ${index * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <div className="relative h-64 bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="text-9xl transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500">
                {hotel.image}
              </div>

              {/* Deal Badge */}
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                {hotel.deal}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{hotel.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>{hotel.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({hotel.reviews} reviews)</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {hotel.amenities.slice(0, 3).map((amenity, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
              </div>

              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground line-through">{hotel.originalPrice}</p>
                  <div className="flex items-baseline gap-1">
                    <p className="text-3xl font-bold text-primary">{hotel.price}</p>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 transform hover:scale-105 transition-all">
                Book Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
