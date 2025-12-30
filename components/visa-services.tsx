"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, FileCheck } from "lucide-react"
import { EnquiryModal } from "./enquiry-modal"

const visaServices = [
  {
    id: 1,
    country: "United States",
    flag: "🇺🇸",
    visaTypes: ["Tourist", "Business", "Student"],
    processingTime: "15-20 Days",
    image: "/usa-statue-liberty.jpg",
  },
  {
    id: 2,
    country: "United Kingdom",
    flag: "🇬🇧",
    visaTypes: ["Tourist", "Business", "Work"],
    processingTime: "10-15 Days",
    image: "/uk-big-ben.jpg",
  },
  {
    id: 3,
    country: "Canada",
    flag: "🇨🇦",
    visaTypes: ["Tourist", "Study", "Work"],
    processingTime: "12-18 Days",
    image: "/canada-mountains.jpg",
  },
  {
    id: 4,
    country: "Australia",
    flag: "🇦🇺",
    visaTypes: ["Tourist", "Business", "Student"],
    processingTime: "10-14 Days",
    image: "/australia-sydney-opera.jpg",
  },
  {
    id: 5,
    country: "Schengen",
    flag: "🇪🇺",
    visaTypes: ["Tourist", "Business"],
    processingTime: "7-12 Days",
    image: "/europe-landmarks.jpg",
  },
  {
    id: 6,
    country: "Dubai (UAE)",
    flag: "🇦🇪",
    visaTypes: ["Tourist", "Business"],
    processingTime: "3-5 Days",
    image: "/dubai-skyline-burj-khalifa.jpg",
  },
]

export function VisaServices() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Visa Services by Country</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              We provide comprehensive visa assistance for multiple countries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.country}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="text-3xl mb-1">{service.flag}</div>
                    <h3 className="text-xl font-bold text-white">{service.country}</h3>
                  </div>
                </div>

                <CardContent className="p-5">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Clock className="h-4 w-4 flex-shrink-0" />
                    <span>Processing: {service.processingTime}</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2 flex items-center gap-2">
                      <FileCheck className="h-4 w-4" />
                      Visa Types Available:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.visaTypes.map((type, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" onClick={() => setEnquiryOpen(true)}>
                    Apply for Visa
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <EnquiryModal open={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </>
  )
}
