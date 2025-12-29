"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, Users, Search, Sparkles, User, Mail, Phone } from "lucide-react"

export function HolidaySearch() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    startDate: "",
    duration: "3-5 Days",
    travelers: "2",
    holidayType: "Beach & Sun",
    budget: "Under ₹20,000",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `*New Holiday Package Enquiry*
    
*Personal Details:*
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

*Holiday Details:*
Destination: ${formData.destination}
Start Date: ${formData.startDate}
Duration: ${formData.duration}
Number of Travelers: ${formData.travelers}
Holiday Type: ${formData.holidayType}
Budget Per Person: ${formData.budget}`

    const whatsappUrl = `https://wa.me/919137543633?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      destination: "",
      startDate: "",
      duration: "3-5 Days",
      travelers: "2",
      holidayType: "Beach & Sun",
      budget: "Under ₹20,000",
    })
  }

  return (
    <Card className="p-6 md:p-8 bg-white/95 backdrop-blur-sm shadow-2xl hover-lift-3d">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h2 className="text-xl md:text-2xl font-bold">Plan Your Perfect Holiday</h2>
        </div>

        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-base md:text-lg font-bold mb-4 text-gray-800">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2 font-semibold text-sm">
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="fullName"
                required
                placeholder="Enter your full name"
                className="h-12 text-base hover:shadow-md transition-shadow"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 font-semibold text-sm">
                <Mail className="w-4 h-4" />
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                className="h-12 text-base hover:shadow-md transition-shadow"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 font-semibold text-sm">
                <Phone className="w-4 h-4" />
                Phone *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="+91 9876543210"
                className="h-12 text-base hover:shadow-md transition-shadow"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="destination-holiday" className="flex items-center gap-2 font-semibold text-sm">
              <MapPin className="w-4 h-4" />
              Destination
            </Label>
            <Input
              id="destination-holiday"
              placeholder="Where to?"
              className="h-12 text-base hover:shadow-md transition-shadow"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="start-date" className="flex items-center gap-2 font-semibold text-sm">
              <Calendar className="w-4 h-4" />
              Start Date
            </Label>
            <Input
              id="start-date"
              type="date"
              className="h-12 text-base hover:shadow-md transition-shadow"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration" className="flex items-center gap-2 font-semibold text-sm">
              <Calendar className="w-4 h-4" />
              Duration
            </Label>
            <select
              id="duration"
              className="w-full h-12 px-3 border border-gray-300 rounded-md text-base hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            >
              <option>3-5 Days</option>
              <option>6-8 Days</option>
              <option>9-12 Days</option>
              <option>13+ Days</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="travelers" className="flex items-center gap-2 font-semibold text-sm">
              <Users className="w-4 h-4" />
              Travelers
            </Label>
            <Input
              id="travelers"
              type="number"
              min="1"
              className="h-12 text-base hover:shadow-md transition-shadow"
              value={formData.travelers}
              onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="holiday-type" className="font-semibold text-sm">
              Holiday Type
            </Label>
            <select
              id="holiday-type"
              className="w-full h-12 px-3 border border-gray-300 rounded-md text-base hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={formData.holidayType}
              onChange={(e) => setFormData({ ...formData, holidayType: e.target.value })}
            >
              <option>Beach & Sun</option>
              <option>Adventure & Trekking</option>
              <option>Cultural & Heritage</option>
              <option>Wildlife Safari</option>
              <option>Honeymoon Special</option>
              <option>Family Fun</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" className="font-semibold text-sm">
              Budget Per Person
            </Label>
            <select
              id="budget"
              className="w-full h-12 px-3 border border-gray-300 rounded-md text-base hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-rose-500"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            >
              <option>Under ₹20,000</option>
              <option>₹20,000 - ₹50,000</option>
              <option>₹50,000 - ₹1,00,000</option>
              <option>₹1,00,000+</option>
            </select>
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full h-14 text-base md:text-lg font-bold bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <Search className="w-5 h-5 mr-2" />
          Submit Holiday Enquiry
        </Button>
      </form>
    </Card>
  )
}
