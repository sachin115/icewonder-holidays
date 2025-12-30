"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Calendar, Users, X } from "lucide-react"
import { EnquiryModal } from "@/components/enquiry-modal"

const packages = [
  {
    title: "Maldives Paradise",
    location: "Maldives",
    duration: "5N/6D",
    price: "₹89,999",
    originalPrice: "₹1,25,000",
    rating: 4.9,
    reviews: 847,
    image: "/maldives-beach-resort.png",
    highlights: ["Overwater Villa", "All Meals Included", "Water Sports", "Spa Access"],
    travelers: "2 Adults",
  },
  {
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    duration: "7N/8D",
    price: "₹1,45,000",
    originalPrice: "₹2,00,000",
    rating: 4.8,
    reviews: 623,
    image: "/swiss-alps-mountains-snow.png",
    highlights: ["Mountain Views", "Cable Car Rides", "City Tours", "Breakfast Included"],
    travelers: "2 Adults",
  },
  {
    title: "Bali Beach Escape",
    location: "Indonesia",
    duration: "6N/7D",
    price: "₹65,999",
    originalPrice: "₹95,000",
    rating: 4.7,
    reviews: 1024,
    image: "/bali-beach-temple.jpg",
    highlights: ["Beach Resort", "Temple Tours", "Snorkeling", "Balinese Spa"],
    travelers: "2 Adults",
  },
  {
    title: "Dubai Luxury Tour",
    location: "UAE",
    duration: "4N/5D",
    price: "₹55,000",
    originalPrice: "₹78,000",
    rating: 4.6,
    reviews: 956,
    image: "/dubai-burj-khalifa.jpg",
    highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "5-Star Hotel"],
    travelers: "2 Adults",
  },
  {
    title: "Thailand Explorer",
    location: "Thailand",
    duration: "6N/7D",
    price: "₹48,999",
    originalPrice: "₹70,000",
    rating: 4.7,
    reviews: 1234,
    image: "/thailand-phi-phi-islands.jpg",
    highlights: ["Island Hopping", "Bangkok City", "Thai Massage", "Street Food Tours"],
    travelers: "2 Adults",
  },
  {
    title: "Paris Romance",
    location: "France",
    duration: "5N/6D",
    price: "₹1,25,000",
    originalPrice: "₹1,75,000",
    rating: 4.9,
    reviews: 678,
    image: "/paris-eiffel-tower-evening.jpg",
    highlights: ["Eiffel Tower", "Louvre Museum", "Seine Cruise", "French Cuisine"],
    travelers: "2 Adults",
  },
]

export function HolidayGallery() {
  const [selectedPackage, setSelectedPackage] = useState<(typeof packages)[0] | null>(null)
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

  return (
    <>
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-bold">Best Sellers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Holiday Packages</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked destinations with exclusive deals and unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              onClick={() => setSelectedPackage(pkg)}
              className="group overflow-hidden hover-lift-3d cursor-pointer"
              style={{
                animation: `slide-up-3d 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  SAVE 30%
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{pkg.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{pkg.rating}</span>
                    <span className="text-sm text-muted-foreground">({pkg.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{pkg.travelers}</span>
                  </div>
                </div>

                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</p>
                    <div className="flex items-baseline gap-1">
                      <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                      <span className="text-sm text-muted-foreground">/person</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 transform hover:scale-105 transition-all">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Package Details Modal */}
      {selectedPackage && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPackage(null)}
        >
          <Card
            className="max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in-3d"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96">
              <img
                src={selectedPackage.image || "/placeholder.svg"}
                alt={selectedPackage.title}
                className="w-full h-full object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                onClick={() => setSelectedPackage(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-8">
              <h2 className="text-4xl font-bold mb-2">{selectedPackage.title}</h2>
              <div className="flex items-center gap-2 text-lg mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold">{selectedPackage.location}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="text-xl font-bold">{selectedPackage.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Best For</p>
                  <p className="text-xl font-bold">{selectedPackage.travelers}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Package Highlights</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedPackage.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground line-through">{selectedPackage.originalPrice}</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-5xl font-bold text-primary">{selectedPackage.price}</p>
                    <span className="text-muted-foreground">/person</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                onClick={() => {
                  setIsEnquiryOpen(true)
                  setSelectedPackage(null)
                }}
                className="w-full text-lg py-7 bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600"
              >
                Book This Package
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Enquiry Modal */}
      <EnquiryModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </>
  )
}
