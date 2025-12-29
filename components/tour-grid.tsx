import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, Users, Hotel } from "lucide-react"
import Link from "next/link"

const tours = [
  {
    id: 1,
    name: "Bali Paradise Complete Tour",
    location: "Bali, Indonesia",
    price: 45000,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 156,
    image: "/bali-beach-resort.png",
    category: "Beach",
    groupSize: "2-15",
    hotels: 3,
  },
  {
    id: 2,
    name: "Swiss Alps Adventure Package",
    location: "Switzerland",
    price: 125000,
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviews: 203,
    image: "/swiss-alps-mountains.png",
    category: "Mountain",
    groupSize: "2-20",
    hotels: 4,
  },
  {
    id: 3,
    name: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    price: 65000,
    duration: "4 Days / 3 Nights",
    rating: 4.7,
    reviews: 187,
    image: "/dubai-skyline-burj-khalifa.png",
    category: "City",
    groupSize: "2-10",
    hotels: 2,
  },
  {
    id: 4,
    name: "Maldives Island Escape",
    location: "Maldives",
    price: 95000,
    duration: "6 Days / 5 Nights",
    rating: 5.0,
    reviews: 245,
    image: "/maldives-overwater-bungalow.png",
    category: "Beach",
    groupSize: "2-8",
    hotels: 2,
  },
  {
    id: 5,
    name: "Paris Romantic Getaway",
    location: "Paris, France",
    price: 85000,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 178,
    image: "/eiffel-tower-paris.png",
    category: "City",
    groupSize: "2-12",
    hotels: 3,
  },
  {
    id: 6,
    name: "Tokyo Cultural Journey",
    location: "Tokyo, Japan",
    price: 98000,
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    reviews: 164,
    image: "/tokyo-skyline.png",
    category: "City",
    groupSize: "2-15",
    hotels: 3,
  },
  {
    id: 7,
    name: "Santorini Sunset Tour",
    location: "Santorini, Greece",
    price: 78000,
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 192,
    image: "/santorini-white-buildings.jpg",
    category: "Beach",
    groupSize: "2-12",
    hotels: 2,
  },
  {
    id: 8,
    name: "Iceland Northern Lights Adventure",
    location: "Reykjavik, Iceland",
    price: 145000,
    duration: "7 Days / 6 Nights",
    rating: 5.0,
    reviews: 128,
    image: "/iceland-northern-lights.png",
    category: "Nature",
    groupSize: "2-16",
    hotels: 4,
  },
]

export function TourGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">Showing {tours.length} tours</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select className="text-sm border border-border rounded-md px-3 py-1.5 bg-background">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <Card key={tour.id} className="overflow-hidden group hover:shadow-xl transition-all">
            <div className="relative h-56 overflow-hidden">
              <img
                src={tour.image || "/placeholder.svg"}
                alt={tour.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">{tour.category}</Badge>
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-lg font-bold">
                ₹{tour.price.toLocaleString()}
              </div>
            </div>

            <CardContent className="p-5">
              <div className="flex items-center gap-1 text-secondary mb-2">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-semibold">{tour.rating}</span>
                <span className="text-xs text-muted-foreground">({tour.reviews} reviews)</span>
              </div>

              <h3 className="text-lg font-bold mb-3 text-balance">{tour.name}</h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 flex-shrink-0" />
                    <span>{tour.groupSize} people</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Hotel className="h-4 w-4 flex-shrink-0" />
                    <span>{tour.hotels} hotels</span>
                  </div>
                </div>
              </div>

              <Link href={`/tours/${tour.id}`}>
                <Button className="w-full">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
