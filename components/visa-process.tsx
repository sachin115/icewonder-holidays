import { FileText, Send, Clock, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Submit Documents",
    description: "Provide required documents and application details",
  },
  {
    icon: Send,
    title: "We Process",
    description: "Our experts review and submit your application",
  },
  {
    icon: Clock,
    title: "Track Status",
    description: "Real-time updates on your visa application",
  },
  {
    icon: CheckCircle,
    title: "Receive Visa",
    description: "Get your approved visa delivered to you",
  },
]

export function VisaProcess() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Visa Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Simple and transparent process to get your visa approved
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative text-center">
                <div className="mb-4 relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-2xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 mt-4">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
