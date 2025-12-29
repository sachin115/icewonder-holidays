import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield } from "lucide-react"

const operators = [
  { name: "RedBus Express", rating: 4.6, buses: 250, verified: true, logo: "🚌" },
  { name: "VRL Travels", rating: 4.5, buses: 180, verified: true, logo: "🚐" },
  { name: "SRS Travels", rating: 4.7, buses: 150, verified: true, logo: "🚍" },
  { name: "Orange Travels", rating: 4.4, buses: 220, verified: true, logo: "🚎" },
  { name: "KPN Travels", rating: 4.8, buses: 130, verified: true, logo: "🚌" },
  { name: "Parveen Travels", rating: 4.6, buses: 160, verified: true, logo: "🚐" },
]

export function BusOperators() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted Bus Operators</h2>
        <p className="text-xl text-muted-foreground">Travel with India's most reliable bus services</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {operators.map((operator, index) => (
          <Card
            key={index}
            className="group p-6 hover-lift-3d cursor-pointer"
            style={{
              animation: `scale-in-3d 0.8s ease-out ${index * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <div className="flex items-start gap-4">
              <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {operator.logo}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold">{operator.name}</h3>
                  {operator.verified && (
                    <Badge variant="secondary" className="bg-green-100 text-green-600">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{operator.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">• {operator.buses} buses</span>
                </div>

                <p className="text-sm text-muted-foreground">AC, Non-AC, Sleeper & Seater available</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
