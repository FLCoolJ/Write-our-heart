"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTheme, cn } from "@/lib/theme-config"

interface SiteHeaderProps {
  subdomain?: "main" | "beta"
  showBetaBanner?: boolean
  className?: string
}

export function SiteHeader({ subdomain = "main", showBetaBanner = false, className }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const theme = getTheme(subdomain)
  const isBeta = subdomain === "beta"

  const mainNavItems = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/samples", label: "Samples" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const betaNavItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/my-hearts", label: "My Hearts" },
    { href: "/add-heart", label: "Add Heart" },
    { href: "/account", label: "Account" },
    { href: "/contact", label: "Support" },
  ]

  const navItems = isBeta ? betaNavItems : mainNavItems

  return (
    <>
      {showBetaBanner && (
        <div className="bg-yellow-500 text-black py-2 px-4 text-center text-sm font-medium">
          🎉 Join our beta program and be the first to experience Write Our Heart!{" "}
          <Link href="/beta-signup" className="underline hover:no-underline">
            Sign up now
          </Link>
        </div>
      )}

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b backdrop-blur-sm",
          theme.header.background,
          theme.header.border,
          className,
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Heart className={cn("h-8 w-8", theme.header.logo.accent)} />
              <span className={cn("text-xl font-bold", theme.header.logo.text)}>Write Our Heart</span>
              {isBeta && (
                <span className="ml-2 rounded-full bg-yellow-500 px-2 py-1 text-xs font-medium text-black">BETA</span>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("text-sm font-medium transition-colors", theme.header.navigation.link)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {isBeta ? (
                <Button asChild variant="outline" size="sm">
                  <Link href="https://writeourheart.com">Main Site</Link>
                </Button>
              ) : (
                <Button asChild size="sm" className={theme.header.cta.primary}>
                  <Link href="/beta-signup">Join Beta</Link>
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={cn("md:hidden p-2", theme.header.text)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={cn("md:hidden py-4 border-t", theme.header.border)}>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn("text-sm font-medium transition-colors", theme.header.navigation.link)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  {isBeta ? (
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="https://writeourheart.com">Main Site</Link>
                    </Button>
                  ) : (
                    <Button asChild size="sm" className={cn("w-full", theme.header.cta.primary)}>
                      <Link href="/beta-signup">Join Beta</Link>
                    </Button>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
