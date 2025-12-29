"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plane, Calendar, Users, DollarSign } from "lucide-react"

export function TripPlanner() {
  const [destination, setDestination] = useState("")
  const [duration, setDuration] = useState("")
  const [budget, setBudget] = useState("")
  const [travelType, setTravelType] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handlePlanTrip = () => {
    if (destination && duration && budget && travelType) {
      setShowSuggestions(true)
    }
  }

  const suggestedPackages = [
    {
      name: "Romantic Bali Escape",
      price: "$1,299",
      days: "7 Days / 6 Nights",
      type: "Honeymoon",
    },
    {
      name: "Paris Family Adventure",
      price: "$2,499",
      days: "10 Days / 9 Nights",
      type: "Family",
    },
    {
      name: "Business Dubai Tour",
      price: "$1,899",
      days: "5 Days / 4 Nights",
      type: "Corporate",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Plan Your <span className="text-primary">Dream Trip</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tell us your preferences and we'll create the perfect travel package for you
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Destination */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-base">
                <Plane className="h-5 w-5 text-primary" />
                Destination
              </Label>
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Where do you want to go?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bali">Bali, Indonesia</SelectItem>
                  <SelectItem value="paris">Paris, France</SelectItem>
                  <SelectItem value="dubai">Dubai, UAE</SelectItem>
                  <SelectItem value="maldives">Maldives</SelectItem>
                  <SelectItem value="switzerland">Switzerland</SelectItem>
                  <SelectItem value="jodhpur">Jodhpur, India</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-base">
                <Calendar className="h-5 w-5 text-primary" />
                Duration
              </Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="How many days?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3-5">3-5 Days</SelectItem>
                  <SelectItem value="6-8">6-8 Days</SelectItem>
                  <SelectItem value="9-12">9-12 Days</SelectItem>
                  <SelectItem value="13+">13+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-base">
                <DollarSign className="h-5 w-5 text-primary" />
                Budget Range
              </Label>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Your budget?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Under $1,000</SelectItem>
                  <SelectItem value="moderate">$1,000 - $2,500</SelectItem>
                  <SelectItem value="luxury">$2,500 - $5,000</SelectItem>
                  <SelectItem value="premium">$5,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Travel Type */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-base">
                <Users className="h-5 w-5 text-primary" />
                Travel Type
              </Label>
              <Select value={travelType} onValueChange={setTravelType}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Who's traveling?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="honeymoon">Honeymoon</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="solo">Solo Travel</SelectItem>
                  <SelectItem value="group">Group Tour</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={handlePlanTrip}
            className="w-full mt-8 h-14 text-lg font-semibold hover:scale-105 transition-transform"
            size="lg"
          >
            Find My Perfect Trip
          </Button>
        </Card>

        {/* Suggested Packages */}
        {showSuggestions && (
          <div className="mt-12 animate-slide-up">
            <h3 className="text-2xl font-bold text-center mb-6">Recommended Packages for You</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {suggestedPackages.map((pkg, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                    <p className="text-3xl font-bold text-primary mb-2">{pkg.price}</p>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.days}</p>
                    <Button className="w-full">Book Now</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
