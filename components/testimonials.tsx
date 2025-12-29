"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    photo: "/woman-portrait.png",
    rating: 5,
    review:
      "Amazing experience! The team handled everything perfectly. Our honeymoon in Maldives was absolutely magical.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    photo: "/thoughtful-man-portrait.png",
    rating: 5,
    review: "Professional service and great value for money. Highly recommend their Jodhpur tour package.",
  },
  {
    id: 3,
    name: "Anjali Patel",
    photo: "/diverse-woman-smiling.png",
    rating: 4,
    review: "Wonderful trip to Switzerland! The itinerary was well-planned and our guide was excellent.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up-3d">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real experiences from travelers who explored the world with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative perspective-1500">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`transition-all duration-700 preserve-3d ${
                index === currentIndex ? "opacity-100 scale-100 rotate-0" : "opacity-0 absolute inset-0 scale-90"
              }`}
              style={{
                transform:
                  index === currentIndex
                    ? "rotateY(0deg) translateZ(0)"
                    : index < currentIndex
                      ? "rotateY(-90deg) translateZ(-100px)"
                      : "rotateY(90deg) translateZ(-100px)",
              }}
            >
              <CardContent className="p-8 text-center">
                <img
                  src={testimonial.photo || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover animate-float-3d"
                />
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary animate-bounce-3d"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-lg mb-4 text-foreground/80 italic text-pretty">"{testimonial.review}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8 animate-pulse-3d" : "bg-border hover:bg-primary/50 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
