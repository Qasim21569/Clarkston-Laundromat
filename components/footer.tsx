import Link from "next/link"
import Image from "next/image"
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline"

export function Footer() {
  return (
    <footer className="bg-[#1f364b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-footer.jpg"
                alt="Clarkston Laundry and Shipping"
                width={120}
                height={120}
                className="rounded-lg"
              />
              <div>
                <div className="font-heading font-bold text-xl text-white">Clarkston</div>
                <div className="font-accent text-sm opacity-90 text-white">Laundry & Shipping</div>
              </div>
            </div>

            <p className="text-white/80 mb-6 max-w-md">
              Your complete service center in Clarkston, Georgia. Modern laundromat, dry cleaning, shipping services,
              and business solutions all under one roof on Brockett road.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 text-white/60" />
                <span className="text-white/80">1295 Brocket Road, Suite A, Clarkston, GA 30021</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-white/60" />
                <a href="tel:+14045551234" className="hover:text-white/80 transition-colors">
                  (404) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-white/60" />
                <a href="mailto:info@clarksonlaundry.com" className="hover:text-white/80 transition-colors">
                  info@clarksonlaundry.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5 text-white/60" />
                <span className="text-white/80">Open 7 AM - 12 AM Daily</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/laundry"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Self-Service Laundromat
                </Link>
              </li>
              <li>
                <Link
                  href="/laundry"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Wash & Fold
                </Link>
              </li>
              <li>
                <Link
                  href="/laundry"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Pickup & Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  UPS Authorized Service Center
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Private Mailboxes
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Amazon Lockers
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Document Shredding
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pricing"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Location & Hours
                </Link>
              </li>
              
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">© 2025 Clarkston Laundry and Shipping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}