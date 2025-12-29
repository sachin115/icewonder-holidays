"use client"

import { Award, DollarSign, HeadphonesIcon, MapPin } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Expert Guides",
    description: "Professional and knowledgeable tour guides",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Best value packages for every budget",
  },
  {
    icon: HeadphonesIcon,
    title: "Best Customer Support",
    description: "24/7 assistance for all your travel needs",
  },
  {
    icon: MapPin,
    title: "Custom Travel Plans",
    description: "Personalized itineraries tailored for you",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up-3d">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the difference with our premium travel services and exceptional customer care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-2xl transition-all duration-500 hover-tilt-3d preserve-3d animate-scale-in-3d"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 animate-float-3d">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
