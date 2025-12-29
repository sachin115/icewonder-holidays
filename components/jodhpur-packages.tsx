import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users } from "lucide-react"

const packages = [
  {
    id: 1,
    name: "Jodhpur Heritage Tour",
    duration: "2 Days / 1 Night",
    price: 8500,
    groupSize: "2-6",
    image: "/jodhpur-mehrangarh-fort.png",
    includes: ["Mehrangarh Fort", "Umaid Bhawan", "Jaswant Thada", "1 Hotel", "Meals", "Guide"],
  },
  {
    id: 2,
    name: "Jodhpur Complete Experience",
    duration: "3 Days / 2 Nights",
    price: 15000,
    groupSize: "2-8",
    image: "/jodhpur-umaid-bhawan.png",
    includes: ["All Forts", "Desert Safari", "Market Tour", "2 Hotels", "All Meals", "Transport"],
  },
  {
    id: 3,
    name: "Jodhpur Desert Adventure",
    duration: "4 Days / 3 Nights",
    price: 22000,
    groupSize: "2-10",
    image: "/rajasthan-desert-camel.png",
    includes: ["City Tour", "2-Day Safari", "Camping", "3 Hotels", "All Meals", "Cultural Show"],
  },
]

export function JodhpurPackages() {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Jodhpur Tour Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our carefully crafted packages for an authentic Jodhpur experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative h-52 overflow-hidden">
                <img src={pkg.image || "/placeholder.svg"} alt={pkg.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-bold text-lg">
                  ₹{pkg.price.toLocaleString()}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-balance">{pkg.name}</h3>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 flex-shrink-0" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 flex-shrink-0" />
                    <span>{pkg.groupSize} people</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Package Includes:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.includes.map((item, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Book This Package</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
