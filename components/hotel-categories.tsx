import { Card } from "@/components/ui/card"
import { Building2, Home, TreePine, Waves, Mountain, Castle } from "lucide-react"

const categories = [
  {
    icon: Building2,
    name: "City Hotels",
    count: "2,500+",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Waves,
    name: "Beach Resorts",
    count: "1,200+",
    gradient: "from-teal-500 to-emerald-400",
  },
  {
    icon: Mountain,
    name: "Hill Stations",
    count: "800+",
    gradient: "from-green-500 to-lime-400",
  },
  {
    icon: Castle,
    name: "Heritage Hotels",
    count: "350+",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    icon: TreePine,
    name: "Nature Retreats",
    count: "600+",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Home,
    name: "Boutique Hotels",
    count: "950+",
    gradient: "from-purple-500 to-pink-400",
  },
]

export function HotelCategories() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Browse by Category</h2>
        <p className="text-xl text-muted-foreground">Find the perfect accommodation for your travel style</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <Card
              key={index}
              className="group p-6 text-center hover-lift-3d cursor-pointer"
              style={{
                animation: `scale-in-3d 0.8s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-transform perspective-1000`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} hotels</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
