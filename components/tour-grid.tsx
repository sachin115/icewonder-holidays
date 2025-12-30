"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, Users, Hotel } from "lucide-react"
import { EnquiryModal } from "./enquiry-modal"

const tours = [
  {
    id: 1,
    name: "Himachal Tour Package",
    location: "Shimla, Kasol & Manali",
    price: 55000,
    duration: "5 Nights / 6 Days",
    rating: 4.9,
    reviews: 124,
    image: "/packages/himachal-mountains.jpg",
    category: "Mountain",
    groupSize: "4 adults",
    hotels: 3,
    description: "Experience the beauty of Shimla, adventure in Kasol, and scenic Manali with Solang Valley",
    highlights: ["Shimla sightseeing", "Kasol valley", "Manali local", "Solang Valley & Sissu Village"],
  },
  {
    id: 2,
    name: "Your Perfect Goa Getaway",
    location: "North & South Goa",
    price: 9500,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 215,
    image: "/packages/goa-beach.jpg",
    category: "Beach",
    groupSize: "Min 15",
    hotels: 1,
    description: "Special train journey from Nagpur with beach hopping, dinner cruise, and optional adventure",
    highlights: ["6 North Goa beaches", "Capora Fort", "Dinner cruise", "South Goa temples & churches"],
  },
  {
    id: 3,
    name: "Kashmir Valley Adventure",
    location: "Srinagar, Gulmarg & Pahalgam",
    price: 115000,
    duration: "4 Nights / 5 Days",
    rating: 5.0,
    reviews: 187,
    image: "/packages/kashmir-valley.jpg",
    category: "Mountain",
    groupSize: "4 adults",
    hotels: 3,
    description: "Paradise on earth with houseboat stay, shikara ride, and scenic Gulmarg & Pahalgam",
    highlights: ["Houseboat & shikara", "Sonamarg excursion", "Gulmarg cable car", "Pahalgam valley"],
  },
  {
    id: 4,
    name: "Darjeeling Hill Station Package",
    location: "Gangtok, Pelling & Darjeeling",
    price: 20000,
    duration: "5 Nights / 6 Days",
    rating: 4.7,
    reviews: 156,
    image: "/packages/darjeeling-tea-gardens.jpg",
    category: "Mountain",
    groupSize: "6 people",
    hotels: 3,
    description: "Explore tea gardens, monasteries, and stunning Himalayan views in Sikkim and Darjeeling",
    highlights: ["Gangtok monasteries", "Pelling viewpoints", "Darjeeling tea estates", "Tiger Hill sunrise"],
  },
  {
    id: 5,
    name: "Uttarakhand Mountain Discovery",
    location: "Nainital, Haridwar, Mussoorie & Jim Corbett",
    price: 35000,
    duration: "10 Days / 9 Nights",
    rating: 4.9,
    reviews: 203,
    image: "/packages/uttarakhand-nainital.jpg",
    category: "Nature",
    groupSize: "36 adults",
    hotels: 4,
    description: "Complete Uttarakhand tour with lakes, temples, wildlife safari, and hill stations",
    highlights: ["Nainital lake district", "Haridwar Ganga Aarti", "Mussoorie Queen of Hills", "Jim Corbett safari"],
  },
  {
    id: 6,
    name: "North India Hill Stations",
    location: "Dharamshala, Dalhousie & Amritsar",
    price: 28000,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    reviews: 178,
    image: "/packages/dharamshala-mcleodganj.jpg",
    category: "Mountain",
    groupSize: "4+ people",
    hotels: 3,
    description: "Monasteries, colonial charm, and spiritual Golden Temple with candlelight dinner experience",
    highlights: ["Dharamshala monasteries", "Dalhousie colonial charm", "Golden Temple Amritsar", "Jallianwala Bagh"],
  },
]

export function TourGrid() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState("")

  const handleBookNow = (packageName: string) => {
    setSelectedPackage(packageName)
    setEnquiryOpen(true)
  }

  return (
    <>
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

                <h3 className="text-lg font-bold mb-2 text-balance">{tour.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 text-pretty line-clamp-2">{tour.description}</p>

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
                      <span>{tour.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Hotel className="h-4 w-4 flex-shrink-0" />
                      <span>{tour.hotels} hotels</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full" onClick={() => handleBookNow(tour.name)}>
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <EnquiryModal open={enquiryOpen} onOpenChange={setEnquiryOpen} defaultDestination={selectedPackage} />
    </>
  )
}
