"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import BetaBanner from "./beta-banner"

interface SiteHeaderProps {
  subdomain?: "main" | "beta"
  showBetaBanner?: boolean
}

export default function SiteHeader({ subdomain = "main", showBetaBanner = false }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isBeta = subdomain === "beta"
  const baseUrl = isBeta ? "https://beta.writeourheart.com" : "https://writeourheart.com"

  // Different navigation items based on subdomain
  const navItems = isBeta
    ? [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/my-hearts", label: "My Hearts" },
        { href: "/add-heart", label: "Add Heart" },
        { href: "/account", label: "Account" },
        { href: "/support", label: "Support" },
      ]
    : [
        { href: "/how-it-works", label: "How It Works" },
        { href: "/pricing", label: "Pricing" },
        { href: "/samples", label: "Samples" },
        { href: "/faq", label: "FAQ" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
      ]

  return (
    <>
      {showBetaBanner && <BetaBanner />}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href={isBeta ? "/dashboard" : "/"} className="flex items-center">
                <img src="/images/logo-symbol.png" alt="Write Our Heart Logo" className="h-10 w-10 mr-2" />
                <span className="text-xl font-bold text-white">
                  Write Our Heart
                  {isBeta && <span className="ml-2 text-xs bg-yellow-500 text-black px-2 py-1 rounded">BETA</span>}
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {isBeta ? (
                <>
                  <Link href="/account">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">
                      Account
                    </Button>
                  </Link>
                  <Link href="https://writeourheart.com">
                    <Button className="bg-gray-600 hover:bg-gray-700 text-white">Main Site</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">
                      Log In
                    </Button>
                  </Link>
                  <Link href="/beta-signup">
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Join Beta</Button>
                  </Link>
                </>
              )}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-800">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img src="/images/logo-symbol.png" alt="User avatar" className="h-10 w-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{isBeta ? "Beta User" : "Account"}</div>
                  <div className="text-sm font-medium text-gray-400">
                    {isBeta ? "Testing new features" : "Manage your account"}
                  </div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {isBeta ? (
                  <>
                    <Link
                      href="/account"
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Account Settings
                    </Link>
                    <Link
                      href="https://writeourheart.com"
                      className="block px-3 py-2 text-base font-medium text-yellow-500 hover:text-yellow-400 hover:bg-gray-800 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Return to Main Site
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Log In
                    </Link>
                    <Link
                      href="/beta-signup"
                      className="block px-3 py-2 text-base font-medium text-yellow-500 hover:text-yellow-400 hover:bg-gray-800 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Join Beta
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
