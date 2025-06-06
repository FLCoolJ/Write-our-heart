import type { ReactNode } from "react"
import { SiteHeader } from "@/components/shared/site-header"

interface BetaLayoutProps {
  children: ReactNode
}

export default function BetaLayout({ children }: BetaLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SiteHeader subdomain="beta" showBetaBanner={false} />
      <main className="flex-1">{children}</main>
    </div>
  )
}
