import type { ReactNode } from "react"
import { SiteHeader } from "./site-header"
import { Footer } from "@/components/footer"
import { cn, getTheme } from "@/lib/theme-config"

interface PageLayoutProps {
  children: ReactNode
  subdomain?: "main" | "beta"
  showBetaBanner?: boolean
  showFooter?: boolean
  className?: string
  containerClassName?: string
}

export function PageLayout({
  children,
  subdomain = "main",
  showBetaBanner = false,
  showFooter = true,
  className,
  containerClassName,
}: PageLayoutProps) {
  const theme = getTheme(subdomain)
  const isBeta = subdomain === "beta"

  return (
    <div className={cn("min-h-screen flex flex-col", isBeta ? "bg-gray-900" : "bg-white", className)}>
      <SiteHeader subdomain={subdomain} showBetaBanner={showBetaBanner} />

      <main className={cn("flex-1", containerClassName)}>{children}</main>

      {showFooter && <Footer />}
    </div>
  )
}

// Specialized layout components
export function MainPageLayout({ children, ...props }: Omit<PageLayoutProps, "subdomain">) {
  return (
    <PageLayout subdomain="main" {...props}>
      {children}
    </PageLayout>
  )
}

export function BetaPageLayout({ children, ...props }: Omit<PageLayoutProps, "subdomain">) {
  return (
    <PageLayout subdomain="beta" showFooter={false} {...props}>
      {children}
    </PageLayout>
  )
}

// Container component for consistent spacing
interface ContainerProps {
  children: ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "full"
  className?: string
}

export function Container({ children, size = "lg", className }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  }

  return <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}>{children}</div>
}
