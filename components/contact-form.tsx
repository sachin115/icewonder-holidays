"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Calendar, Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const whatsappMessage = `
*New Contact Form Enquiry - ICE WONDER HOLIDAYS*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Destination:* ${formData.destination || "Not specified"}
*Travel Date:* ${formData.travelDate || "Not specified"}

*Message:*
${formData.message || "No additional message"}
    `.trim()

    const whatsappNumber = "919137543633"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    console.log("[v0] Contact form submitted with data:", formData)
    console.log("[v0] Opening WhatsApp...")

    window.open(whatsappURL, "_blank")

    alert("Opening WhatsApp! Your enquiry will be sent to us.")

    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelDate: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Send Us an Enquiry</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Enter your full name"
            className="mt-1.5"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="mt-1.5"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+91 98765 43210"
              className="mt-1.5"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="destination">Destination</Label>
          <Select
            name="destination"
            value={formData.destination}
            onValueChange={(value) => setFormData({ ...formData, destination: value })}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bali">Bali</SelectItem>
              <SelectItem value="maldives">Maldives</SelectItem>
              <SelectItem value="dubai">Dubai</SelectItem>
              <SelectItem value="switzerland">Switzerland</SelectItem>
              <SelectItem value="paris">Paris</SelectItem>
              <SelectItem value="jodhpur">Jodhpur</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="travel-date">Preferred Travel Date</Label>
          <div className="relative mt-1.5">
            <Input
              id="travel-date"
              name="travel-date"
              type="date"
              className="pr-10"
              value={formData.travelDate}
              onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your travel plans..."
            rows={4}
            className="mt-1.5"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg" disabled={isSubmitting}>
          <Send className="h-4 w-4 mr-2" />
          {isSubmitting ? "Submitting..." : "Send to WhatsApp"}
        </Button>
      </form>
    </div>
  )
}
