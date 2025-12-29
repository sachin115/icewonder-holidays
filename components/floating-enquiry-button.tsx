"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnquiryModal } from "@/components/enquiry-modal"

export function FloatingEnquiryButton() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setEnquiryOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-2xl animate-bounce hover:animate-none transition-all hover:scale-110"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <EnquiryModal open={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </>
  )
}
