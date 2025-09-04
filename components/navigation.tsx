"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-footer.jpg"
              alt="Clarkston Laundry and Shipping"
              width={60}
              height={60}
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDownIcon className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border border-border p-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    href="/laundry"
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                      <span className="text-primary text-sm">🧺</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Laundry Services</div>
                      <div className="text-sm text-muted-foreground">Self-service, wash & fold, pickup</div>
                    </div>
                  </Link>
                  <Link
                    href="/drycleaning"
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                      <span className="text-primary text-sm">🧥</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Drycleaning Services</div>
                      <div className="text-sm text-muted-foreground">Delicates, suits, dresses, specialty care</div>
                    </div>
                  </Link>
                  <Link
                    href="/shipping"
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                      <span className="text-primary text-sm">📦</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">UPS Services</div>
                      <div className="text-sm text-muted-foreground">UPS Authorized Service Center, Amazon Lockers</div>
                    </div>
                  </Link>
                  <Link
                    href="/shipping"
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                      <span className="text-primary text-sm">🏢</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Business Services</div>
                      <div className="text-sm text-muted-foreground">Mailboxes, Document Shredding, ATM</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <span
              className="text-muted-foreground cursor-not-allowed select-none"
              title="Coming soon"
            >
              Promotions
            </span>
            <Link href="/location" className="text-foreground hover:text-primary transition-colors">
              Location
            </Link>
            
          </div>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+14045551234"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              (404) 555-1234
            </a>
            <Button className="bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black">Schedule Pickup</Button>
          </div>

          {/* Mobile Phone & Menu */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:+14045551234"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              (404) 555-1234
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary"
            >
              {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Services Section */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Services</div>
                <Link 
                  href="/laundry" 
                  className="flex items-start gap-3 text-foreground hover:text-primary transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs">🧺</span>
                  </div>
                  <div>
                    <div className="font-medium">Laundry Services</div>
                    <div className="text-xs text-muted-foreground">Self-service, wash & fold, pickup</div>
                  </div>
                </Link>
                <Link 
                  href="/drycleaning" 
                  className="flex items-start gap-3 text-foreground hover:text-primary transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs">🧥</span>
                  </div>
                  <div>
                    <div className="font-medium">Drycleaning Services</div>
                    <div className="text-xs text-muted-foreground">Delicates, suits, dresses, specialty care</div>
                  </div>
                </Link>
                <Link 
                  href="/shipping" 
                  className="flex items-start gap-3 text-foreground hover:text-primary transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs">📦</span>
                  </div>
                  <div>
                    <div className="font-medium">UPS Services</div>
                    <div className="text-xs text-muted-foreground">UPS Authorized Service Center, Amazon Lockers</div>
                  </div>
                </Link>
                <Link 
                  href="/shipping" 
                  className="flex items-start gap-3 text-foreground hover:text-primary transition-colors pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs">🏢</span>
                  </div>
                  <div>
                    <div className="font-medium">Business Services</div>
                    <div className="text-xs text-muted-foreground">Mailboxes, Document Shredding, ATM</div>
                  </div>
                </Link>
              </div>
              
              <Link 
                href="/pricing" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="text-muted-foreground cursor-not-allowed select-none">Promotions</div>
              <Link 
                href="/location" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </Link>
              
              <div className="pt-4 border-t border-border">
                <Button className="w-full bg-[#ebc66d] hover:bg-[#ebc66d]/90 text-black">Schedule Pickup</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
