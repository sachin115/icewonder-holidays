import { Heart, Sparkles, UtensilsCrossed, Camera } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Romantic Settings",
    description: "Hand-picked destinations perfect for couples",
  },
  {
    icon: Sparkles,
    title: "Luxury Amenities",
    description: "Premium hotels and exclusive experiences",
  },
  {
    icon: UtensilsCrossed,
    title: "Candlelight Dinners",
    description: "Private dining experiences under the stars",
  },
  {
    icon: Camera,
    title: "Photo Sessions",
    description: "Professional couple photography included",
  },
]

export function HoneymoonFeatures() {
  return (
    <section className="py-16 bg-gradient-to-b from-accent/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Makes It Special</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every detail crafted to make your honeymoon truly magical and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
