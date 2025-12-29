"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, SlidersHorizontal } from "lucide-react"

export function TourFilters() {
  const [priceRange, setPriceRange] = useState([0, 200000])
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="relative animate-fade-in">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by destination, package name, or country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-14 text-lg border-2 focus:border-primary transition-all"
        />
      </div>

      <div className="bg-card border border-border rounded-lg p-6 animate-slide-up">
        <div className="flex items-center gap-2 mb-6">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Advanced Filters</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Destination Filter */}
          <div>
            <label className="text-sm font-medium mb-2 block">Destination</label>
            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="All Destinations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Destinations</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="america">America</SelectItem>
                <SelectItem value="oceania">Oceania</SelectItem>
                <SelectItem value="africa">Africa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Duration Filter */}
          <div>
            <label className="text-sm font-medium mb-2 block">Duration</label>
            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Any Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Duration</SelectItem>
                <SelectItem value="1-3">1-3 Days</SelectItem>
                <SelectItem value="4-7">4-7 Days</SelectItem>
                <SelectItem value="8-14">8-14 Days</SelectItem>
                <SelectItem value="15+">15+ Days</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
            </label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              min={0}
              max={200000}
              step={5000}
              className="mt-4"
            />
          </div>

          {/* Apply Button */}
          <div className="flex items-end">
            <Button className="w-full h-12 hover:scale-105 transition-transform">Apply Filters</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
