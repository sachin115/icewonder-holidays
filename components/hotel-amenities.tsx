import { Wifi, Coffee, Utensils, Dumbbell, Wind, Sparkles, Waves, Tv } from "lucide-react"
import { Card } from "@/components/ui/card"

const amenities = [
  { icon: Wifi, name: "Free WiFi", description: "High-speed internet" },
  { icon: Waves, name: "Swimming Pool", description: "Indoor & outdoor" },
  { icon: Utensils, name: "Restaurant", description: "Multi-cuisine dining" },
  { icon: Dumbbell, name: "Fitness Center", description: "24/7 gym access" },
  { icon: Sparkles, name: "Spa & Wellness", description: "Massage & treatments" },
  { icon: Coffee, name: "Room Service", description: "24/7 availability" },
  { icon: Wind, name: "Air Conditioning", description: "Climate control" },
  { icon: Tv, name: "Entertainment", description: "Smart TV & streaming" },
]

export function HotelAmenities() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">World-Class Amenities</h2>
        <p className="text-xl text-muted-foreground">Everything you need for a comfortable stay</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {amenities.map((amenity, index) => {
          const Icon = amenity.icon
          return (
            <Card
              key={index}
              className="group p-6 hover-lift-3d cursor-pointer text-center"
              style={{
                animation: `slide-up 0.6s ease-out ${index * 0.05}s forwards`,
                opacity: 0,
              }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors transform group-hover:scale-110">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-1">{amenity.name}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
