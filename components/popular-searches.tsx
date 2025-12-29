"use client"

import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

export function PopularSearches() {
  const popularSearches = [
    "Bali Honeymoon",
    "Dubai Family Tour",
    "Paris Romance",
    "Maldives Luxury",
    "Swiss Alps",
    "Thailand Beach",
    "Japan Culture",
    "New York City",
    "Jodhpur Heritage",
    "Kerala Backwaters",
    "Goa Beaches",
    "Singapore",
  ]

  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Popular Searches</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {popularSearches.map((search, index) => (
          <Badge
            key={index}
            variant="outline"
            className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {search}
          </Badge>
        ))}
      </div>
    </div>
  )
}
