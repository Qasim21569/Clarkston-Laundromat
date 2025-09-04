"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"

const services = [
  {
    id: 1,
    name: "Self‑Serve Laundromat",
    description: "Bright, clean facility with high‑efficiency washers and dryers, seating, and free Wi‑Fi.",
    icon: "🧺",
    category: "laundry",
    priceRange: "From $2.50",
  },
  {
    id: 2,
    name: "Wash & Fold Services",
    description: "Drop off your laundry and we’ll wash, dry, and neatly fold it—ready same day in most cases.",
    icon: "👕",
    category: "laundry",
    priceRange: "$1.50/lb",
  },
  {
    id: 3,
    name: "Commercial Laundry",
    description: "Reliable linen and garment care for businesses, hospitality, and organizations of any size.",
    icon: "🏨",
    category: "laundry",
    priceRange: "Custom rates",
  },
  {
    id: 4,
    name: "Pickup & Delivery",
    description: "Convenient door‑to‑door service—schedule a pickup and get your laundry returned fresh and folded.",
    icon: "🚚",
    category: "laundry",
    priceRange: "From $15",
  },
  {
    id: 5,
    name: "Dry Cleaning",
    description: "Professional dry cleaning for suits, dresses, and specialty fabrics—handled with expert care.",
    icon: "🧥",
    category: "drycleaning",
    priceRange: "Per item",
  },
  {
    id: 6,
    name: "UPS Authorized Service Center",
    description: "Ship, drop off, and pack with confidence at our in‑store UPS Authorized Service Center.",
    icon: "📦",
    category: "ups",
    priceRange: "UPS rates",
  },
  {
    id: 7,
    name: "Private Mailboxes",
    description: "Secure street‑address mailboxes with notifications and optional mail forwarding.",
    icon: "📬",
    category: "business",
    priceRange: "From $25/mo",
  },
  {
    id: 8,
    name: "Amazon Lockers",
    description: "Pick up Amazon packages on your schedule—fast, secure, and convenient.",
    icon: "📱",
    category: "business",
    priceRange: "Free",
  },
  {
    id: 9,
    name: "Document Shredding",
    description: "On‑site, secure shredding for personal and business documents—by the box or by the pound.",
    icon: "🗂️",
    category: "business",
    priceRange: "$1/lb",
  },
  {
    id: 10,
    name: "ATM",
    description: "In‑store ATM for quick cash access while you shop or do laundry.",
    icon: "💳",
    category: "business",
    priceRange: "Standard fees",
  },
]

export function ServicesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const filteredServices =
    selectedCategory === "all" ? services : services.filter((service) => service.category === selectedCategory)

  const toggleCard = (serviceId: number) => {
    setExpandedCards(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const categories = [
    { id: "all", name: "All" },
    { id: "laundry", name: "Laundromat" },
    { id: "drycleaning", name: "Dry Cleaning" },
    { id: "ups", name: "UPS" },
    { id: "business", name: "Business" },
  ]

  return (
    <section className="pt-16 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl text-foreground mb-4">All Your Needs Under One Roof</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From Laundromat and dry cleaning to shipping and shreds, we are your one-stop laundry and shipping solution in Clarkston, Georgia.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 text-base sm:text-lg">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full px-7 py-3.5 bg-[#ebc66d] text-black text-lg font-semibold border border-[#ebc66d] hover:bg-[#ebc66d] active:bg-[#ebc66d] focus:bg-[#ebc66d] hover:text-black active:text-black focus:text-black focus-visible:ring-0"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <Card
              key={service.id}
              className="service-card group p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-border hover:border-primary/20 bg-white/90"
            >
              <div className="flex items-start mb-4">
                <div className="service-icon w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>

              <div className="mt-4 pt-4 flex items-center justify-between border-t border-border/70">
                <span className="text-sm font-semibold text-primary">{service.priceRange}</span>
                <Button variant="ghost" size="sm" className="text-[#ebc66d] hover:text-[#ebc66d]/80">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Services Accordion - Mobile */}
        <div className="md:hidden space-y-3">
          <div className="text-center mb-4">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <span>👇</span>
              Tap any service to read more details
            </p>
          </div>
          {filteredServices.map((service) => {
            const isExpanded = expandedCards.includes(service.id)
            return (
              <Card
                key={service.id}
                className="service-accordion bg-white/90 border border-border overflow-hidden transition-all duration-300"
              >
                {/* Collapsed Header */}
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => toggleCard(service.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="service-icon w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-xl">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-base text-foreground">
                        {service.name}
                      </h3>
                      <span className="text-sm font-medium text-primary">{service.priceRange}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUpIcon className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-4 pb-4 space-y-3 border-t border-border/50">
                    <p className="text-muted-foreground text-sm leading-relaxed pt-3">
                      {service.description}
                    </p>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm" className="text-[#ebc66d] hover:text-[#ebc66d]/80">
                        Learn More
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
