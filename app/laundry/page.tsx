import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  CheckIcon, 
  ClockIcon, 
  SparklesIcon, 
  TruckIcon,
  BuildingOfficeIcon
} from "@heroicons/react/24/outline"

export default function LaundryPage() {
  return (
    <main className="min-h-screen bg-texture-paper" style={{backgroundColor: '#94adb4'}}>
      <Navigation />

      {/* Hero Section - Revamped */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-xl p-8 md:p-12">
            <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-[#ebc66d]/20 blur-3xl" />
            <div className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full bg-white/40 blur-3xl" />

            <div className="relative text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 border border-gray-200 text-gray-800 tracking-wide">
                Laundry • Dry Cleaning • Shipping
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mt-4 mb-4">
                Complete Laundry Solutions
              </h1>
              <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto">
                From self-service to wash & fold and doorstep delivery — everything handled with professional care and reliable turnaround.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black px-8 py-4 text-base md:text-lg">
                  Book Pickup Now
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-4 text-base md:text-lg">
                  View Services
                </Button>
              </div>

              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-700">
                <div className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-black" /> Same‑day wash & fold</div>
                <div className="hidden sm:block text-gray-300">|</div>
                <div className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-black" /> Next‑day delivery</div>
                <div className="hidden sm:block text-gray-300">|</div>
                <div className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-black" /> Open 7am–12am daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Laundry Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service that fits your lifestyle - from hands-on self-service to full-service convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Self-Service Laundromat */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <SparklesIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Self-Service Laundromat</CardTitle>
                <CardDescription>Clean, modern facility where you do everything yourself</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">High-efficiency washers & dryers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Multiple load sizes available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Card & mobile payment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Free Wi-Fi & seating area</span>
                  </li>
                </ul>
                <div className="pt-4 border-t flex justify-end">
                  <Button size="sm" variant="ghost" className="text-[#ebc66d] hover:text-[#ebc66d]/80">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Wash & Fold Service */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ClockIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Wash, Dry & Fold</CardTitle>
                <CardDescription>Drop off your laundry and we'll handle everything</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Same-day turnaround</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Professional washing & folding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Eco-friendly detergents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Neat packaging & hangers</span>
                  </li>
                </ul>
                <div className="pt-4 border-t flex justify-end">
                  <Button size="sm" variant="ghost" className="text-[#ebc66d] hover:text-[#ebc66d]/80">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pickup & Delivery */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TruckIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Pickup & Delivery</CardTitle>
                <CardDescription>Van service with next-day delivery convenience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Scheduled pickup & delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Next-day guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Text notifications & tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Contactless service available</span>
                  </li>
                </ul>
                <div className="pt-4 border-t flex justify-end">
                  <Button size="sm" variant="ghost" className="text-[#ebc66d] hover:text-[#ebc66d]/80">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Commercial Laundry */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BuildingOfficeIcon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Commercial Laundry</CardTitle>
                <CardDescription>Bulk laundry services for businesses & organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">B2B bulk services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Volume pricing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Regular pickup schedules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm">Industry-specific care</span>
                  </li>
                </ul>
                <div className="pt-4 border-t flex justify-end">
                  <Button size="sm" variant="ghost" className="text-[#ebc66d] hover:text-[#ebc66d]/80">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      

      {/* How It Works - Professional Aligned Design */}
    <section className="relative py-16 md:py-24  bg-gradient-to-br from-background to-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-gray-900 mb-6">
        How Our Services Work
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Three distinct service levels tailored to your lifestyle, designed for convenience and care.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid lg:grid-cols-3 gap-10">
      {/* Card Template */}
      {[
        {
          title: "Self-Service Laundromat",
          desc: "Complete control in our modern facility",
          img: "/how it works/self-service/Laundry and dry cleaning-rafiki (1).svg",
          steps: [
            { icon: "/how it works/self-service/step1.png", title: "Arrive & Load", desc: "Bring your laundry and choose the perfect machine size." },
            { icon: "/how it works/self-service/step2.png", title: "Select & Pay", desc: "Choose settings and pay with card, mobile, or cash." },
            { icon: "/how it works/self-service/step3.png", title: "Wait & Transfer", desc: "Relax with free Wi-Fi, then move to dryer when ready." },
            { icon: "/how it works/self-service/step4.png", title: "Collect & Go", desc: "Take your clean, dry clothes and head home." }
          ],
          cta: "Visit Our Facility"
        },
        {
          title: "Wash, Dry & Fold",
          desc: "Professional service with same-day turnaround",
          img: "/how it works/wash-and-fold/Laundry and dry cleaning-pana.svg",
          steps: [
            { icon: "/how it works/wash-and-fold/step1.png", title: "Drop Off Bag", desc: "Bring laundry with special instructions." },
            { icon: "/how it works/wash-and-fold/step2.png", title: "We Sort & Tag", desc: "Sorting by color and fabric type." },
            { icon: "/how it works/wash-and-fold/step3.png", title: "Expert Processing", desc: "Cold wash, gentle dry with premium detergents." },
            { icon: "/how it works/wash-and-fold/step4.png", title: "Same-Day Pickup", desc: "Neatly folded and packaged for collection." }
          ],
          cta: "Drop Off Today"
        },
        {
          title: "Pickup & Delivery",
          desc: "Ultimate convenience with door-to-door service",
          img: "/how it works/pickup-and-deliver/Delivery-pana.svg",
          steps: [
            { icon: "/how it works/pickup-and-deliver/step1.png", title: "Schedule Pickup", desc: "Book online or call for convenient time slot." },
            { icon: "/how it works/pickup-and-deliver/step2.png", title: "We Collect", desc: "Our van picks up from your doorstep." },
            { icon: "/how it works/pickup-and-deliver/step3.png", title: "Professional Processing", desc: "Expert wash, dry, fold at our facility." },
            { icon: "/how it works/pickup-and-deliver/step4.png", title: "Next-Day Delivery", desc: "Clean laundry delivered to your door." }
          ],
          cta: "Schedule Pickup"
        }
      ].map((service, idx) => (
        <div
          key={idx}
          className="group flex flex-col bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
        >
          {/* Header */}
          <div className="text-center px-6 pt-10 pb-6 border-b border-gray-100">
            <div className="w-28 h-28 mx-auto mb-4 p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300">
              <img src={service.img} alt={service.title} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 text-sm md:text-base mt-1">{service.desc}</p>
          </div>

          {/* Steps */}
          <div className="flex-grow px-6 py-8">
            <div className="space-y-6 relative">
              {service.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 group-hover:translate-x-1 transition-transform duration-200">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200 shadow-sm">
                    <img src={step.icon} alt={step.title} className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="px-6 pb-8">
            <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold py-3 text-base rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-xl">
              {service.cta}
            </Button>
          </div>
        </div>
      ))}
    </div>

    {/* Global CTA */}
    <div className="mt-20 text-center">
      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 p-10 md:p-14 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Experience Professional Care?
        </h3>
        <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
          Choose the service that matches your lifestyle and let us handle the rest with professional expertise.
        </p>
        <Button size="lg" className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold px-10 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-[1.04] shadow-xl hover:shadow-2xl">
          Get Started Today
        </Button>
      </div>
    </div>
  </div>
</section>


      {/* Clean Care Promise - Revamped */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/50 border border-white/40 tracking-wide text-gray-800">
              Satisfaction guaranteed
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-4">
              Clean Care Promise
            </h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
              If you're not completely satisfied, we'll rewash your order at no cost.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">What we guarantee</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-md bg-[#ebc66d]/30 flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-700">Your laundry is always kept separate — never mixed with other orders.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-md bg-[#ebc66d]/30 flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-700">Commercial-grade machines are sanitized before each use.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-md bg-[#ebc66d]/30 flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-700">We return valuables found in pockets, every time.</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">How we handle your clothes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-md bg-[#ebc66d]/30 flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-700">Cold wash and low dry, adjusted to fabric care labels.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-md bg-[#ebc66d]/30 flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-700">Premium detergents with hypoallergenic options on request.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-6 w-6 rounded-md bg-[#ebc66d]/30 flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-gray-700">Neat folding and protective packaging for easy put‑away.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold px-6 py-3">Book a Pickup</Button>
              <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50">Visit Our Facility</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-sell to Other Services */}
      <section className="py-8 bg-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Complete Your Service Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer more than just laundry - discover our full range of services
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🧥</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Dry Cleaning Services</h3>
                    <p className="text-sm text-muted-foreground mb-2">Professional garment care and specialty cleaning</p>
                    <Button size="sm" variant="ghost" className="text-[#ebc66d] hover:text-[#ebc66d]/80 p-0">
                      Explore Dry Cleaning →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📦</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">UPS Shipping Center</h3>
                    <p className="text-sm text-muted-foreground mb-2">Authorized shipping, returns, and mailbox services</p>
                    <Button size="sm" variant="ghost" className="text-[#ebc66d] hover:text-[#ebc66d]/80 p-0">
                      Explore Shipping →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
