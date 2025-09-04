import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
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

      {/* Quick Access Service Cards */}
      <section className="py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Card className="p-4 md:p-6 bg-white/90 hover:bg-white/95 transition-all duration-300 group cursor-pointer border border-gray-100/50 rounded-xl">
              <div className="flex flex-col items-start h-full">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <SparklesIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Everyday Wear</h3>
                  <p className="text-xs md:text-sm text-gray-600">Shirts, suits, dresses</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 bg-white/90 hover:bg-white/95 transition-all duration-300 group cursor-pointer border border-gray-100/50 rounded-xl">
              <div className="flex flex-col items-start h-full">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <StarIcon className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Specialty & Formal</h3>
                  <p className="text-xs md:text-sm text-gray-600">Gowns, tuxedos, silk</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 bg-white/90 hover:bg-white/95 transition-all duration-300 group cursor-pointer border border-gray-100/50 rounded-xl">
              <div className="flex flex-col items-start h-full">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-50 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <StarIcon className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Household Items</h3>
                  <p className="text-xs md:text-sm text-gray-600">Comforters, drapes</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 bg-white/90 hover:bg-white/95 transition-all duration-300 group cursor-pointer border border-gray-100/50 rounded-xl">
              <div className="flex flex-col items-start h-full">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <SparklesIcon className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1">Alterations & Repairs</h3>
                  <p className="text-xs md:text-sm text-gray-600">Hems, buttons, tailoring</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Complete Dry Cleaning Services
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Professional care for all your garments, from everyday items to luxury pieces and specialty services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Standard Dry Cleaning */}
            <Card className="p-6 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-2xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <SparklesIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900">Standard Dry Cleaning</h3>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Shirts, blouses, trousers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Business suits & jackets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Everyday dresses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Professional pressing included</span>
                </li>
              </ul>
              <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                Get Quote
              </Button>
            </Card>

            {/* Specialty & Formal */}
            <Card className="p-6 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-2xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                  <StarIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900">Specialty & Formal</h3>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Wedding & evening gowns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Tuxedos & formal wear</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Silk, cashmere, wool</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Beaded & embellished items</span>
                </li>
              </ul>
              <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                Learn More
              </Button>
            </Card>

            {/* Household Items */}
            <Card className="p-6 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-2xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <StarIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900">Household & Bulk</h3>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Comforters & bedspreads</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Curtains & drapes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Area rugs & carpets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Upholstery cleaning</span>
                </li>
              </ul>
              <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                Schedule Pickup
              </Button>
            </Card>

            {/* Alterations & Repairs */}
            <Card className="p-6 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-2xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                  <SparklesIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900">Alterations & Repairs</h3>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Hemming & tailoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Button & zipper repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Seam repairs & patches</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Custom fitting services</span>
                </li>
              </ul>
              <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                Book Consultation
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How Our Dry Cleaning Works - 3 Column Process Flow */}
      <section className="py-10 md:py-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              How Our Professional Dry Cleaning Works
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our expert process ensures your garments receive the precise care they deserve
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100/50 p-8 md:p-12 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
            
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
              {/* Drop Off/Pickup Column */}
              <div className="h-full flex flex-col group transition-all duration-300 delay-75">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 mb-6 flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 p-6 mb-4">
                    <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center">
                      <SparklesIcon className="w-16 h-16 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900">Drop Off / Request Pickup</h3>
                </div>

                <div className="flex-grow space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 text-blue-600 font-bold text-lg">1</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Convenient Drop-Off</h4>
                      <p className="text-sm text-gray-600">Bring items to our facility or schedule pickup</p>
                    </div>
                  </div>
                  <div className="w-px h-4 bg-gray-300 mx-7" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 text-blue-600 font-bold text-lg">2</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Initial Assessment</h4>
                      <p className="text-sm text-gray-600">We examine each garment for stains and fabric type</p>
                    </div>
                  </div>
                  <div className="w-px h-4 bg-gray-300 mx-7" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 text-blue-600 font-bold text-lg">3</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Service Selection</h4>
                      <p className="text-sm text-gray-600">Choose standard, rush, or specialty treatments</p>
                    </div>
                  </div>
                  <div className="w-px h-4 bg-gray-300 mx-7" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 text-blue-600 font-bold text-lg">4</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Receipt & Tracking</h4>
                      <p className="text-sm text-gray-600">Get your receipt with pickup date and tracking info</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                    Drop Off Today
                  </Button>
                </div>
              </div>

              {/* Professional Cleaning Column */}
              <div className="h-full flex flex-col group transition-all duration-300 delay-150">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 mb-6 flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 p-6 mb-4">
                    <div className="w-full h-full bg-purple-100 rounded-full flex items-center justify-center">
                      <SparklesIcon className="w-16 h-16 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900">Expert Cleaning Process</h3>
                </div>

                <div className="flex-grow space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 text-purple-600 font-bold text-lg">1</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Pre-Treatment</h4>
                      <p className="text-sm text-gray-600">Stain treatment and fabric preparation</p>
                    </div>
                  </div>
                  <div className="w-px h-4 bg-gray-300 mx-7" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 text-purple-600 font-bold text-lg">2</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Solvent Selection</h4>
                      <p className="text-sm text-gray-600">Choose appropriate cleaning method for each fabric</p>
                    </div>
                  </div>
                  <div className="w-px h-4 bg-gray-300 mx-7" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 text-purple-600 font-bold text-lg">3</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Professional Cleaning</h4>
                      <p className="text-sm text-gray-600">Gentle yet thorough cleaning process</p>
                    </div>
                  </div>
                  <div className="w-px h-4 bg-gray-300 mx-7" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 text-purple-600 font-bold text-lg">4</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quality Inspection</h4>
                      <p className="text-sm text-gray-600">Thorough check for cleaning quality and care</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                    Learn About Process
                  </Button>
                </div>
              </div>

              {/* Finishing & Pickup Column */}
              <div className="h-full flex flex-col group transition-all duration-300 delay-200">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 mb-6 flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 p-6 mb-4">
                    <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-16 h-16 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900">Finishing & Ready</h3>
                </div>

                <div className="flex-grow space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 text-green-600 font-bold text-lg">1</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Professional Pressing</h4>
                      <p className="text-sm text-gray-600">Expert pressing and steam finishing</p>
                    </div>
                  </div>
                  <div className="w-px h-4 bg-gray-300 mx-7" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 text-green-600 font-bold text-lg">2</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Careful Packaging</h4>
                      <p className="text-sm text-gray-600">Protective garment bags and proper hanging</p>
                    </div>
                  </div>
                  <div className="w-px h-4 bg-gray-300 mx-7" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 text-green-600 font-bold text-lg">3</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Ready Notification</h4>
                      <p className="text-sm text-gray-600">Text or call when your order is ready</p>
                    </div>
                  </div>
                  <div className="w-px h-4 bg-gray-300 mx-7" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gray-50 border border-gray-200/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 text-green-600 font-bold text-lg">4</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Pickup or Delivery</h4>
                      <p className="text-sm text-gray-600">Convenient pickup or delivery to your location</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                    Schedule Pickup
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Partner Services */}
      <section className="py-10 md:py-14 bg-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Specialty Partner Services
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Expert care for your most valuable items through our trusted partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Wedding Gown Preservation */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center">
                  <StarIcon className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">Wedding Gown Preservation</h3>
                  <p className="text-sm text-purple-600 font-medium">Partnered with Wedding Gown Preservation Co.</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Museum-quality preservation methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Acid-free preservation boxes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Expert stain removal before preservation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lifetime preservation guarantee</span>
                </li>
              </ul>
              <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                Preserve My Gown
              </Button>
            </Card>

            {/* Shoe, Belt & Purse Repair */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center">
                  <SparklesIcon className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">Leather & Accessory Repair</h3>
                  <p className="text-sm text-orange-600 font-medium">Partnered with Cobbler Direct</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Expert shoe repair & resoling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Belt repair & restoration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Purse & handbag restoration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Leather cleaning & conditioning</span>
                </li>
              </ul>
              <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                Repair My Items
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Fabric & Stain Care Guide */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Expert Fabric & Stain Care
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We specialize in caring for delicate fabrics and treating challenging stains
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Fabric Expertise */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Fabric Specialties</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Silk</div>
                <div className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Wool</div>
                <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Cashmere</div>
                <div className="bg-orange-50 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Linen</div>
                <div className="bg-pink-50 text-pink-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Beaded</div>
                <div className="bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center">Leather</div>
              </div>
              <p className="text-gray-600 mb-6">
                Our expert team understands the unique care requirements of each fabric type, ensuring your garments receive the appropriate treatment they deserve.
              </p>
              <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                Ask About Your Fabric
              </Button>
            </Card>

            {/* Stain Treatment */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm border border-gray-100/50 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Stain Treatment Expertise</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Wine & Food Stains</h4>
                    <p className="text-sm text-gray-600">Specialized treatment for organic stains</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Oil & Grease</h4>
                    <p className="text-sm text-gray-600">Advanced degreasing techniques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-pink-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Makeup & Cosmetics</h4>
                    <p className="text-sm text-gray-600">Gentle removal without fabric damage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ink & Dye Stains</h4>
                    <p className="text-sm text-gray-600">Professional-grade stain removal</p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-amber-800">
                  <strong>Pro Tip:</strong> Never rub stains! Blot gently and bring to us as soon as possible for best results.
                </p>
              </div>
              <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold">
                Stain Treatment Quote
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-14 bg-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/80">
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

      {/* Clean Care Promise */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100/50 p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 mb-6">
                <StarIcon className="w-4 h-4" />
                Our Promise to You
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Professional Care Guarantee
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Quality Guarantee</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Fresh, clean garments every time
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Color-fast testing for delicate items
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Professional pressing included
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Satisfaction guarantee or re-clean free
                    </li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Care Promise</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Gentle handling of all garments
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Environmentally conscious processes
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Expert stain treatment consultation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Transparent pricing, no hidden fees
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold px-8 py-3">
                  Start Your Order
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-3">
                  Visit Our Facility
                </Button>
              </div>
            </div>
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
