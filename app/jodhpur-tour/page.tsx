import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JodhpurAttractions } from "@/components/jodhpur-attractions"
import { JodhpurPackages } from "@/components/jodhpur-packages"
import { Button } from "@/components/ui/button"

export default function JodhpurTourPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px]">
          <img
            src="/jodhpur-mehrangarh-fort.png"
            alt="Jodhpur Mehrangarh Fort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-balance">Discover the Blue City</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8 text-pretty">
              Experience the royal heritage, majestic forts, and vibrant culture of Jodhpur, Rajasthan
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                View Tour Packages
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/20"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </section>

        {/* About Jodhpur */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Welcome to Jodhpur</h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
                Jodhpur, known as the Blue City, is the second-largest city in Rajasthan. Founded in 1459 by Rao Jodha,
                this magnificent city is home to the mighty Mehrangarh Fort, stunning palaces, and azure-blue houses
                that paint the old city's landscape.
              </p>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Experience the perfect blend of history, culture, and adventure with camel safaris, traditional cuisine,
                and warm Rajasthani hospitality.
              </p>
            </div>
          </div>
        </section>

        <JodhpurAttractions />
        <JodhpurPackages />
      </main>
      <Footer />
    </div>
  )
}
