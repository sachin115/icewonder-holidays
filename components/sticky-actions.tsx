"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, X } from "lucide-react"

export function StickyActions() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Mobile Sticky Call Button */}
      <a
        href="tel:+919876543210"
        className="fixed bottom-6 right-6 md:hidden z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all animate-bounce-slow"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Desktop Floating Action Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        {isExpanded && (
          <div className="flex flex-col gap-3 mb-4 animate-slide-up">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Call Now</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold">WhatsApp</span>
            </a>
            <a
              href="mailto:info@aiholidays.com"
              className="flex items-center gap-3 bg-blue-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all hover:scale-110"
            >
              <Mail className="h-5 w-5" />
              <span className="font-semibold">Email Us</span>
            </a>
          </div>
        )}

        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 rounded-full shadow-2xl bg-primary hover:bg-primary/90 animate-pulse-slow"
          size="icon"
        >
          {isExpanded ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        </Button>
      </div>
    </>
  )
}
