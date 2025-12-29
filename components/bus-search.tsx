"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { MapPin, Calendar, ArrowRightLeft, Search, User, Mail, Phone } from "lucide-react"

export function BusSearch() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    date: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `*New Bus Booking Enquiry*
    
*Personal Details:*
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

*Bus Journey Details:*
From: ${formData.from}
To: ${formData.to}
Journey Date: ${formData.date}`

    const whatsappUrl = `https://wa.me/919137543633?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      from: "",
      to: "",
      date: "",
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="from-bus" className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-600" />
              From
            </Label>
            <Input
              id="from-bus"
              placeholder="Departure City"
              className="text-lg py-6 hover:shadow-md transition-shadow"
              value={formData.from}
              onChange={(e) => setFormData({ ...formData, from: e.target.value })}
            />
          </div>

          <div className="flex items-end justify-center">
            <Button type="button" variant="outline" size="icon" className="mb-2 hover:bg-green-100 bg-transparent">
              <ArrowRightLeft className="w-5 h-5 text-green-600" />
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="to-bus" className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-600" />
              To
            </Label>
            <Input
              id="to-bus"
              placeholder="Arrival City"
              className="text-lg py-6 hover:shadow-md transition-shadow"
              value={formData.to}
              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date-bus" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Journey Date
            </Label>
            <Input
              id="date-bus"
              type="date"
              className="text-lg py-6 hover:shadow-md transition-shadow"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full text-lg py-7 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <Search className="w-5 h-5 mr-2" />
          Submit Bus Enquiry
        </Button>
      </form>
    </Card>
  )
}
