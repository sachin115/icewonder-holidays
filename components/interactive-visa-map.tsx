"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, CheckCircle2 } from "lucide-react"

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    type: "Tourist Visa",
    processing: "7-10 days",
    price: "₹12,500",
    popular: true,
    gradient: "from-blue-500 to-red-500",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    type: "Visitor Visa",
    processing: "15-20 days",
    price: "₹9,800",
    popular: true,
    gradient: "from-blue-600 to-red-600",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    type: "Visitor Visa",
    processing: "10-15 days",
    price: "₹8,500",
    popular: true,
    gradient: "from-red-500 to-white",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    type: "Tourist Visa",
    processing: "5-7 days",
    price: "₹7,200",
    popular: false,
    gradient: "from-blue-500 to-green-500",
  },
  {
    name: "Schengen",
    flag: "🇪🇺",
    type: "Tourist Visa",
    processing: "10-15 days",
    price: "₹6,800",
    popular: true,
    gradient: "from-blue-600 to-yellow-400",
  },
  {
    name: "Dubai (UAE)",
    flag: "🇦🇪",
    type: "Tourist Visa",
    processing: "2-3 days",
    price: "₹4,500",
    popular: true,
    gradient: "from-green-500 to-red-500",
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    type: "Tourist Visa",
    processing: "3-5 days",
    price: "₹3,800",
    popular: false,
    gradient: "from-red-500 to-white",
  },
  {
    name: "Thailand",
    flag: "🇹🇭",
    type: "Tourist Visa",
    processing: "2-4 days",
    price: "₹2,500",
    popular: false,
    gradient: "from-red-500 to-blue-500",
  },
]

export function InteractiveVisaMap() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12 animate-slide-up">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full mb-4">
          <span className="font-bold">🌍 Visa Services</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Select Your Destination</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Click on any country to see visa details and pricing
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Country Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countries.map((country, index) => (
              <Card
                key={index}
                onClick={() => setSelectedCountry(country)}
                className={`group relative p-6 text-center cursor-pointer hover-lift-3d transition-all ${
                  selectedCountry.name === country.name ? "ring-4 ring-primary shadow-2xl scale-105" : ""
                }`}
                style={{
                  animation: `scale-in-3d 0.8s ease-out ${index * 0.05}s forwards`,
                  opacity: 0,
                }}
              >
                {country.popular && <Badge className="absolute -top-2 -right-2 bg-red-500 animate-pulse">Hot</Badge>}
                <div className="text-5xl mb-3 transform group-hover:scale-125 transition-transform">{country.flag}</div>
                <p className="font-bold text-sm">{country.name}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Selected Country Details */}
        <Card className="p-8 hover-lift-3d bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="text-center mb-6">
            <div className="text-8xl mb-4 animate-bounce-3d">{selectedCountry.flag}</div>
            <h3 className="text-3xl font-bold mb-2">{selectedCountry.name}</h3>
            <Badge variant="secondary" className="text-lg px-4 py-1">
              {selectedCountry.type}
            </Badge>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Processing Time</p>
                <p className="font-bold">{selectedCountry.processing}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Visa Fee</p>
                <p className="font-bold text-2xl text-primary">{selectedCountry.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <p className="font-bold">98% Approved</p>
              </div>
            </div>
          </div>

          <Button className="w-full text-lg py-6 bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600">
            Apply Now
          </Button>
        </Card>
      </div>
    </section>
  )
}
