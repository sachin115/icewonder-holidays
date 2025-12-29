"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    id: 1,
    image: "/beautiful-tropical-beach-sunset.jpg",
    title: "Explore Paradise Islands",
    subtitle: "Discover pristine beaches and crystal clear waters",
  },
  {
    id: 2,
    image: "/mountain-valley-landscape.jpg",
    title: "Mountain Adventures",
    subtitle: "Experience breathtaking peaks and valleys",
  },
  {
    id: 3,
    image: "/ancient-temple.png",
    title: "Cultural Heritage Tours",
    subtitle: "Journey through ancient wonders and traditions",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length)
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden perspective-1500">
      {destinations.map((destination, index) => (
        <div
          key={destination.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src={destination.image || "/placeholder.svg"}
            alt={destination.title}
            className="w-full h-full object-cover transition-transform duration-[2000ms] scale-110"
            style={{
              transform: index === currentSlide ? "scale(1.1) translateZ(0)" : "scale(1) translateZ(-50px)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 preserve-3d">
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-balance transition-all duration-700 ${
                index === currentSlide ? "animate-slide-in-left-3d" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              {destination.title}
            </h1>
            <p
              className={`text-lg md:text-xl text-white/90 mb-8 max-w-2xl text-pretty transition-all duration-700 ${
                index === currentSlide ? "animate-slide-in-right-3d" : "opacity-0"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              {destination.subtitle}
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                index === currentSlide ? "animate-scale-in-3d" : "opacity-0"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              <Button size="lg" className="text-base hover-lift-3d">
                View Packages
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover-lift-3d"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20 hover-tilt-3d"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20 hover-tilt-3d"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8 animate-pulse-3d" : "bg-white/50 hover:bg-white/75 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
