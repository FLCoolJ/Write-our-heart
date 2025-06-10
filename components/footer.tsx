import Link from "next/link"
import { Heart, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-yellow-500 mr-2" />
              <span className="text-xl font-bold text-white">Write Our Heart</span>
            </div>
            <p className="text-gray-400">Personalized poetry cards that express what's truly in your heart.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/how-it-works" className="block text-gray-400 hover:text-yellow-500">
                How It Works
              </Link>
              <Link href="/pricing" className="block text-gray-400 hover:text-yellow-500">
                Pricing
              </Link>
              <Link href="/samples" className="block text-gray-400 hover:text-yellow-500">
                Samples
              </Link>
              <Link href="/faq" className="block text-gray-400 hover:text-yellow-500">
                FAQ
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <div className="space-y-2">
              <Link href="/contact" className="block text-gray-400 hover:text-yellow-500">
                Contact Us
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-yellow-500">
                Blog
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-yellow-500">
                About
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@writeourheart.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>1-800-HEART-US</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>United States</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Write Our Heart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
