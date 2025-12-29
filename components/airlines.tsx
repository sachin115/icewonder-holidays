import { Card } from "@/components/ui/card"

const airlines = [
  { name: "Air India", logo: "🇮🇳" },
  { name: "IndiGo", logo: "✈️" },
  { name: "SpiceJet", logo: "🌶️" },
  { name: "Vistara", logo: "⭐" },
  { name: "Emirates", logo: "🇦🇪" },
  { name: "Singapore Airlines", logo: "🇸🇬" },
  { name: "Qatar Airways", logo: "🇶🇦" },
  { name: "British Airways", logo: "🇬🇧" },
]

export function Airlines() {
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Airline Partners</h2>
        <p className="text-xl text-muted-foreground">Trusted by leading airlines worldwide</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {airlines.map((airline, index) => (
          <Card
            key={index}
            className="p-6 flex flex-col items-center justify-center hover-lift-3d cursor-pointer group"
            style={{
              animation: `scale-in 0.5s ease-out ${index * 0.05}s forwards`,
              opacity: 0,
            }}
          >
            <div className="text-4xl mb-2 group-hover:animate-bounce-3d">{airline.logo}</div>
            <p className="text-xs font-semibold text-center">{airline.name}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
