import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, Heart } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Maldives Luxury Honeymoon",
    location: "Maldives",
    price: 95000,
    duration: "6 Days / 5 Nights",
    rating: 5.0,
    image: "/honeymoon/romantic-maldives-sunset.jpg",
    highlights: ["Overwater Villa", "Candlelight Dinner", "Couple Spa", "Snorkeling"],
  },
  {
    id: 2,
    name: "Santorini Romance Package",
    location: "Santorini, Greece",
    price: 88000,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    image: "/honeymoon/santorini-sunset-dinner.jpg",
    highlights: ["Sunset Views", "Wine Tasting", "Private Villa", "Photo Session"],
  },
  {
    id: 3,
    name: "Bora Bora Paradise",
    location: "Bora Bora",
    price: 125000,
    duration: "6 Days / 5 Nights",
    rating: 5.0,
    image: "/honeymoon/bora-bora-overwater.jpg",
    highlights: ["Luxury Bungalow", "Private Beach", "Snorkel Tour", "Couple Massage"],
  },
  {
    id: 4,
    name: "Venice Romance",
    location: "Venice, Italy",
    price: 78000,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    image: "/honeymoon/venice-gondola-ride.jpg",
    highlights: ["Gondola Ride", "Historic Sites", "Italian Cuisine", "Photo Tour"],
  },
  {
    id: 5,
    name: "Paris City of Love",
    location: "Paris, France",
    price: 92000,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    image: "/honeymoon/paris-love-locks-bridge.jpg",
    highlights: ["Eiffel Tower", "Seine Cruise", "Fine Dining", "Museum Tours"],
  },
  {
    id: 6,
    name: "Seychelles Island Escape",
    location: "Seychelles",
    price: 105000,
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    image: "/honeymoon/seychelles-private-beach.jpg",
    highlights: ["Private Island", "Beach Villa", "Water Sports", "Romantic Dinner"],
  },
]

export function HoneymoonPackages() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50/50 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full mb-4">
            <Heart className="w-4 h-4 fill-current" />
            <span className="font-bold">Honeymoon Special</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Romantic Honeymoon Packages</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Celebrate love with our curated selection of the world's most romantic destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className="overflow-hidden group hover-lift-3d"
              style={{
                animation: `slide-up-3d 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <Badge className="absolute top-3 left-3 bg-rose-500 text-white border-0">
                  <Heart className="h-3 w-3 mr-1 fill-current animate-pulse" />
                  Honeymoon Special
                </Badge>
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg font-bold text-lg">
                  ₹{pkg.price.toLocaleString()}
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-1 text-white">
                    <Star className="h-5 w-5 fill-current text-yellow-400" />
                    <span className="text-lg font-bold">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-balance group-hover:text-rose-600 transition-colors">
                  {pkg.name}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>{pkg.location}</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span>{pkg.duration}</span>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Package Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-rose-600 to-pink-500 hover:from-rose-700 hover:to-pink-600 transform hover:scale-105 transition-all">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
