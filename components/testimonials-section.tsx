"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@heroicons/react/24/solid"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Clarkston, GA",
    rating: 5,
    text: "The convenience of having laundry, shipping, and a mailbox all in one place is incredible. The facility is always clean and the staff is so helpful!",
    service: "Multiple Services",
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Stone Mountain, GA",
    rating: 5,
    text: "Their pickup and delivery service has been a game-changer for my busy schedule. Professional, reliable, and my clothes always come back perfect.",
    service: "Pickup & Delivery",
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    location: "Decatur, GA",
    rating: 5,
    text: "I love the modern equipment and comfortable atmosphere. It's not like other laundromats - this place actually feels welcoming and clean.",
    service: "Self-Service Laundromat",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Clarkston, GA",
    rating: 5,
    text: "The UPS services here are so convenient. No more driving across town - I can ship packages while doing my laundry. Brilliant concept!",
    service: "UPS Shipping",
  },
]

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const visibleDesktop = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="font-heading font-bold text-4xl text-[#12273B] mb-2">What Our Customers Say</h2>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-28 rounded-full bg-[#ebc66d]/70 blur-[1px]"></span>
          </div>
          <p className="text-xl text-muted-foreground mt-4">Real experiences from our valued customers in the Clarkston community</p>
        </div>

        {/* Desktop/Tablet: 3 up */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleDesktop.map((t) => (
            <Card key={t.id} className="p-8 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg text-foreground leading-relaxed mb-6 font-accent">"{t.text}"</blockquote>
              <div className="font-semibold text-foreground">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.location} • {t.service}</div>
            </Card>
          ))}
        </div>

        {/* Mobile: 1-up swipeable carousel */}
        <div className="md:hidden">
          <Card className="p-6 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[index].rating)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg text-foreground leading-relaxed mb-4 font-accent">"{testimonials[index].text}"</blockquote>
            <div className="font-semibold text-foreground">{testimonials[index].name}</div>
            <div className="text-sm text-muted-foreground">{testimonials[index].location} • {testimonials[index].service}</div>

            <div className="flex items-center justify-between mt-6">
              <button aria-label="Previous" onClick={prev} className="p-2"> <ChevronLeftIcon className="w-5 h-5"/> </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <span key={i} className={`w-2 h-2 rounded-full ${i===index? 'bg-primary' : 'bg-border'}`}/>
                ))}
              </div>
              <button aria-label="Next" onClick={next} className="p-2"> <ChevronRightIcon className="w-5 h-5"/> </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
