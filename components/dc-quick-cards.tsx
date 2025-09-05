"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type QuickCard = {
  id: string
  title: string
  subtitle: string
  imageSrc: string
  details: string
}

const QUICK_CARDS: QuickCard[] = [
  {
    id: "everyday",
    title: "Everyday Wear",
    subtitle: "Shirts, suits, dresses",
    imageSrc: "/dry-clean-page/everyday-wear.png",
    details:
      "Crisp pressing and careful cleaning for daily garments. Ideal for office wear, school uniforms, and casual favorites.",
  },
  {
    id: "specialty",
    title: "Specialty & Formal",
    subtitle: "Gowns, tuxedos, silk",
    imageSrc: "/dry-clean-page/specialty.png",
    details:
      "Delicate fabric expertise for silk, cashmere, and embellished pieces. Wedding/event attire handled with extra care.",
  },
  {
    id: "household",
    title: "Household Items",
    subtitle: "Comforters, drapes",
    imageSrc: "/dry-clean-page/household-items.png",
    details:
      "Oversized items professionally cleaned: bedspreads, duvet inserts, curtains, and more. Freshness at scale.",
  },
  {
    id: "alterations",
    title: "Alterations & Repairs",
    subtitle: "Hems, buttons, tailoring",
    imageSrc: "/dry-clean-page/alterations.png",
    details:
      "Perfect fits made simple. Hemming, tapering, button and zipper repair, and small restorations handled in‑house.",
  },
]

export function DCQuickCards() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  return (
    <section className="py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {QUICK_CARDS.map((c) => {
            return (
              <Card
                key={c.id}
                className="p-4 md:p-6 bg-white/90 hover:bg-white/95 transition-all duration-300 group cursor-pointer border border-gray-100/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ebc66d]"
                onMouseEnter={() => setHoveredId(c.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex flex-col items-start h-full">
                  <div className={`mb-3 group-hover:scale-110 transition-transform`}>
                    <Image src={c.imageSrc} alt={`${c.title} icon`} width={56} height={56} className="w-14 h-14 object-contain" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-heading font-bold text-sm md:text-base text-[#12273B] mb-1">{c.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{c.subtitle}</p>
                  </div>

                  <div
                    className={
                      "overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out " +
                      "max-h-40 opacity-100 translate-y-0 " +
                      "md:max-h-0 md:opacity-0 md:-translate-y-1 " +
                      (hoveredId === c.id ? "md:max-h-40 md:opacity-100 md:translate-y-0" : "")
                    }
                  >
                    <div className="mt-3 pt-3 border-t border-[#1C3754]/10 text-sm text-foreground/80">
                      {c.details}
                      <div className="mt-3">
                        <Button size="sm" className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}


