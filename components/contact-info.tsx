import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["123 Travel Street", "Mumbai, Maharashtra 400001", "India"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+91 98765 43210", "+91 98765 43211"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@aiholidays.com", "support@aiholidays.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-muted-foreground text-pretty leading-relaxed">
          We're available to answer your questions and help you plan your dream vacation. Reach out to us through any of
          the following channels.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {contactDetails.map((item, index) => {
          const Icon = item.icon
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <div className="space-y-1">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2 text-lg">Need Immediate Assistance?</h3>
          <p className="text-sm text-muted-foreground mb-4 text-pretty">
            For urgent travel queries or last-minute bookings, please call our 24/7 helpline.
          </p>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Phone className="h-4 w-4" />
            Call Now: +91 98765 43210
          </a>
        </CardContent>
      </Card>
    </div>
  )
}
