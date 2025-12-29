"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"

export function VisaCalculator() {
  const [country, setCountry] = useState("usa")
  const [visaType, setVisaType] = useState("tourist")
  const [processing, setProcessing] = useState("standard")

  const calculateCost = () => {
    const baseCosts: Record<string, number> = {
      usa: 12500,
      uk: 9800,
      canada: 8500,
      schengen: 6800,
      dubai: 4500,
    }

    const typeMultiplier: Record<string, number> = {
      tourist: 1,
      business: 1.2,
      student: 1.5,
      work: 1.8,
    }

    const processingMultiplier: Record<string, number> = {
      standard: 1,
      express: 1.5,
      urgent: 2,
    }

    const base = baseCosts[country] || 5000
    const total = base * typeMultiplier[visaType] * processingMultiplier[processing]

    return Math.round(total)
  }

  return (
    <section className="container mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Visa Cost Calculator</h2>
        <p className="text-xl text-muted-foreground">Estimate your visa processing costs instantly</p>
      </div>

      <Card className="max-w-2xl mx-auto p-8 hover-lift-3d">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <Label htmlFor="country-calc">Destination Country</Label>
            <select
              id="country-calc"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-3 border rounded-md text-lg hover:shadow-md transition-shadow"
            >
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="canada">Canada</option>
              <option value="schengen">Schengen (Europe)</option>
              <option value="dubai">Dubai (UAE)</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="visa-type">Visa Type</Label>
            <select
              id="visa-type"
              value={visaType}
              onChange={(e) => setVisaType(e.target.value)}
              className="w-full px-4 py-3 border rounded-md text-lg hover:shadow-md transition-shadow"
            >
              <option value="tourist">Tourist/Visit</option>
              <option value="business">Business</option>
              <option value="student">Student</option>
              <option value="work">Work Permit</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="processing-speed">Processing Speed</Label>
            <select
              id="processing-speed"
              value={processing}
              onChange={(e) => setProcessing(e.target.value)}
              className="w-full px-4 py-3 border rounded-md text-lg hover:shadow-md transition-shadow"
            >
              <option value="standard">Standard (10-15 days)</option>
              <option value="express">Express (5-7 days) +50%</option>
              <option value="urgent">Urgent (2-3 days) +100%</option>
            </select>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-2xl text-center mb-6">
          <p className="text-lg text-muted-foreground mb-2">Estimated Total Cost</p>
          <p className="text-5xl font-bold text-primary mb-2">₹{calculateCost().toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">Including all fees and taxes</p>
        </div>

        <Button className="w-full text-lg py-6 bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600">
          <Calculator className="w-5 h-5 mr-2" />
          Get Detailed Quote
        </Button>
      </Card>
    </section>
  )
}
