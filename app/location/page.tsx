import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon, HeartIcon, ShieldCheckIcon, UsersIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-texture-paper" style={{backgroundColor: '#94adb4'}}>
      <Navigation />

      {/* Location & About */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-foreground mb-4 sm:mb-6">Visit Clarkstons Laundry & Shipping Centre</h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">Conveniently located on Brockett Road with ample parking, modern equipment and a comfortable environment for all your service needs.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="bg-muted rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.8!2d-84.1397!3d33.8097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ4JzM1LjAiTiA4NMKwMDgnMjMuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clarkston Laundry and Shipping Location"
              />
            </div>

            {/* Location Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-primary" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">
                    1295 Brocket Road, Suite A
                    <br />
                    Clarkston, GA 30021
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-primary" />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Daily</span><span>7:00 AM - 12:00 AM</span></div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PhoneIcon className="w-5 h-5 text-primary" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-muted-foreground" />
                    <a href="tel:+14045551234" className="text-primary hover:underline">
                      (404) 555-1234
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="w-4 h-4 text-muted-foreground" />
                    <a href="mailto:info@clarksonlaundry.com" className="text-primary hover:underline">
                      info@clarksonlaundry.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* About content merged (creative, clean) */}
          <div className="max-w-7xl mx-auto mt-16">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Story Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white/60 shadow-sm border border-white/40 p-6 sm:p-8 backdrop-blur-sm">
                <div className="absolute -top-16 -right-16 w-56 h-56 sm:w-72 sm:h-72 bg-[#ebc66d]/20 rounded-full blur-3xl" />
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We opened our doors this month with a clear goal: make laundry, dry cleaning, and shipping simple in Clarkston—under one friendly roof.</p>
                <p className="text-muted-foreground leading-relaxed mb-4">Everything here is fresh and thoughtfully set up: clean space, modern machines, and helpful staff ready to get you in and out quickly.</p>
                <p className="text-muted-foreground leading-relaxed">We’re new, but we’re experienced—focused on great service, fair pricing, and a place you’ll actually enjoy visiting.</p>
              </div>
              {/* Visual Card replacing icons beside story */}
              <div className="relative overflow-hidden rounded-2xl bg-white/60 shadow-sm border border-white/40">
                <Image src="/modern-laundromat.png" alt="Clarkston storefront" width={1200} height={900} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Values Icons Grid moved below story */}
          <div className="max-w-7xl mx-auto mt-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <HeartIcon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Community First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">We're proud to serve our Clarkston neighbors and contribute to our local community.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ShieldCheckIcon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Quality Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Modern equipment, eco-friendly products, and meticulous attention to detail in everything we do.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ClockIcon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Convenience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Extended hours, multiple services, and flexible options to fit your busy schedule.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <UsersIcon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Trusted Partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Building lasting relationships through reliable service and genuine care for our customers.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Gallery */}
          <div className="max-w-7xl mx-auto mt-10 sm:mt-12">
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-2xl font-semibold text-foreground">Gallery</h2>
              <span className="text-sm text-muted-foreground">Snapshots from our space</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {["/modern-laundromat.png","/modern-laundromat.png","/modern-laundromat.png","/modern-laundromat.png","/modern-laundromat.png","/modern-laundromat.png"].map((src, idx) => (
                <div key={idx} className={`relative overflow-hidden rounded-2xl border border-white/50 bg-white/40 ${idx % 5 === 0 ? 'md:col-span-2' : ''}`}>
                  <Image src={src} alt={`Gallery ${idx+1}`} width={800} height={600} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
