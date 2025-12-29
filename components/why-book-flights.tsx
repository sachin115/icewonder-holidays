import { Shield, DollarSign, Headphones, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: DollarSign,
    title: "Best Price Guarantee",
    description: "We compare prices from 500+ airlines to ensure you get the lowest fares",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description: "Your payment information is protected with bank-level encryption",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our travel experts are available round the clock to assist you",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Zap,
    title: "Instant Confirmation",
    description: "Get your e-tickets instantly via email and SMS",
    color: "from-orange-500 to-red-400",
  },
]

export function WhyBookFlights() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Book With Us?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience hassle-free flight booking with unbeatable benefits
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={index}
              className="group p-6 text-center hover-lift-3d cursor-pointer"
              style={{
                animation: `slide-up-3d 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
