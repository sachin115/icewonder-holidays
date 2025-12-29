"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle, MapPin } from "lucide-react"

interface Booking {
  id: number
  name: string
  destination: string
  time: string
}

export function LiveBookings() {
  const [currentBooking, setCurrentBooking] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const bookings: Booking[] = [
    { id: 1, name: "Priya S.", destination: "Bali", time: "2 minutes ago" },
    { id: 2, name: "Rahul K.", destination: "Dubai", time: "5 minutes ago" },
    { id: 3, name: "Amit P.", destination: "Paris", time: "8 minutes ago" },
    { id: 4, name: "Sneha M.", destination: "Maldives", time: "12 minutes ago" },
    { id: 5, name: "Vikram R.", destination: "Switzerland", time: "15 minutes ago" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentBooking((prev) => (prev + 1) % bookings.length)
        setIsVisible(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [bookings.length])

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm">
      <Card
        className={`p-4 shadow-2xl border-l-4 border-l-green-500 transition-all duration-500 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="p-2 bg-green-500/10 rounded-full">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm">
              <span className="text-primary">{bookings[currentBooking].name}</span> just booked
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <MapPin className="h-4 w-4" />
              <span>{bookings[currentBooking].destination}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{bookings[currentBooking].time}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
