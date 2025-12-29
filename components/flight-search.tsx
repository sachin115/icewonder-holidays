"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Plane, Calendar, Users, Search, User, Mail, Phone } from "lucide-react"

export function FlightSearch() {
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("round-trip")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    departure: "",
    return: "",
    passengers: "1",
    travelClass: "Economy",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `*New Flight Enquiry*
    
*Personal Details:*
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

*Flight Details:*
Trip Type: ${tripType === "round-trip" ? "Round Trip" : "One Way"}
From: ${formData.from}
To: ${formData.to}
Departure: ${formData.departure}
${tripType === "round-trip" ? `Return: ${formData.return}` : ""}
Passengers: ${formData.passengers}
Travel Class: ${formData.travelClass}`

    const whatsappUrl = `https://wa.me/919137543633?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      from: "",
      to: "",
      departure: "",
      return: "",
      passengers: "1",
      travelClass: "Economy",
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

        {/* Trip Type Selector */}
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={() => setTripType("round-trip")}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              tripType === "round-trip"
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Round Trip
          </button>
          <button
            type="button"
            onClick={() => setTripType("one-way")}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              tripType === "one-way"
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            One Way
          </button>
        </div>

        {/* Search Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="from" className="flex items-center gap-2">
              <Plane className="w-4 h-4" />
              From
            </Label>
            <Input
              id="from"
              placeholder="Delhi (DEL)"
              className="text-lg py-6 hover:shadow-md transition-shadow"
              value={formData.from}
              onChange={(e) => setFormData({ ...formData, from: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="to" className="flex items-center gap-2">
              <Plane className="w-4 h-4 rotate-90" />
              To
            </Label>
            <Input
              id="to"
              placeholder="Mumbai (BOM)"
              className="text-lg py-6 hover:shadow-md transition-shadow"
              value={formData.to}
              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="departure" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Departure
            </Label>
            <Input
              id="departure"
              type="date"
              className="text-lg py-6 hover:shadow-md transition-shadow"
              value={formData.departure}
              onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
            />
          </div>

          {tripType === "round-trip" && (
            <div className="space-y-2">
              <Label htmlFor="return" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Return
              </Label>
              <Input
                id="return"
                type="date"
                className="text-lg py-6 hover:shadow-md transition-shadow"
                value={formData.return}
                onChange={(e) => setFormData({ ...formData, return: e.target.value })}
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="passengers" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Passengers
            </Label>
            <Input
              id="passengers"
              type="number"
              min="1"
              className="text-lg py-6 hover:shadow-md transition-shadow"
              value={formData.passengers}
              onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="class">Travel Class</Label>
            <select
              id="class"
              className="w-full px-4 py-3 border rounded-md text-lg hover:shadow-md transition-shadow"
              value={formData.travelClass}
              onChange={(e) => setFormData({ ...formData, travelClass: e.target.value })}
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full text-lg py-7 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <Search className="w-5 h-5 mr-2" />
          Submit Flight Enquiry
        </Button>
      </form>
    </Card>
  )
}
