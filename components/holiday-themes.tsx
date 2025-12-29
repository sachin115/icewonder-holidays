import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Waves, Mountain, Camera, Heart, Users, Sparkles } from "lucide-react"

const themes = [
  {
    icon: Waves,
    name: "Beach & Islands",
    packages: "150+",
    gradient: "from-cyan-500 to-blue-400",
    popular: true,
  },
  {
    icon: Mountain,
    name: "Hill Stations",
    packages: "120+",
    gradient: "from-green-500 to-emerald-400",
    popular: false,
  },
  {
    icon: Camera,
    name: "Adventure",
    packages: "85+",
    gradient: "from-orange-500 to-red-400",
    popular: true,
  },
  {
    icon: Heart,
    name: "Honeymoon",
    packages: "200+",
    gradient: "from-rose-500 to-pink-400",
    popular: true,
  },
  {
    icon: Users,
    name: "Family Trips",
    packages: "95+",
    gradient: "from-purple-500 to-indigo-400",
    popular: false,
  },
  {
    icon: Sparkles,
    name: "Luxury",
    packages: "65+",
    gradient: "from-amber-500 to-yellow-400",
    popular: false,
  },
]

export function HolidayThemes() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Browse by Theme</h2>
        <p className="text-xl text-muted-foreground">Find packages tailored to your travel style</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {themes.map((theme, index) => {
          const Icon = theme.icon
          return (
            <Card
              key={index}
              className="group relative p-6 text-center hover-lift-3d cursor-pointer overflow-hidden"
              style={{
                animation: `scale-in-3d 0.8s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              {theme.popular && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white animate-pulse">Hot</Badge>
              )}
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-transform perspective-1000`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-1">{theme.name}</h3>
              <p className="text-sm text-muted-foreground">{theme.packages} packages</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
