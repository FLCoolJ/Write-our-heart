import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/shared/site-header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Write Our Heart",
  description: "Simplify your card-sending experience with personalized, meaningful messages.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Determine if this is the beta subdomain
  const isBeta = process.env.NEXT_PUBLIC_IS_BETA === "true"

  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader subdomain={isBeta ? "beta" : "main"} showBetaBanner={!isBeta} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
