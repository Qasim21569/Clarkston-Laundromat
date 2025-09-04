"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-muted overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="hero-content space-y-8">
            <OpenClosedBadge />

            <div>
              <h1 className="font-heading font-bold text-5xl lg:text-6xl text-foreground leading-tight mb-3">
                Clarkston Laundry & Shipping Centre
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Your complete service destination offering a laundromat, professional dry cleaning, UPS Authorized Service Center services, and several additional business services. All the convenience you need in Clarkston, Georgia.
              </p>
            </div>

            {/* Mobile Visual above cards */}
            <div className="block lg:hidden">
              <Image
                src="/modern-laundromat.png"
                alt="Modern Clarkston Laundry facility"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl shadow-md mb-4"
              />
            </div>

            {/* Service Quick Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
              <Card className="flex flex-col items-start justify-start text-left gap-3 sm:gap-4 p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer w-full h-auto min-h-[5.5rem] sm:min-h-[7rem] rounded-xl">
                <div className="shrink-0">
                  <Image
                    src="/home-hero-laundry.png"
                    alt="Laundry services icon"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="mt-1">
                  <div className="font-semibold text-foreground">Laundry</div>
                  <div className="text-sm text-muted-foreground">Self-service & drop-off</div>
                </div>
              </Card>

              <Card className="flex flex-col items-start justify-start text-left gap-3 sm:gap-4 p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer w-full h-auto min-h-[5.5rem] sm:min-h-[7rem] rounded-xl">
                <div className="shrink-0">
                  <Image
                    src="/home-hero-dry-clean.png"
                    alt="Dry cleaning services icon"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="mt-1">
                  <div className="font-semibold text-foreground">Dry Cleaning</div>
                  <div className="text-sm text-muted-foreground">Garments & specialty care</div>
                </div>
              </Card>

              <Card className="flex flex-col items-start justify-start text-left gap-3 sm:gap-4 p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer w-full h-auto min-h-[5.5rem] sm:min-h-[7rem] rounded-xl">
                <div className="shrink-0">
                  <Image
                    src="/home-hero-shipping.png"
                    alt="Shipping services icon"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="mt-1">
                  <div className="font-semibold text-foreground">Shipping</div>
                  <div className="text-sm text-muted-foreground">UPS Authorized Service Center</div>
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start w-full">
              <Button size="lg" className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black text-base sm:text-lg w-full sm:w-auto px-7 sm:px-9 h-12 sm:h-12">
                Schedule Pickup
              </Button>
              <Button size="lg" className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black text-base sm:text-lg w-full sm:w-auto px-7 sm:px-9 h-12 sm:h-12">
                View Services
              </Button>
            </div>
          </div>

          {/* Right Visual (desktop/tablet) */}
          <div className="hero-visual relative hidden lg:block">
            <div className="relative">
              <Image
                src="/modern-laundromat.png"
                alt="Modern Clarkston Laundry facility"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OpenClosedBadge() {
  const [now, setNow] = useState<Date>(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(interval)
  }, [])

  // Convert current time to America/New_York
  const nyTime = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  )

  const hours = nyTime.getHours()
  const isOpen = hours >= 7 && hours < 24 // 7:00 - 23:59 open
  const statusText = isOpen ? "Open Now" : "Closed Now"

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-sm ${
        isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
      aria-live="polite"
    >
      <span
        className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`}
      ></span>
      {`${statusText} : 7am - 12am`}
    </div>
  )
}
