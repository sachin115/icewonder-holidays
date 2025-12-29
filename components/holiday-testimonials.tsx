import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya & Rahul",
    trip: "Maldives Honeymoon",
    rating: 5,
    text: "The most magical experience! Everything was perfectly arranged. The overwater villa was a dream come true.",
    avatar: "👰",
  },
  {
    name: "Sharma Family",
    trip: "Switzerland Tour",
    rating: 5,
    text: "AI Holidays made our family vacation unforgettable. The itinerary was well-planned and our kids loved every moment.",
    avatar: "👨‍👩‍👧‍👦",
  },
  {
    name: "Amit & Friends",
    trip: "Thailand Adventure",
    rating: 5,
    text: "Best group trip ever! Island hopping, street food, nightlife - everything was amazing. Highly recommend!",
    avatar: "🎉",
  },
]

export function HolidayTestimonials() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Happy Travelers</h2>
        <p className="text-xl text-muted-foreground">Real stories from real travelers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="group p-8 hover-lift-3d"
            style={{
              animation: `slide-up-3d 0.6s ease-out ${index * 0.2}s forwards`,
              opacity: 0,
            }}
          >
            <Quote className="w-10 h-10 text-primary mb-4 opacity-20" />

            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-muted-foreground mb-6 italic">{testimonial.text}</p>

            <div className="flex items-center gap-4">
              <div className="text-4xl">{testimonial.avatar}</div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.trip}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
