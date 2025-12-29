import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const destinations = [
  { name: "Goa", country: "India", emoji: "🏖️", trend: "+45%" },
  { name: "Kashmir", country: "India", emoji: "🏔️", trend: "+38%" },
  { name: "Kerala", country: "India", emoji: "🌴", trend: "+52%" },
  { name: "Rajasthan", country: "India", emoji: "🏰", trend: "+41%" },
  { name: "Himachal", country: "India", emoji: "⛰️", trend: "+35%" },
  { name: "Andaman", country: "India", emoji: "🏝️", trend: "+48%" },
]

export function TrendingDestinations() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
          <TrendingUp className="w-4 h-4" />
          <span className="font-bold">Rising Popularity</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Trending Destinations</h2>
        <p className="text-xl text-muted-foreground">Most searched destinations this month</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {destinations.map((dest, index) => (
          <Card
            key={index}
            className="group p-6 text-center hover-lift-3d cursor-pointer"
            style={{
              animation: `slide-up 0.6s ease-out ${index * 0.05}s forwards`,
              opacity: 0,
            }}
          >
            <div className="text-5xl mb-3 transform group-hover:scale-125 transition-transform">{dest.emoji}</div>
            <h3 className="text-lg font-bold mb-1">{dest.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{dest.country}</p>
            <div className="inline-flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-bold">
              <TrendingUp className="w-3 h-3" />
              {dest.trend}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
