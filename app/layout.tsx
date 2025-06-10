import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/shared/site-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Write Our Heart - Personalized Poetry Cards",
  description: "Express what you actually feel with personalized poetry cards.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteHeader subdomain="main" showBetaBanner={true} />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
