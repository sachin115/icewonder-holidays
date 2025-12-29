"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, Users, Search, Star, User, Mail, Phone } from "lucide-react"

export function HotelSearch() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    checkin: "",
    checkout: "",
    guests: "",
    rating: "Any Rating",
    price: "Any Price",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `*New Hotel Booking Enquiry*
    
*Personal Details:*
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

*Hotel Details:*
Location: ${formData.location}
Check-in: ${formData.checkin}
Check-out: ${formData.checkout}
Guests & Rooms: ${formData.guests}
Minimum Rating: ${formData.rating}
Price Range: ${formData.price}`

    const whatsappUrl = `https://wa.me/919137543633?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      checkin: "",
      checkout: "",
      guests: "",
      rating: "Any Rating",
      price: "Any Price",
    })
  }

  return (
    <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl hover-lift-3d">
      <form onSubmit={handleSubmit}>
        <div className="mb-6 pb-6 border-b">
          <h3 className="text-lg font-bold mb-4">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="fullName"
                required
                placeholder="Enter your full name"
                className="text-lg py-6 hover:shadow-md transition-shadow"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                className="text-lg py-6 hover:shadow-md transition-shadow"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="+91 9876543210"
                className="text-lg py-6 hover:shadow-md transition-shadow"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="space-y-2 lg:col-span-2">
            <Label htmlFor="location" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </Label>
            <Input
              id="location"
              placeholder="Where do you want to stay?"
              className="text-lg py-6 hover:shadow-md transition-shadow"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="checkin" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Check-in
            </Label>
            <Input
              id="checkin"
              type="date"
              className="text-lg py-6 hover:shadow-md transition-shadow"
              value={formData.checkin}
              onChange={(e) => setFormData({ ...formData, checkin: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="checkout" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Check-out
            </Label>
            <Input
              id="checkout"
              type="date"
              className="text-lg py-6 hover:shadow-md transition-shadow"
              value={formData.checkout}
              onChange={(e) => setFormData({ ...formData, checkout: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Guests & Rooms
            </Label>
            <Input
              id="guests"
              placeholder="2 Adults, 1 Room"
              className="text-lg py-6 hover:shadow-md transition-shadow"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="rating" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Minimum Rating
            </Label>
            <select
              id="rating"
              className="w-full px-4 py-3 border rounded-md text-lg hover:shadow-md transition-shadow"
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
            >
              <option>Any Rating</option>
              <option>3 Stars & Up</option>
              <option>4 Stars & Up</option>
              <option>5 Stars Only</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price Range</Label>
            <select
              id="price"
              className="w-full px-4 py-3 border rounded-md text-lg hover:shadow-md transition-shadow"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            >
              <option>Any Price</option>
              <option>Under ₹2,000</option>
              <option>₹2,000 - ₹5,000</option>
              <option>₹5,000 - ₹10,000</option>
              <option>₹10,000+</option>
            </select>
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full text-lg py-7 bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <Search className="w-5 h-5 mr-2" />
          Submit Hotel Enquiry
        </Button>
      </form>
    </Card>
  )
}
