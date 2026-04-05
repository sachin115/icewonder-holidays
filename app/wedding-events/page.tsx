"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Car, 
  Flower2, 
  UtensilsCrossed, 
  Camera, 
  CheckCircle2, 
  MapPin, 
  Heart,
  Sparkles,
  Phone,
  ArrowRight,
  Play,
  Quote,
  Star
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const services = [
  {
    icon: Car,
    title: "Seamless Travel & Transfers",
    description: "Complete pick-up and drop services for you and your guests, ensuring a smooth journey from arrival to departure."
  },
  {
    icon: Flower2,
    title: "Elegant Wedding Decorations",
    description: "From traditional to modern luxury themes, our team creates a breathtaking ambiance tailored to your vision."
  },
  {
    icon: UtensilsCrossed,
    title: "Customized Cuisine",
    description: "Fully customized menus from regional delicacies to international cuisines, designed to delight every palate."
  },
  {
    icon: Camera,
    title: "Professional Photography",
    description: "Expert photographers and videographers ensuring your wedding memories are preserved beautifully."
  }
]

const benefits = [
  "Complete end-to-end wedding planning",
  "Personalized experiences for every couple",
  "Premium destinations & venues",
  "Professional and experienced team",
  "Stress-free execution with attention to detail"
]

const galleryImages = [
  { src: "/weddingimage8.jpeg", alt: "Elegant wedding decoration" },
  { src: "/wedding/weddingimage2.jpeg", alt: "Beautiful wedding setup" },
  { src: "/wedding/weddingimage3.jpeg", alt: "Grand wedding entrance" },
  { src: "/wedding/weddingimage4.jpeg", alt: "Romantic wedding decor" },
  { src: "/wedding/weddingimage5.jpeg", alt: "Luxurious wedding arrangement" },
  { src: "/wedding/weddingimage6.jpeg", alt: "Wedding ceremony venue" }
]

const videos = [
  { src: "/wedding/weddingvideo1.mp4", title: "Royal Palace Wedding" },
  { src: "/wedding/weddingvideo2.mp4", title: "Beach Ceremony" },
  { src: "/wedding/weddingvideo3.mp4", title: "Garden Wedding" },
  { src: "/wedding/weddingvideo4.mp4", title: "Heritage Venue" },
  { src: "/wedding/weddingvideo5.mp4", title: "Sunset Celebration" }
]

const testimonials = [
  {
    name: "Priya & Rahul",
    location: "Udaipur Wedding",
    quote: "Ice Wonder Holidays made our dream wedding a reality. Every detail was perfect, and our guests are still talking about it!",
    rating: 5
  },
  {
    name: "Ananya & Vikram",
    location: "Goa Beach Wedding",
    quote: "The team's attention to detail was extraordinary. They transformed our vision into something even more beautiful than we imagined.",
    rating: 5
  }
]

export default function WeddingEvents() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-foreground/5" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-8">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Premium Destination Weddings</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-tight mb-8 text-balance">
              Where Dreams
              <br />
              <span className="italic text-primary">Become Reality</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Turn your dream wedding into a magical destination experience. We specialize in creating beautifully curated weddings where every detail is planned with perfection and elegance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
                Start Planning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-base">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">Our Services</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From the moment your guests arrive to the final celebration, we take care of everything—so you can focus on making memories that last a lifetime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group p-8 bg-background border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm uppercase tracking-widest text-primary font-medium">Why Choose Us</span>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-8 text-balance">
                Your Perfect Day, <br />Our Promise
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Consultation
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                  <Heart className="h-24 w-24 text-primary/30" />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl bg-primary/10 -z-10" />
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-accent/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">Dream Destinations</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
              Your Dream Wedding, Anywhere
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you envision a beachside ceremony, a royal palace wedding, or a serene hill destination, Ice Wonder Holidays brings your dream wedding to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Beach Destinations", desc: "Goa, Maldives, Kerala", icon: "🏖️" },
              { name: "Royal Palaces", desc: "Udaipur, Jaipur, Jodhpur", icon: "🏰" },
              { name: "Hill Stations", desc: "Shimla, Mussoorie, Jim Corbett", icon: "🏔️" }
            ].map((destination, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden aspect-[4/3] border-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/50 transition-colors" />
                <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                  <span className="text-4xl mb-4">{destination.icon}</span>
                  <h3 className="font-serif text-2xl font-semibold text-background mb-2">
                    {destination.name}
                  </h3>
                  <div className="flex items-center gap-2 text-background/80">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{destination.desc}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">Our Work</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
              Wedding Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of stunning destination weddings we&apos;ve had the privilege to create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">Cinematic Moments</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
              Wedding Films
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch the magic unfold in our beautifully captured wedding films.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.slice(0, 3).map((video, index) => (
              <div 
                key={index}
                className="group relative aspect-video rounded-xl overflow-hidden bg-muted"
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  onClick={() => setActiveVideo(activeVideo === index ? null : index)}
                  controls={activeVideo === index}
                  playsInline
                />
                {activeVideo !== index && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-foreground/30 cursor-pointer"
                    onClick={() => setActiveVideo(index)}
                  >
                    <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="text-background font-medium">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {videos.slice(3).map((video, index) => (
              <div 
                key={index + 3}
                className="group relative aspect-video rounded-xl overflow-hidden bg-muted"
              >
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  onClick={() => setActiveVideo(activeVideo === index + 3 ? null : index + 3)}
                  controls={activeVideo === index + 3}
                  playsInline
                />
                {activeVideo !== index + 3 && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-foreground/30 cursor-pointer"
                    onClick={() => setActiveVideo(index + 3)}
                  >
                    <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="text-background font-medium">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">Love Stories</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6">
              What Our Couples Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card border-border">
                <Quote className="h-10 w-10 text-primary/30 mb-4" />
                <p className="text-foreground italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-balance">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
            Make your wedding not just an event, but an unforgettable journey. Let&apos;s create something magical together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-base">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
