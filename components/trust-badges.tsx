import { Shield, Award, Users, Globe } from "lucide-react"

export function TrustBadges() {
  const partners = [
    "/abstract-airline-logo.png",
    "/abstract-hotel-logo.png",
    "/travel-association-logo.jpg",
    "/payment-partner-logo.jpg",
    "/tourism-board-logo.jpg",
    "/certification-badge.jpg",
  ]

  const stats = [
    { icon: Users, label: "Happy Travelers", value: "50,000+" },
    { icon: Globe, label: "Destinations", value: "100+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Shield, label: "Years Experience", value: "15+" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Trusted Partners</h3>
          <p className="text-muted-foreground">We work with the world's leading travel brands</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-background rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 grayscale hover:grayscale-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={partner || "/placeholder.svg"}
                alt="Partner logo"
                className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
