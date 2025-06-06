import type React from "react"
import SiteHeader from "@/components/site-header"
import Footer from "@/components/footer"

interface BetaLayoutProps {
  children: React.ReactNode
}

export default function BetaLayout({ children }: BetaLayoutProps) {
  return (
    <>
      <SiteHeader subdomain="beta" showBetaBanner={false} />
      <main className="min-h-screen bg-gray-900">{children}</main>
      <Footer />
    </>
  )
}
