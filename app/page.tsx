import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { LocationSection } from "@/components/location-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-texture-paper" style={{backgroundColor: '#94adb4'}}>
      <Navigation />
      <HeroSection />
      <ServicesGrid />
      <LocationSection />
      <TestimonialsSection />
      {/* Partnered With */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block relative mb-8">
            <h3 className="text-3xl sm:text-4xl font-heading font-bold text-[#12273B]">Partnered with</h3>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-24 rounded-full bg-[#ebc66d]/70 blur-[1px]"></span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-95">
            <Image src="/partnered/partner1.jpg" alt="Partner 1" width={280} height={140} className="h-16 sm:h-20 md:h-24 w-auto object-contain rounded" />
            <Image src="/partnered/partner2.jpg" alt="Partner 2" width={280} height={140} className="h-16 sm:h-20 md:h-24 w-auto object-contain rounded" />
            <Image src="/partnered/partner3.jpg" alt="Partner 3" width={280} height={140} className="h-16 sm:h-20 md:h-24 w-auto object-contain rounded" />
          </div>
        </div>
      </section>
      <FAQSection />
      <Footer />
    </main>
  )
}
