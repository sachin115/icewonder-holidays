import { Card, CardContent } from "@/components/ui/card"

const attractions = [
  {
    id: 1,
    name: "Mehrangarh Fort",
    description: "One of India's largest forts with breathtaking architecture and museum",
    image: "/jodhpur-mehrangarh-fort.png",
  },
  {
    id: 2,
    name: "Umaid Bhawan Palace",
    description: "A magnificent palace that serves as a luxury hotel and museum",
    image: "/jodhpur-umaid-bhawan.png",
  },
  {
    id: 3,
    name: "Jaswant Thada",
    description: "Beautiful marble cenotaph with intricate carvings and peaceful gardens",
    image: "/jodhpur-jaswant-thada.png",
  },
  {
    id: 4,
    name: "Clock Tower & Market",
    description: "Vibrant marketplace offering handicrafts, textiles, and local spices",
    image: "/jodhpur-clock-tower-market.png",
  },
  {
    id: 5,
    name: "Mandore Gardens",
    description: "Historic gardens with temples and cenotaphs of Marwar rulers",
    image: "/jodhpur-mandore-gardens.png",
  },
  {
    id: 6,
    name: "Desert Safari",
    description: "Experience the Thar Desert with camel rides and cultural programs",
    image: "/rajasthan-desert-camel.png",
  },
]

export function JodhpurAttractions() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Must-Visit Attractions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore the magnificent landmarks and experiences that make Jodhpur unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction) => (
            <Card key={attraction.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{attraction.name}</h3>
                </div>
              </div>
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground text-pretty">{attraction.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
