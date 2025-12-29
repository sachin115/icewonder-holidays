import { Users, Briefcase, DollarSign, Clock } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Group Bookings",
    description: "Efficient management of team travel with bulk booking discounts",
  },
  {
    icon: Briefcase,
    title: "Business Travel",
    description: "Professional itineraries tailored to your business needs",
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Negotiated corporate rates for hotels and flights",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Dedicated account manager for immediate assistance",
  },
]

export function CorporateBenefits() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose Our Corporate Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive travel solutions designed for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
