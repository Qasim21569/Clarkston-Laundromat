import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DCQuickCards } from '@/components/dc-quick-cards'
import { CheckIcon, SparklesIcon, StarIcon, ClockIcon, TruckIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Professional Dry Cleaning & Garment Care | Clarkston Laundry & Shipping Centre',
  description: 'Expert dry cleaning services in Clarkston, GA. Specialty garment care, wedding gown preservation, leather & suede cleaning, and professional alterations.',
}

export default function DryCleaningPage() {
  return (
    <main className="min-h-screen bg-texture-paper" style={{backgroundColor: '#94adb4'}}>
      <Navigation />

      {/* Hero Section - Professional & Clean */}
      <section className="py-10 md:py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100/50 p-8 md:p-12 max-w-4xl mx-auto text-center relative">
            {/* Decorative glows */}
            <div className="absolute -top-16 -right-16 w-56 h-56 sm:w-72 sm:h-72 bg-[#ebc66d]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 mb-4">
              <SparklesIcon className="w-4 h-4" />
              Professional Garment Care Specialists
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
              Expert Dry Cleaning & Garment Care
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From everyday garments to luxury items, wedding gowns, and leather goods - we provide professional dry cleaning with expert stain treatment and delicate fabric care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold px-8 py-3">
                Drop Off Today
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-3">
                Request Pickup
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CheckIcon className="w-4 h-4 text-blue-600" /> Delicate Fabrics Safe</span>
              <span className="flex items-center gap-1"><CheckIcon className="w-4 h-4 text-blue-600" /> Expert Stain Treatment</span>
              <span className="flex items-center gap-1"><CheckIcon className="w-4 h-4 text-blue-600" /> Same-Day Available</span>
              <span className="flex items-center gap-1"><CheckIcon className="w-4 h-4 text-blue-600" /> Wedding Gown Specialists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Service Cards (Interactive) */}
      <DCQuickCards />

      {/* Core Services - Centered Focus */}
      <section className="py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#12273B] mb-2">
                Professional Dry Cleaning Services
              </h2>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-28 rounded-full bg-[#ebc66d]/70 blur-[1px]"></span>
            </div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              From everyday garments to specialty items, we provide expert care with professional pressing and stain treatment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Drop-off Services */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Image src="/dry-clean-page/everyday-wear.png" alt="Drop-off dry cleaning" width={80} height={80} className="w-20 h-20 object-contain" />
                <h3 className="text-2xl font-heading font-bold text-[#12273B]">Drop-Off Dry Cleaning</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Bring your items to our facility for professional cleaning. Standard turnaround is 2-3 business days, with same-day service available for urgent items.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Shirts, suits, dresses & everyday wear</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Professional pressing included</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Expert stain treatment</span>
                </li>
              </ul>
              <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                Drop Off Today
              </Button>
            </Card>

            {/* Pickup & Delivery */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Image src="/dry-clean-page/pickup-dry-clean.png" alt="Pickup and delivery" width={80} height={80} className="w-20 h-20 object-contain" />
                <h3 className="text-2xl font-heading font-bold text-[#12273B]">Pickup & Delivery</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Convenient door-to-door service for your dry cleaning needs. Schedule online or call to arrange pickup and delivery times that work for you.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Scheduled pickup times</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Next-day delivery available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Contactless service options</span>
                </li>
              </ul>
              <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                Schedule Pickup
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Rugs & Carpets */}
      <section className="py-10 md:py-14 bg-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl border border-gray-100/50 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Image src="/dry-clean-page/rug.png" alt="Rug cleaning" width={80} height={80} className="w-20 h-20 object-contain" />
                  <h3 className="text-3xl font-heading font-bold text-[#12273B]">Rugs & Carpet Cleaning</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Professional cleaning for area rugs, Persian rugs, and carpets. We handle delicate fibers and intricate patterns with specialized care techniques.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">All rug types: Persian, Oriental, synthetic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pet stain & odor removal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pickup & delivery for large items</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                  Get Rug Quote
                </Button>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-500 text-sm">[ Rug Cleaning Process Image ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Trusted Partnership Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#12273B] mb-2">
                Trusted Partnership Services
              </h2>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-32 rounded-full bg-[#ebc66d]/70 blur-[1px]"></span>
            </div>
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
              We've partnered with industry leaders to bring you specialized services for your most valued items
            </p>
          </div>

          {/* Wedding Gown Preservation - Feature Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-purple-100/50 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image src="/dry-clean-page/wedding-gown.png" alt="Wedding gown preservation" width={80} height={80} className="w-20 h-20 object-contain" />
                    <div>
                      <h3 className="text-3xl font-heading font-bold text-[#12273B] mb-1">Wedding Gown Preservation</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-purple-600 font-semibold">PARTNERED WITH</span>
                        <Image src="/partnered/partner3.jpg" alt="Wedding Gown Preservation Co." width={120} height={40} className="h-6 w-auto object-contain" />
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Preserve your precious wedding memories with museum-quality preservation techniques. Our certified specialists ensure your gown remains beautiful for generations.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Museum-quality preservation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Acid-free preservation boxes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Expert stain removal first</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Lifetime guarantee</span>
                    </div>
                  </div>
                  <Button size="lg" className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                    Preserve My Gown
                  </Button>
                </div>
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-white to-purple-50 rounded-2xl border border-purple-100 flex items-center justify-center">
                    <span className="text-purple-400 text-sm">[ Wedding Gown Preservation Process Image ]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cobbler Direct Partnership */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl border border-orange-100/50 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="w-full h-80 bg-gradient-to-br from-white to-orange-50 rounded-2xl border border-orange-100 flex items-center justify-center">
                  <span className="text-orange-400 text-sm">[ Leather Repair Craftsmanship Image ]</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <Image src="/dry-clean-page/cobbler.png" alt="Leather repair services" width={80} height={80} className="w-20 h-20 object-contain" />
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-[#12273B] mb-1">Shoe, Belt & Purse Repair</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-orange-600 font-semibold">PARTNERED WITH</span>
                      <Image src="/partnered/partner1.jpg" alt="Cobbler Direct" width={120} height={40} className="h-6 w-auto object-contain" />
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Expert craftsmanship for your leather goods. From shoes to handbags, our certified specialists restore and repair with attention to detail and quality materials.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Expert shoe repair & resoling</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Belt repair & restoration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Purse & handbag restoration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">Leather cleaning & conditioning</span>
                  </div>
                </div>
                <Button size="lg" className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                  Repair My Items
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#12273B] mb-2">
                Frequently Asked Questions
              </h2>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-32 rounded-full bg-[#ebc66d]/70 blur-[1px]"></span>
            </div>
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
              Get answers to common questions about our dry cleaning services
            </p>
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">What is your typical turnaround time?</h3>
              <p className="text-gray-600 text-sm">Standard dry cleaning is ready in 2-3 business days. Same-day service is available for urgent items (drop off by 9 AM). Specialty items may take 5-7 days.</p>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Can you remove all types of stains?</h3>
              <p className="text-gray-600 text-sm">While we have expertise in treating most stains, some older or set-in stains may be permanent. We&apos;ll always assess and let you know the likelihood of successful removal before proceeding.</p>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">How do you handle delicate or designer items?</h3>
              <p className="text-gray-600 text-sm">Delicate and designer items receive special attention with hand-cleaning processes, appropriate solvents, and careful handling throughout. We&apos;re experienced with high-end fabrics and construction.</p>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Do you provide wedding gown preservation?</h3>
              <p className="text-gray-600 text-sm">Yes! Through our partnership with Wedding Gown Preservation Co., we offer museum-quality preservation with acid-free materials and lifetime guarantees.</p>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Can you clean leather and suede items?</h3>
              <p className="text-gray-600 text-sm">Through our partnership with Cobbler Direct, we provide expert leather and suede cleaning, restoration, and repair services for shoes, bags, belts, and garments.</p>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer eco-friendly cleaning options?</h3>
              <p className="text-gray-600 text-sm">Yes, we offer environmentally conscious cleaning methods using biodegradable solvents and energy-efficient processes that are gentle on both your clothes and the environment.</p>
            </Card>
          </div>
        </div>
      </section>

      

      {/* Cross-sell to Other Services */}
      <section className="py-8 bg-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Complete Your Service Needs
            </h2>
            <p className="text-white/80">
              We&apos;re your one-stop solution for laundry, shipping, and business services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/laundry" className="group">
              <Card className="p-6 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 border border-gray-100/50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-6 h-6 bg-blue-600 rounded-sm" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Laundry Services
                    </h3>
                    <p className="text-sm text-gray-600">Self-service, wash & fold, pickup & delivery</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/shipping" className="group">
              <Card className="p-6 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 border border-gray-100/50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-6 h-6 bg-orange-600 rounded-sm" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      UPS Authorized Service Center
                    </h3>
                    <p className="text-sm text-gray-600">Shipping, receiving, printing & business solutions</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
