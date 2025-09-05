"use client"

import { useEffect, useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const faqs = [
    {
      q: "What are your operating hours?",
      a: "We're open daily from 7:00 AM to 12:00 AM (midnight). Holiday hours may vary and will be posted in-store and online.",
    },
    {
      q: "Do you offer pickup and delivery?",
      a: "Yes! We provide convenient pickup and delivery for wash & fold services. Schedule online or give us a call to arrange a time that works for you.",
    },
    {
      q: "How does wash & fold pricing work?",
      a: "Wash & fold is priced by the pound with a small order minimum. Large items like comforters and blankets are priced per item for fair pricing.",
    },
    {
      q: "Do you handle dry cleaning?",
      a: "Absolutely! We offer professional dry cleaning for garments and specialty items. Turnaround time typically ranges from 2–3 business days.",
    },
    {
      q: "What shipping services do you provide?",
      a: "As a UPS Authorized Service Center, we handle all your shipping needs including packaging, labeling, and tracking. We also offer Amazon returns and private mailbox services.",
    },
    {
      q: "Do you offer commercial laundry services?",
      a: "Yes, we provide commercial laundry services for businesses, gyms, salons, and other establishments. Contact us for volume pricing and pickup schedules.",
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-texture-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Heading + FAQ List */}
          <div className="lg:col-span-7">
            <div className="mb-10 sm:mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#12273B] leading-tight mb-2">
                Frequently Asked
              </h2>
              <div className="relative inline-block">
                <h3 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#12273B]">Questions</h3>
                <span className="absolute -bottom-2 left-2 right-2 h-3 rounded-full bg-[#ebc66d]/60 blur-[1px]"></span>
              </div>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
                Got questions about our services? We've got answers. Find everything you need to know about our laundry, dry cleaning, and shipping services.
              </p>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 rounded-2xl border border-white/20 bg-white/80 backdrop-blur-sm shadow-lg">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-200/50 last:border-b-0">
                    <AccordionTrigger className="text-left text-lg sm:text-xl text-foreground py-6 px-6 sm:px-8 hover:no-underline group">
                      <span className="flex-1 font-medium">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed px-6 sm:px-8 pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="lg:col-span-5">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 sticky top-8">
              <div className="rounded-3xl border border-white/30 bg-white/90 backdrop-blur-sm p-8 sm:p-10 shadow-xl">
                <h4 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Need Commercial Services?
                </h4>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  We offer special rates for commercial clients like gyms, salons, and restaurants. Let's discuss your business needs.
                </p>
                <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold px-6 py-4 text-lg rounded-xl transition-all duration-200 hover:shadow-lg">
                  Get Commercial Pricing
                </Button>
                
                <div className="mt-6 pt-6 border-t border-gray-200/50">
                  <h5 className="font-semibold text-foreground mb-3 text-lg">Quick Contact</h5>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📞 <a href="tel:+12484252777" className="hover:text-foreground transition-colors">(248) 425-2777</a></p>
                    <p>📧 <a href="mailto:info@clarkstonlaundry.com" className="hover:text-foreground transition-colors">info@clarkstonlaundry.com</a></p>
                    <p>⏰ Open 7AM - 12AM Daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
