import Link from "next/link"
import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <img src="/images/logo-symbol.png" alt="Write Our Heart Logo" className="h-10 w-10 mr-2" />
              <span className="text-xl font-bold text-white">Write Our Heart</span>
            </Link>
            <p className="text-gray-400">Personalized poetry cards for every occasion, written from your heart.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-yellow-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-yellow-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-yellow-500">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-yellow-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/samples" className="text-gray-400 hover:text-yellow-500">
                  Sample Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-yellow-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-yellow-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-yellow-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/subscription-terms" className="text-gray-400 hover:text-yellow-500">
                  Subscription Terms
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-400 hover:text-yellow-500">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-yellow-500" />
                <a href="mailto:hello@writeourheart.com" className="hover:text-yellow-500">
                  hello@writeourheart.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-yellow-500" />
                <a href="tel:+1234567890" className="hover:text-yellow-500">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-yellow-500 mt-1" />
                <span>
                  Write Our Heart, Inc.
                  <br />
                  123 Greeting Card Lane
                  <br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Write Our Heart. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <Heart className="h-4 w-4 text-yellow-500 mr-2" />
            <span className="text-gray-400 text-sm">Made with love in the USA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Export both as named and default export to support both import styles
export { Footer }
export default Footer
