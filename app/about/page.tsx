import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, MapPin, Users, Award, Heart, Globe, Star, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const features = [
    {
      icon: Users,
      title: "Personalized Tours",
      description: "Custom itineraries tailored to your unique preferences and travel style",
    },
    {
      icon: Globe,
      title: "Domestic & International",
      description: "From Manali to Maldives, Spiti to Switzerland - we cover it all",
    },
    {
      icon: Award,
      title: "All-Inclusive Packages",
      description: "Seamless travel with hotels, transport, activities - everything handled",
    },
    {
      icon: Heart,
      title: "Budget & Luxury Options",
      description: "Flexible packages designed for every budget and comfort level",
    },
  ]

  const specializations = [
    "Mountain Adventures (Manali, Spiti Valley, Himachal)",
    "Beach Getaways (Goa, Maldives, Thailand)",
    "Spiritual Journeys (Varanasi, Bodhgaya, Sujata Heritage Trail)",
    "Romantic Honeymoons (Bali, Switzerland, Paris)",
    "Corporate Travel & MICE Services",
    "International Tours (Dubai, Europe, Australia)",
  ]

  const stats = [
    { number: "5000+", label: "Happy Travelers" },
    { number: "150+", label: "Destinations Covered" },
    { number: "4.9", label: "Customer Rating" },
    { number: "100%", label: "Satisfaction Rate" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="animate-slide-up-3d">
            <Image
              src="/icewonder-holidays-logo.png"
              alt="ICEWONDER HOLIDAYS"
              width={150}
              height={150}
              className="mx-auto mb-6 drop-shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">ICEWONDER HOLIDAYS</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pretty">
              Turning Travel Dreams into Reality Since Day One
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="border-white text-white hover:bg-white/20 font-bold bg-white/10">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating animation elements */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <Plane className="h-12 w-12 text-white/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-slow" style={{ animationDelay: "1s" }}>
          <MapPin className="h-12 w-12 text-white/30" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover-lift-3d">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to <span className="text-primary">ICEWONDER HOLIDAYS</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in the heart of Nagpur, we are a passionate travel agency specializing in crafting unforgettable
                journeys. Whether you dream of exploring the majestic Spiti Valley, relaxing on the beaches of Goa,
                discovering spiritual centers, or embarking on international adventures, we make it happen with
                expertise and care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover-lift-3d">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-primary">Travel Specializations</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {specializations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors hover-lift-3d"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose <span className="text-primary">ICEWONDER HOLIDAYS</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-2xl transition-all duration-300 hover-lift-3d">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Customer-Focused</h3>
                  <p className="text-muted-foreground">
                    Your satisfaction is our priority. We go above and beyond to create memorable trips.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-2xl transition-all duration-300 hover-lift-3d">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Trusted Partner</h3>
                  <p className="text-muted-foreground">
                    Recognized as a top-rated travel agent in Nagpur with verified credentials.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-2xl transition-all duration-300 hover-lift-3d">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    Years of experience crafting perfect itineraries with attention to every detail.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us turn your wanderlust into reality with our expert planning and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
                <Phone className="mr-2 h-5 w-5" />
                +919137543633
              </Button>
            </Link>
            <Link href="/tours">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 font-bold bg-transparent"
              >
                <Globe className="mr-2 h-5 w-5" />
                Browse Packages
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm opacity-90">
            <a href="tel:+919137543633" className="hover:underline flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +919137543633
            </a>
            <span>|</span>
            <a href="tel:+917397909126" className="hover:underline flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +917397909126
            </a>
            <span>|</span>
            <a
              href="http://www.icewonderholidays.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              www.icewonderholidays.co.in
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function Plane({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
        fill="currentColor"
      />
    </svg>
  )
}
