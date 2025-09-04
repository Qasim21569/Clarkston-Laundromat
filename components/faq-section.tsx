import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function FAQSection() {
  const faqs = [
    {
      q: "What are your operating hours?",
      a: "We’re open daily from 7:00 AM to 12:00 AM (midnight). Holiday hours may vary and will be posted in-store and online.",
    },
    {
      q: "Do you offer pickup and delivery?",
      a: "Yes. We provide convenient pickup and delivery for wash & fold. Schedule online or give us a call to arrange a time that works for you.",
    },
    {
      q: "How does wash & fold pricing work?",
      a: "Wash & fold is priced by the pound with a small order minimum. Large items (comforters, blankets, etc.) are priced per item.",
    },
    {
      q: "Do you handle dry cleaning?",
      a: "Yes, we offer professional dry cleaning for garments and specialty items. Turnaround time typically ranges from 2–3 business days.",
    },
   
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Heading + FAQ List */}
          <div className="lg:col-span-7">
            <div className="mb-10 sm:mb-12">
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight">
                Frequently Asked
              </h2>
              <div className="relative inline-block">
                <h3 className="font-heading font-bold text-4xl sm:text-5xl text-foreground">Questions</h3>
                <span className="absolute -bottom-2 left-2 right-2 h-3 rounded-full bg-[#bcd5ff]/80 blur-[1px]"></span>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur">
              <Accordion type="single" collapsible className="w-full divide-y divide-gray-200/70">
                {faqs.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="px-2">
                    <AccordionTrigger className="group text-left text-lg sm:text-xl text-foreground py-5 sm:py-6 px-2 sm:px-4 hover:no-underline">
                      <div className="flex items-center gap-4 w-full">
                        <span className="flex-1">{item.q}</span>
                        <span className="text-2xl font-medium group-data-[state=open]:hidden">+</span>
                        <span className="text-2xl font-medium hidden group-data-[state=open]:block">−</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed px-2 sm:px-4 pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-8">
              <div className="rounded-3xl border border-gray-200/70 bg-white/80 backdrop-blur p-8 sm:p-10 shadow-xl">
                <h4 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Are you a commercial business?
                </h4>
                <p className="text-muted-foreground mb-6 text-base">
                  We offer discounts for commercial clients like gyms and salons who visit regularly and use our machines.
                </p>
                <Button className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black font-semibold px-6 py-6 text-base rounded-xl">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 