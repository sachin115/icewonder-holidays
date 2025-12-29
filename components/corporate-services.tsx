import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, Hotel, Calendar, Users, MapPin, Briefcase } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Flight Management",
    description: "Bulk flight bookings with flexible change policies and preferred seating arrangements",
    features: ["Corporate rates", "Flexible bookings", "Priority check-in"],
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Pre-negotiated rates with top hotels worldwide for your business travelers",
    features: ["Corporate discounts", "Loyalty programs", "Late check-out"],
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Complete event management for conferences, seminars, and team building activities",
    features: ["Venue booking", "Logistics", "Catering"],
  },
  {
    icon: Users,
    title: "Team Building Tours",
    description: "Customized tours and activities to strengthen team bonds and boost morale",
    features: ["Adventure activities", "Cultural tours", "Wellness retreats"],
  },
  {
    icon: MapPin,
    title: "Custom Itineraries",
    description: "Personalized travel plans aligned with your business objectives and schedule",
    features: ["Flexible schedules", "Meeting arrangements", "Transportation"],
  },
  {
    icon: Briefcase,
    title: "MICE Solutions",
    description: "Meetings, Incentives, Conferences & Exhibitions planning and execution",
    features: ["Full planning", "Budget management", "On-site support"],
  },
]

export function CorporateServices() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Corporate Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive solutions for all your business travel needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 text-pretty">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
