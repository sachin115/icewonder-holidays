import { Wifi, Coffee, Snowflake, Armchair, Shield, Tv, Zap, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

const facilities = [
  { icon: Snowflake, name: "AC Buses", color: "from-blue-500 to-cyan-400" },
  { icon: Armchair, name: "Comfortable Seats", color: "from-purple-500 to-pink-400" },
  { icon: Wifi, name: "Free WiFi", color: "from-green-500 to-emerald-400" },
  { icon: Shield, name: "Safe Travel", color: "from-red-500 to-orange-400" },
  { icon: Tv, name: "Entertainment", color: "from-indigo-500 to-purple-400" },
  { icon: Coffee, name: "Refreshments", color: "from-amber-500 to-yellow-400" },
  { icon: Zap, name: "USB Charging", color: "from-teal-500 to-cyan-400" },
  { icon: MapPin, name: "GPS Tracking", color: "from-rose-500 to-pink-400" },
]

export function BusFacilities() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Bus Facilities</h2>
        <p className="text-xl text-muted-foreground">Travel in comfort with modern amenities</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {facilities.map((facility, index) => {
          const Icon = facility.icon
          return (
            <Card
              key={index}
              className="group p-6 text-center hover-lift-3d cursor-pointer"
              style={{
                animation: `slide-up 0.6s ease-out ${index * 0.05}s forwards`,
                opacity: 0,
              }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-transform`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold">{facility.name}</h3>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
