"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Plane, Building2, Umbrella, Bus, FileText, MoreHorizontal, HelpCircle, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EnquiryModal } from "@/components/enquiry-modal"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  const navLinks = [
    { href: "/flights", label: "Flights", icon: Plane },
    { href: "/hotels", label: "Hotels", icon: Building2 },
    { href: "/holidays", label: "Holidays", icon: Umbrella },
    { href: "/bus", label: "Bus", icon: Bus },
    { href: "/visa-solution", label: "Visa", icon: FileText },
  ]

  const moreLinks = [
    { href: "/honeymoon-tours", label: "Honeymoon Tours" },
    { href: "/corporate", label: "Corporate Travel" },
    { href: "/jodhpur-tour", label: "Jodhpur Tour" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 transition-transform group-hover:scale-110">
                <Image
                  src="/icewonder-holidays-logo.png"
                  alt="ICEWONDER HOLIDAYS"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block text-lg font-bold text-primary">ICEWONDER HOLIDAYS</div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex flex-col items-center gap-1 text-sm font-semibold text-foreground/80 transition-all hover:text-primary hover:scale-110"
                  >
                    <Icon className="h-6 w-6" />
                    <span>{link.label}</span>
                  </Link>
                )
              })}

              {/* More Dropdown */}
              <div className="relative group">
                <button className="flex flex-col items-center gap-1 text-sm font-semibold text-foreground/80 transition-all hover:text-primary hover:scale-110">
                  <MoreHorizontal className="h-6 w-6" />
                  <span>More</span>
                </button>

                <div className="absolute top-full right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {moreLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            <div className="flex items-center gap-4">
              <button className="hidden md:flex flex-col items-center gap-1 text-xs font-semibold text-foreground/80 transition-all hover:text-primary hover:scale-110">
                <HelpCircle className="h-5 w-5" />
                <span>Help</span>
              </button>

              <button className="hidden md:flex flex-col items-center gap-1 text-xs font-semibold text-foreground/80 transition-all hover:text-primary hover:scale-110">
                <User className="h-5 w-5" />
                <span>Login</span>
              </button>

              <Button
                onClick={() => setEnquiryOpen(true)}
                className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                Enquire Now
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <nav className="lg:hidden border-t border-border/40 py-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 text-base font-bold text-foreground/80 transition-colors hover:text-primary py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  )
                })}
                {moreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-bold text-foreground/80 transition-colors hover:text-primary py-2 pl-8"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  onClick={() => {
                    setEnquiryOpen(true)
                    setMobileMenuOpen(false)
                  }}
                  className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                >
                  Enquire Now
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <EnquiryModal open={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </>
  )
}
