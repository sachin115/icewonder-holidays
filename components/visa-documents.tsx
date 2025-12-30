"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, Camera, CreditCard, Home, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react"
import { EnquiryModal } from "@/components/enquiry-modal"
import { useState } from "react"

const documents = [
  { icon: FileText, name: "Valid Passport", description: "Min 6 months validity" },
  { icon: Camera, name: "Photographs", description: "Recent passport size photos" },
  { icon: CreditCard, name: "Bank Statements", description: "Last 6 months statements" },
  { icon: Home, name: "Address Proof", description: "Utility bill or rent agreement" },
  { icon: Briefcase, name: "Employment Letter", description: "From current employer" },
  { icon: GraduationCap, name: "Educational Docs", description: "For student visas" },
]

export function VisaDocuments() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

  return (
    <>
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Required Documents</h2>
          <p className="text-xl text-muted-foreground">Prepare these documents for a smooth visa application</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => {
            const Icon = doc.icon
            return (
              <Card
                key={index}
                className="group p-6 hover-lift-3d cursor-pointer"
                style={{
                  animation: `slide-up-3d 0.6s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold">{doc.name}</h3>
                      <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-muted-foreground">{doc.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-gradient-to-r from-indigo-100 to-purple-100">
            <p className="text-lg font-semibold mb-2">Need help with documentation?</p>
            <p className="text-muted-foreground mb-4">Our visa experts will guide you through every step</p>
            <Button
              onClick={() => setIsEnquiryOpen(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600"
            >
              Talk to Expert
            </Button>
          </Card>
        </div>
      </section>

      <EnquiryModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </>
  )
}
